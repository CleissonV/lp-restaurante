export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amber: { DEFAULT: '#c8902a', light: '#e8b84a', dark: '#8a6015' },
        resto: { bg: '#0d0700', card: '#1a0e05', border: '#2a1a08', cream: '#f5ede0', text: '#e8d5b7' }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
