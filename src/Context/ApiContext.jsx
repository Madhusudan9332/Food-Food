
import { createContext, useContext, useState, useEffect } from "react";
import { axiosInstance, randomImageInstance } from "../CostomHooks";

const ApiContext = createContext();

export const useApiContext = () => {
  return useContext(ApiContext);
};

export const ApiProvider = ({ children }) => {
  const foodCategory = [
    { name: "cakes", image: "https://imgcdn.floweraura.com/DSC_5370.jpg" },
    { name: "chinese", image: "https://c.ndtvimg.com/gws/2322/assets/4.jpeg?1618993428" },
    { name: "cocktails", image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/01/retro-cocktails-b12b00d.jpg?resize=1200%2C630" },
    { name: "desserts", image: "https://hips.hearstapps.com/hmg-prod/images/summer-dessert-recipes-66181f2697ee0.jpeg?crop=1.00xw:1.00xh;0,0&resize=640:*" },
    { name: "pizzas", image: "https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg" },
    { name: "vege", image: "https://media.easemytrip.com/media/Blog/India/636977607425696252/636977607425696252QYiiUU.jpg" }
  ];
  const [imageUrl, setImageUrl] = useState("../assets/defaultFood.jpg");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImage = async () => {
    fetch('https://foodish-api.com/api/')
    .then(response => response.json())
    .then(data => setImageUrl(data.image))
    .catch(error => console.error('Error fetching random image:', error));
  }


  const fetchData = async (query) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/${query}`);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <ApiContext.Provider
      value={{
        foodCategory,
        imageUrl,
        fetchImage,
        data,
        loading,
        error,
        fetchData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
