import { useRef, useState } from 'react';
import { Flame, ChevronDown, Star, UtensilsCrossed } from 'lucide-react';

const HERO_VIDEO = 'https://cdn.coverr.co/videos/coverr-cooking-sausages-over-fire-5043/1080p.mp4';
const HERO_FALLBACK = 'https://images.pexels.com/photos/37076319/pexels-photo-37076319.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const scrollToStory = () => {
    const el = document.querySelector('#story');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={HERO_FALLBACK}
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        )}

        {/* Fallback image while loading or on error */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ backgroundImage: `url(${HERO_FALLBACK})` }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/60 to-charcoal-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/70 via-transparent to-charcoal-950/40" />
        <div className="absolute inset-0 bg-grain opacity-40" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-600/15 rounded-full blur-3xl animate-float-delayed pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20 pb-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full animate-fade-in-down">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
          </span>
          <span className="font-heading text-xs uppercase tracking-[0.2em] text-white">
            Nashville-Style Hot Chicken
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-[0.85] tracking-tight text-white animate-fade-in-up">
          <span className="block">FEAR THE</span>
          <span className="block gradient-text text-glow">FIRE</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-charcoal-100 font-body font-light animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          Crispy, juicy, blisteringly hot chicken that sets your soul on fire.
          Crafted with Nashville tradition and unapologetic heat.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <button
            onClick={() => {
              const el = document.querySelector('#menu');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-heading font-bold uppercase text-base tracking-wider rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:shadow-primary-500/40"
          >
            <span className="relative z-10 flex items-center gap-2">
              <UtensilsCrossed className="w-5 h-5" />
              Explore the Menu
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => {
              const el = document.querySelector('#visit');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-heading font-bold uppercase text-base tracking-wider rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Find Us
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex items-center justify-center gap-8 md:gap-16 animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
          {[
            { icon: Star, value: '4.9', label: 'Avg Rating', fill: true },
            { icon: Flame, value: '7', label: 'Heat Levels', fill: true },
            { icon: UtensilsCrossed, value: '25K+', label: 'Fed Monthly' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <stat.icon className="w-5 h-5 text-primary-400 mb-1" fill={stat.fill ? 'currentColor' : 'none'} />
              <span className="font-display text-2xl md:text-3xl text-white">{stat.value}</span>
              <span className="font-heading text-[10px] md:text-xs uppercase tracking-widest text-charcoal-300">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToStory}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 animate-bounce-subtle"
      >
        <span className="font-heading text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
}
