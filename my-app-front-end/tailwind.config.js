/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./app/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors : {
        'nav-border' : '#d7d7d7',
      }
    },
  },
  plugins: [],
}

