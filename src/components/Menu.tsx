import { useState } from 'react';
import { Flame, Plus } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  heatLevel: number;
  tag?: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'The Inferno Sandwich',
    description: 'Buttermilk-brised breast, slaw, pickles, comeback sauce on a brioche bun. Brushed with our hottest glaze.',
    price: '$14',
    image: 'https://images.pexels.com/photos/8130750/pexels-photo-8130750.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    heatLevel: 6,
    tag: 'Signature',
  },
  {
    name: 'Classic Hot Tender Box',
    description: 'Three hand-breaded tenders, fries, pickles, and white bread. The Nashville standard.',
    price: '$16',
    image: 'https://images.pexels.com/photos/33101863/pexels-photo-33101863.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    heatLevel: 4,
  },
  {
    name: 'Smoke & Fire Wings',
    description: 'Eight wings tossed in smoked chili glaze. Served with blue cheese and celery.',
    price: '$13',
    image: 'https://images.pexels.com/photos/27562875/pexels-photo-27562875.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    heatLevel: 5,
    tag: 'Fan Favorite',
  },
  {
    name: 'The Clucker Combo',
    description: 'Half chicken, two sides, pickles, and Texas toast. Built for the hungry.',
    price: '$22',
    image: 'https://images.pexels.com/photos/6941026/pexels-photo-6941026.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    heatLevel: 3,
  },
  {
    name: 'Crispy Tender Basket',
    description: 'Four golden tenders with fries and two house sauces. Mild and mighty.',
    price: '$15',
    image: 'https://images.pexels.com/photos/37228290/pexels-photo-37228290.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    heatLevel: 2,
  },
  {
    name: 'Devil\'s Dare Plate',
    description: 'Two reaper-glazed tenders, ghost pepper fries, and a waiver to sign. Not for the faint of heart.',
    price: '$18',
    image: 'https://images.pexels.com/photos/17398001/pexels-photo-17398001.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    heatLevel: 7,
    tag: 'Hottest',
  },
  {
    name: 'Buffalo Wing Platter',
    description: 'Twelve buffalo wings with fries, dip, and a cold drink. Perfect for sharing.',
    price: '$20',
    image: 'https://images.pexels.com/photos/7734563/pexels-photo-7734563.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    heatLevel: 4,
  },
  {
    name: 'Korean Fire Chicken',
    description: 'Double-fried wings glazed with gochujang honey. Sweet heat that lingers.',
    price: '$15',
    image: 'https://images.pexels.com/photos/13182327/pexels-photo-13182327.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    heatLevel: 5,
  },
];

const categories = ['All', 'Signature', 'Wings', 'Tenders', 'Hottest'];

function HeatDots({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 7 }).map((_, i) => (
        <Flame
          key={i}
          className={`w-3 h-3 transition-all duration-300 ${
            i < level
              ? level >= 6
                ? 'text-accent-500'
                : level >= 4
                ? 'text-primary-500'
                : 'text-warning-500'
              : 'text-charcoal-700'
          }`}
          fill={i < level ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter((item) => {
        if (activeCategory === 'Signature') return item.tag === 'Signature';
        if (activeCategory === 'Hottest') return item.heatLevel >= 6;
        if (activeCategory === 'Wings') return item.name.toLowerCase().includes('wing');
        if (activeCategory === 'Tenders') return item.name.toLowerCase().includes('tender') || item.name.toLowerCase().includes('clucker');
        return true;
      });

  return (
    <section id="menu" className="relative py-24 md:py-36 bg-gradient-to-b from-charcoal-950 to-charcoal-900 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary-600/40" />
          <span className="font-heading text-sm uppercase tracking-[0.3em] text-primary-400">
            The Menu
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary-600/40" />
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-7xl text-white leading-[0.9]">
            FUEL YOUR <span className="gradient-text">FIRE</span>
          </h2>
          <p className="mt-4 text-charcoal-300 text-lg max-w-2xl mx-auto">
            Every dish is made to order. Choose your heat. Brave the blaze.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 font-heading text-sm uppercase tracking-wider rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/30 scale-105'
                  : 'bg-white/5 text-charcoal-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div
          ref={ref}
          className={`stagger-children ${isVisible ? 'is-visible' : ''} grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}
        >
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="group relative bg-charcoal-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-primary-600/30 hover-lift transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 image-zoom overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/20 to-transparent" />

                {/* Tag */}
                {item.tag && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-heading text-[10px] uppercase tracking-wider rounded-full shadow-lg">
                    {item.tag}
                  </div>
                )}

                {/* Price */}
                <div className="absolute top-3 right-3 w-12 h-12 bg-charcoal-950/80 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
                  <span className="font-display text-lg text-primary-400">{item.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-sm text-charcoal-400 leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Heat level */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-[10px] uppercase tracking-wider text-charcoal-500">Heat</span>
                    <HeatDots level={item.heatLevel} />
                  </div>
                  <button className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-primary-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Plus className="w-4 h-4 text-charcoal-300 group-hover:text-white transition-colors duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
