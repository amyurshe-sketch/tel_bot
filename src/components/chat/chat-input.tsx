'use client';

import { FormEvent, ReactNode, useState } from "react";
import { ChatSendButton } from "./chat-send-button";

export type ChatInputProps = {
  onSend: (value: string) => void | Promise<void>;
  valueProp?: string;
  placeholder?: string;
  renderAction?: (submit: () => void) => ReactNode;
  variant?: "narrow" | "wide";
  containerClassName?: string;
};

export function ChatInput({
  onSend,
  valueProp,
  placeholder = "Напишите сообщение...",
  renderAction,
  variant = "narrow",
  containerClassName = "",
}: ChatInputProps) {
  const [value, setValue] = useState(valueProp ?? "");
  const isWide = variant === "wide";

  const handleSubmit = async (e?: FormEvent) => {
    e?.preventDefault();
    const next = value.trim();
    if (!next) return;
    await onSend(next);
    setValue("");
  };

  const action = renderAction ? renderAction(handleSubmit) : null;

  return (
    <form onSubmit={handleSubmit} className="flex w-full justify-start">
      <div
        className={`flex w-full items-center ${action ? "gap-4 justify-between" : ""} ${containerClassName}`}
      >
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          className={`w-full min-w-[200px] rounded-[16px] border border-slate-200 bg-transparent px-4 pr-2 text-[15px] text-slate-700 shadow-[0_6px_18px_rgba(0,0,0,0.06)] outline-none placeholder:text-slate-400 focus:ring-0 ${
            isWide ? "h-[62px] max-w-[1000px] py-3.5" : "h-[48px] max-w-[320px] py-2"
          }`}
        />
        {action ? <div className="ml-auto shrink-0">{action}</div> : null}
      </div>
    </form>
  );
}
