module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily : {
      'body': ['Jura', 'Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        'brand-red': '#F14C28'
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
}
