"use client"

import { Section, SectionHeader } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { FlowLine } from "@/components/flow-line"

const balances = [
  { label: "Available", value: "TZS 12.4M", color: "text-green-600" },
  { label: "Pending", value: "TZS 3.2M", color: "text-yellow-600" },
  { label: "Settlements", value: "TZS 8.7M", color: "text-blue-600" },
]

const flow = ["Payment", "Wallet", "Settlement", "Bank"]

export function Wallet() {
  return (
    <Section>
      <SectionHeader
        badge="Wallet"
        title="Your money, always in view."
        description="Track balances, settlements and payouts in real time with a unified wallet system."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
        <RevealOnScroll>
          <div className="grid gap-4">
            {balances.map((balance, i) => (
              <div
                key={balance.label}
                className="flex items-center justify-between rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{ animation: `fade-in 0.4s ease-out ${i * 0.1}s both` }}
              >
                <div>
                  <p className="text-sm text-muted-foreground">{balance.label}</p>
                  <p className={`text-2xl font-bold ${balance.color}`}>{balance.value}</p>
                </div>
                <div className={`size-3 rounded-full ${i === 0 ? "bg-green-500" : i === 1 ? "bg-yellow-500" : "bg-blue-500"}`} style={{ animation: "pulse-dot 3s ease-in-out infinite" }} />
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <div className="flex flex-col items-center gap-0 rounded-xl border border-border bg-muted/30 p-8">
            {flow.map((step, i) => (
              <div key={step} className="flex flex-col items-center gap-0">
                <div
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2"
                  style={{ animation: `fade-in 0.4s ease-out ${i * 0.15}s both` }}
                >
                  <div className={`size-2 rounded-full ${i === 1 ? "bg-primary" : "bg-muted-foreground/40"}`} style={i === 1 ? { animation: "pulse-dot 2s ease-in-out infinite" } : undefined} />
                  <span className="text-sm font-medium text-foreground">{step}</span>
                </div>
                {i < flow.length - 1 && <FlowLine delay={i * 200} />}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  )
}
