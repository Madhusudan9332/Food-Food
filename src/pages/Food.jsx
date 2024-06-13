import React, { useEffect } from "react";
import { Navbar, Footer, FoodItem ,FilterBar } from "../components";
import { useApiContext } from "../ApiContext";
import { useParams, Link } from "react-router-dom";

function Food() {
  const { foodData, foodLoading, foodError, fetchFoodData } = useApiContext();
  const { foodName } = useParams();
  const [foodItems, setFoodItems] = React.useState(null);

  const getFoodItems = async () => {
    await fetchFoodData(foodName);
    console.log("foodData after fetch", foodData);
  };

  useEffect(() => {
    getFoodItems();
  }, []);

  useEffect(() => {
    console.log("foodName", foodName);
    const foodArray = Array.isArray(foodData) && [
      ...foodData[0].data["vegetarian"],
      ...foodData[0].data["non vegetarian"],
    ];
    console.log("foodArray", foodArray);
    console.log("foodData", foodData);
    foodArray && setFoodItems([...foodArray]);
    console.log("foodItems", foodItems);
    console.log("foodArray", foodArray);
  }, [foodData]);

  return (
    <>
      <Navbar />
      <FilterBar />
      {foodLoading ? (
        <p>Loading...</p>
      ) : foodError ? (
        <p>{foodError}</p>
      ) : foodItems ? (
        <div className="grid grid-cols-3 gap-4 p-10">
          {foodItems.map((item, index) => (
            <div key={index}>
              <FoodItem item={item} />
            </div>
          ))}
        </div>
      ) : (
        <p>Data not set</p>
      )}
      <Footer />
    </>
  );
  // return (
  //   <>
  //     <Navbar />
  //     {foodLoading ? (
  //       <p>Loading...</p>
  //     ) : foodError ? (
  //       <p>{foodError}</p>
  //     ) : foodItems ? (
  //       <div className="grid grid-cols-3 gap-4">
  //         {foodItems.map((item, index) => (
  //           <div key={index}>
  //             {typeof item}
  //             <FoodItem item={item} />
  //           </div>
  //         ))}
  //       </div>
  //     ) : (
  //       <p>Data not set</p>
  //     )}

  //     <Footer />
  //   </>
  // );
}

export default Food;
