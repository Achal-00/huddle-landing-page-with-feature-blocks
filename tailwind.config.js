/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        portrait: { raw: "(max-aspect-ratio: 3/2)" },
        landscape: { raw: "(min-aspect-ratio: 3/2)" },
      },
      fontSize: {
        "custom-font": "clamp(0.7rem, min(1.5dvw, 1.5dvh), 8rem)",
      },
      fontFamily: {
        headings: ["Poppins", "sans-serif"],
        others: ["Open Sans", "sans-serif"],
      },
      colors: {
        pink: "hsl(322, 100%, 66%)",
        "very-pale-cyan": "hsl(193, 100%, 96%)",
        "very-dark-cyan": "hsl(192, 100%, 9%)",
        "greyish-blue": "hsl(208, 11%, 55%)",
      },
    },
  },
  plugins: [],
};
