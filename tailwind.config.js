module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_600: "#828282",
        gray_800: "#4f4f4f",
        indigo_900: "#240d57",
        deep_purple_A200: "#8456ec",
        black_900_19: "#00000019",
        purple_A100: "#e87bf8",
        white_A700: "#ffffff",
        gray_50: "#fbfaff",
      },
      borderRadius: { radius10: "10px", radius3515: "35.15px" },
      boxShadow: { bs: "0px 0px  5px 0px #00000019" },
      backgroundImage: { gradient: "linear-gradient(90deg ,#8456ec,#e87bf8)" },
      fontFamily: { helvetica: "Helvetica" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
