import React from "react"
import { cn } from "@/lib/utils"

type DotsProps = {
	currentPage?: number
	onChangeSlide: (index: number) => void
	slidesCount: number
	scrollProgress: number
}

export default function Dots({
	onChangeSlide,
	slidesCount,
	scrollProgress,
	currentPage,
}: DotsProps) {
	return (
		<div className="flex justify-center items-center gap-1 xl:gap-1.5">
			{Array.from({ length: slidesCount }).map((_, index) => {
				const itemProgress = scrollProgress - index
				const offset = Math.min(
					1 - Math.max(itemProgress, -1 * itemProgress),
					1
				)
				const width = Math.max(5, Math.round(5 + 43 * offset))
				const isActive = currentPage ? currentPage === index : width > 5

				return (
					<button
						key={index}
						onClick={() => onChangeSlide(index)}
						className="cursor-pointer p-1"
					>
						<div
							className={cn(
								"rounded-full h-[5px] min-w-[5px] xl:h-[6px] xl:min-w-[6px] transition-all duration-200",
								isActive ? "bg-[var(--foreground)]" : "bg-[var(--dots-dark-color)]"
							)}
							style={{ width }}
						/>
					</button>
				)
			})}
		</div>
	)
}
