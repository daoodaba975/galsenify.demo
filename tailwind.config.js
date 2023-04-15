/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
				baseColor: '#347571',
				secondary: '#41938c'
			},
    },
  },
  plugins: [],
}
