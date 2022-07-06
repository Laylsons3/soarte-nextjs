/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'capa': "url('/images/capa.jpg')",
        'quem-somos': "url('/images/bg-quem-somos.png')",
      }
    },
  },
  plugins: [],
}
