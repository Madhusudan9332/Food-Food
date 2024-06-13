import { Routes, Route } from "react-router-dom";
import {
  Home,
  Menu,
  Cart,
  PlaceOrderPage,
  Restaurant,
  Food,
  Admin,
} from "./pages";
import { useApiContext } from "./context";
import { useEffect } from "react";

function App() {
  const { fetchRestaurantsData, restaurantsData } = useApiContext();

  const asyncTask = async () => {
    await fetchRestaurantsData();
    console.log("asyncTask Done in App", restaurantsData);
  };

  useEffect(() => {
    fetch(asyncTask()).then((res) => res);
    console.log("useEffect Done in App", restaurantsData);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:restaurantName" element={<Restaurant />} />
        <Route
          path="/restaurant/:restaurantName/:foodName"
          element={<Food />}
        />
        <Route path="/menu/:foodName" element={<Food />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeOrder/:orderId" element={<PlaceOrderPage />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
