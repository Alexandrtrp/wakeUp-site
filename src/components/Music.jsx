import { useRef, useState } from "react";
import { tracks } from "../constant";

export const Music = () => {
  const audioRefs = useRef([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  const fadeOut = (audio, duration = 500) => {
    return new Promise((resolve) => {
      const steps = 20;
      const stepTime = duration / steps;
      const volumeStep = audio.volume / steps;

      const interval = setInterval(() => {
        if (audio.volume > volumeStep) {
          audio.volume -= volumeStep;
        } else {
          audio.volume = 0;
          audio.pause();
          audio.currentTime = 0;
          clearInterval(interval);
          resolve();
        }
      }, stepTime);
    });
  };

  const fadeIn = (audio, duration = 500) => {
    return new Promise((resolve) => {
      audio.volume = 0;
      audio.play();
      const steps = 20;
      const stepTime = duration / steps;
      const volumeStep = 1 / steps;

      const interval = setInterval(() => {
        if (audio.volume < 1 - volumeStep) {
          audio.volume += volumeStep;
        } else {
          audio.volume = 1;
          clearInterval(interval);
          resolve();
        }
      }, stepTime);
    });
  };

  const handlePlay = async (index) => {
    for (let i = 0; i < audioRefs.current.length; i++) {
      if (i !== index && audioRefs.current[i]) {
        await fadeOut(audioRefs.current[i]);
      }
    }

    setCurrentTrack(index);
    if (audioRefs.current[index]) {
      fadeIn(audioRefs.current[index]);
    }
  };

  return (
    <div className="bg-black text-white py-8 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-6">
        Примеры сведения
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{track.title}</h3>
            <audio
              controls
              className="w-full mt-2"
              ref={(el) => (audioRefs.current[index] = el)}
              onPlay={() => handlePlay(index)}
            >
              <source src={track.audioSrc} type="audio/mpeg" />
              Ваш браузер не поддерживает аудиоэлемент.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};
