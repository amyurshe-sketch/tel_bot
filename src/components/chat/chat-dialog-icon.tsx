export function ChatDialogIcon() {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/85 text-slate-800 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path
          d="M4 14c0 .6.4 1 1 1h3l3 3 3-3h3c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v8Z"
          strokeLinejoin="round"
        />
        <path d="M9 9h6M9 12h3" strokeLinecap="round" />
      </svg>
    </div>
  );
}
