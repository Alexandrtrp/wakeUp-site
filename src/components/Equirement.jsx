import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Equirement = ({ title, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentText, setCurrentText] = useState("");

  const openModal = (item) => {
    setCurrentImage(item.image);
    setCurrentText(item.description);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
    setCurrentText("");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false, // скрыть стрелки на телефонах
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-6">
        {title}
      </h2>
      <Slider {...settings}>
        {data.map((el, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-black text-white p-4"
            onClick={() => openModal(el)}
          >
            <h2 className="text-2xl md:text-3xl font-bold mt-4 text-center">
              {el.title}
            </h2>
            <img
              src={el.image}
              alt={`Slide ${index}`}
              className="w-full h-auto max-h-[400px] object-contain rounded-lg"
            />
            {/* <p className="text-sm md:text-base text-center">{el.description}</p> */}
          </div>
        ))}
      </Slider>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-2 sm:p-4 overflow-auto">
          {/* Кнопка закрытия вне модального блока */}
          <button
            onClick={closeModal}
            className="fixed top-4 right-4 bg-white text-black text-2xl rounded-full border-2 border-black w-8 h-8 flex items-center justify-center shadow z-50"
          >
            &times;
          </button>

          <div className="relative bg-white p-4 rounded w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Картинка */}
            <img
              src={currentImage}
              alt={currentText}
              className="w-full h-auto object-contain rounded"
            />

            {/* Текст */}
            <p className="mt-4 text-center text-lg text-black">{currentText}</p>
          </div>
        </div>
      )}
    </div>
  );
};
