import propTypes from "prop-types";
import React from "react";

function MenuItem({item}) {
   const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    const name = item.name === "butter chicken"? "butter-chicken" :item.name === "desserts"?"dessert": item.name;
    const randomNumber = Math.ceil(Math.random() * 10);
    import(`../assets/images/${name}_${randomNumber}.jpg`)
      .then((imageModule) => {
        setImage(imageModule.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
    console.log(item?.name,"image is ",image);
  }, []);


  return (
      <div
        className="food-item bg-white rounded-lg shadow-md p-4 flex items-center justify-between mb-4" >
        <div className="food-details">
          <h4 className="text-lg font-semibold">{item?.name}</h4>
          <p className="text-gray-600">
            Start at {[59, 99, 129, 155, 199][Math.floor(Math.random() * 5)]}{" "}
            Rs.
          </p>
          <p className="text-gray-600">Veg and Non-Veg available</p>
          <p className="text-gray-600">Details: {item?.description}</p>
        </div>
        <img
          src={image}
          alt={item?.name}
          className="food-image w-24 h-24 object-cover rounded-md"
        />
      </div>

  );
}

export default MenuItem;

MenuItem.propTypes = {
  item: propTypes.object.isRequired,
};