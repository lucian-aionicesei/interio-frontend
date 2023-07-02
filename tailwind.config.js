/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        main: ["Inter", "sans-serif"],
      },
      colors: {
        "darker-gray": "#1B1B1B",
        "dark-gray": "#202020",
        "light-gray": "#282828",
        "lightest-gray": "#393939",
        "project-light-yellow": "#FFF27B",
        "project-yellow": "#FFE768",
        "project-white": "#FAF8F0",
      },
      fontSize: {
        xs: "0.625rem",
        sm: "0.83rem",
        base: "0.95rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "1.75rem",
        "5xl": "2rem",
        "6xl": "2.5rem",
        "7xl": "3rem",
      },
    },
  },
  plugins: [],
};
