import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";

import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/theme.ts";
import GlobalStyle from "./styles/globals.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthContextProvider>
            <ThemeProvider theme={Theme}>
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </AuthContextProvider>
    </React.StrictMode>
);
