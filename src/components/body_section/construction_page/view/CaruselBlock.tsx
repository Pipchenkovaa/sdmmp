"use client"

import { SliderData } from "../model/data"
import Carusel from "../../home_page/view/Carusel"

export default function CaruselBlock() {
	return (
		<div className="relative px-[28px] xl:px-[60px] grid py-[52px] md:py-[64px] lg:py-[90px] lg:pb-[78px] xl:pb-[110px]">
			<p className="col-start-1 row-start-1 z-0 uppercase text-[42px] sm:text-[50px] md:text-[72px] lg:text-[92px] xl:text-[110px] 2xl:text-[128px] font-bold text-[var(--text-dark-color)] pointer-events-none select-none">
				Виды работ
			</p>

			<div className="col-start-1 row-start-1 z-10 flex flex-col translate-y-[44px] sm:translate-y-[32px] md:translate-y-[42px] lg:translate-y-[64px] xl:translate-y-[78px] 2xl:translate-y-[94px]">
				<div>
					<Carusel slides={SliderData} />
				</div>
			</div>
		</div>
	)
}
