import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, CheckCircle, Shield, Users, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

const Counter = ({ end, duration = 2, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-navy text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 40 M 0 0 L 40 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-gold/20 text-gold text-sm font-semibold tracking-wider mb-6 border border-gold/30">
              PREMIUM OFFICE FURNITURE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Quality Office Furniture Solutions in Bengaluru
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Complete home and office interior solutions, specialized workstation setups, reception tables, and premium seating including office and cafe chairs. We specialize in POP, false ceilings, and expert glass partition work.
              <br className="hidden sm:block" />
              <span className="mt-2 block">We also offer a premium range of refurbished office chairs, professional flooring mats, and expert glass partition solutions.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16 lg:mb-0">
              <button
                onClick={() => scrollToSection('#products')}
                className="flex items-center justify-center gap-2 bg-gold hover:bg-yellow-500 text-navy font-bold px-8 py-4 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Explore Products
                <ArrowRight size={20} />
              </button>
              <a
                href="https://wa.me/919945111867"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-4 rounded-md transition-all backdrop-blur-sm"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gold rounded-2xl transform translate-x-4 translate-y-4 opacity-50"></div>
            <img
              src="https://picsum.photos/seed/office/1000/600"
              alt="Modern Office Setup"
              className="relative z-10 rounded-2xl shadow-2xl object-cover w-full h-[500px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-gold mb-2">
              <Users size={24} />
              <span className="text-3xl font-bold font-heading"><Counter end={500} suffix="+" /></span>
            </div>
            <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Happy Clients</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-gold mb-2">
              <CheckCircle size={24} />
              <span className="text-3xl font-bold font-heading"><Counter end={1000} suffix="+" /></span>
            </div>
            <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Chairs Sold</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-gold mb-2">
              <Award size={24} />
              <span className="text-3xl font-bold font-heading"><Counter end={5} suffix="+" /></span>
            </div>
            <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Years Experience</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-gold mb-2">
              <Shield size={24} />
              <span className="text-3xl font-bold font-heading">100%</span>
            </div>
            <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Warranty Included</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
