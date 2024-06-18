import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar, Footer, Map, Authentication } from "../components";
import { CSSTransition } from "react-transition-group";
import { useApiContext } from "../ApiContext";
import { set } from "firebase/database";

const PlaceOrderPage = () => {
  const { id } = useParams();
  const [distance, setDistance] = useState(-1);
  const [time, setTime] = useState(-1);
  const [mapSrc, setMapSrc] = useState(null);
  const [orderSent, setOrderSent] = useState(false);
  const [orderStatus, setOrderStatus] = useState("Preparing The Order");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getUserData } = Authentication();
  const { cartItems, currentRestaurant, setOrderInfo } = useApiContext();
  const centerLat = 28.382219;
  const centerLon = 77.303093;
  const [newLat1, setNewLat1] = useState(28.382674902888002);
  const [newLon1, setNewLon1] = useState(77.29154521097661);
  const [newLat2, setNewLat2] = useState(28.3567976);
  const [newLon2, setNewLon2] = useState(77.30603099999999);

  const handleGetUserData = async () => {
    const user = await getUserData();
    setUserData(user);
    setLoading(false);
    return user;
  };

  useEffect(() => {
    const user = handleGetUserData();
    setTimeout(() => {
      setUserData(user);
    }, 1000);
  }, []);

  useEffect(() => {
    if (currentRestaurant && userData) {
      const orderData = {
        id: id,
        restaurant: currentRestaurant,
        user: userData.email,
        items: cartItems,
        map: mapSrc,
      };
      setOrderInfo(orderData);
      const initialDistance = parseFloat(
        currentRestaurant.distance.split(" ")[0]
      );
      setTimeout(() => {
        setDistance(initialDistance);
        setTime(Math.round(initialDistance) * 5 + 5);
      }, 0);

      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setDistance((prev) => Math.max(prev - 0.02, 0));
          setTime((prev) => Math.max(prev - 0.09, 0));
        }, 1000);

        return () => clearInterval(interval);
      }, 300000); // 5 minutes delay

      return () => clearTimeout(timer);
    }
  }, [currentRestaurant, userData, mapSrc]);

  useEffect(() => {
    if (distance === 0 && time === 0) {
      setOrderSent(true);
      setOrderStatus("Order Sent To Destination");
    } else if (distance === 0) {
      setOrderStatus("Order is on your location");
      const timer = setTimeout(() => {
        setOrderStatus("Order Received Successfully");
      }, 30000); // 30 seconds delay

      return () => clearTimeout(timer);
    } else if (distance < 1) {
      setOrderStatus("Order is on your location");
    } else {
      setOrderStatus("Order is Dispatched");
    }
  }, [distance, time]);

  useEffect(() => {
    setNewLat1(parseFloat((28.3 + Math.random() * 0.1).toFixed(15)));
    setNewLon1(parseFloat((77.3 + Math.random() * 0.1).toFixed(15)));

    setNewLat2(parseFloat((28.3 + Math.random() * 0.1).toFixed(15)));
    setNewLon2(parseFloat((77.3 + Math.random() * 0.1).toFixed(15)));
    const mapSrc = `https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d34373.49576485182!2d${centerLat}!3d${centerLon}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d${newLat1}!2d${newLon1}!4m5!1s0x390cddbbc128cc3f%3A0xa974558f05d1107b!2sShop%20No.%203%2C%20Pulaoo%20Master%2C%20Near%20Nissan%20Huts%2C%20Plot%20%2F36A%2C%20New%20Industrial%20Township%2C%20Faridabad%2C%20Haryana%20121001!3m2!1d${newLat2}!2d${newLon2}!5e0!3m2!1sen!2sin!4v1718258945369!5m2!1sen!2sin`;
    setMapSrc(mapSrc);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
        <div className="flex items-center mb-8">
          <img
            src={userData?.photoURL}
            alt="User Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-2xl font-bold">{userData?.displayName}</h2>
            <p className="text-lg text-gray-600">{userData?.email}</p>
          </div>
        </div>
        <Map
          className="mb-8 rounded-lg h-96 border border-blue-500"
          mapSrc={mapSrc}
        />
        <div className="mb-8">
          <p className="text-lg mb-2 text-indigo-600">
            Distance Now: {distance.toFixed(2)} km
          </p>
          <p className="text-lg text-indigo-600">
            Order Received In: {time.toFixed(0)} min
          </p>
        </div>
        <div className="mb-8">
          <h2
            className={`text-2xl font-bold mb-4 ${
              orderStatus === "Order Received Successfully"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {orderStatus}
          </h2>
          <p className="text-lg">
            Next Step:{" "}
            {orderStatus === "Preparing The Order"
              ? "Order Is Dispatched"
              : "Enjoy your meal!"}
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">
            Contact Information
          </h2>
          <p className="text-lg">Shop Keeper: +1234567890</p>
          <p className="text-lg">Delivery Person: +0987654321</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-red-600">
            Customer Support
          </h2>
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
              <h2 className="text-2xl font-bold mb-4 text-teal-500">
                Order Sent To Destination
              </h2>
            </div>
          </div>
        </CSSTransition>
      </div>
      <Footer />
    </>
  );
};

export default PlaceOrderPage;
