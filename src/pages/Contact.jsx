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

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        "service_7gixz8d",     // замените на ваш Service ID
        "template_t9fjor6",    // замените на ваш Template ID
        formData,
        "your_public_key"      // замените на ваш Public Key
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
      <Footer />
    </div>
  );
};
