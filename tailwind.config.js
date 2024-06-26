/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
    fontFamily: {
      dancing: ["Dancing Script", "cursive"],
      EB: ["'EB Garamond'", "serif"],
      pinyon: ["Pinyon Script", "cursive"],
      pacifico: ["Pacifico", "cursive"],
      great: ["Great Vibes", "cursive"],
      playfair: ["Playfair Display", "serif"],
    },

    plugins: [],
  },
};
