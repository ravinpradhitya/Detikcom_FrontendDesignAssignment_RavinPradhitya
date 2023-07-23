/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#007CBD',
        'secondary': '#3EB7DD',
        'background': '#F4FBFF',
        'grey': '#7a7b7e',
        'form': '#f8f8f8',
        'placeholder': '#071424'
      },
    fontFamily: {
      body: ['Montserrat']
    }
    },
  },
  plugins: [],
}