"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { ChatBubble } from "@/components/chat/chat-bubble";
import { ChatInputChat } from "@/components/chat/chat-input-chat";
import { ChatSendButton } from "@/components/chat/chat-send-button";

type Message = {
  id: string;
  text: string;
  role: "assistant" | "user";
};

const MESSAGES_QUERY_KEY = ["messages"];

const createId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;

// TODO: replace with real backend request
const sendMessageMock = async (text: string) => {
  await new Promise((res) => setTimeout(res, 300));
  return `Эхо: ${text}`;
};

const fetchMessagesMock = async (): Promise<Message[]> => {
  await new Promise((res) => setTimeout(res, 50));
  return [];
};

function ChatPageContent() {
  const router = useRouter();
  const listRef = useRef<HTMLDivElement | null>(null);
  const queryClient = useQueryClient();

  const { data: messages = [] } = useQuery({
    queryKey: MESSAGES_QUERY_KEY,
    queryFn: fetchMessagesMock,
    initialData: [],
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  const sendMutation = useMutation({
    mutationFn: async (text: string) => {
      const reply = await sendMessageMock(text);
      return reply;
    },
    onMutate: async (text) => {
      await queryClient.cancelQueries({ queryKey: MESSAGES_QUERY_KEY });
      const previous = queryClient.getQueryData<Message[]>(MESSAGES_QUERY_KEY) || [];
      const userMessage: Message = { id: createId(), text, role: "user" };
      queryClient.setQueryData<Message[]>(MESSAGES_QUERY_KEY, [...previous, userMessage]);
      return { previous };
    },
    onError: (_err, _text, context) => {
      if (context?.previous) {
        queryClient.setQueryData<Message[]>(MESSAGES_QUERY_KEY, context.previous);
      }
    },
    onSuccess: (reply) => {
      const current = queryClient.getQueryData<Message[]>(MESSAGES_QUERY_KEY) || [];
      const assistantMessage: Message = { id: createId(), text: reply, role: "assistant" };
      queryClient.setQueryData<Message[]>(MESSAGES_QUERY_KEY, [...current, assistantMessage]);
    },
  });

  const handleSend = async (text: string) => {
    await sendMutation.mutateAsync(text);
  };

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 font-sans">
      <div className="mx-auto w-full max-w-6xl opacity-0 animate-[logoFade_900ms_ease-out_forwards]">
        <div className="relative w-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.05)]">
          <div className="absolute left-10 top-10">
            <ChatSendButton onClick={() => router.push("/choise")} />
          </div>
          <div className="flex h-[760px] flex-col">
            <div
              ref={listRef}
              className="flex-1 space-y-4 overflow-y-auto px-10 pb-8 pt-14"
            >
              {messages.map((message) => (
                <ChatBubble
                  key={message.id}
                  text={message.text}
                  role={message.role}
                />
              ))}
            </div>
            <div className="px-10 pb-10 flex justify-end">
              <ChatInputChat
                onSend={handleSend}
                renderAction={(submit) => <ChatSendButton onClick={submit} />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ChatPage() {
  return <ChatPageContent />;
}
