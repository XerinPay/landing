"use client"

import { cn } from "@workspace/ui/lib/utils"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export function Section({ children, className, id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 lg:py-28",
        dark && "bg-background",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  align?: "center" | "left"
}

export function SectionHeader({ badge, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <RevealOnScroll>
      <div className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}>
        {badge && (
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {badge}
          </span>
        )}
        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base text-muted-foreground text-pretty md:text-lg">
            {description}
          </p>
        )}
      </div>
    </RevealOnScroll>
  )
}
