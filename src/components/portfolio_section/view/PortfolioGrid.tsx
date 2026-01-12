"use client"

import type { PortfolioItem } from "../modal/home/type"
import { PortfolioCard } from "./PortfolioCard"

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="w-full min-w-0">
      <div className="columns-1 lg:columns-2 gap-6 lg:gap-8 xl:gap-12 [column-fill:balance]">
        {items.map((item) => (
          <div key={item.id} className="pb-6 lg:pb-8 xl:pb-12 break-inside-avoid">
            <PortfolioCard item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}