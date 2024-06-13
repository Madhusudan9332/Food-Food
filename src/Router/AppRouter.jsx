import { BrowserRouter } from "react-router-dom";
import App from "../App";
import { ApiProvider } from "../context";

function AppRouter() {
  return (
    <ApiProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
  );
}

export default AppRouter;
