import { FaVk, FaTelegramPlane } from "react-icons/fa";

export const Links = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center my-4">
      {/* VK Link */}
      <a
        href="https://vk.com/wakeupstuuu"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-[#4c75a3] text-lg transition-all duration-300 hover:text-[#3b5f8c] hover:underline"
      >
        <FaVk size={24} className="mr-2" />
        WakeUp Studio
      </a>

      {/* Telegram Link */}
      <a
        href="https://t.me/wakeupstudio"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-[#0088cc] text-lg transition-all duration-300 hover:text-[#006699] hover:underline"
      >
        <FaTelegramPlane size={24} className="mr-2" />
        @wakeupstudiomcs
      </a>
    </div>
  );
};
