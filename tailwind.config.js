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
        poiretone: ["Poiret One", "sans-1serif"],
        raleway: ["Raleway", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      width: {
        sketchaboutlg: "381.33px",
        sketchaboutxl: "418px",
        paboutlg: "580px",
        paboutxl: "600px",
        pboxsm: "540px",
        pboxmd: "720px",
        pboxlg: "960px",
        pboxxl: "1140px",
        textbox: "40rem",
        projectbox: "60rem",
      },
      maxWidth: {
        content: "75rem",
        left: "50rem",
        contentbox: "67rem",
      },
      height: {
        sketchaboutlg: "500px",
        sketchaboutxl: "555px",
        paboutmd: "800px",
        paboutlg: "750px",
        paboutxl: "750px",
        pboxph: "900px",
        pboxsm: "969px",
        pboxmd: "555px",
        pboxlg: "465px",
        pboxxl: "555px",
        box: "107vh",
        hero: "93.1vh",
        about: "60vh",
        navbar: "7vh",
        herologo: "23rem",
        smlogo: "43px",
      },

      margin: {
        vh15: "15vh",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/images/hero.png')",
        "bg1-pattern": "url('/src/images/background2.png')",
        "bg2-pattern": "url('/src/images/background1.png')",
        "bg3-pattern": "url('/src/images/background3.png')",
        "bg4-pattern": "url('/src/images/background4.png')",
        "bg5-pattern": "url('/src/images/background5.png')",
        "bg1-sketch": "url('/src/images/szkic3.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
