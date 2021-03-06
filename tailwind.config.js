module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  jit: true,
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "var(--brand)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
