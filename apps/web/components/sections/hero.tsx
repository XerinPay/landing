"use client"

import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, Book02Icon } from "@hugeicons/core-free-icons"
import { TextRotator } from "@/components/text-rotator"
import { NetworkBackground } from "@/components/network-background"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent" />
        <NetworkBackground />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-8 animate-[fade-in_0.8s_ease-out]">
          <div className="flex flex-col items-center gap-6">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary animate-[fade-in_0.6s_ease-out]">
              Payment Infrastructure for Modern Business
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl animate-[fade-in_0.8s_ease-out_0.1s_both]">
              Move money. Build payments.
              <br className="hidden sm:block" />
              <TextRotator />.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground text-pretty animate-[fade-in_0.8s_ease-out_0.2s_both]">
              A powerful payment infrastructure built to help businesses accept,
              manage and move money through one secure platform.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row animate-[fade-in_0.8s_ease-out_0.3s_both]">
            <Link href="/signup">
              <Button
                size="lg"
                className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Get Started
                <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
              </Button>
            </Link>
            <Link href="#developers">
              <Button
                size="lg"
                variant="outline"
                className="transition-all duration-300 hover:scale-[1.02]"
              >
                <HugeiconsIcon icon={Book02Icon} data-icon="inline-start" />
                Explore Documentation
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground animate-[fade-in_0.8s_ease-out_0.4s_both]">
            Trusted payment infrastructure for businesses across Africa and beyond.
          </p>
        </div>
      </div>
    </section>
  )
}
