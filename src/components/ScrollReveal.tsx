import { useRef, type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
}

export default function ScrollReveal({ children, className = '', delay }: ScrollRevealProps) {
  const { ref, visible } = useReveal();
  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${delayClass} ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
