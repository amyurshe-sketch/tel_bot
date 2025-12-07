type PlaceholderTodo = {
  id: number;
  title: string;
};

async function fetchPlaceholderTodo(): Promise<PlaceholderTodo> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to load data: ${res.status}`);
  }

  return res.json();
}

export async function ServerFetchCard() {
  const todo = await fetchPlaceholderTodo();

  return (
    <div className="rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 shadow-[0_6px_18px_rgba(0,0,0,0.04)]">
      <div className="text-[13px] uppercase tracking-wide text-slate-500">Серверный fetch</div>
      <div className="mt-1 font-medium text-slate-900">Todo #{todo.id}</div>
      <div className="text-slate-700">{todo.title}</div>
    </div>
  );
}
