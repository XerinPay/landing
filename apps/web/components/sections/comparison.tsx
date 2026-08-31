"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { Tick02Icon, Cancel01Icon } from "@hugeicons/core-free-icons"
import { Section, SectionHeader } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const comparisons = [
  { traditional: "Multiple providers", engine: "One integration" },
  { traditional: "Multiple dashboards", engine: "One platform" },
  { traditional: "Manual reconciliation", engine: "Automated workflows" },
  { traditional: "Separate receipts", engine: "Unified receipts" },
  { traditional: "Separate payment links", engine: "One system" },
  { traditional: "Multiple credentials", engine: "Centralized access" },
]

export function Comparison() {
  return (
    <Section>
      <SectionHeader
        badge="Why Us"
        title="One infrastructure. Less complexity."
        description="Stop juggling multiple providers and dashboards. Payment Engine brings everything together."
      />

      <RevealOnScroll delay={100}>
        <div className="mt-16 overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-2 border-b border-border bg-muted/50">
            <div className="p-4 text-sm font-semibold text-muted-foreground">Traditional Setup</div>
            <div className="border-l border-border p-4 text-sm font-semibold text-primary">Payment Engine</div>
          </div>
          {comparisons.map((row, i) => (
            <div
              key={row.traditional}
              className={`grid grid-cols-2 ${i !== comparisons.length - 1 ? "border-b border-border" : ""}`}
              style={{ animation: `fade-in 0.3s ease-out ${i * 0.08}s both` }}
            >
              <div className="flex items-center gap-3 p-4 text-sm text-muted-foreground">
                <HugeiconsIcon icon={Cancel01Icon} className="size-4 text-red-500/70" />
                {row.traditional}
              </div>
              <div className="flex items-center gap-3 border-l border-border bg-primary/5 p-4 text-sm font-medium text-foreground">
                <HugeiconsIcon icon={Tick02Icon} className="size-4 text-green-500" />
                {row.engine}
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </Section>
  )
}
