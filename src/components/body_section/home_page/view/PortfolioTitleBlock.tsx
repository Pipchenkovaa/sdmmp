"use client"

import ShinyText from "@/components/ui/ShinyText/ShinyText"

export default function PortfolioTitle() {
	return (
		<div className="relative px-[28px] xl:px-[60px] pt-[20px] lg:pt-[40px]">
			{/* <ShinyText
				text="Не просто говорим. Но делаем."
				disabled={false}
				speed={4}
				className="uppercase inline-block w-fit font-semibold text-xl md:text-2xl xl:text-3xl 2xl:text-6xl"
			/> */}

			<div className="flex flex-col leading-tight pointer-events-none select-none">
				<ShinyText
					text="Не просто говорим."
					disabled={false}
					speed={4}
					className="uppercase w-fit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
				/>

				<p className="uppercase text-[var(--main-text-color)] w-fit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Но делаем.</p>

				{/* <ShinyText
					text="Но делаем."
					disabled={false}
					speed={4}
					className="uppercase w-fit font-semibold text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl"
				/> */}
			</div>
		</div>
	)
}
