import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApiContextProvider } from "./context";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApiContextProvider>
);
