import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import HeatLevels from '@/components/HeatLevels';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-white font-body antialiased">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Menu />
        <HeatLevels />
        <Gallery />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
