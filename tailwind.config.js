/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,}'],
	theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"',  'sans-serif'],
        mono: ['"Monaspace Neon"', 'monospace'],
      },

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
