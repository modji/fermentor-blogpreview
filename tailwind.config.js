/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			colors: {
				white: "hsl(0, 0%, 100%)",
				grey: "hsl(0, 0%, 50%)",
				black: "hsl(0, 0%, 7%)",
			},
			fontFamily: {
				main: ["Figtree", "sans-serif"],
			},
			fontSize: {
				normal: "16px",
			},
			boxShadow: {
				cxl: "8px 8px 1px 0px #000000",
			},
		},
	},
	plugins: [],
};
