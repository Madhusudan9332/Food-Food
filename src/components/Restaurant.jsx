import React from "react";

function Restaurant() {
  const [isVegetarian, setIsVegetarian] = React.useState(true);

  const handleToggle = () => {
    setIsVegetarian(!isVegetarian);
  };

  const foodItems = [
    {
      id: 1,
      name: "Crispy Veg Burger",
      price: "₹70",
      rating: "3.8",
      ratingCount: "(110)",
      details:
        "Masaledar Veg Patty, Onion & Our Signature Tomato Herby Sauce. Qty: 137 Gms| Kcal: 362 | Carbs 53.4 Gms| Sugar: 6.5 Gms| Fat: 12.8 Gms| Saturated fat: 4.9 Gms| Protein: 8.4 Gms| Sodium: 798.2 Mg Contains: Gluten, Soybean, Milk, Sesame seeds",
      imageSrc: "crispy_veg_burger.jpg",
    },
    {
      id: 2,
      name: "Cheeseburger",
      price: "₹90",
      rating: "4.2",
      ratingCount: "(90)",
      details:
        "Juicy beef patty topped with melted cheese, lettuce, tomato, and pickles. Qty: 180 Gms| Kcal: 450 | Carbs 35.5 Gms| Sugar: 7.2 Gms| Fat: 20.4 Gms| Saturated fat: 9.5 Gms| Protein: 26.8 Gms| Sodium: 890.5 Mg Contains: Gluten, Milk",
      imageSrc: "cheeseburger.jpg",
    },
    {
      id: 3,
      name: "Chicken Nuggets",
      price: "₹120",
      rating: "4.5",
      ratingCount: "(80)",
      details:
        "Crispy, tender chicken nuggets served with your choice of dipping sauce. Qty: 6 pieces| Kcal: 210 | Carbs 12.8 Gms| Sugar: 0.6 Gms| Fat: 14.5 Gms| Saturated fat: 3.2 Gms| Protein: 9.8 Gms| Sodium: 540.2 Mg Contains: Gluten, Milk",
      imageSrc: "chicken_nuggets.jpg",
    },
  ];

  return (
    <div className="restaurant bg-gray-100 p-8">
      <h2 className="restaurant-heading text-3xl font-bold mb-4">
        Burger King
      </h2>
      <div className="restaurant-details bg-white rounded-lg shadow-md p-6 mb-6">
        <p className="ratings text-yellow-500 font-bold mb-2">
          4.1 <span className="text-gray-600">(500+ ratings)</span>
        </p>
        <p className="cost-for-two text-green-500 font-bold mb-2">
          ₹350 for two
        </p>
        <p className="specialties text-blue-500 font-bold mb-2">
          Burgers, American
        </p>
        <p className="location text-purple-500 font-bold mb-2">
          Outlet: Faridabad
        </p>
        <p className="delivery-details text-red-500 font-bold mb-2">
          35-40 mins | 3.7 kms | ₹43 Delivery fee will apply
        </p>
      </div>

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
          {/* Iterate over foodItems array using map */}
          {foodItems.map((item, index) => (
            <div
              className="food-item bg-white rounded-lg shadow-md p-4 flex items-center justify-between mb-4"
              key={index}
            >
              <div className="food-details">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-gray-600">{item.price}</p>
                <p className="text-gray-600">
                  Rating: {item.rating} {item.ratingCount}
                </p>
                <p className="text-gray-600">Details: {item.details}</p>
              </div>
              <img
                src={item.imageSrc}
                alt={item.name}
                className="food-image w-24 h-24 object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
