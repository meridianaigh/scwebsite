import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { insights } from '@/data/insights';
import ScrollReveal from '@/components/ScrollReveal';

export default function InsightsPage() {
  const { slug } = useParams<{ slug: string }>();

  if (slug) {
    const post = insights.find((p) => p.slug === slug);
    if (!post) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white pt-20">
          <p className="text-lg text-ink-500">Article not found.</p>
          <Link
            to="/insights"
            className="mt-4 text-sm font-medium uppercase tracking-[0.12em] text-ink-900 hover:text-brand-red"
          >
            All Insights
          </Link>
        </div>
      );
    }

    const related = insights.filter((p) => p.slug !== slug).slice(0, 3);

    return (
      <div className="bg-white pt-20">
        {/* Breadcrumb */}
        <section className="container-px mx-auto max-w-9xl pt-8">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-ink-400 transition-colors hover:text-ink-900"
          >
            <ArrowLeft size={14} />
            All Insights
          </Link>
        </section>

        {/* Article Header */}
        <section className="container-px mx-auto max-w-4xl pt-8 md:pt-12">
          <ScrollReveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-red">
              {post.category}
            </p>
            <h1 className="text-display-md font-medium tracking-tight text-ink-900 text-balance">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-ink-400">
              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </ScrollReveal>
        </section>

        {/* Hero Image */}
        <section className="container-px mx-auto max-w-5xl mt-12">
          <ScrollReveal>
            <div className="overflow-hidden bg-ink-50">
              <img
                src={post.image}
                alt={post.title}
                className="h-[300px] w-full object-cover md:h-[480px]"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* Article Body */}
        <section className="container-px mx-auto max-w-3xl py-16 md:py-20">
          <ScrollReveal>
            <p className="text-xl leading-relaxed text-ink-600">
              {post.excerpt}
            </p>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-ink-600">
              <p>
                This article is part of the Selling Cameroon Trade Insights series,
                designed to help international buyers understand the landscape of
                sourcing from Cameroon and the broader CEMAC region.
              </p>
              <p>
                The full editorial content for this article is being prepared. For
                specific questions related to this topic, please contact our team
                directly — we are happy to discuss your sourcing requirements and
                the verification processes that apply to your transaction.
              </p>
              <p>
                Selling Cameroon acts as a trade facilitation, sourcing, buyer
                representation and transaction-support platform. Product
                availability, specifications, certifications, origin, pricing and
                documentation are subject to transaction-specific verification.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Related */}
        <section className="container-px mx-auto max-w-9xl pb-20 md:pb-28">
          <ScrollReveal>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
              Continue Reading
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-px bg-ink-100 md:grid-cols-3">
            {related.map((p, i) => (
              <ScrollReveal key={p.slug} delay={(i + 1) as 1 | 2 | 3}>
                <Link
                  to={`/insights/${p.slug}`}
                  className="group flex h-full flex-col bg-white p-8 transition-all duration-500 hover:bg-ink-900"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-brand-red transition-colors group-hover:text-brand-orange-light">
                    {p.category}
                  </p>
                  <h3 className="mt-3 text-lg font-medium leading-snug text-ink-900 transition-colors group-hover:text-white">
                    {p.title}
                  </h3>
                  <span className="mt-auto pt-6 text-xs text-ink-400 transition-colors group-hover:text-white/40">
                    {p.readTime}
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white pt-20">
      {/* Header */}
      <section className="container-px mx-auto max-w-9xl pt-16 md:pt-24">
        <ScrollReveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
            Insights
          </p>
          <h1 className="text-display-lg font-medium tracking-tight text-ink-900 text-balance">
            Selling Cameroon
            <br />
            Trade Insights
          </h1>
        </ScrollReveal>
      </section>

      {/* Articles Grid */}
      <section className="container-px mx-auto max-w-9xl section-py">
        <div className="grid grid-cols-1 gap-px bg-ink-100 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((post, i) => (
            <ScrollReveal key={post.slug} delay={(i % 3) + 1 as 1 | 2 | 3}>
              <Link
                to={`/insights/${post.slug}`}
                className="group flex h-full flex-col bg-white p-8 transition-all duration-500 hover:bg-ink-900"
              >
                <div className="mb-6 overflow-hidden bg-ink-50">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-brand-red transition-colors group-hover:text-brand-orange-light">
                  {post.category}
                </p>
                <h3 className="mt-3 text-lg font-medium leading-snug text-ink-900 transition-colors group-hover:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 transition-colors group-hover:text-white/60 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="text-xs text-ink-400 transition-colors group-hover:text-white/40">
                    {post.readTime}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
