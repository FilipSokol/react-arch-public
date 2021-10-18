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
      width: {
        textbox: "40rem",
      },
      height: {
        box: "107vh",
        hero: "93vh",
        about: "60vh",
        navbar: "7vh",
        herologo: "23rem",
        smlogo: "43px",
        sketchmain: "35rem",
      },
      margin: {
        vh15: "15vh",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/images/hero.png')",
        "bg1-pattern": "url('/src/images/background2.png')",
        "bg1-sketch": "url('/src/images/szkic3.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
