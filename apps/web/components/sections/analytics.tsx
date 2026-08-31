"use client"

import { Button } from "@workspace/ui/components/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { Section, SectionHeader } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const metrics = [
  { label: "Transaction Volume", value: "TZS 1.2B" },
  { label: "Revenue", value: "TZS 845M" },
  { label: "Success Rate", value: "99.2%" },
  { label: "Payment Methods", value: "6" },
]

export function Analytics() {
  return (
    <Section id="analytics" className="bg-muted/30">
      <SectionHeader
        badge="Analytics"
        title="Turn payment data into decisions."
        description="Understand your payment performance with real-time analytics and reporting."
      />

      <RevealOnScroll delay={100}>
        <div className="mt-16 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          {/* Browser bar */}
          <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="size-3 rounded-full bg-red-400/70" />
              <div className="size-3 rounded-full bg-yellow-400/70" />
              <div className="size-3 rounded-full bg-green-400/70" />
            </div>
            <span className="ml-2 text-xs text-muted-foreground">Analytics Dashboard</span>
          </div>

          <div className="p-6">
            {/* Metrics */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric, i) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-border p-4"
                  style={{ animation: `fade-in 0.4s ease-out ${i * 0.1}s both` }}
                >
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                  <p className="mt-1 text-xl font-bold text-foreground">{metric.value}</p>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="mt-6 h-40 rounded-lg border border-border bg-muted/20 p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Transaction Volume</span>
                <span className="text-xs text-muted-foreground">Last 30 days</span>
              </div>
              <svg className="size-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                <path
                  d="M0,70 C40,60 80,45 120,50 C160,55 200,30 240,25 C280,20 320,35 360,15 L400,10"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth={2}
                  style={{ animation: "fade-in 1.5s ease-out" }}
                />
                <path
                  d="M0,70 C40,60 80,45 120,50 C160,55 200,30 240,25 C280,20 320,35 360,15 L400,10 L400,100 L0,100 Z"
                  fill="var(--primary)"
                  fillOpacity={0.1}
                  style={{ animation: "fade-in 1s ease-out 0.5s both" }}
                />
              </svg>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={200}>
        <div className="mt-8 flex justify-center">
          <a href="/signup">
            <Button size="lg" className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              Explore Analytics
              <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
            </Button>
          </a>
        </div>
      </RevealOnScroll>
    </Section>
  )
}
