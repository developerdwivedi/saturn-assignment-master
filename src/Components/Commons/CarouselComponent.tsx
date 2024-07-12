import React, { useState, useEffect } from 'react';

const images = [
  '/assets/image.png',
  '/assets/image2.jpg',
  '/assets/image3.jpg',
];

const CarouselComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} className="w-full border h-[335px]" />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full mx-1 focus:outline-none ${
              currentIndex === index ? 'bg-white' : 'bg-[#A7A7A7]'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default  CarouselComponent;

