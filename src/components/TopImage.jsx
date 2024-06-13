import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const TopImage = () => {
  const [image, setImage] = useState("");
  const texts = [
    { id: 1, text: 'Delicious Food Delivered Fast', color: 'text-blue-500' },
    { id: 2, text: 'Order Now for Fresh Meals', color: 'text-green-500' },
    { id: 3, text: 'Your Favorite Dishes, Just a Click Away', color: 'text-yellow-500' },
  ];

  const menu_items = ['samosa', 'rice', 'pizza', 'pasta', 'idly', 'dosa', 'burger', 'biryani', 'dessert', 'butter-chicken', 'cakes', 'cocktails', 'chinese'];

  useEffect(() => {
    const imgName = menu_items[Math.floor(Math.random() * menu_items.length)];
    const randomNumber = Math.ceil(Math.random() * 10);
    import(`../assets/images/${imgName}_${randomNumber}.jpg`)
      .then((imageModule) => {
        setImage(imageModule.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, []);

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) =>
          prevIndex === texts.length - 1 ? 0 : prevIndex + 1
        );
        setShowText(true);
      }, 500); // Adjust delay time as needed
    }, 3000); // Interval to change text, adjust as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <img src={image} alt="Random Image" className="w-full h-auto max-h-60vw object-cover" style={{ maxHeight: '50vw' }} />
      <Transition
        show={showText}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute inset-0 flex items-center justify-center"
      >
        <p className={`text-white text-center text-2xl md:text-8xl font-bold ${texts[currentTextIndex].color}`}>
          {texts[currentTextIndex].text}
        </p>
      </Transition>
    </div>
  );
};

export default TopImage;
