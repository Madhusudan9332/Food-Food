import propTypes from "prop-types";
import { useState, useEffect } from "react";

const FoodItem = ({item}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    setImageUrl(item?.image);
    setName(item?.name);
    setPrice(item?.price);
    handleArgumet()
  }, [item]);
  
  const handleArgumet = () => {
    const randomRating = (Math.random() * 5).toFixed(1); // Random rating between 0 and 5 with one decimal point
    setRating(randomRating);
    const randomDeliveryTime = Math.floor(Math.random() * 30) + 15; // Random delivery time between 15 and 44 minutes
    setDeliveryTime(`${randomDeliveryTime} minutes`);
    setAddress("123 Main St, City, Country");
  };

  return (
    <div className="col-span-1 bg-white rounded-lg shadow-md">
      <div className="relative h-48">
        <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
        <div className="absolute bottom-0 left-0 font-bold  text-xl text-white px-2 py-1">
          Item at {price} rupees
        </div>
      </div>
      <h3 className="mt-2">{name}</h3>
      <div className="flex justify-between items-center">
        <spam className="mt-1">⭐ {rating}</spam>
        <spam className="mt-1">
          🕒 {`${deliveryTime[0]} - ${deliveryTime[0] + 5} ${deliveryTime[1]}`}
        </spam>
      </div>
      <p className="mt-1">{address}</p>
    </div>
  );
};

export default FoodItem;

FoodItem.propTypes = {
  item: propTypes.object.isRequired
};
