/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#032119", ink: "#021A12", dark: "#0B2519", medium: "#0C2D20", green: "#143D2A",
          gold: "#C07A35", sand: "#C0AC87", pale: "#EEDCC3", warm: "#FDF5E8", orange: "#BB7A35",
          sky: "#4D93B1", mist: "#C0CDCE",
        },
      },
      fontFamily: { sans: ["Manrope", "Cairo", "sans-serif"], display: ["DM Serif Display", "serif"] },
    },
  },
  plugins: [],
}

