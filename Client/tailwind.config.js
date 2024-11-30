import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'rancho': ['Rancho', 'serif'],
      'raleway': ['Raleway', 'serif'],
    },
    extend: {
      colors: {
        'brown': '#331A15',
      },
      backgroundImage: {
        'home-banner': "url('./assets/more/3.png')",
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
