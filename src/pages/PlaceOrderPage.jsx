import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar, Footer } from "../components";
import { CSSTransition } from "react-transition-group";
import Map from "../components/Map";

const PlaceOrderPage = () => {
  const { id } = useParams();
  const [distance, setDistance] = useState(10);
  const [time, setTime] = useState(45);
  const [orderSent, setOrderSent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDistance((prev) => Math.max(prev - 0.02, 0));
      setTime((prev) => Math.max(prev - 0.09, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (distance === 0 && time === 0) {
      setOrderSent(true);
    }
  }, [distance, time]);

  return (
    <>
      <style>{`
        .order-sent-enter {
          opacity: 0;
          transform: scale(0.9);
        }
        .order-sent-enter-active {
          opacity: 1;
          transform: scale(1);
          transition: opacity 300ms, transform 300ms;
        }
        .order-sent-exit {
          opacity: 1;
          transform: scale(1);
        }
        .order-sent-exit-active {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 300ms, transform 300ms;
        }
      `}</style>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-700">Order #{id}</h1>
        <Map className="mb-8 rounded-lg h-96 border border-blue-500" />
        <div className="mb-8">
          <p className="text-lg mb-2 text-indigo-600">Distance Now: {distance.toFixed(2)} km</p>
          <p className="text-lg text-indigo-600">Order Received In: {time.toFixed(0)} min</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Your Order Details</h2>
          <p className="text-lg">Status: Preparing The Order</p>
          <p className="text-lg">Next Step: Order Is Dispatched</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Contact Information</h2>
          <p className="text-lg">Shop Keeper: +1234567890</p>
          <p className="text-lg">Delivery Person: +0987654321</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Customer Support</h2>
          <p className="text-lg">Support Line: +1122334455</p>
          <p className="text-lg">Email: support@example.com</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Add a Tip</h2>
          <input
            type="number"
            placeholder="Enter tip amount"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <CSSTransition
          in={orderSent}
          timeout={300}
          classNames="order-sent"
          unmountOnExit
        >
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4 text-teal-500">Order Sent To Destination</h2>
            </div>
          </div>
        </CSSTransition>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default PlaceOrderPage;
