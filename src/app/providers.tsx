"use client";

import { ReactNode, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useIsFetching,
  useIsMutating,
} from "@tanstack/react-query";

function GlobalFetchIndicator() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const active = isFetching > 0 || isMutating > 0;

  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] flex items-start justify-end p-6">
      <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm text-slate-700 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-200 border-t-slate-700" aria-label="Загрузка" />
        <span>Загрузка...</span>
      </div>
    </div>
  );
}

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <GlobalFetchIndicator />
    </QueryClientProvider>
  );
}
