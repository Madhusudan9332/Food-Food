import { useApiContext } from "../context";
import { Link } from "react-router-dom";

function FoodCategory() {
  const { foodCategory } = useApiContext();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Food Category</h1>
      <div className="flex overflow-x-auto space-x-4">
        {foodCategory.map((food, index) => (
          <Link
            to={`/menu/${food.name}`}
            key={index}
            className="w-64 cursor-pointer"
          >
            <img
              src={food.image}
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
