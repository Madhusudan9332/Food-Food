import { createContext, useContext, useState } from "react";
import propTypes from "prop-types";
import { foodApiInstance } from "../axiosInstance";

const ApiContext = createContext();

export const useApiContext = () => {
  return useContext(ApiContext);
};

export const ApiContextProvider  = ({ children }) => {
  const adminProfiles = [
    { username: 'admin1', password: 'password123' },
    { username: 'admin2', password: 'securepassword' },
  ];
  const foodCategory = [
    {
      name: "samosa",
      image: "https://foodish-api.com/images/samosa/samosa2.jpg",
      description:
        "A crispy and savory Indian snack filled with spiced potatoes and peas.",
    },
    {
      name: "rice",
      image: "https://foodish-api.com/images/rice/rice1.jpg",
      description:
        "A staple food in many cultures, typically served as a side dish or a base for other dishes.",
    },
    {
      name: "pizza",
      image: "https://foodish-api.com/images/pizza/pizza16.jpg",
      description:
        "A popular Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese, and often other ingredients such as meats, vegetables, and herbs.",
    },
    {
      name: "pasta",
      image: "https://foodish-api.com/images/pasta/pasta3.jpg",
      description:
        "An Italian staple made from durum wheat flour, typically served with a variety of sauces.",
    },
    {
      name: "idly",
      image: "https://foodish-api.com/images/idly/idly3.jpg",
      description:
        "A traditional South Indian breakfast food made from fermented rice and lentil batter, steamed to perfection.",
    },
    {
      name: "dosa",
      image: "https://foodish-api.com/images/dosa/dosa2.jpg",
      description:
        "A popular South Indian dish made from fermented rice and lentil batter, cooked on a hot griddle to create a thin, crispy pancake.",
    },
    {
      name: "burger",
      image: "https://foodish-api.com/images/burger/burger2.jpg",
      description:
        "A classic American fast food item consisting of a grilled or fried patty of ground meat, usually beef, served in a sliced bun with various toppings and condiments.",
    },
    {
      name: "biryani",
      image: "https://foodish-api.com/images/biryani/biryani17.jpg",
      description:
        "A flavorful Indian rice dish made with aromatic basmati rice, spices, and usually meat or vegetables.",
    },
    {
      name: "desserts",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/summer-dessert-recipes-66181f2697ee0.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*",
      description:
        "Sweet treats enjoyed at the end of a meal, ranging from cakes and pies to ice cream and fruit.",
    },
    {
      name: "butter chicken",
      image:
        "https://foodish-api.com/images/butter-chicken/butter-chicken12.jpg",
      description:
        "A popular Indian dish made with chicken cooked in a creamy, buttery tomato sauce.",
    },
    {
      name: "chinese",
      image: "https://c.ndtvimg.com/gws/2322/assets/4.jpeg?1618993428",
      description:
        "A diverse cuisine originating from China, characterized by a variety of cooking techniques, ingredients, and flavors.",
    },
    {
      name: "cakes",
      image: "https://imgcdn.floweraura.com/DSC_5370.jpg",
      description:
        "Sweet baked goods typically made from flour, sugar, eggs, and butter or oil, often flavored and decorated in various ways.",
    },
    {
      name: "cocktails",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/01/retro-cocktails-b12b00d.jpg?resize=1200%2C630",
      description:
        "Mixed alcoholic beverages typically served in a glass, often containing a combination of spirits, fruit juices, syrups, and other ingredients.",
    },
  ];
  const [restaurantsData, setRestaurantsData] = useState(null);
  const [restaurantsLoading, setRestaurantsLoading] = useState(false);
  const [restaurantsError, setRestaurantsError] = useState(null);
  const [foodData, setFoodData] = useState(null);
  const [foodLoading, setFoodLoading] = useState(false);
  const [foodError, setFoodError] = useState(null);
  const [cartItems, setCartItems] = useState([]);


  const fetchRestaurantsData = async () => {
    setRestaurantsLoading(true);
    try {
      const response = await foodApiInstance.get(`/restaurants`);
      setRestaurantsData(response.data);
    } catch (error) {
      setRestaurantsError(error.message);
    }
    setRestaurantsLoading(false);
  };
  const fetchFoodData = async (query) => {
    setFoodLoading(true);
    try {
      const response = await foodApiInstance.get(`/foodData/search/${query}`);
      console.log(response.data);
      setFoodData(response.data);
    } catch (error) {
      setFoodError(error.message);
    }
    setFoodLoading(false);
  };

  const addToCart = (item) => {
    if (item === null) return;
    console.log(cartItems);
    let found = false;
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.name === item.name && cartItem.price === item.price) {
        cartItem.quantity = cartItem.quantity + 1;
        cartItem.totalPrice = cartItem.price * cartItem.quantity;
        found = true;
      }
      return cartItem;
    });
    if (!found) {
      setCartItems([
        ...cartItems,
        { ...item, quantity: 1, totalPrice: item.price },
      ]);
    } else {
      setCartItems(updatedCartItems);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.name === item.name && cartItem.price === item.price) {
        cartItem.quantity =
          cartItem.quantity - 1 >= 0 ? cartItem.quantity - 1 : 0;
        cartItem.totalPrice = cartItem.price * cartItem.quantity;
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <ApiContext.Provider
      value={{
        adminProfiles,
        foodCategory,
        restaurantsData,
        restaurantsLoading,
        restaurantsError,
        fetchRestaurantsData,
        foodData,
        foodLoading,
        foodError,
        fetchFoodData,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

ApiContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};
