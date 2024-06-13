import React from "react";
import propTypes from "prop-types";

function CatogoryImg({ food }) {
  const [image, setImage] = React.useState(null);
  React.useEffect(() => {
    const randomNumber = Math.ceil(Math.random() * 10);
    import(`../assets/images/${food}_${randomNumber}.jpg`)
      .then((imageModule) => {
        setImage(imageModule.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [food]);


  return (
    <>
      <div className="img-container shadow-xl border-2 border-gray-400 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full">
        <img src={image} alt={food} className="w-full h-full rounded-full" />
      </div>
    </>
  );
}

export default CatogoryImg;

CatogoryImg.propTypes = {
  food: propTypes.string.isRequired,
};
