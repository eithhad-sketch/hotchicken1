import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const hours = [
  { day: 'Monday', time: '11:00 AM — 10:00 PM' },
  { day: 'Tuesday', time: '11:00 AM — 10:00 PM' },
  { day: 'Wednesday', time: '11:00 AM — 10:00 PM' },
  { day: 'Thursday', time: '11:00 AM — 11:00 PM' },
  { day: 'Friday', time: '11:00 AM — 12:00 AM' },
  { day: 'Saturday', time: '10:00 AM — 12:00 AM' },
  { day: 'Sunday', time: '10:00 AM — 9:00 PM' },
];

export default function Visit() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="visit" className="relative py-24 md:py-36 bg-charcoal-950 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-radial from-primary-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary-600/40" />
          <span className="font-heading text-sm uppercase tracking-[0.3em] text-primary-400">
            Come Get Some
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary-600/40" />
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-white leading-[0.9]">
            FIND YOUR <span className="gradient-text">FIRE</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info cards */}
          <div ref={leftRef} className={`reveal-left ${leftVisible ? 'is-visible' : ''} space-y-6`}>
            {/* Location */}
            <div className="group p-6 bg-charcoal-900/60 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-primary-600/30 transition-all duration-500 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-1 uppercase tracking-wide">Location</h3>
                  <p className="text-charcoal-300">1420 Demonbreun Street</p>
                  <p className="text-charcoal-300">Nashville, TN 37203</p>
                  <button className="mt-3 inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors">
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group p-6 bg-charcoal-900/60 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-primary-600/30 transition-all duration-500 hover-lift">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-white mb-1 uppercase tracking-wide">Call Us</h3>
                <p className="text-charcoal-300 text-sm">(615) 555-FIRE</p>
              </div>

              <div className="group p-6 bg-charcoal-900/60 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-primary-600/30 transition-all duration-500 hover-lift">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-white mb-1 uppercase tracking-wide">Email</h3>
                <p className="text-charcoal-300 text-sm">hello@thgshotchicken.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="p-6 bg-charcoal-900/60 backdrop-blur-sm border border-white/5 rounded-2xl">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-5 h-5 text-primary-400" />
                <h3 className="font-heading text-lg font-semibold text-white uppercase tracking-wide">Hours</h3>
              </div>
              <ul className="space-y-3">
                {hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0">
                    <span className="text-charcoal-300 text-sm font-medium">{h.day}</span>
                    <span className="text-charcoal-200 text-sm font-heading">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Map placeholder / image */}
          <div ref={rightRef} className={`reveal-right ${rightVisible ? 'is-visible' : ''} relative`}>
            <div className="relative rounded-2xl overflow-hidden h-full min-h-[500px] border border-white/5">
              <img
                src="https://images.pexels.com/photos/4091080/pexels-photo-4091080.jpeg?auto=compress&cs=tinysrgb&h=800&w=600"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />

              {/* Overlay info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500" />
                  </span>
                  <span className="font-heading text-sm uppercase tracking-wider text-white">Open Now</span>
                </div>
                <h3 className="font-display text-3xl text-white mb-2">The THG Diner</h3>
                <p className="text-charcoal-200 text-sm max-w-xs">
                  Dine in, take out, or get it delivered. Walk-ins welcome, but lines form after 6 PM.
                </p>
                <button className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-heading font-semibold uppercase text-sm tracking-wider rounded-full hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary-500/40">
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
