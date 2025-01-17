/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'abril-fatface': 'Abril Fatface',
        'inspiration': 'Inspiration',
        'agbalumo': 'Agbalumo',
      },
      screens: {
        "tablet": { max: "991px" },
        "mobile": {  max: "768px"}
      },
      colors: {
        'primary': '#FF6E3A',
        'secondary': '#A3D9FF',
        'cs-purple': '#B589FF',
        'cs-green': '#9BFF5C',
        'cs-bronze': '#A57867',
        'cs-black': '#1C1C1C',
      }
    },
  },
  plugins: [],
}

