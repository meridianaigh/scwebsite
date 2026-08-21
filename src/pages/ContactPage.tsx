import { Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import QuoteForm from '@/components/QuoteForm';

export default function ContactPage() {
  return (
    <div className="bg-white pt-20">
      {/* Header */}
      <section className="container-px mx-auto max-w-9xl pt-16 md:pt-24">
        <ScrollReveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
            Contact
          </p>
          <h1 className="text-display-lg font-medium tracking-tight text-ink-900 text-balance">
            Start trade.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
            Tell us what you are looking to source, the quantity required and your
            destination.
          </p>
        </ScrollReveal>
      </section>

      {/* Contact Info + Form */}
      <section className="container-px mx-auto max-w-9xl section-py">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Contact Details */}
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
                  Get in Touch
                </p>
                <div className="space-y-6">
                  <a
                    href="mailto:sales@sellingcameroon.com"
                    className="group flex items-start gap-4"
                  >
                    <Mail size={20} className="mt-0.5 shrink-0 text-brand-red" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-ink-400">
                        Email
                      </p>
                      <p className="mt-1 text-base text-ink-900 transition-colors group-hover:text-brand-red">
                        sales@sellingcameroon.com
                      </p>
                    </div>
                  </a>
                  <a
                    href="tel:+237682960440"
                    className="group flex items-start gap-4"
                  >
                    <Phone size={20} className="mt-0.5 shrink-0 text-brand-red" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-ink-400">
                        Phone
                      </p>
                      <p className="mt-1 text-base text-ink-900 transition-colors group-hover:text-brand-red">
                        +237 682 960 440
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="mt-0.5 shrink-0 text-brand-red" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-ink-400">
                        Location
                      </p>
                      <p className="mt-1 text-base text-ink-900">Douala, Cameroon</p>
                      <p className="text-sm text-ink-500">CEMAC</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Globe size={20} className="mt-0.5 shrink-0 text-brand-red" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.1em] text-ink-400">
                        Website
                      </p>
                      <p className="mt-1 text-base text-ink-900">
                        sellingcameroon.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 overflow-hidden border border-ink-100 bg-ink-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="mx-auto text-brand-red" />
                    <p className="mt-3 text-sm font-medium text-ink-700">
                      Douala, Cameroon
                    </p>
                    <p className="text-xs text-ink-400">CEMAC Region</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-ink-900/5" />
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={1}>
            <div className="lg:col-span-2">
              <div className="border border-ink-100 bg-ink-50 p-6 md:p-12">
                <h2 className="text-2xl font-medium tracking-tight text-ink-900">
                  Request a Quotation
                </h2>
                <p className="mt-2 text-sm text-ink-500">
                  Complete the form below and our team will respond with next steps.
                </p>
                <div className="mt-8">
                  <QuoteForm />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
