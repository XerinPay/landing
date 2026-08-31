"use client"

import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Link02Icon } from "@hugeicons/core-free-icons"
import { Section, SectionHeader } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { FlowLine } from "@/components/flow-line"

const steps = ["Create", "Share", "Customer Opens", "Pays", "Receipt"]

export function PaymentLinks() {
  return (
    <Section>
      <SectionHeader
        badge="Payment Links"
        title="Get paid with a link."
        description="Create a payment link, share it with your customer, and get paid. No website needed."
      />

      <RevealOnScroll delay={100}>
        <div className="mt-16 flex flex-col items-center gap-0 rounded-xl border border-border bg-muted/30 p-8">
          {steps.map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-0">
              <div
                className="flex flex-col items-center gap-2"
                style={{ animation: `fade-in 0.4s ease-out ${i * 0.15}s both` }}
              >
                <div className={`flex size-12 items-center justify-center rounded-xl border ${i === 0 ? "border-primary bg-primary/10" : "border-border bg-card"}`}>
                  <HugeiconsIcon icon={Link02Icon} className={`size-5 ${i === 0 ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <span className="text-sm font-medium text-foreground">{step}</span>
              </div>
              {i < steps.length - 1 && <FlowLine delay={i * 200} />}
            </div>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={200}>
        <div className="mt-12 flex justify-center">
          <Link href="/signup">
            <Button size="lg" className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <HugeiconsIcon icon={Link02Icon} data-icon="inline-start" />
              Create Payment Link
            </Button>
          </Link>
        </div>
      </RevealOnScroll>
    </Section>
  )
}
