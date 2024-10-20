/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "select-color": "#FCF7FF",
        "primary-text": "#334155",
        "switch-dom": "#E2E8F0",
        "primary-color": "#8576FF",
        "primary-dark": "#484554",
        "dark-body": "#383544",
        "primary-gray": "#64748B",
        "table-color": "#F1F5F9",
        "table-head-dark": "#6A6676",
        "primary-blue": "#77B1FF",
        "light-blue": "#F8FAFC",
        "delete-color": "#F43F5E",
        "dark-gray": "#ADA9BB",
        "primary-green": "#10B981",
      },
    },
  },
  plugins: [],
};
