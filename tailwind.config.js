module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  jit: true,
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#047857",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
