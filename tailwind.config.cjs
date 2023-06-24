/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0 1000px 20px",
      },
      backgroundImage: {
        "gradient-radial-to-tm":
          "radial-gradient(70% 95% at 50% 0%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      Barlow: ["Barlow Semi Condensed", "sans-serif"],
    },
  },

  plugins: [],
};
