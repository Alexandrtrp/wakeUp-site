import { Links } from "./Links";

export const Footer = () => (
  <div className="mt-10 text-gray-400 flex flex-col items-center">
    <div className="flex gap-4">
      <p>Телефон:</p>
      <div className="flex flex-col">
        <span>+7 (968) 458 62 94</span>
        <span>+7 (977) 627 09 27</span>
      </div>
    </div>
    <p>Адрес: Москва, Каширское шоссе 26к3</p>
    <p>Почта: wakeupstudiomoscow@mail.ru</p>
    <Links />
  </div>
);
