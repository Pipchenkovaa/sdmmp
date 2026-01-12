import { useEffect, useState } from "react"

export function useResponsiveSize() {
	const [size, setSize] = useState<"sm" | "md" | "lg">("sm")

	useEffect(() => {
		const check = () => {
			const width = window.innerWidth

			if (width >= 1280) setSize("lg")
			else if (width >= 768) setSize("md")
			else setSize("sm")
		}

		check()
		window.addEventListener("resize", check)
		return () => window.removeEventListener("resize", check)
	}, [])

	return size
}
