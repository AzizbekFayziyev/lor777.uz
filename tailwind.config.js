/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "cerulean-blue": {
          50: "#f0f3fe",
          100: "#dee4fb",
          200: "#c4d0f9",
          300: "#9cb2f4",
          400: "#6d8aed",
          500: "#4a64e7",
          600: "#3c4bdc",
          700: "#2c33c9",
          800: "#2a2ba3",
          900: "#272a81",
          950: "#1c1d4f",
        },
        "block-bg": "#F3F2FC",
        "dark-blue": "#111133",
        "blue-gray": "#6A6A8E",
        stroke: "#CCCCDD",
      },
      fontFamily: {
        golos: ["'Golos Text'", "sans-serif"],
        unbounded: ["'Unbounded'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
