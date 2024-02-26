/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      gray: {
        0: '#343434'
      },
      smokedPearl: '#1F2937',
      darkBlue: '#233876',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

