import { ReactNode } from "react";

type ChoiceCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  onClick?: () => void;
};

const planeIcon = (
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 shadow-[0_6px_14px_rgba(0,0,0,0.06)]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-7 w-7 -rotate-45"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path
        d="M4.5 19.5 19.5 12 4.5 4.5 4.5 10.5 15 12 4.5 13.5 4.5 19.5Z"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const compassIcon = (
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 shadow-[0_6px_14px_rgba(0,0,0,0.06)]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path
        d="M12 4 14.4 12 12 20 9.6 12 12 4Z"
        strokeLinejoin="round"
      />
      <path
        d="M12 4 20 12 12 20 4 12 12 4Z"
        strokeLinejoin="round"
      />
      <path
        d="M17 6.5 17.7 7.8 19 8.5 17.7 9.2 17 10.5 16.3 9.2 15 8.5 16.3 7.8 17 6.5Z"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export function ChoiceCard({ title, description, icon, onClick }: ChoiceCardProps) {
  const lower = title.toLowerCase();
  const resolvedIcon =
    icon ??
    (lower === "chat"
      ? planeIcon
      : lower === "make"
      ? compassIcon
      : planeIcon);

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-[220px] flex-col items-center gap-3 rounded-[18px] border border-slate-200 bg-white px-6 py-7 text-center text-slate-800 shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition hover:-translate-y-[2px] hover:shadow-[0_22px_55px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2"
    >
      {resolvedIcon}
      <div className="text-base font-semibold">{title}</div>
      <div className="text-sm text-slate-500">{description}</div>
    </button>
  );
}
