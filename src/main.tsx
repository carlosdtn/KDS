import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./app.styles.ts";
import Header from "./components/layout/organism/header.tsx";
import ReduxProvider from "./redux/provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyles />
    <ReduxProvider>
      <Header />
      <App />
    </ReduxProvider>
  </>
);
