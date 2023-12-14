/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green: "#2F7D33",
        orange:"#FE8C00",
        fontOrange:"#DEB87F",
      },
      screens:{
        xsm:'350px',
        bigMobile:'450px',
      }
    },
  },
  plugins: [],
}

