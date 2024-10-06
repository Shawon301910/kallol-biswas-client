/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ebony": "#0B1121",
        "pictonBlue": "#38BDF8"
      },
      animation: {
        "header-bg-spin": "spin 70s linear infinite",
        "header-bg-bounce": "bounce 30s linear infinite",
        "social-spin": "spin 20s linear infinite",
      }
    },
  },
  plugins: [],
}