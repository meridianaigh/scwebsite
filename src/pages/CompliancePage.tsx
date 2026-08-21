import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Package,
  UserCheck,
  FileText,
  Award,
  ArrowRight,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';

const complianceSections = [
  {
    icon: ShieldCheck,
    title: 'Supplier Verification',
    description:
      'We verify counterparties before introducing them into qualified transactions.',
  },
  {
    icon: Package,
    title: 'Product Verification',
    description:
      'Product specifications, availability and supporting documentation are reviewed according to the transaction.',
  },
  {
    icon: UserCheck,
    title: 'KYC / AML',
    description:
      'Appropriate Know Your Customer and anti-money-laundering procedures are applied according to transaction requirements and the relevant parties.',
  },
  {
    icon: FileText,
    title: 'Documentation',
    description:
      'Required commercial, export, quality and shipping documents are coordinated according to the product and destination.',
  },
  {
    icon: Award,
    title: 'Licensed Participants',
    description:
      'Where a transaction requires regulated or licensed participants, Selling Cameroon works with appropriate licensed counterparties rather than representing itself as holding licenses it does not possess.',
  },
];

export default function CompliancePage() {
  return (
    <div className="bg-white pt-20">
      {/* Header */}
      <section className="container-px mx-auto max-w-9xl pt-16 md:pt-24">
        <ScrollReveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
            Compliance
          </p>
          <h1 className="text-display-lg font-medium tracking-tight text-ink-900 text-balance">
            Trade with
            <br />
            confidence.
          </h1>
        </ScrollReveal>
      </section>

      {/* Compliance Sections */}
      <section className="container-px mx-auto max-w-9xl section-py">
        <div className="grid grid-cols-1 gap-px bg-ink-100 md:grid-cols-2">
          {complianceSections.map((section, i) => {
            const Icon = section.icon;
            return (
              <ScrollReveal key={section.title} delay={(i % 2) + 1 as 1 | 2}>
                <div className="group h-full bg-white p-8 md:p-10 transition-all duration-500 hover:bg-ink-50">
                  <Icon size={28} className="text-brand-red" />
                  <h3 className="mt-6 text-xl font-medium tracking-tight text-ink-900">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">
                    {section.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-ink-900 py-20 md:py-24">
        <div className="container-px mx-auto max-w-9xl">
          <ScrollReveal>
            <div className="border-l-2 border-brand-red pl-8 md:pl-12">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-orange-light">
                Important
              </p>
              <h2 className="text-display-sm font-medium tracking-tight text-white">
                What we do not claim.
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  'Selling Cameroon is not itself a licensed gold exporter.',
                  'Selling Cameroon does not claim regulatory approvals that have not been provided.',
                  'Selling Cameroon does not claim to be "100% compliant" or "risk-free."',
                  'Not every supplier has every certification.',
                  'Not every product is independently certified.',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-white/70"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 bg-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
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
                Questions about compliance?
              </h2>
              <p className="mt-4 text-base text-ink-500">
                Contact our team to discuss verification and compliance for your
                transaction.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-2 bg-ink-900 px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-brand-red"
            >
              Contact Us
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
