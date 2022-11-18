/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["node_modules/preline/dist/*.js", "./src/**/*.{html,js,ts,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
