"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { Logo } from "@/components/logo/Logo"

type NavLink = { href: string; label: string }

const LINKS: NavLink[] = [
	{ href: "/", label: "+ Изготовление металлоконструкций" },
	{ href: "/construction", label: "+ Строительные работы" },
	// { href: "/about", label: "+ О компании" },
	{ href: "#contacts", label: "// Контакты" },
]

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()

	const close = useCallback(() => setIsOpen(false), [])
	const toggle = useCallback(() => setIsOpen((v) => !v), [])

	useEffect(() => {
		document.body.classList.toggle("navbar_is_open", isOpen)
		return () => document.body.classList.remove("navbar_is_open")
	}, [isOpen])

	useEffect(() => {
		close()
	}, [pathname, close])

	useEffect(() => {
		if (!isOpen) return
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && close()
		window.addEventListener("keydown", onKey)
		return () => window.removeEventListener("keydown", onKey)
	}, [isOpen, close])

	const isActive = (href: string) => !href.startsWith("#") && pathname === href

	const handleNavClick = useCallback(() => close(), [close])

	return (
		<>
			<div className="wrapper sticky top-0 z-100 w-full px-[28px] pt-[8px] pb-[8px] lg:pt-[12px] lg:pb-[10px] xl:px-[60px] 2xl:pt-[20px] 2xl:pb-[16px] bg-[var(--background)]/5 backdrop-blur-lg">
				<header className="w-full h-[var(--header-height)] mx-auto flex items-center content-center justify-between">
					<div className="logo-section flex items-center">
						<Logo />
					</div>

					{/* desktop */}
					<nav className="hidden lg:flex lg:gap-6 xl:gap-7 2xl:gap-9">
						{LINKS.map((l) =>
							isActive(l.href) ? (
								<span
									key={l.href}
									aria-current="page"
									className="text-[10px] xl:text-xs 2xl:text-sm text-[var(--main-text-color)] cursor-default pointer-events-none select-none"
								>
									{l.label}
								</span>
							) : (
								<Link
									key={l.href}
									href={l.href}
									prefetch={false}
									className="text-[10px] xl:text-xs 2xl:text-sm text-[var(--text-gray-color)] hover-text hover:text-[var(--hover-text)]"
								>
									{l.label}
								</Link>
							)
						)}
					</nav>

					{/* burger */}
					<div className="burger-wrapper lg:hidden w-[24px] h-[24px] content-center">
						<button
							aria-expanded={isOpen}
							aria-controls="mobile-nav"
							onClick={toggle}
							className={`burger relative w-6 h-6 ${isOpen ? "active" : ""}`}
						>
							<span />
						</button>
					</div>
				</header>
			</div>

			{/* mobile */}
			<div
				id="mobile-nav"
				className={`lg:hidden fixed z-99 bg-[var(--background)]/5 inset-x-0 top-[67px] transition-all duration-200 ${
					isOpen
						? "opacity-100 translate-y-0 pointer-events-auto"
						: "opacity-0 -translate-y-2 pointer-events-none"
				}`}
			>
				<nav className="mx-auto bg-[var(--background)]/5 backdrop-blur-lg p-8 shadow-lg">
					<ul className="flex flex-col items-end gap-3">
						{LINKS.map((l) =>
							isActive(l.href) ? (
								<li key={l.href}>
									<span
										aria-current="page"
										className="block py-1 text-base text-[var(--main-text-color)] cursor-default pointer-events-none select-none"
									>
										{l.label}
									</span>
								</li>
							) : (
								<li key={l.href}>
									<Link
										href={l.href}
										onClick={handleNavClick}
										prefetch={false}
										className="block py-1 text-[15px] text-[var(--text-gray-color)] hover:text-[var(--main-text-color)] transition-opacity"
									>
										{l.label}
									</Link>
								</li>
							)
						)}
					</ul>
				</nav>
			</div>
		</>
	)
}
