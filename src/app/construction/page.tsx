"use client"

import GradientBlinds from "@/components/ui/GradientBlinds/GradientBlinds"
import PageTitle from "@/components/body_section/construction_page/view/PageTitle"
import CaruselBlock from "@/components/body_section/construction_page/view/CaruselBlock"
import PortfolioTitle from "@/components/body_section/construction_page/view/PortfolioTitleBlock"
import DescriptionBlock from "@/components/body_section/home_page/view/DescriptionBlock"
import { PortfolioTabsSection } from "@/components/portfolio_section/view/PortfolioSection"

export default function ConstructionPage() {
	return (
		<>
			<div className="relative w-full mx-auto overflow-hidden text-center">
				<div className="absolute inset-0">
					<GradientBlinds
						className="fade-bottom"
						gradientColors={["#ffffff", "#525252"]}
						angle={121}
						noise={0.3}
						blindCount={10}
						blindMinWidth={100}
						spotlightRadius={0.65}
						spotlightSoftness={0.15}
						spotlightOpacity={0.9}
						mouseDampening={0.3}
						distortAmount={8}
						shineDirection="left"
						mixBlendMode="screen"
					/>
					{/* <GradientBlinds
						className="fade-bottom"
						gradientColors={["#ffffff", "#525252"]}
						angle={41}
						noise={0.3}
						blindCount={10}
						blindMinWidth={100}
						spotlightRadius={0.65}
						spotlightSoftness={0.15}
						spotlightOpacity={0.9}
						mouseDampening={0.3}
						distortAmount={10}
						shineDirection="left"
						mixBlendMode="screen"
					/> */}
				</div>

				<div className="relative z-10 flex w-full min-h-[500px] md:min-h-[600px] xl:min-h-[780px] 3xl:min-h-[840px] flex-col items-center justify-center pointer-events-none select-none">
					<PageTitle />
				</div>
			</div>

			<CaruselBlock />
			<DescriptionBlock />
			<PortfolioTitle />
			<PortfolioTabsSection />
		</>
	)
}
