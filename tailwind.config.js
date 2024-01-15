/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "300px", // Smaller than smartphones
      sm: "640px", // Smartphones
      md: "768px", // Tablets
      lg: "1024px", // Laptops
      xl: "1280px", // Desktops
      "2xl": "1536px", // Large desktops
    },
    extend: {
      fontFamily: { body: ["Roboto"] },
    },
  },
  plugins: [],
};
