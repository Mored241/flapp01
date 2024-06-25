/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graydark: '#273444',
        dark: '#242424',
        magPurple: '#6F1E51',
      },
    },
  },
  plugins: [],
}