/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          400: "#9f7aea",
          500: "#805ad5",
          600: "#6b46c1",
          700: "#553c9a"
        },
        melon: "#db5cda"
      }
    }
  },
  plugins: []
};
