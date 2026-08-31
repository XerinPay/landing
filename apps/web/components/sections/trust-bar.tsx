"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { SmartPhone01Icon, CreditCardIcon, BankIcon, CreditCardPosIcon, Link02Icon, Invoice02Icon } from "@hugeicons/core-free-icons"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const methods = [
  { label: "Mobile Money", icon: SmartPhone01Icon },
  { label: "Cards", icon: CreditCardIcon },
  { label: "Bank Transfers", icon: BankIcon },
  { label: "POS", icon: CreditCardPosIcon },
  { label: "Payment Links", icon: Link02Icon },
  { label: "Invoices", icon: Invoice02Icon },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-muted/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Built for Modern Payments
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {methods.map((method) => (
              <div
                key={method.label}
                className="flex items-center gap-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                <HugeiconsIcon icon={method.icon} className="size-5" />
                <span className="text-sm font-medium">{method.label}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
