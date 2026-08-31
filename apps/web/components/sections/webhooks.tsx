"use client"

import { Section, SectionHeader } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { FlowLine } from "@/components/flow-line"

const targets = ["Your Server", "Email", "SMS", "WhatsApp"]
const events = ["payment.created", "payment.completed", "payment.failed", "settlement.processed", "refund.processed"]

export function Webhooks() {
  return (
    <Section>
      <SectionHeader
        badge="Webhooks"
        title="Real-time notifications for every payment event."
        description="Get notified instantly when payments are created, completed or fail. Build automated workflows with reliable webhooks."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
        <RevealOnScroll>
          <div className="flex flex-col items-center gap-0 rounded-xl border border-border bg-muted/30 p-8">
            <div
              className="flex items-center gap-2 rounded-lg border border-primary bg-primary/10 px-4 py-2"
              style={{ animation: "fade-in 0.4s ease-out" }}
            >
              <div className="size-2 rounded-full bg-primary" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
              <span className="text-sm font-medium text-primary">Payment Event</span>
            </div>
            <FlowLine delay={0} />
            <div className="flex flex-col gap-0">
              {targets.map((target, i) => (
                <div key={target} className="flex flex-col gap-0">
                  <div
                    className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2"
                    style={{ animation: `fade-in 0.4s ease-out ${0.2 + i * 0.15}s both` }}
                  >
                    <span className="text-sm font-medium text-foreground">{target}</span>
                  </div>
                  {i < targets.length - 1 && <FlowLine delay={i * 200} />}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-muted-foreground">Available Events</p>
            <div className="flex flex-col gap-2">
              {events.map((event, i) => (
                <div
                  key={event}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
                  style={{ animation: `fade-in 0.3s ease-out ${i * 0.08}s both` }}
                >
                  <div className="size-1.5 rounded-full bg-primary" />
                  <code className="text-sm font-mono text-foreground">{event}</code>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  )
}
