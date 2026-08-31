"use client"

import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { NetworkBackground } from "@/components/network-background"

export function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent" />
        <NetworkBackground />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Get Started
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              Start moving money today.
            </h2>
            <p className="mt-4 text-base text-muted-foreground text-pretty md:text-lg">
              Join businesses using Payment Engine to accept, manage and move money through one secure platform.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/signup">
              <Button size="lg" className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                Get Started
                <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="transition-all duration-300 hover:scale-[1.02]">
                Talk to our team
              </Button>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
