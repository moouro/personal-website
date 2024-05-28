/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,js,md}'],
	theme: {
    extend: {
     
			colors: {
				heading: '#fcfcfc',
        bodyLight: '#b5b7bf',
        bodyDark: '#93959c',
        overlay: '#30323b',
        border: '#33363d',
        bg: '#1D1E24',
        surface: '#23262b',
        accent: '#0090FF',
      

			},

			

		},
	},
	plugins: [],
}
