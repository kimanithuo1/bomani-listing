/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: "#B7DBC8",
        teal: "#285D66",
        yellow: "#E1DF66",
        sea: "#6DA095",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(to right, #B7DBC8, #6DA095)",
      },
    },
  },
  plugins: [],
}

