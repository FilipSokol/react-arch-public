module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      height: {
        hero: "93vh",
        navbar: "7vh",
        herologo: "40vh",
        smlogo: "43px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/images/hero.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
