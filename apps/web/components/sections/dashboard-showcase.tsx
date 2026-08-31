"use client"

import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { Section } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export function DashboardShowcase() {
  return (
    <Section className="bg-muted/30">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <RevealOnScroll>
          <div className="flex flex-col gap-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Payment Operations
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              See every payment.
              <br />
              Control every transaction.
              <br />
              Understand your money.
            </h2>
            <p className="max-w-lg text-base text-muted-foreground text-pretty md:text-lg">
              A unified dashboard to monitor transactions, track settlements,
              and manage your payment operations in real time.
            </p>
            <div>
              <Link href="/signup">
                <Button size="lg" className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                  Explore Payments
                  <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
                </Button>
              </Link>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <DashboardMockup />
        </RevealOnScroll>
      </div>
    </Section>
  )
}

function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
      <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="size-3 rounded-full bg-red-400/70" />
          <div className="size-3 rounded-full bg-yellow-400/70" />
          <div className="size-3 rounded-full bg-green-400/70" />
        </div>
        <div className="mx-auto flex items-center gap-2 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-green-500" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
          app.paymentengine.com/dashboard
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Payment Overview</p>
            <p className="text-2xl font-bold text-foreground">TZS 284.6M</p>
          </div>
          <div className="flex gap-2">
            <div className="rounded-lg bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">7D</div>
            <div className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary">30D</div>
          </div>
        </div>

        <div className="mb-6 h-32 rounded-lg border border-border bg-muted/20 p-4">
          <svg className="size-full" viewBox="0 0 300 100" preserveAspectRatio="none">
            <path
              d="M0,80 C30,70 60,50 90,55 C120,60 150,30 180,25 C210,20 240,35 270,15 L300,10"
              fill="none"
              stroke="var(--primary)"
              strokeWidth={2}
              style={{ animation: "fade-in 1.5s ease-out" }}
            />
            <path
              d="M0,80 C30,70 60,50 90,55 C120,60 150,30 180,25 C210,20 240,35 270,15 L300,10 L300,100 L0,100 Z"
              fill="var(--primary)"
              fillOpacity={0.1}
              style={{ animation: "fade-in 1s ease-out 0.5s both" }}
            />
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Successful", value: "1,847", color: "text-green-600" },
            { label: "Pending", value: "23", color: "text-yellow-600" },
            { label: "Failed", value: "8", color: "text-red-600" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-border p-3">
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className={`text-lg font-semibold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
