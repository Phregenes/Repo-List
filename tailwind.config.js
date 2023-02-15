/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      infoModal: 'flex items-center flex-nowrap whitespace-nowrap',
    },
  },
  plugins: [],
}
