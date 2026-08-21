import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';

const legalPages = [
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    content: [
      {
        heading: 'Information We Collect',
        body: 'Selling Cameroon collects information submitted through our trade inquiry forms, including name, company, country, email address, phone number, product interests, and message content. We also collect basic technical information such as browser type and device information for site functionality.',
      },
      {
        heading: 'How We Use Your Information',
        body: 'Information collected is used to respond to trade inquiries, coordinate sourcing and verification activities, and communicate with prospective buyers regarding their requirements. We do not sell or rent your personal information to third parties.',
      },
      {
        heading: 'Data Retention',
        body: 'Trade inquiry data is retained for as long as necessary to fulfill the purpose for which it was collected, including for record-keeping and compliance purposes, in accordance with applicable laws.',
      },
      {
        heading: 'Your Rights',
        body: 'You may request access to, correction of, or deletion of your personal information by contacting us at sales@sellingcameroon.com.',
      },
      {
        heading: 'Contact',
        body: 'For privacy-related questions, contact us at sales@sellingcameroon.com or +237 682 960 440, Douala, Cameroon.',
      },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of Use',
    content: [
      {
        heading: 'Acceptance of Terms',
        body: 'By accessing and using sellingcameroon.com, you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use this website.',
      },
      {
        heading: 'Use of the Website',
        body: 'This website is provided for informational and trade inquiry purposes. You agree not to use the website for any unlawful purpose or in a manner that could damage, disable, or impair the site.',
      },
      {
        heading: 'No Warranties',
        body: 'The website and its content are provided "as is" without warranties of any kind, express or implied. Selling Cameroon does not warrant that the information on this website is complete, accurate, or current at all times.',
      },
      {
        heading: 'Limitation of Liability',
        body: 'Selling Cameroon shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of, or inability to use, this website.',
      },
      {
        heading: 'Changes to Terms',
        body: 'Selling Cameroon reserves the right to update these Terms at any time. Continued use of the website after changes constitutes acceptance of the updated Terms.',
      },
    ],
  },
  {
    slug: 'trade-disclaimer',
    title: 'Trade Disclaimer',
    content: [
      {
        heading: 'Role of Selling Cameroon',
        body: 'Selling Cameroon acts as a trade facilitation, sourcing, buyer representation and transaction-support platform. The company does not represent itself as the producer, owner, exporter or license holder of every product displayed on the platform.',
      },
      {
        heading: 'Product Availability & Specifications',
        body: 'Product availability, specifications, certifications, origin, pricing and documentation are subject to transaction-specific verification. Information displayed on this website is indicative and does not constitute an offer or guarantee of supply.',
      },
      {
        heading: 'Licensed Participants',
        body: 'Where regulated activities or licensed export processes are required, appropriately licensed participants are engaged. Selling Cameroon does not represent itself as holding licenses it does not possess, including gold export licenses.',
      },
      {
        heading: 'Compliance with Laws',
        body: 'All transactions remain subject to applicable laws, regulations, contractual terms and destination-country requirements. Buyers and sellers are responsible for ensuring compliance with the laws of their respective jurisdictions.',
      },
      {
        heading: 'No Legal Advice',
        body: 'The content on this website is provided for informational purposes only and does not constitute legal advice. Parties to any transaction should seek appropriate legal counsel for their specific circumstances.',
      },
      {
        heading: 'No Guaranteed Outcomes',
        body: 'Selling Cameroon does not guarantee the outcome of any transaction, including but not limited to pricing, supply availability, delivery timelines, or financing approval. All commercial terms are agreed on a transaction-by-transaction basis.',
      },
    ],
  },
  {
    slug: 'compliance-disclaimer',
    title: 'Compliance Disclaimer',
    content: [
      {
        heading: 'Verification Procedures',
        body: 'Verification procedures are determined according to the product, transaction structure and destination requirements. Verification may include supplier identity, commercial documentation, product specifications, sampling, quality inspection, independent laboratory testing, origin documentation, export documentation, and transaction counterparties.',
      },
      {
        heading: 'No Absolute Compliance Claims',
        body: 'Selling Cameroon does not claim to be "100% compliant" or "risk-free." Compliance is an ongoing process applied according to transaction requirements and applicable regulations.',
      },
      {
        heading: 'Certifications',
        body: 'Not every supplier has every certification. Not every product is independently certified. Specific certifications and testing are coordinated according to the product and destination requirements, and are subject to transaction-specific verification.',
      },
      {
        heading: 'KYC / AML',
        body: 'Appropriate Know Your Customer and anti-money-laundering procedures are applied according to transaction requirements and the relevant parties. These procedures do not guarantee the identification of all potential risks.',
      },
      {
        heading: 'Licensed Participants',
        body: 'Where a transaction requires regulated or licensed participants, Selling Cameroon works with appropriate licensed counterparties. Selling Cameroon does not represent itself as holding regulatory approvals or licenses that have not been provided.',
      },
      {
        heading: 'No Legal Advice',
        body: 'This disclaimer is provided for informational purposes and does not constitute legal advice. This document should be reviewed by legal counsel as appropriate.',
      },
    ],
  },
];

export default function LegalPage() {
  return (
    <div className="bg-white pt-20">
      {/* Header */}
      <section className="container-px mx-auto max-w-4xl pt-16 md:pt-24">
        <ScrollReveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
            Legal
          </p>
          <h1 className="text-display-md font-medium tracking-tight text-ink-900">
            Legal & Disclaimers
          </h1>
          <p className="mt-6 text-base text-ink-500">
            The following documents outline the terms, policies, and disclaimers
            applicable to Selling Cameroon. These documents are provided for
            informational purposes and should be reviewed by legal counsel as
            appropriate.
          </p>
        </ScrollReveal>
      </section>

      {/* Legal Documents */}
      <section className="container-px mx-auto max-w-4xl py-16 md:py-20">
        <div className="space-y-16">
          {legalPages.map((page, i) => (
            <ScrollReveal key={page.slug} delay={(i % 4) + 1 as 1 | 2 | 3 | 4}>
              <div id={page.slug} className="scroll-mt-24">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-red">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-2xl font-medium tracking-tight text-ink-900">
                    {page.title}
                  </h2>
                </div>
                <div className="mt-8 space-y-8">
                  {page.content.map((section, j) => (
                    <div key={j}>
                      <h3 className="text-base font-medium text-ink-900">
                        {section.heading}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Back Link */}
      <section className="container-px mx-auto max-w-4xl pb-20">
        <Link
          to="/"
          className="text-sm font-medium uppercase tracking-[0.12em] text-ink-400 transition-colors hover:text-ink-900"
        >
          ← Back to Home
        </Link>
      </section>
    </div>
  );
}
