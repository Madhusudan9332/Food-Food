// AboutPage.jsx
import React from 'react';
import { Navbar, Footer } from '../components';
import samosaImg from '../assets/images/samosa_1.jpg';
import chineseImg from '../assets/images/chinese_1.jpg';
import dessertImg from '../assets/images/dessert_1.jpg';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow text-center p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">About Food Food</h1>
        <p className="text-lg mb-8">
          Welcome to Food Food, your number one source for all things delicious. We're dedicated to providing you the very best of cuisines, with an emphasis on quality, taste, and customer satisfaction.
        </p>
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="transition-transform transform hover:scale-110 m-4">
            <img src={samosaImg} alt="Samosa" className="w-72 h-48 object-cover rounded-lg shadow-md" />
            <p className="mt-2 text-lg font-semibold">Delicious Samosas</p>
          </div>
          <div className="transition-transform transform hover:scale-110 m-4">
            <img src={chineseImg} alt="Chinese Cuisine" className="w-72 h-48 object-cover rounded-lg shadow-md" />
            <p className="mt-2 text-lg font-semibold">Tasty Chinese Dishes</p>
          </div>
          <div className="transition-transform transform hover:scale-110 m-4">
            <img src={dessertImg} alt="Desserts" className="w-72 h-48 object-cover rounded-lg shadow-md" />
            <p className="mt-2 text-lg font-semibold">Sweet Desserts</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
