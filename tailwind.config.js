/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": {
          DEFAULT: '#135bec',
          50: '#eef3fe',
          100: '#dae7fd',
          200: '#bccffb',
          300: '#8fadfa',
          400: '#5c82f6',
          500: '#135bec',
          600: '#0e46c4',
          700: '#0b379e',
          800: '#0a2e82',
          900: '#082669',
        },
        "background-light": "#f6f6f8",
        "background-dark": "#101622",
        "brand": {
          "DEFAULT": "#135bec",
          "dark": "#0e46b6",
          "light": "#e7effd",
        },
        "security": {
          "high": "#0f172a",
        }
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "custom": "8px",
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
