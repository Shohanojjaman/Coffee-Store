/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0rem',
      },
    },
    extend: {
      fontFamily: {
        Rancho: "'Rancho', cursive",
        Raleway: "'Raleway', sans-serif",
      },
      colors: {
        theme: '#331A15',
        secondary: '#E3B577',
        body: '#1B1A1A',
        'light-body': '#5C5B5B',
      },
    },
  },
  plugins: [],
};
