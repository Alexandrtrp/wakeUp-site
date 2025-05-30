import { Link } from "react-router-dom";
import { About } from "./About";
import { Carousel } from "../components/Carousel";
import { equirement, gallaryData, orderData } from "../constant";
import { Equirement } from "../components/Equirement";
import { Music } from "../components/Music";

export const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-5xl font-extrabold text-purple-500 mb-6">
          WakeUp Studio
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center bg-black text-white p-8 rounded-2xl shadow-lg my-12">
          <img
            src="/image.png"
            alt="Подарок 🎁"
            className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-8"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
              Пожизненные скидки до 15%
            </h2>
            <p className="text-lg text-gray-300">
              Успейте воспользоваться уникальной акцией и получите специальные
              предложения на все наши услуги.
            </p>
          </div>
        </div>

        <p className="text-gray-300 max-w-xl mb-8">
          Индивидуальный подход к каждому клиенту
        </p>
        <Link
          to="/contact"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Связаться с нами
        </Link>
      </div>
      <About />
      <Music />
      <Carousel data={gallaryData} />
      <Carousel data={orderData} />
      <Equirement title={"Оборудование"} data={equirement} />
    </div>
  );
};
