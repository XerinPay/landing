"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { ShoppingBag01Icon, Hotel01Icon, Restaurant01Icon, School01Icon, Building01Icon, Store01Icon } from "@hugeicons/core-free-icons"
import { Section, SectionHeader } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const modules = [
  { title: "E-commerce Platform", description: "Online store with built-in payments.", icon: ShoppingBag01Icon },
  { title: "Hotel Management", description: "Bookings, payments and guest management.", icon: Hotel01Icon },
  { title: "Restaurant POS", description: "Orders, payments and kitchen management.", icon: Restaurant01Icon },
  { title: "School Management", description: "Fees, attendance and student records.", icon: School01Icon },
  { title: "Property Management", description: "Rent collection and tenant management.", icon: Building01Icon },
  { title: "Retail Inventory", description: "Stock, sales and payment integration.", icon: Store01Icon },
]

export function ComingSoon() {
  return (
    <Section className="bg-muted/30">
      <SectionHeader
        badge="Coming Soon"
        title="More than just payments."
        description="Business modules built on top of the payment infrastructure, coming soon."
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, idx) => (
          <RevealOnScroll key={module.title} delay={idx * 60} className="h-full">
            <div className="group relative flex h-full flex-col gap-4 bg-background p-8 transition-all duration-300 hover:bg-muted/30 hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                  <HugeiconsIcon icon={module.icon} className="size-5 text-primary" />
                </div>
                <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">Coming Soon</span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">{module.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{module.description}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  )
}
