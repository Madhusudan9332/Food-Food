import React, { useState } from 'react';
import axios from 'axios';

function PostData() {
  const baseUrl = 'https://api3-1-mams.onrender.com/';
  const [itemName, setItemName] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [otherArguments, setOtherArguments] = useState('');
  const [method, setMethod] = useState('POST');
  const [isVeg, setIsVeg] = useState(true); // Default value for isVeg is true

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
  };

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleOtherArgumentsChange = (e) => {
    setOtherArguments(e.target.value);
  };

  const handleToggleChange = () => {
    setIsVeg(!isVeg); // Toggle the value of isVeg
  };

  const handleSubmit = async () => {
    try {
      const postData = {
        name: name,
        image: image,
        price: price,
        isVeg: isVeg,
        ...JSON.parse(otherArguments) // Append other arguments to the postData object
      };

      if (method === 'POST') {
        await axios.post(`${baseUrl}/items/${itemName}`, postData);
        alert(`POST request sent for ${itemName}`);
      } else if (method === 'PUT') {
        await axios.put(`${baseUrl}/update-id/${itemName}`, postData);
        alert(`PUT request sent for ${itemName}`);
      } else {
        alert(`Unsupported method: ${method}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send request.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <select
        className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        value={method}
        onChange={handleMethodChange}
      >
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
      </select>
      <div className="flex mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 mr-2"
          placeholder="Item Name"
          value={itemName}
          onChange={handleItemNameChange}
        />
        <button
          className={`bg-${isVeg ? 'green' : 'red'}-500 text-white rounded-md px-4 py-2`}
          onClick={handleToggleChange}
        >
          {isVeg ? 'Veg' : 'NonVeg'}
        </button>
      </div>
      <input
        type="text"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        placeholder="Image URL"
        value={image}
        onChange={handleImageChange}
      />
      <input
        type="text"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        placeholder="Price"
        value={price}
        onChange={handlePriceChange}
      />
      <textarea
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 resize-none"
        rows="4"
        placeholder="Other Arguments (in JSON format)"
        value={otherArguments}
        onChange={handleOtherArgumentsChange}
      ></textarea>
      <button
        className="bg-blue-500 text-white rounded-md px-4 py-2"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default PostData;
