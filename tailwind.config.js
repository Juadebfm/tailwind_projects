/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        byway_blue: "#3B82F6",
        byway_text_gray: "#334155",
        byway_light_gray: "#F8FAFC",
        byway_heading: "#0F172A",
        byway_disabled: "#94A3B8",
        byway_orange: "#EAB308",
      },
      boxShadow: {
        byway_box_shadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        next_hub: " 1280px",
        xtraLargeScreens: "1900px",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideIn: "slideIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
