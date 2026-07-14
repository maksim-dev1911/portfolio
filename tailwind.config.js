import withMT from "@material-tailwind/html/utils/withMT";

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5E3BEE",
        zinc: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
        },
        emerald: {
          400: "#34d399",
        },
        violet: {
          500: "#8b5cf6",
          600: "#7c3aed",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        about: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        wide: "5px",
      },
    },
  },
  plugins: [],
});
