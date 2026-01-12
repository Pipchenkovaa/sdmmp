import { PortfolioItem } from "../home/type"

type PortfolioCategory = "monolithic" | "rc_install" | "steel_install"

export type TabsPortfolioItem = PortfolioItem & {
	category: PortfolioCategory
}

export const portfolioConstructionPageItems: TabsPortfolioItem[] = [
	{
		id: "monolit_project-6",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Бетонирование столбчатых фундаментов для дальнейшего монтажа несущего каркаса сооружения.",
		images: [
			"/portfolio/construction/monolithic/monolithic_project-6.jpeg",
		],
		aspect: "portrait",
		category: "monolithic",
	},
	{
		id: "monolit_project-1",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Бетонирование полов с упрочняющим покрытием / топпингом.",
		images: [
			"/portfolio/construction/monolithic/monolithic_project-1.jpeg",
		],
		aspect: "landscape",
		category: "monolithic",
	},
	{
		id: "monolit_project-2",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Принятие бетона объемом 209 м3.",
		images: [
			"/portfolio/construction/monolithic/monolithic_project-2.jpeg",
		],
		aspect: "landscape",
		category: "monolithic",
	},
	{
		id: "monolit_project-3",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Монтаж опалубки перекрытий CapLock.",
		images: [
			"/portfolio/construction/monolithic/monolithic_project-3.jpeg",
		],
		aspect: "landscape",
		category: "monolithic",
	},
	{
		id: "monolit_project-4",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Бетонирование перекрытий. Подача бетонной смеси автобетононасосом.",
		images: [
			"/portfolio/construction/monolithic/monolithic_project-4.jpeg",
		],
		aspect: "landscape",
		category: "monolithic",
	},
	{
		id: "monolit_project-5",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Армирование и бетонирование перекрытия монолитного аккумулирующего резервуара объемом 1300 м3. Армирование вертикальных конструкций стен и колонн аккумулирующего резервуара.",
		images: [
			"/portfolio/construction/monolithic/monolithic_project-5.1.jpeg",
			"/portfolio/construction/monolithic/monolithic_project-5.2.jpeg",
		],
		aspect: "landscape",
		category: "monolithic",
	},
	{
		id: "monolit_project-7",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Бетонирование доковых приямков.",
		images: [
			"/portfolio/construction/monolithic/monolithic_project-7.jpeg",
		],
		aspect: "landscape",
		category: "monolithic",
	},
	{
		id: "monolit_project-8",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Бетонирование фундаментов под наружные пожарные лестницы.",
		images: [
			"/portfolio/construction/monolithic/monolithic_project-8.jpeg",
		],
		aspect: "landscape",
		category: "monolithic",
	},
	{
		id: "monolit_project-9",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Монтаж пространственной опалубки перекрытий Cap Lock. Высота перекрытий до 7 метров.",
		images: [
			"/portfolio/construction/monolithic/monolithic_project-9.jpeg",
		],
		aspect: "portrait",
		category: "monolithic",
	},
	{
		id: "monolit_project-10",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Армирование фундаментной плиты аккумулирующего резервуара.",
		images: [
			"/portfolio/construction/monolithic/monolithic_project-10.jpeg",
		],
		aspect: "landscape",
		category: "monolithic",
	},
	{
		id: "steel-install_project-1",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Монтаж металлоконструкций фахверков и обрамлений проемов.",
		images: [
			"/portfolio/construction/steel_installation/steel-install_project-1.jpeg",
		],
		aspect: "landscape",
		category: "rc_install",
	},
	{
		id: "rc-install_project-1",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Монтаж железобетонных цокольных панелей.",
		images: [
			"/portfolio/construction/rc_installation/rc-install_project-1.jpeg",
		],
		aspect: "landscape",
		category: "rc_install",
	},
	{
		id: "rc-install_project-2",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Монтаж сборных железобетонных балок массой 14-16 тонн.",
		images: [
			"/portfolio/construction/rc_installation/rc-install_project-2.1.jpeg",
			"/portfolio/construction/rc_installation/rc-install_project-2.2.jpeg",
		],
		aspect: "landscape",
		category: "rc_install",
	},
	{
		id: "rc-install_project-3",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Монтаж сборных железобетонных лестничных маршей.",
		images: [
			"/portfolio/construction/rc_installation/rc-install_project-3.jpeg",
		],
		aspect: "portrait",
		category: "rc_install",
	},
	{
		id: "rc-install_project-4",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Монтаж сборных железобетонных колонн высотой до 16 метров.",
		images: [
			"/portfolio/construction/rc_installation/rc-install_project-4.jpeg",
		],
		aspect: "landscape",
		category: "rc_install",
	},
	{
		id: "rc-install_project-5",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Монтаж сборных железобетонных колонн высотой до 16 метров.",
		images: [
			"/portfolio/construction/rc_installation/rc-install_project-5.jpeg",
		],
		aspect: "portrait",
		category: "rc_install",
	},
	{
		id: "steel-install_project-2",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Монтаж металлического каркаса - стропильные и подстропильные фермы, связи.",
		images: [
			"/portfolio/construction/steel_installation/steel-install_project-2.1.jpeg",
			"/portfolio/construction/steel_installation/steel-install_project-2.2.jpeg",
			"/portfolio/construction/steel_installation/steel-install_project-2.3.jpeg",
		],
		aspect: "landscape",
		category: "steel_install",
	},
	{
		id: "steel-install_project-3",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Монтаж пожарных лестниц.",
		images: [
			"/portfolio/construction/steel_installation/steel-install_project-3.1.jpeg",
			"/portfolio/construction/steel_installation/steel-install_project-3.2.jpeg",
		],
		aspect: "portrait",
		category: "steel_install",
	},
	{
		id: "steel-install_project-4",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Монтаж фахверковых конструкций.",
		images: [
			"/portfolio/construction/steel_installation/steel-install_project-4.jpeg",
		],
		aspect: "portrait",
		category: "steel_install",
	},
	{
		id: "steel-install_project-5",
		title: "Производственно-складской комплекс СмартПарк Новая Рига",
		description:
			"Монтаж металлического каркаса - стропильные и подстропильные фермы, связи.",
		images: [
			"/portfolio/construction/steel_installation/steel-install_project-5.jpeg",
		],
		aspect: "landscape",
		category: "steel_install",
	},
]
