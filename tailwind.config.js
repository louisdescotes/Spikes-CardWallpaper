/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'challenge': '0px 0px 0px 0.75px #EAECF11A, 0px 3px 6.01px -1.5px #5F5F5F26, 0px -3px 0.75px 0px #E3E3EA66 inset',

        'menu': ' 0px 0px 0px 0.75px #EAECF11A, 0px 3px 6.01px -1.5px #5F5F5F26'
      }
    },
  },
  plugins: [],
}
