'use client';

type ChatSendButtonProps = {
  onClick: () => void;
};

export function ChatSendButton({ onClick }: ChatSendButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[16px] border border-slate-200 bg-white text-slate-600 shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2"
      aria-label="Отправить сообщение"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[26px] w-[26px] -rotate-45"
      >
        <path
          d="M4.5 19.5 19.5 12 4.5 4.5 4.5 10.5 15 12 4.5 13.5 4.5 19.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
