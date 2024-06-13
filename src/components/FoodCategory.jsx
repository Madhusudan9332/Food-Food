import { Link } from "react-router-dom";

function FoodCategory() {
  const FoodItems = ['samosa', 'rice', 'pizza', 'pasta', 'idly', 'dosa', 'burger', 'biryani', 'dessert', 'butter-chicken','cakes','cocktails', 'chinese'];
  
  const setImage = (imgName) => {
    const randomNumber = Math.ceil(Math.random() * 10);
    import(`../assets/images/${imgName}_${randomNumber}.jpg`)
      .then((imageModule) => {
        setImage(imageModule.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
    console.log(item?.name,"image is ",image);
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Food Category</h1>
      <div className="flex overflow-x-auto space-x-4">
        {FoodItems.map((food, index) => (
          <Link
            to={`/menu/${food.name}`}
            key={index}
            className="w-64 cursor-pointer"
          >
            <img
              src={setImage(food.name)}
              alt={`${food.name} Here.. 😋`}
              className="w-64 h-64 object-cover rounded-full"
            />
            <p>{food.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FoodCategory;
