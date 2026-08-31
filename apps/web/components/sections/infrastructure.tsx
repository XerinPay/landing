"use client"

import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, Wallet01Icon, Exchange01Icon, Link02Icon, Globe02Icon } from "@hugeicons/core-free-icons"
import { Button } from "@workspace/ui/components/button"
import { Section, SectionHeader } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const cards = [
  { number: "01", title: "Accept Payments", description: "Process payments across multiple payment methods.", icon: Exchange01Icon },
  { number: "02", title: "Manage Money", description: "Wallets, settlements, payouts and reconciliation.", icon: Wallet01Icon },
  { number: "03", title: "Automate Payments", description: "Payment links, invoices, control numbers and receipts.", icon: Link02Icon },
  { number: "04", title: "Connect Everywhere", description: "APIs, webhooks and developer tools.", icon: Globe02Icon },
]

export function Infrastructure() {
  return (
    <Section id="infrastructure">
      <SectionHeader
        badge="Payment Infrastructure"
        title="Everything you need to move money."
        description="One infrastructure layer for accepting, processing, managing and moving payments."
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, idx) => (
          <RevealOnScroll key={card.number} delay={idx * 60} className="h-full">
            <div className="group flex h-full flex-col gap-4 bg-background p-8 transition-all duration-300 hover:bg-muted/30 hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                  <HugeiconsIcon icon={card.icon} className="size-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground/50">{card.number}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={200}>
        <div className="mt-12 flex justify-center">
          <Link href="#solutions">
            <Button size="lg" variant="outline" className="transition-all duration-300 hover:scale-[1.02]">
              Learn More
              <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
            </Button>
          </Link>
        </div>
      </RevealOnScroll>
    </Section>
  )
}
