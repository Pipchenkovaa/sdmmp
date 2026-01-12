"use client"

import { Tabs, Tab } from "@heroui/react"
import { PortfolioGrid } from "./PortfolioGrid"
import { portfolioConstructionPageItems } from "../modal/construction/type"

export function PortfolioTabsSection() {
	const monolithic = portfolioConstructionPageItems.filter(
		(i) => i.category === "monolithic"
	)
	const steelInstall = portfolioConstructionPageItems.filter(
		(i) => i.category === "steel_install"
	)
	const rcInstall = portfolioConstructionPageItems.filter(
		(i) => i.category === "rc_install"
	)

	return (
		<section className="w-full flex justify-center px-[28px] xl:px-[60px] py-[30px] lg:py-[48px]">
			<div className="mx-auto w-full max-w-[1024px] min-w-0 flex flex-col gap-9 lg:gap-12 xl:gap-14">
				<Tabs
					variant="underlined"
					color="default"
					radius="lg"
					className="w-full"
					classNames={{
						base: "w-full min-w-0",
						tabList: [
							"w-full min-w-0",
							"p-0",
							"flex flex-col items-start gap-1 md:gap-1.5",
							"lg:flex-row lg:items-center lg:flex-nowrap lg:justify-center",
							"lg:gap-4 xl:gap-8 2xl:gap-12",
						].join(" "),
						tab: [
							"w-auto min-w-fit px-0 sm:px-1 shrink-0",
							"data-[hover=true]:bg-transparent",
							"data-[pressed=true]:bg-transparent",
						].join(" "),
						panel: "w-full min-w-0 p-0",
						cursor: "hidden",
						tabContent: [
							"text-base lg:text-sm",
							"text-[var(--text-gray-color)]",
						].join(" "),
					}}
				>
					<Tab key="monolithic" title="// Монолитные работы">
						<PortfolioGrid items={monolithic} />
					</Tab>

					<Tab key="steel_install" title="// Монтаж металлоконструкций">
						<PortfolioGrid items={steelInstall} />
					</Tab>

					<Tab key="rc_install" title="// Монтаж железобетонных конструкций">
						<PortfolioGrid items={rcInstall} />
					</Tab>
				</Tabs>
			</div>
		</section>
	)
}
