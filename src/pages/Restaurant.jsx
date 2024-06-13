import { useApiContext } from "../context";
import { useParams, Link } from "react-router-dom";
import { Navbar, Footer, MenuItem } from "../components";
import React from "react";

function Restaurant() {
  const { restaurantsData, foodCategory } = useApiContext();
  const { restaurantName } = useParams();
  const [isVegetarian, setIsVegetarian] = React.useState(true);
  const [restaurant, setrestaurant] = React.useState(null);
  const [foodItems, setFoodItems] = React.useState({
    name: "name not found",
    description: "description not found",
    image: "Image not found",
  });

  React.useEffect(() => {
    // item.menu === ''
    console.log("restaurantName", restaurantName);
    console.log("restaurantsData", restaurantsData);
    const restaurant = restaurantsData.find(
      (restaurant) => restaurant.name === restaurantName
    );
    setrestaurant(restaurant);
    console.log("restaurant", restaurant);
    handleItemselect(restaurant, foodCategory);
  }, []);

  const handleItemselect = (restaurant, foodCategory) => {
    console.log("restaurant to select ->", restaurant);
    console.log("foodCategory", foodCategory);
    const foodItems = foodCategory.filter((item) =>
      restaurant.menu.includes(item.name)
    );
    setFoodItems(foodItems);
    console.log("foodItems", foodItems);
  };

  const handleToggle = () => {
    setIsVegetarian(!isVegetarian);
  };
  return (
    <>
      <>
        <Navbar />
        {/* {restaurantsData.map((restaurant, index) => {
          return <span key={index}>{restaurant.name} || </span>;
        })} */}
        <div className="restaurant bg-gray-100 p-8">
          {restaurant && (
            <>
              <h2 className="restaurant-heading text-3xl font-bold mb-4">
                {restaurant?.name}
              </h2>
              <div className="restaurant-details bg-white rounded-lg shadow-md p-6 mb-6">
                <p className="ratings text-yellow-500 font-bold mb-2">
                  {restaurant?.rating}{" "}
                  <span className="text-gray-600">(500+ ratings)</span>
                </p>
                <p className="cost-for-two text-green-500 font-bold mb-2">
                  ₹350 for two
                </p>
                <p className="specialties text-blue-500 font-bold mb-2">
                  {restaurant?.location}
                </p>
                <p className="location text-purple-500 font-bold mb-2">
                  {restaurant["open time"]}
                </p>
                <p className="delivery-details text-red-500 font-bold mb-2">
                  {restaurant?.distance.split(" ")[0] * 4} mins |{" "}
                  {restaurant?.distance} |{" "}
                  {parseFloat(restaurant?.distance.split(" ")[0] * 5)} Delivery
                  fee will apply
                </p>
              </div>
            </>
          )}

          <div className="order-section mb-6 flex border bg-white  border-gray-300 rounded-md">
            <input
              type="text"
              className="search-bar flex-grow bg-white rounded-md py-2 px-4 mr-2 focus:outline-none"
              placeholder="Search for dishes"
            />
            <button className="search-button bg-blue-500 text-white rounded-md py-2 px-4">
              Search
            </button>
          </div>

          <div className="container mx-auto p-4 shadow-xl rounded-xl mb-6">
            <label className="flex gap-4 items-center cursor-pointer space-x-2">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isVegetarian}
                  onChange={handleToggle}
                  className="hidden"
                />
                <div
                  className={`toggle__line w-10 h-4 rounded-full shadow-inner ${
                    isVegetarian ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <div
                  className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow left-0 top-1/2 transform -translate-y-1/2 ${
                    isVegetarian ? "translate-x-full" : ""
                  }`}
                ></div>
              </div>
              <span>{isVegetarian ? "Vegetarian" : "Non-Vegetarian"}</span>
            </label>
          </div>

          <div className="food-items">
            <h3 className="text-xl font-bold mb-4">Food Items:</h3>
            <div className="food-item-container">
              {Array.isArray(foodItems) && foodItems.length > 0 ? (
                foodItems.map((item, index) => (
                  <div key={index}>
                    <Link to={`/restaurant/${restaurantName}/${item.name}`}>
                      <MenuItem item={item} />
                    </Link>
                  </div>
                ))
              ) : (
                <p>No food items available.</p>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </>
    </>
  );
}

export default Restaurant;
