/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F97316',      // Orange for main actions
        'secondary': '#1E3A8A',    // Dark blue for contrast/headers
        'background': '#F8F9FA',   // Very light gray for page backgrounds
        'light-gray': '#F1F5F9',   // Slightly darker gray for sections
        'text-dark': '#111827',    // For primary text
        'text-light': '#4B5563',   // For secondary/muted text
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
    },
  },
  plugins: [],
}; 