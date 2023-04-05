/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",

 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans : ['var(--font-catamaran)']
      },
      maxWidth:{
        'commonMaxWidth' : '1200px'
      },
      screens:{
        'xs': {'max': '1000px'},
        '1xl' : {'min':'1330px'},
        '3xl': {'min': '1700px'},
      },
      padding:{
        'commonPadding' : '72px',
        'mobileCommonPadding' : '28px',
      }
    },
  },
  plugins: [],
}