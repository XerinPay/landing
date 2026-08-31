"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { Mail01Icon, SmsCodeIcon, WhatsappIcon } from "@hugeicons/core-free-icons"
import { Section, SectionHeader } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const channels = [
  { number: "01", label: "Email", description: "Send professional receipts via email.", icon: Mail01Icon },
  { number: "02", label: "SMS", description: "Notify customers with SMS receipts.", icon: SmsCodeIcon },
  { number: "03", label: "WhatsApp", description: "Send receipts through WhatsApp.", icon: WhatsappIcon },
]

export function ReceiptsNotifications() {
  return (
    <Section className="bg-muted/30">
      <SectionHeader
        badge="Receipts & Notifications"
        title="Keep customers informed, automatically."
        description="Send payment receipts and notifications through multiple channels with a single API call."
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
        {channels.map((channel, idx) => (
          <RevealOnScroll key={channel.number} delay={idx * 60} className="h-full">
            <div className="group flex h-full flex-col gap-4 bg-background p-8 transition-all duration-300 hover:bg-muted/30 hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                  <HugeiconsIcon icon={channel.icon} className="size-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground/50">{channel.number}</span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">{channel.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{channel.description}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={200}>
        <div className="mt-12 mx-auto max-w-md rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Receipt</p>
            <div className="rounded-md bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">Paid</div>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Reference</span>
              <span className="font-mono text-foreground">991234567890</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Amount</span>
              <span className="font-semibold text-foreground">TZS 50,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Date</span>
              <span className="text-foreground">Jan 15, 2024</span>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </Section>
  )
}
