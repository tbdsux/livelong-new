const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      cursive: ['Parisienne', 'cursive'],
      sans: ['Karla', defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
