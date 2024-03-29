module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        dark: "#313236",
        grey: "#F7F7F7",
        "navy-blue": "#001AA0",
        fog: "#B9B9B9",
        smoke: "#D9D9D9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
