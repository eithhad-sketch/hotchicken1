import { useState } from 'react';
import { Flame, Instagram, Facebook, Twitter, Youtube, Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const socials = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
  ];

  const links = [
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Heat Levels', href: '#heat' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Visit Us', href: '#visit' },
  ];

  return (
    <footer className="relative bg-charcoal-950 border-t border-white/5 overflow-hidden">
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-600/50 to-transparent" />

      {/* Newsletter strip */}
      <div className="relative py-16 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-radial from-primary-900/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Flame className="w-10 h-10 text-primary-500 mx-auto mb-4" fill="currentColor" />
          <h3 className="font-display text-3xl md:text-4xl text-white mb-3">
            JOIN THE <span className="gradient-text">FIRE SQUAD</span>
          </h3>
          <p className="text-charcoal-300 mb-8 max-w-xl mx-auto">
            Get exclusive drops, secret menu items, and first dibs on new heat levels. No spam, just fire.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full sm:flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-charcoal-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-heading font-semibold uppercase text-sm tracking-wider rounded-full hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary-500/40"
            >
              <Send className="w-4 h-4" />
              {subscribed ? 'Welcome!' : 'Subscribe'}
            </button>
          </form>

          {subscribed && (
            <p className="mt-4 text-sm text-success-400 animate-fade-in">
              You're in. Check your inbox for a welcome surprise.
            </p>
          )}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-7 h-7 text-primary-500" fill="currentColor" />
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl tracking-wider text-white">THG</span>
                <span className="font-heading text-[10px] tracking-[0.3em] text-primary-400 uppercase">Hot Chicken</span>
              </div>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed max-w-sm mb-6">
              Nashville-style hot chicken done right. Seven heat levels, zero shortcuts, and a whole lot of fire.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-charcoal-400 hover:text-white hover:bg-gradient-to-br hover:from-primary-600 hover:to-accent-600 hover:border-transparent transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-white mb-4">Explore</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-charcoal-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-charcoal-400">
                <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                1420 Demonbreun St, Nashville, TN 37203
              </li>
              <li className="flex items-center gap-3 text-sm text-charcoal-400">
                <Phone className="w-4 h-4 text-primary-500 flex-shrink-0" />
                (615) 555-FIRE
              </li>
              <li className="flex items-center gap-3 text-sm text-charcoal-400">
                <Mail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                hello@thgshotchicken.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-500">
            © {new Date().getFullYear()} THG Hot Chicken. All rights reserved. Eat hot, stay cool.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-charcoal-500 hover:text-charcoal-300 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-charcoal-500 hover:text-charcoal-300 transition-colors">Terms</a>
            <a href="#" className="text-xs text-charcoal-500 hover:text-charcoal-300 transition-colors">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
