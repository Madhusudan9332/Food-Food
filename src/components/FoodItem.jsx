import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useApiContext } from "../context";

function FoodItem({ item }) {
  const [rating, setRating] = useState("");
  const { cartItems, addToCart, removeFromCart } = useApiContext();
  const [cartItem, setCartItem] = useState();

  const addItem = (item) => {
    addToCart(item);
  };

  useEffect(() => {
    updateCartItem(cartItems, item);
  }, [cartItems,item]);


  const removeItem = (item) => {
    removeFromCart(item);
  };

  const updateCartItem = (cartItems, item) => {
    const cartItem = cartItems.find(
      (cartItem) => cartItem.name === item.name && cartItem.price === item.price
    );
    setCartItem(cartItem);
    return cartItem;
  };

  useEffect(() => {
    const ratingIs = (Math.floor(Math.random() * 41) + 10) / 10;
    setRating(ratingIs.toFixed(1)); // Adjust rating to one decimal place
  }, []);
  
  return (
    <div className="col-spam-1 bg-white rounded-lg shadow-md">
      <div className="relative h-48">
        <img
          src={item?.image}
          alt={item?.name}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="mt-2">{item.name}</h3>
      <div className="flex justify-between items-center">
        <span className="mt-1">⭐ {rating}</span>
      </div>
      <p className="mt-1">{item.location}</p>
      <div className="flex justify-between items-center">
        <span className="mt-1">Add to cart</span>
        <span className="mt-1">
          <span onClick={() => addItem(item)}>➕</span>
          <span> {cartItem?.quantity || 0} </span>
          <span onClick={() => removeItem(item)}>➖</span>
        </span>
      </div>
    </div>
  );
}

FoodItem.propTypes = {
  item: PropTypes.object.isRequired, // Ensure item is an object
};

export default FoodItem;
