import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  ShieldCheck,
  FileCheck,
  Truck,
  Package,
  Handshake,
  FlaskConical,
  Check,
  ArrowDown,
} from 'lucide-react';
import { products } from '@/data/products';
import { insights } from '@/data/insights';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import QuoteForm from '@/components/QuoteForm';

const trustBarItems = [
  'CAMEROON',
  'CEMAC',
  'DOUALA',
  'KRIBI',
  'QATAR',
  'SINGAPORE',
  'CHINA',
];

const services = [
  {
    number: '01',
    title: 'Supplier Sourcing',
    description:
      'Identify and connect buyers with relevant suppliers.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Supplier Vetting',
    description:
      'Coordinate verification of supplier identity, capacity, documentation and commercial credibility.',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Quality Coordination',
    description:
      'Coordinate sampling, inspection and independent testing where required.',
    icon: FlaskConical,
  },
  {
    number: '04',
    title: 'Trade Documentation',
    description:
      'Support the preparation and review of documentation required for the transaction and destination.',
    icon: FileCheck,
  },
  {
    number: '05',
    title: 'Logistics Coordination',
    description:
      'Coordinate with appropriate logistics, customs and shipping partners.',
    icon: Truck,
  },
  {
    number: '06',
    title: 'Buyer Representation',
    description:
      'Represent qualified buyers in sourcing and transaction coordination.',
    icon: Handshake,
  },
];

const tradeSteps = [
  {
    number: '01',
    title: 'Submit Inquiry',
    description: 'Buyer specifies product, quantity and destination.',
  },
  {
    number: '02',
    title: 'Product Verification',
    description:
      'We confirm supplier availability, specifications and supporting documentation.',
  },
  {
    number: '03',
    title: 'Commercial Terms',
    description:
      'We prepare the commercial proposal, including quantity, pricing, lead time and applicable Incoterms.',
  },
  {
    number: '04',
    title: 'Transaction Structuring',
    description: 'Buyer and seller agree on commercial and contractual terms.',
  },
  {
    number: '05',
    title: 'Quality & Compliance',
    description:
      'Sampling, inspection, testing and documentation are coordinated according to the product and destination requirements.',
  },
  {
    number: '06',
    title: 'Export & Shipment',
    description:
      'Appropriate parties coordinate export documentation, customs, logistics and shipment.',
  },
  {
    number: '07',
    title: 'Delivery & Documentation',
    description:
      'Buyer receives the shipment and agreed transaction documentation.',
  },
];

const verificationItems = [
  'Supplier identity',
  'Commercial documentation',
  'Product availability',
  'Product specifications',
  'Sampling',
  'Quality inspection',
  'Independent laboratory testing',
  'Origin documentation',
  'Export documentation',
  'Transaction counterparties',
];

const buyerCategories = [
  'Commodity Traders',
  'Manufacturers',
  'Food Processors',
  'Distributors',
  'Importers',
  'Industrial Buyers',
  'Refiners / Precious-Metal Buyers',
  'Wholesalers',
];

const incoterms = ['FCA', 'FOB', 'CFR', 'CIF', 'CPT', 'CIP', 'DAP'];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen overflow-hidden bg-ink-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Cargo ship at sea"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/80 to-ink-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/60" />
        </div>

        {/* Geometric Overlay */}
        <div className="absolute right-0 top-1/4 h-96 w-96 border border-brand-red/20" />
        <div className="absolute right-16 top-1/3 h-64 w-64 border border-brand-orange/20" />

        {/* Content */}
        <div className="container-px relative z-10 mx-auto flex min-h-screen max-w-9xl flex-col justify-center pt-20">
          <ScrollReveal>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-white/50">
              Selling Cameroon · A subsidiary of Belo Finance
            </p>
            <h1 className="text-display-xl font-medium tracking-tight text-white text-balance">
              The Trade Gateway
              <br />
              to Central Africa.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
              Connecting qualified international buyers with vetted suppliers across
              Cameroon and the CEMAC region.
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Sourcing · Verification · Trade Facilitation · Logistics
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-white px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-ink-900 transition-all duration-300 hover:bg-brand-red hover:text-white"
              >
                Start Trade
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/products"
                className="group inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                View Products
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ArrowDown size={20} className="text-white/40 animate-bounce" />
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="border-b border-ink-100 bg-white py-12 md:py-16">
        <div className="container-px mx-auto max-w-9xl">
          <ScrollReveal className="mb-10 text-center">
            <h2 className="text-display-sm font-medium tracking-tight text-ink-900">
              Local Sourcing.
              <br />
              International Trade.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
              {trustBarItems.map((item, i) => (
                <div key={item} className="flex items-center gap-8 md:gap-12">
                  {i > 0 && <span className="h-1 w-1 bg-ink-200" />}
                  <span className="text-sm font-medium uppercase tracking-[0.15em] text-ink-400">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="container-px mx-auto max-w-9xl section-py">
        <SectionHeading
          eyebrow="Products"
          title={
            <>
              Products from Central Africa.
              <br />
              Prepared for global trade.
            </>
          }
          subtitle="We connect buyers with vetted suppliers across selected agricultural, commodity and precious-metal markets."
        />
        <div className="mt-16 grid grid-cols-1 gap-px bg-ink-100 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ScrollReveal key={product.slug} delay={(i % 3) + 1 as 1 | 2 | 3}>
              <Link
                to={`/products/${product.slug}`}
                className="group flex h-full flex-col bg-white p-8 transition-all duration-500 hover:bg-ink-900"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-400 transition-colors group-hover:text-white/40">
                    {product.number}
                  </span>
                  <ArrowRight
                    size={20}
                    className="text-ink-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>
                <div className="mb-6 overflow-hidden bg-ink-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tight text-ink-900 transition-colors group-hover:text-white">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-ink-400 transition-colors group-hover:text-white/60">
                  {product.tagline}
                </p>
                <div className="mt-auto pt-6">
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-ink-900 transition-colors group-hover:text-brand-orange-light">
                    {product.ctaLabel}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== TRADE SERVICES ===== */}
      <section className="bg-ink-50 section-py">
        <div className="container-px mx-auto max-w-9xl">
          <SectionHeading
            eyebrow="Trade Services"
            title={
              <>
                More than sourcing.
                <br />
                We facilitate the trade.
              </>
            }
          />
          <div className="mt-16 grid grid-cols-1 gap-px bg-ink-100 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.number} delay={(i % 3) + 1 as 1 | 2 | 3}>
                  <div className="group h-full bg-white p-8 transition-all duration-500 hover:bg-ink-900">
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-400 transition-colors group-hover:text-white/40">
                        {service.number}
                      </span>
                      <Icon
                        size={24}
                        className="text-ink-300 transition-colors group-hover:text-brand-orange-light"
                      />
                    </div>
                    <h3 className="mt-6 text-lg font-medium tracking-tight text-ink-900 transition-colors group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500 transition-colors group-hover:text-white/60">
                      {service.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Trade Financing Support */}
          <ScrollReveal>
            <div className="mt-8 border border-ink-100 bg-white p-8 md:p-12">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-red">
                    Trade Financing Support
                  </p>
                  <h3 className="mt-3 text-xl font-medium tracking-tight text-ink-900">
                    Backed by Belo Finance where appropriate
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-500">
                    Where appropriate, Belo Finance may support transaction
                    structuring and financing-related requirements. This does not
                    imply that every transaction automatically receives financing.
                  </p>
                </div>
                <Link
                  to="/about"
                  className="shrink-0 text-sm font-medium uppercase tracking-[0.12em] text-ink-900 transition-colors hover:text-brand-red"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== HOW TRADE WORKS ===== */}
      <section className="container-px mx-auto max-w-9xl section-py">
        <SectionHeading
          eyebrow="How Trade Works"
          title={
            <>
              From inquiry
              <br />
              to delivery.
            </>
          }
        />
        {/* Desktop Horizontal Timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-8 h-px bg-ink-100" />
            <div className="grid grid-cols-7 gap-4">
              {tradeSteps.map((step, i) => (
                <ScrollReveal key={step.number} delay={(i + 1) as 1 | 2 | 3 | 4}>
                  <div className="relative flex flex-col items-start">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center bg-white">
                      <div className="flex h-12 w-12 items-center justify-center border border-ink-200 text-sm font-medium text-ink-900 transition-all duration-300 hover:border-brand-red hover:bg-brand-red hover:text-white">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="mt-4 text-sm font-medium tracking-tight text-ink-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-400">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile Vertical Timeline */}
        <div className="mt-12 lg:hidden">
          <div className="relative space-y-8 border-l border-ink-100 pl-8">
            {tradeSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={(i % 4) + 1 as 1 | 2 | 3 | 4}>
                <div className="relative">
                  <div className="absolute -left-[37px] flex h-8 w-8 items-center justify-center border border-ink-200 bg-white text-xs font-medium text-ink-900">
                    {step.number}
                  </div>
                  <h3 className="text-base font-medium tracking-tight text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-400">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUALITY & VERIFICATION ===== */}
      <section className="bg-ink-900 section-py">
        <div className="container-px mx-auto max-w-9xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                dark
                eyebrow="Quality & Verification"
                title={
                  <>
                    Vetted before
                    <br />
                    it reaches the buyer.
                  </>
                }
              />
              <ScrollReveal delay={1}>
                <p className="mt-6 text-base leading-relaxed text-white/60">
                  Our role is to reduce the information and execution gap between
                  international buyers and local suppliers.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/40">
                  Verification procedures are determined according to the product,
                  transaction structure and destination requirements.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={2}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {verificationItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border border-white/10 p-4"
                  >
                    <Check size={16} className="shrink-0 text-brand-orange-light" />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== LABORATORY & QUALITY TESTING ===== */}
      <section className="container-px mx-auto max-w-9xl py-20 md:py-24">
        <ScrollReveal>
          <div className="border-l-2 border-brand-red pl-8 md:pl-12">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
              Independent Quality Verification
            </p>
            <h2 className="text-display-sm font-medium tracking-tight text-ink-900">
              Laboratory & quality testing.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-500">
              Where required, independent sampling, inspection and laboratory
              testing can be coordinated through appropriate accredited or
              recognized testing providers in Cameroon.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-400">
              SGS Cameroon is an example of an available testing provider. This does
              not imply that SGS certifies every Selling Cameroon shipment, nor that
              independent testing is applied to every transaction. Testing is
              coordinated according to product and destination requirements.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== PORTS & LOGISTICS ===== */}
      <section className="bg-ink-50 section-py">
        <div className="container-px mx-auto max-w-9xl">
          <SectionHeading
            eyebrow="Ports & Logistics"
            title={
              <>
                From Cameroon
                <br />
                to the world.
              </>
            }
          />
          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
            <ScrollReveal>
              <div className="border border-ink-100 bg-white p-8">
                <Package size={24} className="text-brand-red" />
                <h3 className="mt-6 text-lg font-medium text-ink-900">
                  Douala Port
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  A primary logistics gateway for exports from Cameroon.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="border border-ink-100 bg-white p-8">
                <Truck size={24} className="text-brand-red" />
                <h3 className="mt-6 text-lg font-medium text-ink-900">
                  Kribi Deep Sea Port
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  A modern deep-water port supporting larger vessel capacity.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="border border-ink-100 bg-white p-8">
                <div className="flex h-6 items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-[0.1em] text-ink-400">
                    Supplier
                  </span>
                  <ArrowRight size={14} className="text-ink-300" />
                  <span className="text-xs font-medium uppercase tracking-[0.1em] text-ink-400">
                    Douala / Kribi
                  </span>
                  <ArrowRight size={14} className="text-ink-300" />
                  <span className="text-xs font-medium uppercase tracking-[0.1em] text-brand-red">
                    Buyer
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-ink-900">
                  Coordinated Export
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  Selling Cameroon coordinates with appropriate logistics, customs
                  and shipping partners to support export transactions.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <p className="mt-8 text-xs text-ink-400">
              Selling Cameroon does not claim ownership of either port, nor direct
              shipping routes unless verified.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== INCOTERMS ===== */}
      <section className="container-px mx-auto max-w-9xl py-20 md:py-24">
        <ScrollReveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
            Flexible Trade Terms
          </p>
          <h2 className="text-display-sm font-medium tracking-tight text-ink-900">
            Incoterms 2020.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-500">
            Available Incoterms depend on the product, destination, shipment
            structure and transaction. Potential terms may include:
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {incoterms.map((term) => (
              <span
                key={term}
                className="border border-ink-200 px-6 py-3 text-sm font-medium tracking-wide text-ink-700"
              >
                {term}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-400">
            Final commercial terms are agreed on a transaction-by-transaction basis.
          </p>
        </ScrollReveal>
      </section>

      {/* ===== BELO FINANCE SECTION ===== */}
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
              <div className="flex flex-col justify-center gap-px bg-white/10">
                <div className="bg-ink-800 p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                    Parent Company
                  </p>
                  <h3 className="mt-3 text-2xl font-medium text-white">Belo Finance</h3>
                  <p className="mt-2 text-sm text-white/50">Credibility & Trust</p>
                </div>
                <div className="flex items-center justify-center bg-ink-800 py-3">
                  <ArrowDown size={20} className="text-white/30" />
                </div>
                <div className="bg-ink-800 p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-orange-light">
                    Subsidiary
                  </p>
                  <h3 className="mt-3 text-2xl font-medium text-white">
                    Selling Cameroon
                  </h3>
                  <p className="mt-2 text-sm text-white/50">
                    Trade Facilitation & Market Access
                  </p>
                </div>
                <div className="flex items-center justify-center bg-ink-800 py-3">
                  <ArrowDown size={20} className="text-white/30" />
                </div>
                <div className="grid grid-cols-2 gap-px bg-white/10">
                  <div className="bg-ink-800 p-6 text-center">
                    <p className="text-sm font-medium text-white">Vetted Suppliers</p>
                  </div>
                  <div className="bg-ink-800 p-6 text-center">
                    <p className="text-sm font-medium text-white">Global Buyers</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== TARGET BUYERS ===== */}
      <section className="container-px mx-auto max-w-9xl section-py">
        <SectionHeading
          eyebrow="Target Buyers"
          title={
            <>
              Built for
              <br />
              serious buyers.
            </>
          }
        />
        <ScrollReveal delay={1}>
          <p className="mt-6 max-w-xl text-base text-ink-500">
            We prioritize qualified commercial buyers with clear specifications,
            quantities and destination requirements.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-2 gap-px bg-ink-100 md:grid-cols-4">
          {buyerCategories.map((cat, i) => (
            <ScrollReveal key={cat} delay={(i % 4) + 1 as 1 | 2 | 3 | 4}>
              <div className="group flex h-full items-center bg-white p-6 transition-all duration-500 hover:bg-ink-900">
                <span className="text-sm font-medium tracking-wide text-ink-700 transition-colors group-hover:text-white">
                  {cat}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== TARGET MARKETS ===== */}
      <section className="bg-ink-50 py-20 md:py-24">
        <div className="container-px mx-auto max-w-9xl">
          <ScrollReveal className="text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
              Target Markets
            </p>
            <h2 className="text-display-sm font-medium tracking-tight text-ink-900">
              Connecting Cameroon
              <br />
              with global markets.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {['QATAR', 'SINGAPORE', 'CHINA'].map((market, i) => (
                <div key={market} className="flex items-center gap-8 md:gap-16">
                  {i > 0 && <span className="h-1 w-1 bg-ink-300" />}
                  <span className="text-2xl font-medium tracking-tight text-ink-900 md:text-3xl">
                    {market}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="mt-8 text-center text-xs text-ink-400">
              We do not imply exclusive relationships or established buyers in these
              markets unless specifically confirmed.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== REQUEST A QUOTE ===== */}
      <section className="container-px mx-auto max-w-9xl section-py">
        <SectionHeading
          eyebrow="Request a Quote"
          title={
            <>
              Tell us
              <br />
              what you need.
            </>
          }
          subtitle="Specify your product, quantity and destination. Our team will review your requirements and respond with next steps."
        />
        <ScrollReveal delay={1}>
          <div className="mt-16 border border-ink-100 bg-ink-50 p-6 md:p-12">
            <QuoteForm />
          </div>
        </ScrollReveal>
      </section>

      {/* ===== INSIGHTS PREVIEW ===== */}
      <section className="bg-ink-900 section-py">
        <div className="container-px mx-auto max-w-9xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              dark
              eyebrow="Insights"
              title={
                <>
                  Selling Cameroon
                  <br />
                  Trade Insights.
                </>
              }
            />
            <ScrollReveal delay={1}>
              <Link
                to="/insights"
                className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:text-brand-orange-light"
              >
                All Insights
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </ScrollReveal>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
            {insights.slice(0, 3).map((post, i) => (
              <ScrollReveal key={post.slug} delay={(i + 1) as 1 | 2 | 3}>
                <Link
                  to={`/insights/${post.slug}`}
                  className="group flex h-full flex-col bg-ink-900 p-8 transition-all duration-500 hover:bg-ink-800"
                >
                  <div className="mb-6 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-40 w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-brand-orange-light">
                    {post.category}
                  </p>
                  <h3 className="mt-3 text-lg font-medium leading-snug text-white transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto pt-6 text-xs text-white/40">
                    {post.readTime}
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
