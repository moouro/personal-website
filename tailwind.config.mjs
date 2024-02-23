/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"',  'sans-serif'],
        mono: ['"Monaspace Neon"', 'monospace'],
      },

			colors: {
				dark: {
          background: 'hsl(225, 9%, 9%)',
          foreground: 'hsl(210, 40%, 98%)',
          card: 'hsl(228, 9%, 11%)',
          'card-foreground': 'hsl(210, 40%, 98%)',
          popover: 'hsl(228, 9%, 11%)',
          'popover-foreground': 'hsl(210, 40%, 98%)',
          primary: 'hsl(252, 100%, 69%)',
          'primary-foreground': 'hsl(0, 0%, 100%)',
          secondary: 'hsl(228, 6%, 16%)',
          'secondary-foreground': 'hsl(210, 40%, 98%)',
          muted: 'hsl(228, 6%, 16%)',
          'muted-foreground': 'hsl(215, 20.2%, 65.1%)',
          accent: 'hsl(228, 6%, 16%)',
          'accent-foreground': 'hsl(210, 40%, 98%)',
          destructive: 'hsl(0, 84%, 60%)',
          'destructive-foreground': 'hsl(210, 40%, 98%)',
          border: 'hsl(228, 6%, 16%)',
          input: 'hsl(228, 6%, 16%)',
          ring: 'hsl(212.7, 26.8%, 83.9%)',
          radius: '0.5rem',
        },

				

			},

			gridTemplateRows: {
				newRow: 'auto 1fr auto',
			},

			container: {
				center: true,
			},

		},
	},
	plugins: [],
}
