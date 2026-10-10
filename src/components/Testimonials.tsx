import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  initial: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Marcus T.',
    role: 'Local Foodie',
    rating: 5,
    text: "The Devil's Dare almost killed me. I cried, I sweated, and I went back the next day. This is the best hot chicken in the city, hands down.",
    initial: 'M',
    color: 'from-primary-600 to-accent-600',
  },
  {
    name: 'Sarah K.',
    role: 'Spice Enthusiast',
    rating: 5,
    text: "The X-Hot tender box is my religion. Perfectly crispy, juicy inside, and the heat builds beautifully. The comeback sauce is unreal.",
    initial: 'S',
    color: 'from-accent-600 to-primary-700',
  },
  {
    name: 'James R.',
    role: 'First-Timer',
    rating: 5,
    text: "Started at Country Mild and worked my way up over a month. THG turned me into a heat seeker. The flavors are incredible even before the spice kicks in.",
    initial: 'J',
    color: 'from-primary-500 to-primary-700',
  },
  {
    name: 'Aisha M.',
    role: 'Weekly Regular',
    rating: 5,
    text: "The Korean Fire Chicken is a masterpiece. That gochujang honey glaze hits different. I dream about it. Service is fast and the vibe is electric.",
    initial: 'A',
    color: 'from-accent-500 to-accent-700',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-b from-charcoal-900 to-charcoal-950 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary-600/40" />
          <span className="font-heading text-sm uppercase tracking-[0.3em] text-primary-400">
            Word on the Street
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary-600/40" />
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-white leading-[0.9]">
            THE <span className="gradient-text">HYPE</span> IS REAL
          </h2>
        </div>

        {/* Testimonial display */}
        <div ref={ref} className={`reveal-scale ${isVisible ? 'is-visible' : ''}`}>
          <div className="relative bg-charcoal-800/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Large quote icon */}
            <Quote className="absolute top-6 right-6 w-24 h-24 text-primary-600/10" fill="currentColor" />

            {/* Testimonial content */}
            <div className="relative z-10">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ${
                    active === i
                      ? 'opacity-100 translate-x-0'
                      : 'absolute inset-0 opacity-0 translate-x-8 pointer-events-none'
                  }`}
                  style={{ display: active === i ? 'block' : 'none' }}
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, s) => (
                      <Star
                        key={s}
                        className="w-5 h-5 text-primary-500"
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center font-display text-2xl text-white shadow-lg`}>
                      {testimonial.initial}
                    </div>
                    <div>
                      <div className="font-heading text-lg font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-charcoal-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === i
                    ? 'w-8 bg-gradient-to-r from-primary-500 to-accent-500'
                    : 'w-2 bg-charcoal-700 hover:bg-charcoal-600'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
