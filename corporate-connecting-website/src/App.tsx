import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-light-grey font-sans text-dark-grey">
      <Navbar />
      <Hero />
      <TrustBar />
      <Products />
      <WhyUs />
      <Reviews />
      <CTABanner />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
