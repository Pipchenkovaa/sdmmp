"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, Send } from "lucide-react"

import { Logo } from "@/components/logo/Logo"
import { FooterProps } from "../model/type"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import ShinyText from "@/components/ui/ShinyText/ShinyText"

export default function Footer({ id }: FooterProps) {
	const [modal, setModal] = useState<null | "privacy" | "terms">(null)

	//if unmount
	useEffect(() => () => setModal(null), [])

	return (
		<footer
			id={id}
			role="contentinfo"
			className="scroll-mt-[var(--header-height)] px-[28px] xl:px-[60px] py-[40px] lg:py-[32px]"
		>
			<div className="top-section flex flex-col gap-[60px] xl:gap-[80px]">
				<div className="logo-section flex items-center">
					<Logo />
				</div>
				<div>
					<div className="text-section flex flex-col gap-5">
						<ShinyText
							text="Работайте с нами."
							disabled={false}
							speed={4}
							className="uppercase inline-block w-fit font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl pointer-events-none select-none"
						/>

						<div className="contacts-section flex flex-col gap-3 lg:flex-row lg:gap-[44px] xl:gap-[60px] 2xl:gap-[70px] text-[var(--main-text-color)] text-[15px] md:text-base xl:text-lg">
							<div className="flex items-center gap-1.5 xl:gap-2">
								<Phone className="size-[14px] lg:size-[16px] xl:size-[18px] 2xl:size-[20px]" />
								<div className="phones-wrapper flex gap-2.5 lg:gap-3 xl:gap-4">
									<a
										href="tel:+79671033311"
										className="hover-text hover:text-[var(--hover-text)]"
									>
										+7 (967) 103 33-11
									</a>
									<span className="text-[var(--text-gray-color)]">{"//"}</span>
									<a
										href="tel:+79160663516"
										className="hover-text hover:text-[var(--hover-text)]"
									>
										+7 (916) 066 35-16
									</a>
								</div>
							</div>

							<div className="flex items-center gap-2 xl:gap-3">
								<Mail className="size-[14px] lg:size-[16px] xl:size-[18px] 2xl:size-[20px]" />
								<a
									href="mailto:sdmmetallprom@mail.ru"
									className="email hover-text hover:text-[var(--hover-text)]"
								>
									sdmmetallprom@mail.ru
								</a>
							</div>

							<div className="flex items-center gap-1.5 xl:gap-2">
								<Send className="size-[14px] lg:size-[16px] xl:size-[18px] 2xl:size-[20px]" />
								<a
									href="https://t.me/sdmmp"
									target="_blank"
									rel="noopener noreferrer"
									className="telegram hover-text hover:text-[var(--hover-text)]"
								>
									@sdmmp
								</a>
							</div>
						</div>
					</div>

					<div className="h-[16rem] md:h-[18rem] lg:h-[24rem] xl:h-[26rem] 2xl:h-[32rem] flex items-center justify-center">
						<TextHoverEffect text="SDMMetallproM" />
					</div>

					<div className="privacy-policy flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-2 text-[10px] lg:text-xs">
						<div className="left-block">
							<p className="pointer-events-none select-none">
								© SDM, 2025. Все права защищены.
							</p>
						</div>

						<div className="right-block flex flex-row gap-4.5 lg:gap-8">
							<a
								href="#"
								className="hover-text hover:text-[var(--main-text-color)]"
							>
								Правовая информация
							</a>
							<a
								href="#"
								className="hover-text hover:text-[var(--main-text-color)]"
							>
								Политика конфиденциальности
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
