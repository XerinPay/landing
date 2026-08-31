"use client"

import { Section, SectionHeader } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { FlowLine } from "@/components/flow-line"

const statuses = ["Pending", "Payment Received", "Verified", "Completed"]

export function ControlNumbers() {
  return (
    <Section className="bg-muted/30">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <RevealOnScroll>
          <SectionHeader
            badge="Control Numbers"
            title="Payment collection, without the complexity."
            description="Generate payment references that make collection easier to track, reconcile and manage."
            align="left"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Payment Request</p>
              <div className="mt-4 flex flex-col gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Control Number</p>
                  <p className="text-2xl font-bold tracking-wider text-foreground">991234567890</p>
                </div>
                <div className="flex justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Amount</p>
                    <p className="text-lg font-semibold text-foreground">TZS 500,000</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Status</p>
                    <p className="text-lg font-semibold text-yellow-600">Pending</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-0">
              {statuses.map((status, i) => (
                <div key={status} className="flex flex-col gap-0">
                  <div
                    className="flex items-center gap-3"
                    style={{ animation: `fade-in 0.4s ease-out ${i * 0.15}s both` }}
                  >
                    <div className={`flex size-6 items-center justify-center rounded-full ${i === 0 ? "bg-yellow-500/20" : i === 1 ? "bg-blue-500/20" : i === 2 ? "bg-purple-500/20" : "bg-green-500/20"}`}>
                      <div className={`size-2 rounded-full ${i === 0 ? "bg-yellow-500" : i === 1 ? "bg-blue-500" : i === 2 ? "bg-purple-500" : "bg-green-500"}`} />
                    </div>
                    <span className="text-sm font-medium text-foreground">{status}</span>
                  </div>
                  {i < statuses.length - 1 && <FlowLine delay={i * 200} />}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  )
}
