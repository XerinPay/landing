"use client"

import { Section, SectionHeader } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const locations = [
  { label: "Tanzania", x: 52, y: 55 },
  { label: "Kenya", x: 56, y: 42 },
  { label: "Ghana", x: 22, y: 52 },
  { label: "Europe", x: 50, y: 20 },
]

const connections: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [1, 3], [2, 3],
]

export function GlobalPayments() {
  return (
    <Section className="bg-muted/30">
      <SectionHeader
        badge="Global Payments"
        title="Built for local payments."
        description="Accept payments across markets and currencies while keeping your payment operations in one place."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
        <RevealOnScroll>
          <div className="flex flex-col gap-4">
            <p className="text-lg text-muted-foreground text-pretty">
              Ready for global commerce.
            </p>
            <p className="text-base text-muted-foreground text-pretty">
              Start with local payment methods and expand to new markets
              without rebuilding your infrastructure. One integration,
              multiple currencies, unified reporting.
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                "Multi-currency support",
                "Local payment methods",
                "Unified reconciliation",
                "Single API integration",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                  <div className="size-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full border border-border bg-card" />
            <svg className="absolute inset-0 size-full" viewBox="0 0 100 100">
              {connections.map(([from, to], i) => {
                const fromLoc = locations[from]
                const toLoc = locations[to]
                if (!fromLoc || !toLoc) return null
                return (
                  <line
                    key={i}
                    x1={fromLoc.x}
                    y1={fromLoc.y}
                    x2={toLoc.x}
                    y2={toLoc.y}
                    stroke="var(--primary)"
                    strokeWidth={0.4}
                    strokeOpacity={0.4}
                    strokeDasharray="2 2"
                    style={{ animation: `fade-in 1s ease-out ${i * 0.2}s both` }}
                  />
                )
              })}
            </svg>
            {locations.map((loc, i) => (
              <div
                key={loc.label}
                className="absolute flex flex-col items-center gap-1"
                style={{
                  left: `${loc.x}%`,
                  top: `${loc.y}%`,
                  transform: "translate(-50%, -50%)",
                  animation: `fade-in 0.4s ease-out ${0.5 + i * 0.15}s both`,
                }}
              >
                <div className="size-3 rounded-full bg-primary shadow-sm" style={{ animation: "pulse-dot 3s ease-in-out infinite" }} />
                <span className="text-xs font-medium text-foreground">{loc.label}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  )
}
