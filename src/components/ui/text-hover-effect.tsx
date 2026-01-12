"use client"
import React, { useRef, useEffect, useState } from "react"
import { motion } from "motion/react"

export const TextHoverEffect = ({
	text,
	duration,
}: {
	text: string
	duration?: number
}) => {
	const svgRef = useRef<SVGSVGElement>(null)
	const measureRef = useRef<SVGTextElement>(null)

	const [cursor, setCursor] = useState({ x: 0, y: 0 })
	const [hovered, setHovered] = useState(false)
	const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" })

	// размеры viewBox по измеренному тексту
	const [vb, setVb] = useState({ w: 300, h: 100 })
	const padding = 40 // запас, чтобы ничего не обрезалось
	const stroke = 1.1

	useEffect(() => {
		if (measureRef.current) {
			const box = measureRef.current.getBBox()
			// добавим поля со всех сторон
			const w = Math.ceil(box.width + padding * 2)
			const h = Math.ceil(box.height + padding * 2)
			setVb({ w, h })
		}
	}, [text])

	useEffect(() => {
		if (svgRef.current) {
			const r = svgRef.current.getBoundingClientRect()
			const cx = ((cursor.x - r.left) / r.width) * 100
			const cy = ((cursor.y - r.top) / r.height) * 100
			setMaskPosition({ cx: `${cx}%`, cy: `${cy}%` })
		}
	}, [cursor])

	return (
		<svg
			ref={svgRef}
			width="100%"
			height="100%"
			viewBox={`0 0 ${vb.w} ${vb.h}`}
			preserveAspectRatio="xMidYMid meet"
			xmlns="http://www.w3.org/2000/svg"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
			className="select-none"
		>
			<defs>
				<motion.radialGradient
					id="revealMask"
					gradientUnits="userSpaceOnUse"
					r="22%"
					initial={{ cx: "50%", cy: "50%" }}
					animate={maskPosition}
					transition={{ duration: duration ?? 0, ease: "easeOut" }}
				>
					<stop offset="0%" stopColor="white" />
					<stop offset="100%" stopColor="black" />
				</motion.radialGradient>
				<mask id="textMask">
					<rect
						x="0"
						y="0"
						width="100%"
						height="100%"
						fill="url(#revealMask)"
					/>
				</mask>
			</defs>

			{/* Невидимый текст для измерения размеров */}
			<text
				ref={measureRef}
				x={vb.w / 2}
				y={vb.h / 2}
				textAnchor="middle"
				dominantBaseline="middle"
				className="fill-transparent font-[helvetica] text-[300px] font-bold"
				style={{ letterSpacing: "-0.04em" }}
			>
				{text}
			</text>

			{/* Серый контур (фон) */}
			<text
				x={vb.w / 2}
				y={vb.h / 2}
				textAnchor="middle"
				dominantBaseline="middle"
				stroke="#383838"
				strokeWidth={stroke}
				vectorEffect="non-scaling-stroke"
				strokeLinejoin="round"
				strokeLinecap="round"
				className="fill-transparent font-[helvetica] text-[300px] font-bold"
				style={{ opacity: hovered ? 0.7 : 0, letterSpacing: "-0.04em" }}
			>
				{text}
			</text>

			{/* Анимированный контур */}
			<motion.text
				x={vb.w / 2}
				y={vb.h / 2}
				textAnchor="middle"
				dominantBaseline="middle"
				stroke="#383838"
				strokeWidth={stroke}
				vectorEffect="non-scaling-stroke"
				strokeLinejoin="round"
				strokeLinecap="round"
				className="fill-transparent font-[helvetica] text-[300px] font-bold"
				style={{ letterSpacing: "-0.04em" }}
				initial={{ strokeDashoffset: 3000, strokeDasharray: 3000 }}
				animate={{ strokeDashoffset: 0, strokeDasharray: 3000 }}
				transition={{ duration: 6, ease: "easeInOut" }}
			>
				{text}
			</motion.text>

			{/* Белый слой по маске */}
			<text
				x={vb.w / 2}
				y={vb.h / 2}
				textAnchor="middle"
				dominantBaseline="middle"
				stroke="#FFFFFF"
				strokeWidth={stroke}
				vectorEffect="non-scaling-stroke"
				strokeLinejoin="round"
				strokeLinecap="round"
				className="fill-transparent font-[helvetica] text-[300px] font-bold"
				style={{ letterSpacing: "-0.04em" }}
				mask="url(#textMask)"
			>
				{text}
			</text>
		</svg>
	)
}
