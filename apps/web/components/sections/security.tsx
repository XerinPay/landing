"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { LockKeyIcon, UserShield01Icon, Key01Icon, ShieldKeyIcon, ServerIcon, FileCheckIcon } from "@hugeicons/core-free-icons"
import { Section, SectionHeader } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const features = [
  { number: "01", title: "Encrypted", description: "All data encrypted in transit and at rest.", icon: LockKeyIcon },
  { number: "02", title: "Role-Based Access", description: "Granular permissions for every team member.", icon: UserShield01Icon },
  { number: "03", title: "API Keys", description: "Secure API authentication with scoped keys.", icon: Key01Icon },
  { number: "04", title: "Fraud Protection", description: "Real-time fraud detection and prevention.", icon: ShieldKeyIcon },
  { number: "05", title: "Reliable", description: "99.9% uptime with redundant infrastructure.", icon: ServerIcon },
  { number: "06", title: "Audit Trails", description: "Complete logs for every action and transaction.", icon: FileCheckIcon },
]

export function Security() {
  return (
    <Section dark className="bg-background">
      <SectionHeader
        badge="Security"
        title="Security built into every transaction."
        description="Enterprise-grade security to protect your payments, data and customers."
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <RevealOnScroll key={feature.number} delay={idx * 60} className="h-full">
            <div className="group flex h-full items-start gap-4 bg-background p-8 transition-all duration-300 hover:bg-muted/30 hover:-translate-y-0.5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                <HugeiconsIcon icon={feature.icon} className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  )
}
