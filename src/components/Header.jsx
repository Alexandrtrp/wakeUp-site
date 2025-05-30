import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Главная" },
    // { to: "/services", label: "Услуги" },
    { to: "/about", label: "О нас" },
    { to: "/contact", label: "Контакты" },
  ];

  return (
    <header className="bg-black border-b border-purple-700 p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center text-white">
        <Link to="/" className="text-2xl font-bold text-purple-500 hover:text-purple-700">
          WakeUp Studio
        </Link>
        <ul className="flex space-x-6">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`hover:text-purple-400 transition-colors ${
                  location.pathname === to ? "text-purple-400 font-semibold" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
