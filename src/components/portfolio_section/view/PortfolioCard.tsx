"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Dots from "@/components/ui/Dots"
import { Icon } from "@/components/ui/evervault-card"
import type { PortfolioItem } from "../modal/home/type"

type Props = {
	item: PortfolioItem
}

export function PortfolioCard({ item }: Props) {
	const [current, setCurrent] = useState(0)
	const trackRef = useRef<HTMLDivElement | null>(null)
	const slideRefs = useRef<(HTMLDivElement | null)[]>([])
	const [progress, setProgress] = useState(0)

	const slidesCount = useMemo(
		() => Math.max(1, item.images?.length ?? 0),
		[item.images]
	)

	const isPortrait = item.aspect === "portrait"

	const handleScroll = useCallback(() => {
		const el = trackRef.current
		const first = slideRefs.current[0]
		if (!el || !first) return

		const w = first.offsetWidth
		const i = Math.round(el.scrollLeft / Math.max(1, w))
		setCurrent(Math.min(slidesCount - 1, Math.max(0, i)))
		setProgress(el.scrollLeft / Math.max(1, w))
	}, [slidesCount])

	const goTo = useCallback((index: number) => {
		const el = trackRef.current
		const target = slideRefs.current[index]
		if (!el || !target) return

		el.scrollTo({
			left: target.offsetLeft,
			behavior: "smooth",
		})
	}, [])

	useEffect(() => {
		const onResize = () => goTo(current)
		window.addEventListener("resize", onResize)
		return () => window.removeEventListener("resize", onResize)
	}, [current, goTo])

	if (!item.images?.length) return null

	return (
		<article className="flex flex-col gap-3 md:gap-4">
			<div
				ref={trackRef}
				onScroll={handleScroll}
				className={cn(
					"flex overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth touch-pan-x",
					"w-full min-w-0"
				)}
			>
				{item.images.map((img, index) => (
					<div
						key={index}
						ref={(el) => {
							if (el) slideRefs.current[index] = el
						}}
						className={cn(
							"relative min-w-full snap-start rounded-sm",
							isPortrait ? "aspect-[3/4]" : "aspect-[4/3]"
						)}
					>
						<Image
							src={img}
							alt={item.title}
							fill
							className="object-cover pointer-events-none select-none rounded-sm"
							sizes="(min-width: 1024px) 50vw, 100vw"
						/>
					</div>
				))}
			</div>

			{slidesCount > 1 && (
				<div className="flex justify-center">
					<Dots
						scrollProgress={progress}
						currentPage={current}
						slidesCount={slidesCount}
						onChangeSlide={goTo}
					/>
				</div>
			)}

			<div className="relative mt-1">
				<Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
				<Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
				<Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
				<Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

				<div className="border border-[var(--border)] px-4 py-3 md:px-5 md:py-4 flex flex-col gap-1">
					<h3 className="uppercase text-sm md:text-base lg:text-lg font-semibold text-[var(--main-text-color)]">
						{item.title}
					</h3>
					<p className="text-xs md:text-sm text-[var(--main-text-color)] leading-snug">
						{item.description}
					</p>
				</div>
			</div>
		</article>
	)
}
