

"use client"
import { PropsWithChildren } from "react";
import Header from "@/_components/layout/header";
import Footer from "@/_components/layout/footer";
import { Toaster } from "@/_components/ui/sonner";
// import IsMobileObserver from "@/_core/is-mobile-observer";
import { Provider } from 'react-redux'
import { store } from "../_stores/store";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../_core/query-client";

export function PublicProviders(props: PropsWithChildren) {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* <IsMobileObserver /> */}
        <Toaster />
        <div className="flex min-h-screen flex-col" id="rootLayout">
          <Header />

          <main className="flex-1 mt-4 pt-[60px] px-1 lg:px-4">{props.children}</main>

          <Footer />
        </div>
      </Provider>
    </QueryClientProvider>
  );
}
