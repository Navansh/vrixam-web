/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        NoeStandard : ['NoeStandard', 'sans-serif'],
        NoeDisplay : ['NoeDisplay', 'sans-serif'],
        YatraOne : ['Yatra One', 'cursive'],
        AnekMalayalam : ['Anek Malayalam', 'sans-serif'],
        PlusJakartaSans : ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontWeight: {
        normal: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
}

