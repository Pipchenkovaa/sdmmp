"use client"

import DescriptionBlock from "@/components/body_section/home_page/view/DescriptionBlock"
import { PortfolioGrid } from "@/components/portfolio_section/view/PortfolioGrid"
import { portfolioHomePageItems } from "@/components/portfolio_section/modal/home/type"
import PageTitle from "@/components/body_section/home_page/view/PageTitle"
import PortfolioTitle from "@/components/body_section/home_page/view/PortfolioTitleBlock"
import MainCaruselBlock from "@/components/body_section/home_page/view/MainCaruselBlock"
import GradientBlinds from "@/components/ui/GradientBlinds/GradientBlinds"

export default function Home() {
	return (
		<>
			<div className="relative w-full mx-auto overflow-hidden text-center">
				<div className="absolute inset-0">
					<GradientBlinds
						className="fade-bottom"
						gradientColors={["#ffffff", "#525252"]}
						angle={41}
						noise={0.3}
						blindCount={10}
						blindMinWidth={10}
						spotlightRadius={0.65}
						spotlightSoftness={0.15}
						spotlightOpacity={0.9}
						mouseDampening={0.3}
						distortAmount={0}
						shineDirection="left"
						mixBlendMode="screen"
					/>
				</div>

				<div className="relative z-10 flex w-full min-h-[500px] md:min-h-[600px] xl:min-h-[780px] 3xl:min-h-[840px] flex-col items-center justify-center pointer-events-none select-none">
					<PageTitle />
				</div>
			</div>

			<MainCaruselBlock />
			<DescriptionBlock />
			<PortfolioTitle />
			<section className="w-full flex justify-center px-[28px] xl:px-[60px] py-[30px] lg:py-[48px]">
				<div className="mx-auto w-full max-w-[1024px] min-w-0 flex flex-col gap-2 lg:gap-3 xl:gap-4">
					<PortfolioGrid items={portfolioHomePageItems} />
				</div>
			</section>
		</>
	)
}
