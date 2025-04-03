/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				outfit: ["Outfit", "sans-serif"],
				youngserif: ['"Young-Serif"', "serif"], // Fix typo in 'serf' → 'serif'
			},
			fontWeight: {
				normal: "400",
				semibold: "600",
				bold: "700",
			},
			colors: {
				brown: {
					800: "hsl(14, 45%, 36%)",
				},
				rose: {
					50: "hsl(330, 100%, 98%)",
					800: "hsl(332, 51%, 32%)",
				},
				weird_rose: "rgb(243, 229, 216)",
				stone: {
					100: "hsl(30, 54%, 90%)",
					150: "hsl(30, 18%, 87%)",
					600: "hsl(30, 10%, 34%)",
					900: "hsl(24, 5%, 18%)",
				},
			},
			spacing: {
				85: "19rem", // Adjust as needed
			},
		},
	},
	plugins: [],
};

