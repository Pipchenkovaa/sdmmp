"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"

import { EvervaultCard, Icon } from "@/components/ui/evervault-card"
import Dots from "@/components/ui/Dots"
import Badge from "../../../ui/Bange"
import type { Props } from "../modal/types"
import { useResponsiveSize } from "@/hooks/useResponsiveSize"
// import ShinyText from "@/components/ui/ShinyText/ShinyText"

export default function Carusel({ slides, className }: Props) {
	const trackRef = useRef<HTMLDivElement | null>(null)
	const itemRefs = useRef<(HTMLDivElement | null)[]>([])
	const [index, setIndex] = useState(0)
	const [progress, setProgress] = useState(0)
	const total = useMemo(() => Math.max(1, slides?.length ?? 0), [slides])

	const badgeSize = useResponsiveSize()

	const handleScroll = useCallback(() => {
		const el = trackRef.current
		const first = itemRefs.current[0]
		if (!el || !first) return
		const w = first.offsetWidth
		const i = Math.round(el.scrollLeft / Math.max(1, w))
		setIndex(Math.min(total - 1, Math.max(0, i)))
		setProgress(el.scrollLeft / Math.max(1, w))
	}, [total])

	const goTo = useCallback((i: number) => {
		const el = trackRef.current
		const target = itemRefs.current[i]
		if (!el || !target) return
		el.scrollTo({ left: target.offsetLeft, behavior: "smooth" })
	}, [])

	useEffect(() => {
		const onResize = () => goTo(index)
		window.addEventListener("resize", onResize)
		return () => window.removeEventListener("resize", onResize)
	}, [index, goTo])

	if (!slides?.length) return null

	return (
		<div className={cn("w-full min-w-0", className)}>
			<div
				ref={trackRef}
				onScroll={handleScroll}
				className={cn(
					"flex gap-5 md:gap-6 xl:gap-7 overflow-x-auto no-scrollbar",
					"snap-x snap-mandatory scroll-smooth touch-pan-x pb-4 xl:pb-6",
					"w-full min-w-0"
				)}
			>
				{slides.map((s, i) => (
					<div
						key={s.id}
						ref={(el) => {
							if (el) itemRefs.current[i] = el
						}}
						className="basis-full shrink-0 snap-start p-2 md:p-3"
					>
						<div
							className={cn(
								"relative w-full min-w-0 mx-auto flex flex-col gap-4 md:gap-5 xl:gap-6",
								"border-1.5 border-[var(--border)] bg-transparent",
								"px-4 py-4 md:px-5 md:py-5 xl:px-6 xl:py-6",
								"h-[26rem] md:h-[30rem] lg:h-[36rem] xl:h-[44rem]"
							)}
						>
							<Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
							<Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
							<Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
							<Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

							<EvervaultCard
								className={cn(
									"h-full w-full min-w-0",
									"px-6 py-6 xl:px-6 xl:py-8"
								)}
								src={s.src}
								alt={s.title}
								fit="contain"
							/>

							<div className="w-full min-w-0 flex flex-col xl:flex-row xl:items-center xl:justify-start gap-3 xl:gap-4 2xl:gap-[24px]">
								{!!s.badges?.length && (
									<div className="badge-section order-1 xl:order-2 flex flex-wrap gap-2">
										{s.badges.map((b, bi) => (
											<Badge
												size={badgeSize}
												key={bi}
												className="basis-auto sm:basis-auto shrink sm:shrink-0"
											>
												{b}
											</Badge>
										))}
									</div>
								)}

								<h2 className="order-2 xl:order-1 mt-0 inline-block w-fit shrink-0 grow-0 basis-auto flex-1 min-w-0 text-lg md:text-lg lg:text-xl xl:text-2xl font-semibold leading-tight tracking-tight uppercase break-words hyphens-auto [text-wrap:balance] text-[#8a8a8a] pointer-events-none select-none">
									{s.title}
								</h2>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="flex justify-center">
				<Dots
					scrollProgress={progress}
					currentPage={index}
					slidesCount={total}
					onChangeSlide={goTo}
				/>
			</div>
		</div>
	)
}
