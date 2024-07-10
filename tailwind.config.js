import withMT from "@material-tailwind/html/utils/withMT";

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    colors: {
      primary: "#5E3BEE"
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'about': ['Inter', 'sans-serif'],
    },
    letterSpacing: {
      wide: '5px'
    }
  },
  plugins: [],
});