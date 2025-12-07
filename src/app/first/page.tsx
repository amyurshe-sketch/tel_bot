'use client';

import { useState } from "react";

import { ChatInput } from "@/components/chat/chat-input";
import { ChatSendButton } from "@/components/chat/chat-send-button";

export default function FirstPage() {
  const [login, setLogin] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 py-12 font-sans">
      <div className="flex w-full max-w-2xl flex-col items-center gap-4 pl-10">
        <div className="opacity-0 animate-[logoFade_900ms_ease-out_forwards]">
          <ChatInput
            placeholder="Хеллоу"
            valueProp="Привет"
            onSend={(value) => {
              setLogin(value);
              // TODO: заменить на реальную отправку логина на бэкенд
              console.log("Login captured (stub):", value);
            }}
            renderAction={() => null}
          />
        </div>
        <div className="opacity-0 animate-[logoFade_900ms_ease-out_forwards]">
          <ChatInput
            placeholder="Бро!"
            valueProp="Бро!"
            onSend={(value) => {
              setPassword(value);
              // TODO: заменить на реальную отправку пароля на бэкенд
              console.log("Password captured (stub):", value ? "***" : "");
            }}
            renderAction={() => null}
          />
        </div>
        <div className="mt-2 w-full max-w-[320px]">
          <div className="flex justify-end opacity-0 animate-[logoFade_900ms_ease-out_forwards]">
            <ChatSendButton onClick={() => (window.location.href = "/choise")} />
          </div>
        </div>
      </div>
    </main>
  );
}
