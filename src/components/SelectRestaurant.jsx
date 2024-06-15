import propTypes from "prop-types";
import { useState, useEffect } from "react";


const SelectRestaurant = ({item}) => {
  const [image, setImage] = useState("");
  const [isActiveMenu, setIsActiveMenu] = useState(true);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [distance, setDistance] = useState("");
  const [menu, setMenu] = useState([]);
  const [location, setLocation] = useState("");
  const menu_items = ['samosa', 'rice', 'pizza', 'pasta', 'idly', 'dosa', 'burger', 'biryani', 'dessert', 'butter-chicken','cakes','cocktails', 'chinese'];
  
  useEffect(() => {
    const imgName = menu_items[Math.floor(Math.random() * menu_items.length)];
    const randomNumber = Math.ceil(Math.random() * 10);
    import(`../assets/images/${imgName}_${randomNumber}.jpg`)
      .then((imageModule) => {
        setImage(imageModule.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [item]);

  useEffect(() => {
    setName(item?.name);
    setRating(item?.rating);
    setOpenTime(item["open time"]);
    setLocation(item?.location);
    setDistance(item?.distance);
    setMenu(item?.menu);
    setDeliveryTime(`${distance.split(" ")[0]*8} min`);
  }, [item]);

  const toggleMenu = () => {
    setIsActiveMenu(prevState => !prevState)
  };

  
  return (
    <div className="col-span-1 bg-white rounded-lg shadow-md">
      <div className="relative h-40 sm:h-48 md:h-56">
        <img src={image} alt={name} className="h-full w-full object-cover" />
        <div className="absolute bottom-0 left-0 font-bold w-full text-md sm:text-lg md:text-xl lg:text-2xl bg-black bg-opacity-50 text-white px-2 py-1">
        Restaurant at {distance}
        </div>
      </div>
      <h3 className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl">{name}</h3>
      <div className="flex justify-between items-center">
        <spam className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg">⭐ {rating}</spam>
        <spam className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg">
          🕒 {`${deliveryTime[0]} - ${deliveryTime[0] + 5} ${deliveryTime[1]}`}
        </spam>
      </div>
      <p>{
        location.split(",").map((item, index) => (
          <span key={index} className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg" >{item}</span>
        ))
      }</p>
      <div className="flex justify-between items-center">
        <spam className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg">Open at {openTime}</spam>
        <spam onClick={toggleMenu}>
           <span className="mt-1 text-xs sm:text-sm md:text-base">📋 Menu</span>
           <div className={`hidden hover:${isActiveMenu ? "block" : "hidden"} absolute bg-white rounded-lg shadow-md top-10 right-0 transform -translate-x-1/2`}>
            <ul> 
              {menu.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
           </div>
        </spam>
      </div>
    </div>
  );
};

export default SelectRestaurant;

SelectRestaurant.propTypes = {
  item: propTypes.object.isRequired
};
