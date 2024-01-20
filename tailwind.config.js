/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif']
    },
    extend: {

      colors: {

        primary: '#18C619',
        secondary: '#B0EAB0',
        tertiary: '#071A1E',
        whiteCustom: '#FCFCFC',

      },

      backgroundColor: {
        
        bgWhiteCustom: '#FCFCFC',
       
      }

    },
  },
  plugins: [],
}

