"use client";

import { useRouter } from "next/navigation";

import { ChoiceCard } from "@/components/choice/choice-card";
import { ChatSendButton } from "@/components/chat/chat-send-button";

export default function ChoisePage() {
  const router = useRouter();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 py-12 font-sans">
      <div className="absolute left-6 top-6 opacity-0 animate-[logoFade_900ms_ease-out_forwards]">
        <ChatSendButton onClick={() => router.push("/")} />
      </div>
      <div className="flex w/full max-w-5xl flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          <div className="opacity-0 animate-[logoFade_900ms_ease-out_forwards]">
            <ChoiceCard
              title="Chat"
              description="Общение с ИИ"
              onClick={() => router.push("/chat")}
            />
          </div>
          <div className="opacity-0 animate-[logoFade_900ms_ease-out_forwards]">
            <ChoiceCard
              title="Make"
              description="Создание контента"
              onClick={() => router.push("/make")}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
