import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

import { Providers } from "./providers"
import Header from "@/components/navigation/view/Header"
import Footer from "@/components/footer/view/Footer"
// import ClickSpark from "@/components/ui/ClickSpark"

export const metadata: Metadata = {
	title: "SDMMetallproM",
	description: "",
}

const involve = localFont({
	src: [
		{
			path: "../assets/fonts/Involve-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/fonts/Involve-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../assets/fonts/Involve-MediumOblique.woff2",
			weight: "500",
			style: "italic",
		},
		{
			path: "../assets/fonts/Involve-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../assets/fonts/Involve-SemiBoldOblique.woff2",
			weight: "600",
			style: "italic",
		},
		{
			path: "../assets/fonts/Involve-Oblique.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "../assets/fonts/Involve-BoldOblique.woff2",
			weight: "700",
			style: "italic",
		},
	],
	variable: "--font-main",
	display: "swap",
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html className={`${involve.variable} antialiased`} lang="ru">
			<body className="min-h-dvh grid grid-rows-[auto_1fr_auto] font-main bg-[var(--background)] text-[var(--text-gray-color)]">
				<Providers>
					{/* <ClickSpark
						sparkColor="#fff"
						sparkSize={10}
						sparkRadius={15}
						sparkCount={8}
						duration={400}
					> */}
						<Header />
						<main className="min-h-0">{children}</main>
						<Footer id="contacts" />
					{/* </ClickSpark> */}
				</Providers>
			</body>
		</html>
	)
}
