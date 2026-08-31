"use client"

import { Section, SectionHeader } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { FlowLine } from "@/components/flow-line"

const statuses = ["Created", "Sent", "Opened", "Paid"]

export function Invoicing() {
  return (
    <Section className="bg-muted/30">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <RevealOnScroll>
          <SectionHeader
            badge="Invoicing"
            title="Professional invoices, paid faster."
            description="Create, send and track invoices with automated reminders and real-time status updates."
            align="left"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-xs text-muted-foreground">Invoice</p>
                  <p className="text-lg font-semibold text-foreground">INV-2024-0042</p>
                </div>
                <div className="rounded-md bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">
                  Paid
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">TZS 400,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (18%)</span>
                  <span className="text-foreground">TZS 72,000</span>
                </div>
                <div className="flex justify-between border-t border-border pt-3 text-base font-semibold">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">TZS 472,000</span>
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
                    <div className={`flex size-6 items-center justify-center rounded-full ${i === 3 ? "bg-green-500/20" : "bg-muted"}`}>
                      <div className={`size-2 rounded-full ${i === 3 ? "bg-green-500" : "bg-muted-foreground/40"}`} />
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
