// "use client"

// import { MainDescription } from "../modal/data"

// export default function DescriptionBlock() {
// 	return (
// 		<section className="px-[28px] py-[40px] xl:px-[60px]">
// 			<div className="space-y-6 px-[10px] text-[var(--main-text-color)] text-[10px] lg:text-xs 2xl:text-base 3xl:text-[18px] leading-4.5 lg:leading-5 xl:leading-5.5 3xl:leading-7">
// 				<p>{MainDescription.firstBlock}</p>
// 				<p>{MainDescription.secondBlock}</p>

// 				<div>
// 					<p className="pt-3 font-bold">При производстве используем:</p>
// 					<ul className="pl-6 space-y-2 [list-style-type:'+'] ">
// 						{MainDescription.bullets.map((b, i) => (
// 							<li key={i} className="pl-2">{b}</li>
// 						))}
// 					</ul>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }

"use client"

import type { MainDescriptionItem } from "../modal/data" // или откуда у тебя тип
import { cn } from "@/lib/utils"

type Props = {
	item: MainDescriptionItem
	bulletsTitle?: string
	className?: string
}

export default function DescriptionBlock({
	item,
}: {
	item: MainDescriptionItem
}) {
	return (
		<section className="px-[28px] py-[40px] xl:px-[60px]">
			<div className="space-y-6 px-[10px] text-[var(--main-text-color)]">
				<p>{item.firstBlock}</p>

				{item.secondBlock && <p className="pb-4">{item.secondBlock}</p>}

				{item.bulletsTitle && (
					<p className="pt-3 font-bold">{item.bulletsTitle}</p>
				)}

				<ul className="pl-6 space-y-2 [list-style-type:'+']">
					{item.bullets.map((b, i) => (
						<li key={i} className="pl-2">
							{b}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
