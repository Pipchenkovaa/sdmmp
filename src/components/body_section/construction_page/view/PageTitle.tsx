"use client"

import { ConstructionWorkTypes } from "../model/data"
import Badge from "@/components/ui/Bange"
import { useResponsiveSize } from "@/hooks/useResponsiveSize"

export default function PageTitle() {
	const badgeSize = useResponsiveSize()

	return (
		<div className="relative z-10 flex flex-col items-center gap-2.5 lg:gap-3 xl:gap-4 py-[120px]">
			<h1 className="uppercase text-xl sm:text-2xl lg:text-[32px] xl:text-[40px] 2xl:text-5xl font-semibold inline-block w-fit bg-gradient-to-r from-[#8a8a8a] to-[#D6D6D6] bg-clip-text text-transparent">
				Общестроительные работы.
			</h1>

			<div className="mt-4 flex flex-wrap justify-center gap-x-3 gap-y-2 lg:gap-4 xl:gap-5 max-w-[300px] lg:max-w-full">
				{ConstructionWorkTypes.map((item, i) => (
					<Badge key={i} size={badgeSize} className="basis-auto shrink-0 text-[var(--text-dark-gray-color)]">
						{item}
					</Badge>
				))}
			</div>
		</div>
	)
}
