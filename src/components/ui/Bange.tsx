"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

type BadgeProps = {
	children: ReactNode
	className?: string
	iconLeft?: ReactNode
	iconRight?: ReactNode
	size?: "sm" | "md" | "lg"
}

const sizeMap: Record<NonNullable<BadgeProps["size"]>, string> = {
	sm: "text-[10px] px-[8px] py-[5px] rounded-[8px]",
	md: "text-xs px-[10px] py-1.5 rounded-[10px]",
	lg: "text-sm px-[10px] py-1.5 rounded-[10px]",
}

export default function Badge({
	children,
	className,
	iconLeft,
	iconRight,
	size = "lg",
}: BadgeProps) {
	return (
		<span
			className={cn(
				"relative inline-flex items-center justify-center gap-1.5 group select-none cursor-pointer",
				"text-[var(--foreground)]",
				"transition-colors duration-200 ease-in-out",
				"max-w-full",
				sizeMap[size],
				className
			)}
		>
			<span
				aria-hidden
				className={cn(
					"absolute inset-0 rounded-[inherit] border-[1.3px] border-[var(--border)]",
					"group-hover:border-[var(--border-hover)]",
					"transition-colors duration-200"
				)}
			/>

			{iconLeft && <span className="shrink-0">{iconLeft}</span>}
			<span className="relative z-10 break-words hyphens-auto leading-none">{children}</span>
			{iconRight && <span className="shrink-0">{iconRight}</span>}
		</span>
	)
}
