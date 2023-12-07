import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./app.styles.ts";
import Header from "./components/dashboard/molecules/header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <Header></Header>
    <App />
  </React.StrictMode>
);
