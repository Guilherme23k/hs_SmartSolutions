/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        fundo: "url('/img/FUNDOTESTE.jpg')",
        imagemteste: "url(/img/camera-fundo1.jpg)",
      },
      colors: {
        cyan: colors.cyan,
        teal: colors.teal,
        "blue-header": "#092a49",
        "grey-flex": "#333",
        whitesmoke: "#f5f5f5",
        "blue-bottom": "#e0f0fd",
        "orange-bottom": "#efd5bd",
        "green-bottom": "#d9f3f6",
        "blue-font": "#2e3b8c",
      },
      fontFamily: {
        arial: "Arial",
        roboto: "Roboto",
        teste: "Comic Sans MS",
        logo: "Heebo",
        lato: "Lato",
        arimo: "Arimo",
        "share-tech": "Share Tech Mono",
      },
      maxHeight: {
        57: "14.375rem",
      },
      padding: {
        15: "4.375rem",
      },
      spacing: {
        13: "3.25rem",
      },
      fontSize: {
        "4.5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
