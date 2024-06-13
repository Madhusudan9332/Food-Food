import { Link } from "react-router-dom";
import CatogoryImg from './CatogoryImg'

function FoodCategory() {
  const FoodItems = ['samosa', 'rice', 'pizza', 'pasta', 'idly', 'dosa', 'burger', 'biryani', 'dessert', 'butter-chicken','cakes','cocktails', 'chinese'];
  
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Food Category</h1>
      <div className="flex overflow-x-auto space-x-4">
        {FoodItems.map((food, index) => (
          <Link
            to={`/menu/${food}`}
            key={index}
            className="w-64 cursor-pointer"
          >
            <CatogoryImg food={food} />
            <p className="text-center">{food}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FoodCategory;
