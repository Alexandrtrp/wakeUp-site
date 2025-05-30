/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          // 400: "#9f7aea",
          // 500: "#805ad5",
          // 600: "#6b46c1",
          // 700: "#553c9a"
          400: "#db5cda", // основной цвет
          500: "#db5cda", // тот же оттенок (можно заменить)
          600: "#b84fb7", // немного темнее для 600
          700: "#a34ba5", // ещё темнее для 700
        },
        melon: "#db5cda",
      },
    },
  },
  plugins: [],
};
