import React, { useState } from 'react';

const RestaurantForm = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [location, setLocation] = useState('');
  const [openingTime, setOpeningTime] = useState('');
  const [closingTime, setClosingTime] = useState('');
  const [description, setDescription] = useState('');
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', prices: { small: '', medium: '', large: '' }, isVegetarian: false });
  const [isReadOnly, setIsReadOnly] = useState(false);

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem({ name: '', prices: { small: '', medium: '', large: '' }, isVegetarian: false });
  };

  const handleApply = () => {
    setIsReadOnly(true);
    const restaurantData = {
      restaurantName,
      location,
      openingTime,
      closingTime,
      description,
      items
    };
    console.log(restaurantData);
  };

  const handleEdit = () => {
    setIsReadOnly(false);
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <button
        className="bg-blue-500 text-white px-4 py-2 mb-4"
        onClick={handleEdit}
        disabled={!isReadOnly}
      >
        Edit
      </button>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Restaurant Name</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 p-2"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            readOnly={isReadOnly}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 p-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            readOnly={isReadOnly}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Opening Time</label>
          <input
            type="time"
            className="mt-1 block w-full border border-gray-300 p-2"
            value={openingTime}
            onChange={(e) => setOpeningTime(e.target.value)}
            readOnly={isReadOnly}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Closing Time</label>
          <input
            type="time"
            className="mt-1 block w-full border border-gray-300 p-2"
            value={closingTime}
            onChange={(e) => setClosingTime(e.target.value)}
            readOnly={isReadOnly}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            className="mt-1 block w-full border border-gray-300 p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            readOnly={isReadOnly}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Add Items</label>
          {items.map((item, index) => (
            <div key={index} className="space-y-2 mb-2 border-b border-gray-300 pb-2">
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 p-2"
                value={item.name}
                placeholder="Item Name"
                readOnly
              />
              <div className="flex space-x-2">
                <input
                  type="number"
                  className="mt-1 block w-full border border-gray-300 p-2"
                  value={item.prices.small}
                  placeholder="Small Price"
                  readOnly
                />
                <input
                  type="number"
                  className="mt-1 block w-full border border-gray-300 p-2"
                  value={item.prices.medium}
                  placeholder="Medium Price"
                  readOnly
                />
                <input
                  type="number"
                  className="mt-1 block w-full border border-gray-300 p-2"
                  value={item.prices.large}
                  placeholder="Large Price"
                  readOnly
                />
              </div>
              <input
                type="checkbox"
                className="mt-2"
                checked={item.isVegetarian}
                readOnly
              />
              <span className="text-sm text-gray-600">Vegetarian</span>
            </div>
          ))}
          {!isReadOnly && (
            <div className="space-y-2 mb-2">
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 p-2"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                placeholder="Item Name"
              />
              <div className="flex space-x-2">
                <input
                  type="number"
                  className="mt-1 block w-full border border-gray-300 p-2"
                  value={newItem.prices.small}
                  onChange={(e) => setNewItem({ ...newItem, prices: { ...newItem.prices, small: e.target.value } })}
                  placeholder="Small Price"
                />
                <input
                  type="number"
                  className="mt-1 block w-full border border-gray-300 p-2"
                  value={newItem.prices.medium}
                  onChange={(e) => setNewItem({ ...newItem, prices: { ...newItem.prices, medium: e.target.value } })}
                  placeholder="Medium Price"
                />
                <input
                  type="number"
                  className="mt-1 block w-full border border-gray-300 p-2"
                  value={newItem.prices.large}
                  onChange={(e) => setNewItem({ ...newItem, prices: { ...newItem.prices, large: e.target.value } })}
                  placeholder="Large Price"
                />
              </div>
              <label className="flex items-center space-x-2 mt-2">
                <input
                  type="checkbox"
                  className="border-gray-300"
                  checked={newItem.isVegetarian}
                  onChange={(e) => setNewItem({ ...newItem, isVegetarian: e.target.checked })}
                />
                <span>Vegetarian</span>
              </label>
              <button
                type="button"
                className="bg-green-500 text-white px-4 py-2"
                onClick={handleAddItem}
              >
                Add Item
              </button>
            </div>
          )}
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2"
          onClick={handleApply}
          disabled={isReadOnly}
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default RestaurantForm;
