/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['"Fira Code"', 'arial']
		},

		colors: {
			transparent: 'transparent',
			yellow: '#F7DA00',
			blue: '#78B0BA',
			teal: '#4C8994',
			coffee: '#342E37',
			gold: '#A39000',
			sand: {
				100: '#C9C7BA',
				200: '#C0BEAF',
				300: '#B7B5A4',
				400: '#ADAB99',
				500: '#938F79'
			},
			white: '#FFFFFF'
		},

		container: {
			center: true,
			padding: '1rem'
		}
	},
	plugins: []
};
