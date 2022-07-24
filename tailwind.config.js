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
				fadeIn: 'slideUp 300ms ease-in',
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
				slideUp: {
					from: {
						opacity: 0,
						transform: 'translateY(-100%)',
					},
					to: {
						opacity: 1,
						transform: 'translateY(0%)',
					},
				},
			},
		},
	},
	plugins: [],
};
