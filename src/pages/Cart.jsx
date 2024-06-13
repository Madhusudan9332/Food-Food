import React from "react";
import { useApiContext } from "../ApiContext"; // Import your context hook
import { Navbar, Footer } from "../components";
import { v4 as uuidv4 } from "uuid"; // Import uuid for generating unique IDs
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const CartPage = () => {
  const { cartItems, setCartItems, addToCart, removeFromCart, clearCart } =
    useApiContext();
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  React.useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, [setCartItems]);

  const increaseQuantity = (item) => {
    addToCart(item);
  };

  const decreaseQuantity = (item) => {
    removeFromCart(item);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handlePlaceOrder = () => {
    const orderId = uuidv4(); // Generate unique ID for the order
    navigate(`/placeOrder/${orderId}`); // Redirect to the place order page with the unique ID
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-700">Your cart is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cartItems.map(
                (item) =>
                  item.quantity > 0 && (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-600">Price: Rs. {item.price}</p>
                        <p className="text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-gray-600">
                          Total Price: Rs. {item.totalPrice}
                        </p>
                        <div className="flex justify-between items-center mt-4">
                          <button
                            onClick={() => decreaseQuantity(item)}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                          >
                            -
                          </button>
                          <button
                            onClick={() => increaseQuantity(item)}
                            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={handleClearCart}
                  className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                >
                  Clear Cart
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Place Order
                </button>
              </div>
              <p className="text-lg">
                Total Items:{" "}
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </p>
              <p className="text-lg">
                Total Cost: Rupees{" "}
                {cartItems
                  .reduce((acc, item) => acc + item.totalPrice, 0)
                  .toFixed(2)}
              </p>
            </div>
          </>
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default CartPage;
