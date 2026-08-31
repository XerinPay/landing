"use client"

import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Payment Methods", href: "#payment-methods" },
      { label: "Dashboard", href: "#dashboard" },
      { label: "Wallet", href: "#wallet" },
      { label: "Analytics", href: "#analytics" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "E-commerce", href: "#solutions" },
      { label: "Hospitality", href: "#solutions" },
      { label: "Education", href: "#solutions" },
      { label: "Healthcare", href: "#solutions" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "#developers" },
      { label: "API Reference", href: "#developers" },
      { label: "Webhooks", href: "#webhooks" },
      { label: "Security", href: "#security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden leading-none"
      >
        <span className="block translate-y-[18%] text-center text-[22vw] font-bold tracking-tighter text-foreground/[0.03] sm:text-[18vw] lg:text-[16vw]">
          PAYMENTS
        </span>
      </div>

      <RevealOnScroll>
        <div className="relative border-b border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold tracking-tight text-balance text-foreground sm:text-3xl">
                Start moving money today.
              </h3>
              <p className="text-sm text-muted-foreground">
                Join businesses using Payment Engine.
              </p>
            </div>
            <Link
              href="/signup"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-primary/20 hover:border-primary/60"
            >
              Get Started
              <HugeiconsIcon icon={ArrowRight01Icon} className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </RevealOnScroll>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_3fr]">
          <RevealOnScroll>
            <div className="flex flex-col gap-5">
              <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                  <span className="text-sm font-bold text-primary-foreground">P</span>
                </div>
                <span className="text-lg font-semibold tracking-tight text-foreground">
                  Payment Engine
                </span>
              </Link>
              <p className="max-w-xs text-sm text-muted-foreground text-pretty">
                Payment infrastructure for modern business. Accept, manage and move money through one secure platform.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerSections.map((section, idx) => (
              <RevealOnScroll key={section.title} delay={idx * 80}>
                <div className="flex flex-col gap-3">
                  <h4 className="group relative text-sm font-semibold text-foreground">
                    {section.title}
                    <span className="absolute -bottom-1 left-0 h-px w-6 bg-primary/60 transition-all duration-300 group-hover:w-full" />
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-0.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                        >
                          <span className="relative">
                            {link.label}
                            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <div className="relative mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Payment Engine. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="transition-colors hover:text-foreground">Privacy</Link>
            <Link href="#" className="transition-colors hover:text-foreground">Terms</Link>
            <Link href="#" className="transition-colors hover:text-foreground">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
