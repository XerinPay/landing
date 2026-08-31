import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { TrustBar } from "@/components/sections/trust-bar"
import { Infrastructure } from "@/components/sections/infrastructure"
import { DashboardShowcase } from "@/components/sections/dashboard-showcase"
import { PaymentMethods } from "@/components/sections/payment-methods"
import { GlobalPayments } from "@/components/sections/global-payments"
import { Solutions } from "@/components/sections/solutions"
import { ControlNumbers } from "@/components/sections/control-numbers"
import { PaymentLinks } from "@/components/sections/payment-links"
import { Invoicing } from "@/components/sections/invoicing"
import { Wallet } from "@/components/sections/wallet"
import { Developers } from "@/components/sections/developers"
import { Webhooks } from "@/components/sections/webhooks"
import { ReceiptsNotifications } from "@/components/sections/receipts-notifications"
import { Security } from "@/components/sections/security"
import { Analytics } from "@/components/sections/analytics"
import { ComingSoon } from "@/components/sections/coming-soon"
import { Comparison } from "@/components/sections/comparison"
import { FinalCTA } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Infrastructure />
        <DashboardShowcase />
        <PaymentMethods />
        <GlobalPayments />
        <Solutions />
        <ControlNumbers />
        <PaymentLinks />
        <Invoicing />
        <Wallet />
        <Developers />
        <Webhooks />
        <ReceiptsNotifications />
        <Security />
        <Analytics />
        <ComingSoon />
        <Comparison />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
