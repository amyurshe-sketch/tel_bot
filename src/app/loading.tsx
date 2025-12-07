export default function GlobalLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <div className="flex flex-col items-center gap-3 text-slate-600">
        <span className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-slate-700" aria-label="Загрузка" />
        <span className="text-sm">Загрузка...</span>
      </div>
    </div>
  );
}
