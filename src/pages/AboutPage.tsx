import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, MapPin, Building2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';

export default function AboutPage() {
  return (
    <div className="bg-white pt-20">
      {/* Header */}
      <section className="container-px mx-auto max-w-9xl pt-16 md:pt-24">
        <ScrollReveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
            About
          </p>
          <h1 className="text-display-lg font-medium tracking-tight text-ink-900 text-balance">
            Built in Cameroon.
            <br />
            Connected to global trade.
          </h1>
        </ScrollReveal>
      </section>

      {/* Main Copy */}
      <section className="container-px mx-auto max-w-9xl py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <div className="space-y-6 text-base leading-relaxed text-ink-600">
              <p>
                Selling Cameroon is the trade facilitation and market-access
                subsidiary of Belo Finance.
              </p>
              <p>
                We connect qualified international buyers with vetted suppliers
                across Cameroon and the CEMAC region.
              </p>
              <p>
                Our role is to help bridge the gap between local supply and
                international demand through sourcing, verification, trade
                facilitation, buyer representation and transaction support.
              </p>
              <p>
                We are headquartered in Douala, Cameroon.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 border border-ink-100 p-6">
                <MapPin size={24} className="shrink-0 text-brand-red" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink-400">
                    Headquarters
                  </p>
                  <p className="mt-1 text-lg font-medium text-ink-900">
                    Douala, Cameroon
                  </p>
                  <p className="text-sm text-ink-500">CEMAC region</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border border-ink-100 p-6">
                <Building2 size={24} className="shrink-0 text-brand-red" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink-400">
                    Parent Company
                  </p>
                  <p className="mt-1 text-lg font-medium text-ink-900">
                    Belo Finance
                  </p>
                  <p className="text-sm text-ink-500">Credibility & Trust Partner</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Relationship Visual */}
      <section className="bg-ink-50 py-20 md:py-28">
        <div className="container-px mx-auto max-w-9xl">
          <ScrollReveal className="text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
              Corporate Structure
            </p>
            <h2 className="text-display-sm font-medium tracking-tight text-ink-900">
              The ecosystem.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-px bg-ink-100">
              <div className="w-full bg-white p-8 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
                  Parent Company
                </p>
                <h3 className="mt-3 text-2xl font-medium text-ink-900">
                  Belo Finance
                </h3>
                <p className="mt-2 text-sm text-ink-500">Credibility & Trust</p>
              </div>
              <div className="flex w-full items-center justify-center bg-white py-3">
                <ArrowDown size={20} className="text-ink-300" />
              </div>
              <div className="w-full bg-white p-8 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-red">
                  Subsidiary
                </p>
                <h3 className="mt-3 text-2xl font-medium text-ink-900">
                  Selling Cameroon
                </h3>
                <p className="mt-2 text-sm text-ink-500">
                  Trade Facilitation & Market Access
                </p>
              </div>
              <div className="flex w-full items-center justify-center bg-white py-3">
                <ArrowDown size={20} className="text-ink-300" />
              </div>
              <div className="grid w-full grid-cols-2 gap-px bg-ink-100">
                <div className="bg-white p-6 text-center">
                  <h4 className="text-base font-medium text-ink-900">
                    Vetted Suppliers
                  </h4>
                </div>
                <div className="bg-white p-6 text-center">
                  <h4 className="text-base font-medium text-ink-900">
                    Global Buyers
                  </h4>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Belo Finance Section */}
      <section className="bg-ink-900 section-py">
        <div className="container-px mx-auto max-w-9xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                dark
                eyebrow="Parent Company"
                title={
                  <>
                    Backed by a
                    <br />
                    credibility platform.
                  </>
                }
              />
              <ScrollReveal delay={1}>
                <p className="mt-6 text-base leading-relaxed text-white/60">
                  Selling Cameroon operates as part of the Belo Finance ecosystem.
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/60">
                  Belo Finance provides capabilities in capital advisory, project
                  governance, due diligence, risk mitigation, regulatory
                  coordination and institutional capital flow.
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/60">
                  Where required and appropriate, Belo Finance can support the
                  broader transaction through its advisory and financial
                  capabilities.
                </p>
                <a
                  href="#"
                  className="group mt-8 inline-flex items-center gap-2 border border-white/30 px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
                >
                  Explore Belo Finance
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={2}>
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-medium tracking-tight text-white/10 md:text-8xl">
                    BELO
                  </p>
                  <p className="text-6xl font-medium tracking-tight text-white/10 md:text-8xl">
                    FINANCE
                  </p>
                  <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/30">
                    Credibility & Trust Platform
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-9xl py-20 md:py-28">
        <ScrollReveal>
          <div className="flex flex-col items-start justify-between gap-8 border-t border-ink-100 pt-12 md:flex-row md:items-center">
            <div>
              <h2 className="text-display-sm font-medium tracking-tight text-ink-900">
                Want to learn more?
              </h2>
              <p className="mt-4 text-base text-ink-500">
                Explore our products or start a trade inquiry.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 border border-ink-300 px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-ink-900 transition-all duration-300 hover:border-ink-900 hover:bg-ink-900 hover:text-white"
              >
                Products
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-ink-900 px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-brand-red"
              >
                Start Trade
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
