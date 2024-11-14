import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{scss,sass}",
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
      keyframes:{
          move:{
            "50%":{transform:"translateY(-1rem)"}
          },
          rotate:{
            "0%":{transform:"rotate(0deg)"},
            "100%":{transform:"rotate(360deg)"}
          },
          scaleUp:{
            "0%":{transform:"scale(0.8)"},
            "50%":{transform:"scale(1.2)"},
            "100%":{transform:"scale(0.8)"}
          }
      },
      animation:{
        movingY: "move 3s linear infinite",
        rotating: "rotate 15s linear infinite",
        scalingUp: "scaleUp 3s linear infinite"
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




//   xl:"1180px"