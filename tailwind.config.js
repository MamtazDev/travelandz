/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        "light-black": "#333", // Define your custom class here
      },
      backgroundColor: {
        "main-white": "#ffffff", // Define your custom class here
      },
      fontSize: {
        xxl: "4.55rem", // Define your custom font size here
        normal: "1rem", // Define your custom font size here
        xs: "0.75rem", // Example of custom text size
        md: "1.25rem", // Customize the 'md' text size
      },
      textColor: {
        "light-black": "#333", // Replace with your desired color
        "main-black": "#333333",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
