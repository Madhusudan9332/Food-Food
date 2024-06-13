import { useApiContext } from "../context";
import { Link } from "react-router-dom";
import { Navbar, Footer, MenuItem } from "../components";
import React from "react";

function Menu() {
  const { foodCategory } = useApiContext();
  const [isVegetarian, setIsVegetarian] = React.useState(true);

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
              {foodCategory.map((item, index) => (
                <div key={index}>
                  <Link to={`/menu/${item.name}`}>
                    <MenuItem item={item} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    </>
  );
}

export default Menu;
