import { useApiContext } from "../Context";

function FoodCategory() {
  const { fetchData, foodCategory } = useApiContext();

  const handleClick = (name) => {
    fetchData(name);
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Food Category</h1>
      <div className="flex overflow-x-auto space-x-4">
        {foodCategory.map((food, index) => (
          <div key={index} onClick={() => handleClick(food.name)} className="w-64 cursor-pointer">
            <img src={food.image} alt={`${food.name} Here.. 😋`} className="w-64 h-64 object-cover rounded-full"/>
            <p>{food.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodCategory;
