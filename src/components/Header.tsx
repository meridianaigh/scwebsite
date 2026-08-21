import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Trade Services', path: '/trade-services' },
  { label: 'About', path: '/about' },
  { label: 'Compliance', path: '/compliance' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-ink-100'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-px mx-auto max-w-9xl">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex flex-col leading-none">
            <span
              className={`text-lg font-semibold tracking-tight transition-colors ${
                scrolled ? 'text-ink-900' : 'text-white'
              }`}
            >
              SELLING
            </span>
            <span
              className={`text-lg font-semibold tracking-tight transition-colors ${
                scrolled ? 'text-ink-900' : 'text-white'
              }`}
            >
              CAMEROON
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  scrolled
                    ? isActive(link.path)
                      ? 'text-brand-red'
                      : 'text-ink-700 hover:text-ink-900'
                    : isActive(link.path)
                      ? 'text-brand-orange-light'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className={`hidden px-6 py-2.5 text-sm font-medium uppercase tracking-[0.12em] transition-all duration-300 lg:inline-flex ${
                scrolled
                  ? 'bg-ink-900 text-white hover:bg-brand-red'
                  : 'bg-white text-ink-900 hover:bg-brand-red hover:text-white'
              }`}
            >
              Start Trade
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden ${scrolled ? 'text-ink-900' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-ink-100">
          <nav className="container-px mx-auto max-w-9xl flex flex-col py-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-3 text-base font-medium transition-colors ${
                  isActive(link.path) ? 'text-brand-red' : 'text-ink-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 bg-ink-900 px-6 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-white"
            >
              Start Trade
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
