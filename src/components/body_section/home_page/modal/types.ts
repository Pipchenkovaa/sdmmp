type Slide = {
	id: number | string
	src: string
	title: string
	badges?: string[]
}

export type Props = {
	slides: Slide[]
	className?: string
}