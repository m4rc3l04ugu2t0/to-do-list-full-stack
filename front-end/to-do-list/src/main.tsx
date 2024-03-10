import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/QueryClient.ts";
import { ClicksProvider } from "./contexts/contextClicks/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ClicksProvider>
                <App />
            </ClicksProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
