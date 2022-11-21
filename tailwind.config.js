/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FB554C",
        cyan: "#8DBAB5",
      },
    },
  },
  plugins: [require("daisyui")],
};
