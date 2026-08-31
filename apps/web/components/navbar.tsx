"use client"

import { useState, useEffect } from "react"
import { Button } from "@workspace/ui/components/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@workspace/ui/components/sheet"
import { HugeiconsIcon } from "@hugeicons/react"
import { Menu01Icon, Cancel01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { cn } from "@workspace/ui/lib/utils"

const navLinks = [
  { label: "Products", href: "#infrastructure" },
  { label: "Solutions", href: "#solutions" },
  { label: "Developers", href: "#developers" },
  { label: "Resources", href: "#analytics" },
  { label: "Pricing", href: "#cta" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">P</span>
          </div>
          <span className="text-base font-semibold tracking-tight text-foreground">
            Payment Engine
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="/login" className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground">
            Sign in
          </a>
          <a href="/signup">
            <Button size="sm" className="transition-transform duration-300 hover:scale-105">
              Get Started
              <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
            </Button>
          </a>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="text-foreground">
                  <HugeiconsIcon icon={Menu01Icon} className="size-5" />
                </Button>
              }
            />
            <SheetContent side="top" className="h-full w-full p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex h-full flex-col bg-background p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
                      <span className="text-sm font-bold text-primary-foreground">P</span>
                    </div>
                    <span className="text-base font-semibold">Payment Engine</span>
                  </div>
                  <SheetClose
                    render={
                      <Button variant="ghost" size="icon">
                        <HugeiconsIcon icon={Cancel01Icon} className="size-5" />
                      </Button>
                    }
                  />
                </div>
                <div className="mt-12 flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <SheetClose key={link.label} render={<a href={link.href} />}>
                      <div className="group flex items-center justify-between border-b border-border py-4 text-lg font-medium text-foreground">
                        {link.label}
                        <HugeiconsIcon icon={ArrowRight01Icon} className="size-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </SheetClose>
                  ))}
                </div>
                <div className="mt-auto flex flex-col gap-3">
                  <SheetClose render={<a href="/login" className="block" />}>
                    <Button variant="outline" className="w-full">Sign in</Button>
                  </SheetClose>
                  <SheetClose render={<a href="/signup" className="block" />}>
                    <Button className="w-full">
                      Get Started
                      <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
