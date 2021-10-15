module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        content: "75rem",
        left: "50rem",
        contentbox: "67rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poiretone: ["Poiret One", "sans-1serif"],
        raleway: ["Raleway", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      height: {
        hero: "93vh",
        about: "60vh",
        navbar: "7vh",
        herologo: "23rem",
        smlogo: "43px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/images/hero.png')",
        "bg1-pattern": "url('/src/images/background2.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
