/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary: "var(--accent)",
				primaryDark: "var(--accent-dark)",
			}
		},
	},
	plugins: [],
}
