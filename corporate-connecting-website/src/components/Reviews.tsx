import { motion } from 'motion/react';
import { Star, Quote, MapPin, ShieldCheck, Handshake } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const reviews = [
  {
    text: "Good quality products are available. They provide warranty and repair services too.",
    author: "Verified Buyer",
    rating: 5,
  },
  {
    text: "Reasonable price, quick service and kind customer service. Would definitely recommend.",
    author: "Verified Buyer",
    rating: 5,
  },
  {
    text: "Huge collection of refurbished brand chairs. Warranty was also claimed on time — very smooth process.",
    author: "Verified Buyer",
    rating: 5,
  },
  {
    text: "Premium quality office chairs under budget. Fully satisfied with the purchase.",
    author: "Verified Buyer",
    rating: 5,
  },
  {
    text: "Excellent products and service. Must visit for office furniture and interior work.",
    author: "Verified Buyer",
    rating: 5,
  },
];

const credentials = [
  {
    icon: <MapPin className="w-8 h-8 text-gold" />,
    title: "Established presence in Bengaluru's Begur area",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-gold" />,
    title: "Secure & transparent transactions",
  },
  {
    icon: <Handshake className="w-8 h-8 text-gold" />,
    title: "Serving corporates, startups & home offices",
  },
];

export default function Reviews() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      if (!isHovered) {
        scrollPos += 1;
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Don't just take our word for it. Here's what businesses in Bengaluru think about our furniture.
          </motion.p>
        </div>

        {/* Auto-scrolling Carousel */}
        <div
          className="relative mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden whitespace-nowrap py-4"
            style={{ width: '200%' }} // Ensure enough width for seamless loop
          >
            {/* Duplicate array for seamless scrolling */}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="inline-block w-80 md:w-96 bg-light-grey rounded-2xl p-8 border border-gray-100 shadow-sm whitespace-normal flex-shrink-0"
              >
                <Quote className="w-10 h-10 text-gold/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center">
                    <span className="text-navy font-bold">{review.author.charAt(0)}</span>
                  </div>
                  <span className="font-semibold text-navy">{review.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-24"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-bold text-navy">4.5</span>
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => <Star key={i} className="w-6 h-6 fill-gold text-gold" />)}
              <Star className="w-6 h-6 fill-gold/50 text-gold" />
            </div>
          </div>
          <p className="text-gray-600 mb-4">Based on Google Reviews</p>
          <a
            href="#" // Replace with actual Google Maps link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-semibold hover:underline flex items-center gap-1"
          >
            See All Reviews <span aria-hidden="true">&rarr;</span>
          </a>
        </motion.div>

        {/* Credentials Section */}
        <div className="border-t border-gray-100 pt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy">Why Businesses Trust Us</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {credentials.map((cred, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="bg-light-grey p-4 rounded-full">
                  {cred.icon}
                </div>
                <h4 className="font-semibold text-navy text-lg">{cred.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
