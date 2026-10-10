import { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Heat Levels', href: '#heat' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#visit' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal-950/90 backdrop-blur-xl py-3 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-2 group"
        >
          <div className="relative">
            <Flame
              className="w-8 h-8 text-primary-500 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
              fill="currentColor"
            />
            <div className="absolute inset-0 blur-md bg-primary-500/40 -z-10" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl tracking-wider text-white">
              THG
            </span>
            <span className="font-heading text-[10px] tracking-[0.3em] text-primary-400 uppercase">
              Hot Chicken
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative px-4 py-2 font-heading text-sm font-medium uppercase tracking-wider text-charcoal-200 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8 -translate-x-1/2" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => handleNavClick('#menu')}
          className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-heading font-semibold uppercase text-sm tracking-wider rounded-full hover:shadow-lg hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300"
        >
          <Flame className="w-4 h-4" fill="currentColor" />
          Order Now
        </button>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="bg-charcoal-900/95 backdrop-blur-xl px-6 py-4 space-y-1 border-t border-white/5">
          {links.map((link, i) => (
            <li
              key={link.href}
              style={{
                transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
              }}
              className={`transform transition-all duration-300 ${
                menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
            >
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block py-3 font-heading text-lg font-medium uppercase tracking-wider text-charcoal-200 hover:text-primary-400 border-b border-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <button
              onClick={() => handleNavClick('#menu')}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-heading font-semibold uppercase text-sm tracking-wider rounded-full"
            >
              <Flame className="w-4 h-4" fill="currentColor" />
              Order Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
