"use client"

import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { Section, SectionHeader } from "@/components/section"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export function Developers() {
  return (
    <Section id="developers" className="bg-muted/30">
      <SectionHeader
        badge="Developer Experience"
        title="Payments built for developers."
        description="Simple APIs. Powerful infrastructure. Build your payment experience without building the infrastructure from scratch."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <RevealOnScroll>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-400/70" />
                <div className="size-3 rounded-full bg-yellow-400/70" />
                <div className="size-3 rounded-full bg-green-400/70" />
              </div>
              <span className="ml-2 text-xs font-medium text-muted-foreground">request.js</span>
            </div>
            <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
              <code className="font-mono">
                <span className="text-purple-600">POST</span>{" "}
                <span className="text-foreground">/v1/payments</span>
                {"\n\n"}
                <span className="text-muted-foreground">{"{"}</span>
                {"\n  "}
                <span className="text-blue-600">"amount"</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-orange-600">100000</span>
                <span className="text-muted-foreground">,</span>
                {"\n  "}
                <span className="text-blue-600">"currency"</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-green-600">"TZS"</span>
                <span className="text-muted-foreground">,</span>
                {"\n  "}
                <span className="text-blue-600">"customer"</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-green-600">"cus_92821"</span>
                {"\n"}
                <span className="text-muted-foreground">{"}"}</span>
              </code>
            </pre>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-400/70" />
                <div className="size-3 rounded-full bg-yellow-400/70" />
                <div className="size-3 rounded-full bg-green-400/70" />
              </div>
              <span className="ml-2 text-xs font-medium text-green-600">201 Created</span>
            </div>
            <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
              <code className="font-mono">
                <span className="text-muted-foreground">{"{"}</span>
                {"\n  "}
                <span className="text-blue-600">"status"</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-green-600">"success"</span>
                <span className="text-muted-foreground">,</span>
                {"\n  "}
                <span className="text-blue-600">"reference"</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-green-600">"txn_92821"</span>
                {"\n"}
                <span className="text-muted-foreground">{"}"}</span>
              </code>
            </pre>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={200}>
        <div className="mt-8 flex justify-center">
          <Link href="/docs">
            <Button variant="outline" size="lg" className="transition-all duration-300 hover:scale-[1.02]">
              Read Documentation
              <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
            </Button>
          </Link>
        </div>
      </RevealOnScroll>
    </Section>
  )
}
