"use client";

import { useRouter } from "next/navigation";

import { ChatSendButton } from "@/components/chat/chat-send-button";

export default function MakePage() {
  const router = useRouter();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 py-12 font-sans">
      <div className="absolute left-6 top-6 opacity-0 animate-[logoFade_900ms_ease-out_forwards]">
        <ChatSendButton onClick={() => router.push("/choise")} />
      </div>

      <div className="flex w/full max-w-6xl flex-col gap-6 opacity-0 animate-[logoFade_900ms_ease-out_forwards] md:flex-row">
        {/* Левая колонка */}
        <div className="flex-1 md:flex-[1.6] rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
          <div className="flex items-start gap-3">
            <span className="mt-[2px] inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 4 13.8 8.8 18.6 10.6 13.8 12.4 12 17.2 10.2 12.4 5.4 10.6 10.2 8.8 12 4Z" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <div className="text-base font-semibold text-slate-900">Автогенерация поста</div>
              <div className="text-sm text-slate-500">Создайте пост с помощью ИИ</div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-800">Тематика / ключевые слова</label>
              <input
                type="text"
                placeholder="Напр. ИИ и будущее"
                className="mt-2 w-full rounded-[14px] border border-slate-200 px-4 py-3 text-[15px] text-slate-800 shadow-[0_8px_20px_rgba(0,0,0,0.04)] outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-slate-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800">Дополнительные параметры</label>
              <input
                type="text"
                placeholder="Укажите стиль, тон, длину..."
                className="mt-2 w-full rounded-[14px] border border-slate-200 px-4 py-3 text-[15px] text-slate-800 shadow-[0_8px_20px_rgba(0,0,0,0.04)] outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="flex-1 rounded-[14px] border border-slate-200 px-4 py-3 text-[15px] font-semibold text-slate-800 shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200">
                Сгенерировать пост
              </button>
              <button className="flex items-center justify-center gap-2 rounded-[14px] border border-slate-200 px-4 py-3 text-[15px] font-semibold text-slate-800 shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 5h16v14H4z" />
                  <path d="M4 16 9.5 10.5 14 14l2-2 4 4" />
                </svg>
                Сгенерировать картинку
              </button>
            </div>

            <div className="rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-12 text-center text-slate-400 shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 4 13.8 8.8 18.6 10.6 13.8 12.4 12 17.2 10.2 12.4 5.4 10.6 10.2 8.8 12 4Z" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="mt-3 text-sm">Заполните поля выше и нажмите "Сгенерировать пост"</div>
            </div>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="flex-1 md:flex-[0.9] rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
          <div className="flex items-start gap-3">
            <span className="mt-[2px] inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 -rotate-45" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4.5 19.5 19.5 12 4.5 4.5 4.5 10.5 15 12 4.5 13.5 4.5 19.5Z" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <div className="text-base font-semibold text-slate-900">Быстрая отправка</div>
              <div className="text-sm text-slate-500">Отправить в Telegram канал</div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-800">Заголовок</label>
              <input
                type="text"
                placeholder="Заголовок (опционально)"
                className="mt-2 w-full rounded-[14px] border border-slate-200 px-4 py-3 text-[15px] text-slate-800 shadow-[0_8px_20px_rgba(0,0,0,0.04)] outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-800">Текст сообщения</label>
              <textarea
                rows={5}
                placeholder="Введите текст..."
                className="mt-2 w-full rounded-[14px] border border-slate-200 px-4 py-3 text-[15px] text-slate-800 shadow-[0_8px_20px_rgba(0,0,0,0.04)] outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-800">Картинка (опционально)</label>
              <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-[14px] border border-slate-200 px-4 py-3 text-[15px] font-semibold text-slate-800 shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 5h16v14H4z" />
                  <path d="M4 16 9.5 10.5 14 14l2-2 4 4" />
                </svg>
                Выбрать файл
              </button>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-[14px] border border-slate-200 px-4 py-3 text-[15px] font-semibold text-slate-800 shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 -rotate-45" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4.5 19.5 19.5 12 4.5 4.5 4.5 10.5 15 12 4.5 13.5 4.5 19.5Z" strokeLinejoin="round" />
              </svg>
              Отправить в канал
            </button>

            <div className="rounded-[12px] bg-[#e3ecfd] px-4 py-3 text-sm text-[#4b6bbf] shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
              Текст будет отправлен в канал 63.bot.city
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
