/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    extend: {
      colors: {
        "primary": "#262262",
        "secondary": "#ED1C24"
      },

      screens: {
        mde: "850px",
      },

      
    },
  },
  plugins: [
    require('preline/plugin')
  ],
};
