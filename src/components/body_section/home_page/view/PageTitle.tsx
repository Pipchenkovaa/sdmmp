"use client"

export default function PageTitle() {
	return (
		<div className="relative z-10 flex flex-col items-center gap-2.5 lg:gap-3 xl:gap-4 py-[120px]">
			<h1 className="uppercase text-xl sm:text-2xl lg:text-[32px] xl:text-[40px] 2xl:text-5xl font-semibold inline-block w-fit bg-gradient-to-r from-[#8a8a8a] to-[#D6D6D6] bg-clip-text text-transparent">
				Надежность строится здесь.
			</h1>

			<p className="mt-4 max-w-[300px] sm:max-w-[360px] lg:max-w-[420px] xl:max-w-[480px] 3xl:max-w-[520px] mx-auto text-[var(--text-gray-color)] text-[10px] sm:text-xs lg:text-sm xl:text-base 3xl:text-lg leading-4.5 lg:leading-5 xl:leading-6">
				От проектных решений к детализации и изготовлению — полный цикл
				производства.
			</p>
		</div>
	)
}
