import type { ReactNode } from 'react';
import ScrollReveal from './ScrollReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <ScrollReveal className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-medium uppercase tracking-[0.2em] ${
            dark ? 'text-white/40' : 'text-ink-400'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-display-sm font-medium tracking-tight text-balance ${
          dark ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-lg leading-relaxed ${
            dark ? 'text-white/60' : 'text-ink-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
