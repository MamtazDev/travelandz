/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-black": "#1B1B1E",
        "light-black": "#3C3C43",
        "main-white": "#FBFBFB",
        "main-red": "#DB6B76",
        "dark-blue": "#0046A1",
      },
      spacing: {
        sm: "8px",
        md: "60px",
        lg: "80px",
        xl: "120px",
      },
      fontSize: {
        xxs: ["14px"],
        xs: ["16px", { lineHeight: "20px" }],
        normal: ["18px", { lineHeight: "23px" }],
        base: ["25px", { lineHeight: "31px" }],
        md: ["30px", { lineHeight: "38px" }],
        lg: ["35px", { lineHeight: "44px" }],
        xl: ["40px", { lineHeight: "50px" }],
        xxl: ["50px", { lineHeight: "63px" }],
      },
    },
    screens: {
      xxs: "340px",
      xs: "440px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      "2lg": "1075px",
      // => @media (min-width: 1024px) { ... }
      "3lg": "1080px",
      "4lg": "1100px",
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "2rem",
        lg: "1rem",
        xl: "0px",
        "2xl": "0px",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1080px",
        "2xl": "1284px",
      },
    },
  },
  plugins: [],
};
