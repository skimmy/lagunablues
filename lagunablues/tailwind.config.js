/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        "1500": "1500ms",
        "2000": "2000ms"
      },
      brightness: {
        40: '.4',
        30: '.3',
        20: '.2',
      }
    },
  },
  plugins: [],
}

