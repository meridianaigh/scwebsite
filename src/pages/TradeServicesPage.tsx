import { Link } from 'react-router-dom';
import {
  Search,
  ShieldCheck,
  FlaskConical,
  FileCheck,
  Truck,
  Handshake,
  ArrowRight,
  Building2,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';

const services = [
  {
    number: '01',
    title: 'Supplier Sourcing',
    description:
      'Identify and connect buyers with relevant suppliers across Cameroon and the CEMAC region.',
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

export default function TradeServicesPage() {
  return (
    <div className="bg-white pt-20">
      {/* Header */}
      <section className="container-px mx-auto max-w-9xl pt-16 md:pt-24">
        <ScrollReveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
            Trade Services
          </p>
          <h1 className="text-display-lg font-medium tracking-tight text-ink-900 text-balance">
            More than sourcing.
            <br />
            We facilitate the trade.
          </h1>
        </ScrollReveal>
      </section>

      {/* Services Grid */}
      <section className="container-px mx-auto max-w-9xl section-py">
        <div className="grid grid-cols-1 gap-px bg-ink-100 md:grid-cols-2 lg:grid-cols-3">
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
                  <h3 className="mt-6 text-xl font-medium tracking-tight text-ink-900 transition-colors group-hover:text-white">
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
      </section>

      {/* Trade Financing Support */}
      <section className="bg-ink-50 py-20 md:py-24">
        <div className="container-px mx-auto max-w-9xl">
          <ScrollReveal>
            <div className="border border-ink-100 bg-white p-8 md:p-12">
              <div className="flex items-start gap-6">
                <Building2 size={32} className="shrink-0 text-brand-red" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-red">
                    Trade Financing Support
                  </p>
                  <h3 className="mt-3 text-2xl font-medium tracking-tight text-ink-900">
                    Where appropriate, Belo Finance may support transaction
                    structuring and financing-related requirements.
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-500">
                    This does not imply that every transaction automatically receives
                    financing. Financing support is determined according to the
                    transaction structure, the parties involved, and the relevant
                    requirements.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-9xl py-20 md:py-28">
        <ScrollReveal>
          <div className="flex flex-col items-start justify-between gap-8 border-t border-ink-100 pt-12 md:flex-row md:items-center">
            <div>
              <h2 className="text-display-sm font-medium tracking-tight text-ink-900">
                Ready to start a trade?
              </h2>
              <p className="mt-4 text-base text-ink-500">
                Tell us what you are looking to source, the quantity required and
                your destination.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-2 bg-ink-900 px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-brand-red"
            >
              Start Trade
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
