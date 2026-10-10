import { Flame, Skull, Zap, AlertTriangle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface HeatLevel {
  name: string;
  scoville: string;
  color: string;
  glow: string;
  icon: typeof Flame;
  description: string;
}

const heatLevels: HeatLevel[] = [
  {
    name: 'No Heat',
    scoville: '0 SHU',
    color: 'from-success-500 to-success-600',
    glow: 'shadow-success-500/20',
    icon: Flame,
    description: 'Classic crispy chicken. No spice, all flavor. Perfect for the cautious.',
  },
  {
    name: 'Country Mild',
    scoville: '500 SHU',
    color: 'from-warning-500 to-primary-500',
    glow: 'shadow-warning-500/20',
    icon: Flame,
    description: 'A gentle warmth that tingles without the burn. The gateway to heat.',
  },
  {
    name: 'Hot',
    scoville: '4,500 SHU',
    color: 'from-primary-500 to-primary-600',
    glow: 'shadow-primary-500/20',
    icon: Flame,
    description: 'The Nashville standard. Bold, peppery, and builds with every bite.',
  },
  {
    name: 'X-Hot',
    scoville: '15,000 SHU',
    color: 'from-primary-600 to-accent-600',
    glow: 'shadow-primary-600/30',
    icon: Zap,
    description: 'Serious heat. You will sweat. You will love it. Tissues provided.',
  },
  {
    name: 'Reaper',
    scoville: '50,000 SHU',
    color: 'from-accent-600 to-accent-700',
    glow: 'shadow-accent-600/30',
    icon: AlertTriangle,
    description: 'Carolina Reaper-infused. Sign a waiver. We are not joking.',
  },
  {
    name: 'Devil\'s Dare',
    scoville: '100,000+ SHU',
    color: 'from-accent-700 to-charcoal-900',
    glow: 'shadow-accent-700/40',
    icon: Skull,
    description: 'Ghost pepper extract and reaper mash. Survive and get a photo on the wall.',
  },
];

export default function HeatLevels() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="heat" className="relative py-24 md:py-36 bg-charcoal-900 overflow-hidden">
      {/* Background flame decoration */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-900/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-[15rem] font-display text-white/[0.02] select-none pointer-events-none leading-none whitespace-nowrap">
        HEAT
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent-600/40" />
          <span className="font-heading text-sm uppercase tracking-[0.3em] text-accent-400">
            Choose Your Weapon
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent-600/40" />
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-white leading-[0.9]">
            SEVEN LEVELS <span className="text-glow-red gradient-text">OF PAIN</span>
          </h2>
          <p className="mt-4 text-charcoal-300 text-lg max-w-2xl mx-auto">
            From "no big deal" to "call your mother." Pick wisely. We carry tissues.
          </p>
        </div>

        {/* Heat level cards */}
        <div
          ref={ref}
          className={`stagger-children ${isVisible ? 'is-visible' : ''} grid sm:grid-cols-2 lg:grid-cols-3 gap-6`}
        >
          {heatLevels.map((level, i) => (
            <div
              key={level.name}
              className={`group relative p-8 rounded-2xl bg-charcoal-800/60 border border-white/5 hover:border-white/20 hover-lift transition-all duration-500 hover:shadow-2xl ${level.glow}`}
            >
              {/* Level number */}
              <div className="absolute top-6 right-6 font-display text-6xl text-white/5 group-hover:text-white/10 transition-colors duration-500">
                {i + 1}
              </div>

              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <level.icon className="w-7 h-7 text-white" fill="currentColor" />
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${level.color} blur-md opacity-50 -z-10`} />
              </div>

              {/* Name */}
              <h3 className="font-display text-2xl text-white mb-2 uppercase tracking-wide">
                {level.name}
              </h3>

              {/* Scoville */}
              <div className={`inline-block px-3 py-1 bg-gradient-to-r ${level.color} bg-clip-text text-transparent font-heading text-sm font-bold uppercase tracking-wider mb-4`}>
                {level.scoville}
              </div>

              {/* Description */}
              <p className="text-sm text-charcoal-400 leading-relaxed">
                {level.description}
              </p>

              {/* Heat bar */}
              <div className="mt-6 h-1.5 rounded-full bg-charcoal-700 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${level.color} transition-all duration-1000 group-hover:w-full`}
                  style={{ width: `${((i + 1) / 6) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Warning banner */}
        <div className="mt-12 relative p-6 bg-accent-950/30 border border-accent-800/30 rounded-2xl flex items-center gap-4 overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-20" />
          <AlertTriangle className="w-8 h-8 text-accent-500 flex-shrink-0 relative z-10" />
          <p className="text-sm text-charcoal-200 relative z-10">
            <span className="font-heading font-bold uppercase tracking-wider text-accent-400">Warning: </span>
            THG Hot Chicken is not liable for tears, sweat, regret, or spontaneous declarations of love for spicy food. Eat responsibly. Milk available for $3.
          </p>
        </div>
      </div>
    </section>
  );
}
