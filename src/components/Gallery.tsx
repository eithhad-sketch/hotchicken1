import { useScrollReveal } from '@/hooks/useScrollReveal';

interface GalleryImage {
  src: string;
  alt: string;
  span: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/9207044/pexels-photo-9207044.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
    alt: 'Spicy fried chicken with chili peppers',
    span: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/8130750/pexels-photo-8130750.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Crispy chicken burger held in hand',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/7479383/pexels-photo-7479383.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Golden french fries on black surface',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/27668695/pexels-photo-27668695.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
    alt: 'Hot chicken wings with fries',
    span: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/37014613/pexels-photo-37014613.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Crispy fried chicken close-up',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/17121731/pexels-photo-17121731.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Crispy chicken burgers with chilies',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/17398001/pexels-photo-17398001.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
    alt: 'Spicy wing in black glove',
    span: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/15910249/pexels-photo-15910249.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Fried chicken platter with fries',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/33037756/pexels-photo-33037756.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    alt: 'Bucket of crispy fried wings',
    span: '',
  },
];

export default function Gallery() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="gallery" className="relative py-24 md:py-36 bg-charcoal-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary-600/40" />
          <span className="font-heading text-sm uppercase tracking-[0.3em] text-primary-400">
            The Gallery
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary-600/40" />
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-white leading-[0.9]">
            FEAST FOR <span className="gradient-text">THE EYES</span>
          </h2>
          <p className="mt-4 text-charcoal-300 text-lg max-w-2xl mx-auto">
            A visual journey through the heat. Every plate tells a story of fire and flavor.
          </p>
        </div>

        {/* Masonry grid */}
        <div
          ref={ref}
          className={`stagger-children ${isVisible ? 'is-visible' : ''} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4`}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden image-zoom ${img.span} cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-heading text-sm text-white uppercase tracking-wider">
                  {img.alt}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-primary-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full font-heading text-sm uppercase tracking-wider text-charcoal-200 hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 animate-pulse" />
            Follow @thghotchkicken
          </a>
        </div>
      </div>
    </section>
  );
}
