module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        content: "75rem",
        left: "50rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poiretone: ["Poiret One", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      height: {
        hero: "93vh",
        about: "60vh",
        navbar: "7vh",
        herologo: "40vh",
        smlogo: "43px",
        dupa: "490px",
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
