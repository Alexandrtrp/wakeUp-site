import { useState } from "react";
import emailjs from "emailjs-com";
import { Footer } from "../components/Footer";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Имя должно содержать минимум 2 символа";
    }
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Введите корректный email";
    }
    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = "Сообщение должно содержать минимум 10 символов";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" })); // Очищаем ошибку для поля
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return; // Остановить, если есть ошибки
    }

    setStatus("loading");

    emailjs
      .send(
        "service_ua3fcng",
        "template_1b5tl73",
        {
          from_name: formData.name, // Имя пользователя
          from_email: "wakeupstudiomoscow@mail.ru", // Должен быть твой Mail.ru адрес
          message: formData.message,
          reply_to: formData.email, // Укажи email пользователя сюда
        },
        "BCmbvqcNZz_udblua"
      )
      .then(
        (result) => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("error");
        }
      );
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-500 mb-6">
        Связаться с нами
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ваше имя"
            className={`w-full p-3 rounded bg-gray-900 text-white ${
              errors.name ? "border border-red-500" : ""
            }`}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`w-full p-3 rounded bg-gray-900 text-white ${
              errors.email ? "border border-red-500" : ""
            }`}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Сообщение"
            className={`w-full p-3 rounded bg-gray-900 text-white ${
              errors.message ? "border border-red-500" : ""
            }`}
            required
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
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
      <Footer />
    </div>
  );
};
