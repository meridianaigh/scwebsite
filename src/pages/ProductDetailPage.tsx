import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Shield } from 'lucide-react';
import { getProduct, products } from '@/data/products';
import ScrollReveal from '@/components/ScrollReveal';
import QuoteForm from '@/components/QuoteForm';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : undefined;

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white pt-20">
        <p className="text-lg text-ink-500">Product not found.</p>
        <Link
          to="/products"
          className="mt-4 text-sm font-medium uppercase tracking-[0.12em] text-ink-900 hover:text-brand-red"
        >
          View All Products
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="bg-white pt-20">
      {/* Breadcrumb */}
      <section className="container-px mx-auto max-w-9xl pt-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-ink-400 transition-colors hover:text-ink-900"
        >
          <ArrowLeft size={14} />
          All Products
        </Link>
      </section>

      {/* Hero Section */}
      <section className="container-px mx-auto max-w-9xl pt-8 md:pt-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <ScrollReveal>
            <div className="relative overflow-hidden bg-ink-50">
              <img
                src={product.image}
                alt={product.name}
                className="h-[400px] w-full object-cover md:h-[560px]"
              />
              <div className="absolute left-6 top-6 bg-white px-4 py-2">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-900">
                  {product.number}
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={1}>
            <div className="flex flex-col">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
                {product.tagline}
              </p>
              <h1 className="text-display-md font-medium tracking-tight text-ink-900">
                {product.name}
              </h1>

              {/* Quick Specs */}
              <div className="mt-8 grid grid-cols-2 gap-px bg-ink-100">
                <div className="bg-white p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink-400">
                    MOQ
                  </p>
                  <p className="mt-1 text-lg font-medium text-ink-900">{product.moq}</p>
                </div>
                <div className="bg-white p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink-400">
                    Lead Time
                  </p>
                  <p className="mt-1 text-lg font-medium text-ink-900">
                    {product.leadTime}
                  </p>
                </div>
              </div>

              {/* Origin */}
              <div className="mt-8">
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink-400">
                  Indicative Sourcing
                </p>
                <p className="mt-2 text-base leading-relaxed text-ink-600">
                  {product.origin}
                </p>
              </div>

              {/* Formats */}
              <div className="mt-8">
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink-400">
                  Available Formats
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.formats.map((format) => (
                    <span
                      key={format}
                      className="border border-ink-200 px-4 py-2 text-sm text-ink-700"
                    >
                      {format}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="#quote"
                  className="group inline-flex items-center gap-2 bg-ink-900 px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-brand-red"
                >
                  Request a Quotation
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Precious Metals Special Section */}
      {product.isPreciousMetals && (
        <section className="container-px mx-auto max-w-9xl mt-20 md:mt-28">
          <ScrollReveal>
            <div className="border border-ink-100 bg-ink-50 p-8 md:p-12">
              <div className="flex items-center gap-3">
                <Shield size={20} className="text-brand-red" />
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-red">
                  Important Notice
                </p>
              </div>
              <h3 className="mt-4 text-2xl font-medium tracking-tight text-ink-900">
                Buyer Representation & Trade Facilitation
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-600">
                Selling Cameroon does not currently hold a gold export license. The
                company acts as a trust bridge and facilitator, supporting qualified
                buyers through the following:
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {product.preciousMetalsDescription?.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border border-ink-100 bg-white p-4"
                  >
                    <Check size={16} className="shrink-0 text-brand-red" />
                    <span className="text-sm text-ink-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm leading-relaxed text-ink-400">
                Target buyer markets: Qatar · Singapore · China. Product availability,
                specifications, certifications, origin, pricing and documentation are
                subject to transaction-specific verification.
              </p>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Detailed Specs */}
      <section className="container-px mx-auto max-w-9xl mt-20 md:mt-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Buyer Specifications */}
          {!product.isPreciousMetals && product.buyerSpecs.length > 0 && (
            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
                Buyer Specifications May Include
              </p>
              <ul className="mt-6 space-y-3">
                {product.buyerSpecs.map((spec) => (
                  <li key={spec} className="flex items-center gap-3">
                    <span className="h-1 w-1 shrink-0 bg-brand-red" />
                    <span className="text-sm text-ink-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          )}

          {/* Logistics */}
          <ScrollReveal delay={1}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
              Packaging
            </p>
            <p className="mt-6 text-sm leading-relaxed text-ink-600">
              {product.packaging}
            </p>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
              Available Ports
            </p>
            <ul className="mt-4 space-y-2">
              {product.ports.map((port) => (
                <li key={port} className="text-sm text-ink-700">
                  {port}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Verification */}
          <ScrollReveal delay={2}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
              Quality Verification
            </p>
            <p className="mt-6 text-sm leading-relaxed text-ink-600">
              Verification procedures are determined according to the product,
              transaction structure and destination requirements. Where required,
              independent sampling, inspection and laboratory testing can be
              coordinated through appropriate accredited or recognized testing
              providers.
            </p>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
              Documentation
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              Required commercial, export, quality and shipping documents are
              coordinated according to the product and destination.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="container-px mx-auto max-w-9xl mt-24 md:mt-32">
        <ScrollReveal>
          <div className="mb-12">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
              Request a Quotation
            </p>
            <h2 className="text-display-sm font-medium tracking-tight text-ink-900">
              Tell us what you need.
            </h2>
            <p className="mt-4 max-w-xl text-base text-ink-500">
              Specify your product, quantity and destination. Our team will review
              your requirements and respond with next steps.
            </p>
          </div>
          <div className="border border-ink-100 bg-ink-50 p-6 md:p-12">
            <QuoteForm defaultProduct={product.name} />
          </div>
        </ScrollReveal>
      </section>

      {/* Related Products */}
      <section className="container-px mx-auto max-w-9xl mt-24 md:mt-32">
        <ScrollReveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
            Other Products
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-px bg-ink-100 md:grid-cols-3">
          {relatedProducts.map((p, i) => (
            <ScrollReveal key={p.slug} delay={(i + 1) as 1 | 2 | 3}>
              <Link
                to={`/products/${p.slug}`}
                className="group flex flex-col bg-white p-6 transition-all duration-500 hover:bg-ink-900"
              >
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-400 transition-colors group-hover:text-white/40">
                  {p.number}
                </span>
                <h3 className="mt-4 text-lg font-medium text-ink-900 transition-colors group-hover:text-white">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-ink-400 transition-colors group-hover:text-white/60">
                  {p.tagline}
                </p>
                <span className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-ink-900 transition-colors group-hover:text-brand-orange-light">
                  {p.ctaLabel}
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
