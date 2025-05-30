import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = ({ data }) => {

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
        {data.title}
      </h2>
      <Slider {...settings}>
        {data.images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-black text-white p-4"
          >
            <img
              src={`./${image}`}
              alt={`Slide ${index}`}
              className="w-full h-auto max-h-[400px] object-contain rounded-lg"
            />
            {/* <h2 className="text-2xl md:text-3xl font-bold mt-4 text-center">
              {slide.title}
            </h2>
            <p className="text-sm md:text-base text-center">
              {slide.description}
            </p> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};
