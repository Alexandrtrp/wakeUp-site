import { useState } from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/yourFormID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-500 mb-6">
        Связаться с нами
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ваше имя"
          className="w-full p-3 rounded bg-gray-900 text-white"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 rounded bg-gray-900 text-white"
          required
        />
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          placeholder="Сообщение"
          className="w-full p-3 rounded bg-gray-900 text-white"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded font-semibold"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Отправка..." : "Отправить"}
        </button>
      </form>
      {status === "success" && (
        <p className="text-green-400 mt-4">Сообщение отправлено!</p>
      )}
      {status === "error" && (
        <p className="text-red-500 mt-4">Ошибка отправки. Попробуйте позже.</p>
      )}

      <div className="mt-10 text-gray-400 flex flex-col">
        <p>Почта: wakeupstudiomoscow@mail.ru</p>
        <div className="flex gap-4">
          <p>Телефон:</p>
          <div className="flex flex-col">
            <span>+7 (968) 458 62 94</span> 
            <span>+7 (977) 627 09 27</span>
          </div>
        </div>
        <p>Адрес: Москва, Каширское шоссе 26к3</p>
        <Link to="https://vk.com/wakeupstuuu">VK: WakeUp Studio </Link>
        <Link>ТГ: @wakeupstudiomcs</Link>
      </div>
    </div>
  );
};
