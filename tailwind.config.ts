import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#bb3030",
        primaryBlue: "#464394",
        accentYellow: "#ffcf41",
        accentYellowLight: "#ffebb1",
        accentOrange: "#ffaa00",
        accentGreenLight: "#e3f2d2",
        accentGreenBorder: "#c5e99a",
        accentPurpleLight: "#eeedff",
        accentPurpleBorder: "#d6d4ff",
        yellowText: "#755700",
        green: "#6ba823",
        neutral: {
          50: "#ffffff",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d9d9d9",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#4f4f4f",
          800: "#202020",
          900: "#0d0d0d",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "3rem",
        },
      },
      fontFamily: {
        sans: [
          "Nunito",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
        ],
      },
    },
  },
  plugins: [],
};
