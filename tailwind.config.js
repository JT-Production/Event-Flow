/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        fontFamily: {
            rale: ['Raleway', 'sans-serif'],
        }
    },
    screens: {
      // 'md': '800px',    // instead of default 768px
      // 'lg': '1500px',
    }
  },
  plugins: [],
};

export default config;