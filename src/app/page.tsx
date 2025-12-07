import Link from "next/link";

export default function EntryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 py-12 font-sans">
      <Link href="/first" aria-label="Перейти на страницу First">
        <img
          src="/icon.svg"
          alt="AI.b"
          className="h-[120px] w-[120px] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] opacity-0 animate-[logoFade_900ms_ease-out_forwards]"
        />
      </Link>
    </main>
  );
}
