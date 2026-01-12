"use client"

import Carusel from "./Carusel"
import { MainSliderData } from "../modal/data"

export default function MainCaruselBlock() {
	return (
		<div className="relative px-[28px] xl:px-[60px] grid py-[52px] md:py-[64px] lg:py-[90px] lg:pb-[78px] xl:pb-[110px]">
			<p className="col-start-1 row-start-1 z-0 uppercase text-[42px] sm:text-[50px] md:text-[72px] lg:text-[92px] xl:text-[110px] 2xl:text-[128px] leading-[56px] sm:leading-[62px] md:leading-[80px] lg:leading-[99px] xl:leading-[120px] 2xl:leading-[135px] font-bold text-[var(--text-dark-color)] pointer-events-none select-none">
				Типы <br /> конструкций
			</p>

			<div className="col-start-1 row-start-1 z-10 flex flex-col gap-2 lg:gap-5 xl:gap-8 translate-y-[44px] sm:translate-y-[47px] md:translate-y-[62px] lg:translate-y-[80px] xl:translate-y-[98px] 2xl:translate-y-[108px]">
				<p className="uppercase no-select text-[var(--main-text-color)] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] mb-[16px] pointer-events-none select-none">
					От детализации к реализации.
				</p>

				<div>
					<Carusel slides={MainSliderData} />
				</div>
			</div>
		</div>
	)
}
