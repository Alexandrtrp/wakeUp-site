import { useState } from "react";
// import "../../public/gallary/photo_2025-05-27_12-19-39.png";

export const Carousel = ({title, images}) => {

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-6">
        {title}
      </h2>
      <div className="relative w-full max-w-3xl m-auto p-2 overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-auto  object-contain transition duration-500"
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
        >
          &#8594;
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};
