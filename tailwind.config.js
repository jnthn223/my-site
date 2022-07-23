/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Open Sans', 'sans-serif'],
			serif: ['Playfair Display', 'serif'],
		},
		extend: {
			animation: {
				spinningText: 'spin 10s linear infinite',
			},
			keyframes: {
				spin: {
					'0%': {
						transform: 'rotate(360deg)',
					},
					'100%': {
						transform: 'rotate(0deg)',
					},
				},
			},
		},
	},
	plugins: [],
};
