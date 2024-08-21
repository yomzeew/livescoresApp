/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height:{
        '105':'450px',
        '128':'512px'
      },
      width:{
        '15':'3px',
      },
      borderWidth:{
        '1':'1px'

      },
      borderColor:{
        'lightred':'#ffc4c5'

      },
      colors: {
        'regal-blue': '#010bff', 
      },
    },
  },
  plugins: [],
}

