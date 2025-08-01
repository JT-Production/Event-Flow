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
  },
  plugins: [],
};

export default config;