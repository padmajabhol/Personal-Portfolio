module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster"],
        roboto: ["Roboto"],
      },
      colors: {
        primary: "#CBA5EA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
