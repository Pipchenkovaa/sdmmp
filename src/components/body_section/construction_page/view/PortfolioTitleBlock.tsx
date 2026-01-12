"use client"

import ShinyText from "@/components/ui/ShinyText/ShinyText"

export default function PortfolioTitle() {
	return (
		<div className="relative px-[28px] xl:px-[60px] pt-[20px] lg:pt-[40px]">
			<div className="flex flex-col leading-tight pointer-events-none select-none">
				<ShinyText
					text="Не концепты."
					disabled={false}
					speed={4}
					className="uppercase w-fit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
				/>

				<p className="uppercase text-[var(--main-text-color)] w-fit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Реальные объекты.</p>
			</div>
		</div>
	)
}
