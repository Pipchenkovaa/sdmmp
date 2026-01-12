// import type { StaticImageData } from "next/image"

export type PortfolioItem = {
	id: string
	title: string
	description: string
	images: string[]
	aspect?: "portrait" | "landscape"
}

export const portfolioHomePageItems: PortfolioItem[] = [
	{
		id: "home_project-1",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Изготовлено и поставлено более 500 тонн металлоконструкций. Общая площадь объекта: 28.000 м2.",
		images: [
			"/portfolio/home/home_project-1.1.png",
			"/portfolio/home/home_project-1.2.png",
			"/portfolio/home/home_project-1.3.png",
			"/portfolio/home/home_project-1.4.png",
		],
		aspect: "portrait",
	},
	{
		id: "home_project-2",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Пожарная лестница. Высота: 18 м.",
		images: ["/portfolio/home/home_project-2.png"],
		aspect: "portrait",
	},
	// {
	// 	id: "home_project-4",
	// 	title: "Lorem ipsum.",
	// 	description:
	// 		"Lorem ipsum id purus tincidunt suspendisse commodo id enim arcu.",
	// 	images: ["/portfolio/home/home_project-4.png"],
	// 	aspect: "portrait",
	// },
	{
		id: "home_project-5",
		title: "Силовой каркас",
		description:
			"Процесс изготовления частей силового каркаса складского комплекса для девелоперской компании. Производственное помещение SDMMetallProM.",
		images: [
			"/portfolio/home/home_project-6.1.png",
			"/portfolio/home/home_project-6.2.png",
			"/portfolio/home/home_project-5.1.png",
			"/portfolio/home/home_project-4.png"
			// "/portfolio/home/home_project-5.2.png",
			// "/portfolio/home/home_project-5.3.png",
		],
		aspect: "portrait",
	},
	{
		id: "home_project-3",
		title: "Ограждение ТБО",
		description:
			"Изготовлено из профильной трубы и листового металла. Секции на болтовых соединениях. Город Москва. ",
		images: [
			"/portfolio/home/home_project-3.1.png",
			"/portfolio/home/home_project-3.2.png",
			"/portfolio/home/home_project-3.3.png",
		],
		aspect: "portrait",
	},
	// {
	// 	id: "home_project-6",
	// 	title: "Lorem ipsum.",
	// 	description:
	// 		"Lorem ipsum id purus tincidunt suspendisse commodo id enim arcu.",
	// 	images: [
	// 		"/portfolio/home/home_project-6.1.png",
	// 		"/portfolio/home/home_project-6.2.png",
	// 	],
	// 	aspect: "portrait",
	// },
	// {
	// 	id: "home_project-7",
	// 	title: "Lorem ipsum.",
	// 	description:
	// 		"Lorem ipsum id purus tincidunt suspendisse commodo id enim arcu.",
	// 	images: ["/portfolio/home/home_project-7.png"],
	// 	aspect: "landscape",
	// },
	{
		id: "home_project-8",
		title: "Плазменная резка",
		description:
			"Раскрой металла от 1 до 150 мм на высокоточном станке ЧПУ.",
		images: [
			"/portfolio/home/home_project-8.1.png",
			"/portfolio/home/home_project-8.2.png",
		],
		aspect: "landscape",
	},
]
