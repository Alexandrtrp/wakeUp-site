import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-6xl font-bold text-purple-500 mb-4">404</h1>
      <p className="text-xl text-gray-300 mb-6">Страница не найдена</p>
      <Link to="/" className="text-purple-400 hover:underline">
        Вернуться на главную
      </Link>
    </div>
  );
};
