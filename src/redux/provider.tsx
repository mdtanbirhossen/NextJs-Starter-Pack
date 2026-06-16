"use client";

import * as React from "react";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Provider } from "react-redux";

import { makeStore, type AppStore } from "./store";

type StoreProviderProps = {
  children: React.ReactNode;
};

export function StoreProvider({ children }: StoreProviderProps) {
  const [store] = React.useState<AppStore>(() => makeStore());

  React.useEffect(() => {
    return setupListeners(store.dispatch);
  }, [store]);

  return <Provider store={store}>{children}</Provider>;
}
