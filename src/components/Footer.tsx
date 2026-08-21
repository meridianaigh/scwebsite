import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const footerNav = [
  { label: 'Products', path: '/products' },
  { label: 'Trade Services', path: '/trade-services' },
  { label: 'Compliance', path: '/compliance' },
  { label: 'About', path: '/about' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
];

const legalNav = [
  { label: 'Privacy Policy', path: '/legal/privacy' },
  { label: 'Terms', path: '/legal/terms' },
  { label: 'Trade Disclaimer', path: '/legal/trade-disclaimer' },
  { label: 'Compliance Disclaimer', path: '/legal/compliance-disclaimer' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-px mx-auto max-w-9xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none">
              <span className="text-xl font-semibold tracking-tight">SELLING</span>
              <span className="text-xl font-semibold tracking-tight">CAMEROON</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              The Trade Gateway to Central Africa
            </p>
            <p className="mt-2 text-xs text-white/40">
              A subsidiary of Belo Finance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Navigation
            </p>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Legal
            </p>
            <ul className="space-y-3">
              {legalNav.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              Contact
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white/40" />
                <div className="text-sm text-white/70">
                  Douala · Cameroon<br />CEMAC
                </div>
              </div>
              <a
                href="mailto:sales@sellingcameroon.com"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail size={16} className="shrink-0 text-white/40" />
                sales@sellingcameroon.com
              </a>
              <a
                href="tel:+237682960440"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Phone size={16} className="shrink-0 text-white/40" />
                +237 682 960 440
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-start justify-between gap-4 py-8 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/40">
            <span>© {new Date().getFullYear()} Selling Cameroon</span>
            <span className="hidden md:inline">·</span>
            <span>sellingcameroon.com</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/40 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-xs text-white/40 transition-colors hover:text-white"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
