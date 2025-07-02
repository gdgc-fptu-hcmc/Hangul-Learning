/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',   // Small phones (iPhone SE, etc.)
      'sm': '640px',   // Large phones in portrait
      'md': '768px',   // Tablets in portrait
      'lg': '1024px',  // Tablets in landscape / small laptops
      'xl': '1280px',  // Desktops
      '2xl': '1536px', // Large desktops
    },
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
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        // Mobile specific font sizes
        'mobile-sm': ['0.8rem', { lineHeight: '1.2rem' }],
        'mobile-base': ['0.9rem', { lineHeight: '1.4rem' }],
        'mobile-lg': ['1rem', { lineHeight: '1.5rem' }],
        'mobile-xl': ['1.1rem', { lineHeight: '1.6rem' }],
        'mobile-2xl': ['1.3rem', { lineHeight: '1.8rem' }],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        // Mobile specific spacing
        'mobile-xs': '0.25rem',
        'mobile-sm': '0.5rem',
        'mobile-md': '0.75rem',
        'mobile-lg': '1rem',
        'mobile-xl': '1.5rem',
        'mobile-2xl': '2rem',
      },
      borderRadius: {
        'xl': '1rem',
        'mobile': '0.75rem',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'mobile': '0 4px 15px rgba(0, 0, 0, 0.08)',
        'mobile-lg': '0 8px 25px rgba(0, 0, 0, 0.12)',
      },
      maxWidth: {
        'mobile': '100vw',
        'mobile-content': 'calc(100vw - 2rem)',
      },
      minHeight: {
        'mobile-screen': '100dvh', // Dynamic viewport height for mobile
        'mobile-content': 'calc(100dvh - 4rem)',
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
        'mobile-bounce': {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
          },
          '50%': {
            transform: 'translateY(-4px) scale(1.02)',
          },
        },
        'mobile-pulse': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
          },
        },
      },
      animation: {
        blob: "blob 7s infinite",
        'mobile-bounce': 'mobile-bounce 2s ease-in-out infinite',
        'mobile-pulse': 'mobile-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}; 