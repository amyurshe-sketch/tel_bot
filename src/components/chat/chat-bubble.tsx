type ChatBubbleProps = {
  text: string;
  role?: "assistant" | "user";
};

export function ChatBubble({ text, role = "assistant" }: ChatBubbleProps) {
  const isAssistant = role === "assistant";

  return (
    <div
      className={`flex w-full ${isAssistant ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[560px] rounded-[16px] border px-5 py-3 text-[15px] leading-6 shadow-[0_8px_20px_rgba(0,0,0,0.05)] animate-[chatBubbleIn_220ms_ease-out] ${
          isAssistant
            ? "border-slate-200 bg-slate-100/80 text-slate-800"
            : "border-slate-200 bg-white text-slate-800"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
