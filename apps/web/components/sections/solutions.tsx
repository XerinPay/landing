"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { ShoppingBag01Icon, Hotel01Icon, GraduationCapIcon, Hospital01Icon, Store01Icon, Invoice02Icon } from "@hugeicons/core-free-icons"
import { Section, SectionHeader } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const solutions = [
  { number: "01", title: "E-commerce", description: "Accept online payments and automate orders.", icon: ShoppingBag01Icon },
  { number: "02", title: "Hospitality", description: "Handle bookings, payments and receipts.", icon: Hotel01Icon },
  { number: "03", title: "Education", description: "Collect fees and manage payment references.", icon: GraduationCapIcon },
  { number: "04", title: "Healthcare", description: "Manage patient payments and billing.", icon: Hospital01Icon },
  { number: "05", title: "Retail", description: "Accept payments across stores and POS.", icon: Store01Icon },
  { number: "06", title: "Services", description: "Create invoices, links and recurring collections.", icon: Invoice02Icon },
]

export function Solutions() {
  return (
    <Section id="solutions">
      <SectionHeader
        badge="Business Solutions"
        title="One payment engine."
        description="Many ways to use it."
      />
      <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution, idx) => (
          <RevealOnScroll key={solution.number} delay={idx * 60} className="h-full">
            <div className="group flex h-full items-start gap-4 bg-background p-8 transition-all duration-300 hover:bg-muted/30 hover:-translate-y-0.5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                <HugeiconsIcon icon={solution.icon} className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">{solution.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{solution.description}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  )
}
