import { heroui } from "@heroui/theme"
import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		// "./node_modules/@heroui/theme/dist/components/chip.js",
		"./src/**/*.{js,ts,jsx,tsx}",
	],

	theme: {
		extend: {
			fontFamily: {
				main: ["var(--font-main)", "system-ui", "sans-serif"],
			},
			screens: {
				xs: "0px",
				sm: "480px",
				md: "640px",
				lg: "768px",
				xl: "1024px",
				"2xl": "1280px",
				"3xl": "1536px",
			},
		},
	},

	plugins: [heroui()],
}

export default config
