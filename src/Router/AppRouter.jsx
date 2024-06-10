import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Cart, Contact, Menu } from "../pages";
import { ApiProvider } from "../Context";
import AuthProvider from "../components/AuthProvider";

function AppRouter() {
  return (
    <AuthProvider>
      <ApiProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ApiProvider>
    </AuthProvider>
  );
}

export default AppRouter;
