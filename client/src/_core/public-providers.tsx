

"use client"
import { PropsWithChildren } from "react";
import { Toaster } from "@/_components/ui/sonner";
import { Provider } from 'react-redux'
import { store } from "../_stores/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../_core/query-client";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export function PublicProviders(props: PropsWithChildren) {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <Provider store={store}>
        <Toaster />
        <div className="flex min-h-screen flex-col" id="rootLayout">
          <main className="flex-1 mt-4 px-4 lg:px-8">{props.children}</main>
          <footer></footer>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}
