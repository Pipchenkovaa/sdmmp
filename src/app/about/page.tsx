"use client"

import GradientBlinds from "@/components/ui/GradientBlinds/GradientBlinds"
import PageTitle from "@/components/body_section/about_page/view/PageTitle"

export default function AboutPage() {
	return (
		<>
			<div className="relative w-full mx-auto overflow-hidden text-center">
				<div className="absolute inset-0">
					<GradientBlinds
						className="fade-bottom"
						gradientColors={["#ffffff", "#525252"]}
						angle={34}
						noise={0.3}
						blindCount={3}
						blindMinWidth={100}
						spotlightRadius={0.65}
						spotlightSoftness={0.15}
						spotlightOpacity={0.9}
						mouseDampening={0.3}
						distortAmount={4}
						shineDirection="left"
						mixBlendMode="screen"
					/>
				</div>

				<div className="relative z-10 flex w-full min-h-[500px] md:min-h-[600px] xl:min-h-[780px] 3xl:min-h-[840px] flex-col items-center justify-center pointer-events-none select-none">
					<PageTitle />
				</div>
			</div>
		</>
	)
}
