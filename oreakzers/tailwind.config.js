/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.html"],
  theme: {
    extend: {
      colors: {
        'body-color': '#0d1d15',
        'primary-color': '#c8fa00',
      },
      boxShadow: {
        '3xl': '0 0 20px #c8fa00',
      }
    },
  },
  plugins: [],
}

