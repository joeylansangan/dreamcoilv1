module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '75vh': '75vh',
      '85vh': '85vh'
     },
    fontFamily: {
      'display': ['Aldrich', 'sans-serif'],
      'body': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        dc_blue:{
          light: "#2281E2",
          DEFAULT: "#0A112B"
        }
      }
    },
  },
  plugins: [],
}
