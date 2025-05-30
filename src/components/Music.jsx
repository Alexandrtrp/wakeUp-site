import { tracks } from "../constant";

export const Music = () => {
  return (
    <div className="bg-black text-white py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Наши треки</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={track.image}
              alt={track.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{track.title}</h3>
            <p className="text-gray-400">{track.artist}</p>
            <audio controls className="w-full mt-2">
              <source src={track.audioSrc} type="audio/mpeg" />
              Ваш браузер не поддерживает аудиоэлемент.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};
