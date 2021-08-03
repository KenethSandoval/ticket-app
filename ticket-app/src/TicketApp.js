import React from "react";
import { UIProvider } from "./context/UIContext";
import { RouterPage } from "./pages/RouterPage";
import { SocketProvider } from "./context/SocketContext";

export const TicketApp = () => {
  return (
    <SocketProvider>
      <UIProvider>
        <RouterPage />
      </UIProvider>
    </SocketProvider>
  );
};
