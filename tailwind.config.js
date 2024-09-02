/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "320px", // Define tu propio breakpoint
      },
    },
  },
  plugins: [],
};
