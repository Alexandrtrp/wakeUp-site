export function Services() {
  const services = [
    {
      title: "Запись",
      desc: "Профессиональная запись вокала и инструментов на современном оборудовании."
    },
    {
      title: "Сведение",
      desc: "Чистый и мощный звук, соответствующий стандартам стриминговых платформ."
    },
    {
      title: "Мастеринг",
      desc: "Финальная обработка трека для идеального звучания."
    },
    {
      title: "Биты на заказ",
      desc: "Создание уникальных битов в любом жанре."
    },
    {
      title: "Тексты песен",
      desc: "Профессиональные авторы помогут выразить ваши идеи в словах."
    },
    {
      title: "Продвижение",
      desc: "Маркетинг, PR, обложки, клипы и загрузка треков на все площадки."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-purple-500 mb-6">Наши услуги</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map(({ title, desc }, idx) => (
          <div key={idx} className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-purple-400 mb-2">{title}</h2>
            <p className="text-gray-300">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
