"use client"

import React from "react"
import { cn } from "@/lib/utils"

export function EvervaultCard({
	className,
	src,
	alt = "",
	fit = "contain",
}: {
	className?: string
	src?: string
	alt?: string
	fit?: "contain" | "cover"
}) {
	return (
		<div
			className={cn(
				"relative w-full h-full overflow-hidden rounded-xl",
				"bg-[radial-gradient(120%_100%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]",
				"bg-[#0F0F0F]",
				className
			)}
		>
			{src ? (
				<img
					src={src}
					alt={alt}
					className={cn(
						"block inset-0 w-full h-full pointer-events-none select-none",
						fit === "cover" ? "object-cover" : "object-contain"
					)}
				/>
			) : null}
		</div>
	)
}

export const Icon: React.FC<React.SVGProps<SVGSVGElement>> = ({
	className,
	...rest
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className={className}
		{...rest}
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
	</svg>
)
