/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens:{
         sm:"340px",
         md:"540px",
         lg:"768px",
         xl:"1180px"
      },
      fontFamily:{
        jost:["Jost", "sans-serif"],
        lobster:["Lobster", "sans-serif"]
      },
      colors: {
        primary: "#1C584C",
        secondary: "#ed8900",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "32px"
        },
      },
    },
  },
  plugins: [],
}



