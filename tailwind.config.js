module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily : {
        'jura': ['Jura', 'Roboto', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'brand-red': '#F14C28'
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
}
