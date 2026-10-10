import { Flame, Award, Heart } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Story() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal<HTMLDivElement>();

  const stats = [
    { icon: Flame, value: '2014', label: 'Year Founded', desc: 'A fire was born' },
    { icon: Award, value: '12+', label: 'Awards Won', desc: 'Best chicken in town' },
    { icon: Heart, value: '500K+', label: 'Customers Served', desc: 'And counting daily' },
  ];

  return (
    <section id="story" className="relative py-24 md:py-36 bg-charcoal-950 overflow-hidden">
      {/* Decorative flame background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-primary-900/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 text-[20rem] font-display text-white/[0.02] select-none pointer-events-none leading-none">
        FIRE
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary-600/40" />
          <span className="font-heading text-sm uppercase tracking-[0.3em] text-primary-400">
            Our Story
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary-600/40" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <div
            ref={leftRef}
            className={`reveal-left ${leftVisible ? 'is-visible' : ''} relative`}
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden image-zoom shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5779781/pexels-photo-5779781.jpeg?auto=compress&cs=tinysrgb&h=800&w=600"
                alt="Chef grilling with flames"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
            </div>

            {/* Floating accent image */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-charcoal-950 shadow-2xl image-zoom hidden sm:block animate-float">
              <img
                src="https://images.pexels.com/photos/9207044/pexels-photo-9207044.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                alt="Spicy fried chicken"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Flame badge */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
              <Flame className="w-10 h-10 text-white" fill="currentColor" />
            </div>
          </div>

          {/* Right: Text content */}
          <div
            ref={rightRef}
            className={`reveal-right ${rightVisible ? 'is-visible' : ''} space-y-6`}
          >
            <h2 className="font-display text-5xl md:text-6xl leading-[0.9] text-white">
              BORN FROM <span className="gradient-text">FLAME</span> &
              <br />BUILT ON <span className="text-stroke">PASSION</span>
            </h2>

            <p className="text-lg text-charcoal-200 leading-relaxed">
              It started with a family recipe, a cast-iron skillet, and a dare too
              hot to refuse. What began as a backyard cookout tradition became
              <span className="text-primary-400 font-semibold"> THG Hot Chicken</span> —
              a shrine to Nashville-style heat done right.
            </p>

            <p className="text-base text-charcoal-300 leading-relaxed">
              Every bird is brined for 24 hours, hand-dredged in our secret spice
              blend, and fried to a shatteringly crisp golden crust. Then comes the
              glaze — a lacquer of rendered fat and chili that clings to every
              ridge. Seven heat levels. Zero shortcuts.
            </p>

            {/* Signature */}
            <div className="pt-4">
              <p className="font-display text-2xl text-primary-400 italic">
                "If you're not sweating, you're not trying hard enough."
              </p>
              <p className="mt-2 font-heading text-sm uppercase tracking-widest text-charcoal-400">
                — The THG Crew
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className={`stagger-children ${statsVisible ? 'is-visible' : ''} mt-24 grid sm:grid-cols-3 gap-6`}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative p-8 bg-charcoal-900/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-primary-600/30 hover-lift transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <stat.icon className="w-8 h-8 text-primary-500 mb-4" fill="currentColor" />
              <div className="font-display text-4xl text-white mb-1">{stat.value}</div>
              <div className="font-heading text-sm uppercase tracking-wider text-primary-400">{stat.label}</div>
              <div className="text-sm text-charcoal-400 mt-1">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
