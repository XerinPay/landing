"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { SmartPhone01Icon, CreditCardIcon, BankIcon, CreditCardPosIcon } from "@hugeicons/core-free-icons"
import { Section, SectionHeader } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { FlowLine } from "@/components/flow-line"

const methods = [
  { number: "01", label: "Mobile Money", description: "Accept payments via mobile money across providers.", icon: SmartPhone01Icon },
  { number: "02", label: "Cards", description: "Process Visa, Mastercard and local card payments.", icon: CreditCardIcon },
  { number: "03", label: "Bank Transfer", description: "Receive direct bank transfers with reconciliation.", icon: BankIcon },
  { number: "04", label: "POS", description: "Accept in-person payments through POS terminals.", icon: CreditCardPosIcon },
]

const flow = ["Customer", "Payment", "Payment Engine", "Provider", "Business"]

export function PaymentMethods() {
  return (
    <Section>
      <SectionHeader
        badge="Payment Methods"
        title="Accept payments your customers already use."
        description="Connect multiple payment methods through one unified payment infrastructure."
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {methods.map((method, idx) => (
          <RevealOnScroll key={method.number} delay={idx * 60} className="h-full">
            <div className="group flex h-full flex-col gap-4 bg-background p-8 transition-all duration-300 hover:bg-muted/30 hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                  <HugeiconsIcon icon={method.icon} className="size-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground/50">{method.number}</span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">{method.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{method.description}</p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={200}>
        <div className="mt-16 flex flex-col items-center gap-0 rounded-xl border border-border bg-muted/30 p-8">
          {flow.map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-0">
              <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2">
                <div className={`size-2 rounded-full ${i === 2 ? "bg-primary" : "bg-muted-foreground/40"}`} style={i === 2 ? { animation: "pulse-dot 2s ease-in-out infinite" } : undefined} />
                <span className="text-sm font-medium text-foreground">{step}</span>
              </div>
              {i < flow.length - 1 && <FlowLine delay={i * 200} />}
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </Section>
  )
}
