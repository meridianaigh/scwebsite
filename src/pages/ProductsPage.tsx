import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';

export default function ProductsPage() {
  return (
    <div className="bg-white pt-20">
      {/* Page Header */}
      <section className="container-px mx-auto max-w-9xl pt-16 md:pt-24">
        <ScrollReveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
            Products
          </p>
          <h1 className="text-display-lg font-medium tracking-tight text-ink-900 text-balance">
            Products from Central Africa.
            <br />
            Prepared for global trade.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500">
            We connect buyers with vetted suppliers across selected agricultural,
            commodity and precious-metal markets.
          </p>
        </ScrollReveal>
      </section>

      {/* Product Grid */}
      <section className="container-px mx-auto max-w-9xl section-py">
        <div className="grid grid-cols-1 gap-px bg-ink-100 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ScrollReveal key={product.slug} delay={(i % 3) + 1 as 1 | 2 | 3}>
              <Link
                to={`/products/${product.slug}`}
                className="group flex h-full flex-col bg-white p-8 transition-all duration-500 hover:bg-ink-900"
              >
                {/* Number */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-400 transition-colors group-hover:text-white/40">
                    {product.number}
                  </span>
                  <ArrowRight
                    size={20}
                    className="text-ink-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>

                {/* Image */}
                <div className="mb-6 overflow-hidden bg-ink-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <h3 className="text-xl font-medium tracking-tight text-ink-900 transition-colors group-hover:text-white">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-400 transition-colors group-hover:text-white/60">
                    {product.tagline}
                  </p>

                  {/* Specs */}
                  <div className="mt-6 space-y-2 border-t border-ink-100 pt-4 transition-colors group-hover:border-white/10">
                    {product.specs.slice(0, 3).map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-center justify-between text-xs"
                      >
                        <span className="text-ink-400 transition-colors group-hover:text-white/40">
                          {spec.label}
                        </span>
                        <span className="font-medium text-ink-700 transition-colors group-hover:text-white/80">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-6">
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-ink-900 transition-colors group-hover:text-brand-orange-light">
                      {product.ctaLabel}
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
