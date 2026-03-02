import React from 'react';
import { motion } from 'motion/react';
import { Armchair, Briefcase, User, Monitor, Grid, Layers, Home, LayoutTemplate, Coffee, Soup, Utensils } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Executive Chairs",
    description: "Premium leather and high-back chairs designed for directors and senior management. Maximum comfort with authoritative style.",
    icon: <Briefcase size={32} className="text-gold" />,
    image: "/executive-chair.jpg",
  },
  {
    id: 2,
    title: "Mesh Office Chairs",
    description: "Breathable, ergonomic mesh chairs perfect for long working hours in Bengaluru's climate. Available in bulk.",
    icon: <Grid size={32} className="text-gold" />,
    image: "/mesh-office-chair.png",
  },
  {
    id: 3,
    title: "Ergonomic Chairs",
    description: "Scientifically designed seating with adjustable lumbar support, armrests, and headrests to prevent back pain.",
    icon: <User size={32} className="text-gold" />,
    image: "/ergonomic-chair.jpg",
  },
  {
    id: 4,
    title: "Office Tables",
    description: "Sturdy, modern office desks ranging from compact home-office sizes to large executive tables.",
    icon: <Monitor size={32} className="text-gold" />,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    title: "Workstation Setups",
    description: "Complete modular workstation setups for startups and corporate floors. Space-efficient and customizable.",
    icon: <Armchair size={32} className="text-gold" />,
    image: "/workstation.jpg",
  },
  {
    id: 6,
    title: "PVC Wall Panelling",
    description: "Durable, moisture-resistant, and aesthetically pleasing PVC wall panels to transform your office or home interiors instantly.",
    icon: <Layers size={32} className="text-gold" />,
    image: "/pvc-wall-panelling.jpg",
  },
  {
    id: 7,
    title: "Home Interior",
    description: "Home interior solutions including custom furniture, modular kitchens, and elegant living space designs.",
    icon: <Home size={32} className="text-gold" />,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 9,
    title: "Cafe Chairs and Tables",
    description: "Stylish and durable seating solutions for cafeterias, breakrooms, and office pantries.",
    icon: <Coffee size={32} className="text-gold" />,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 10,
    title: "Sofas",
    description: "Premium lounge and reception seating designed for comfort and professional elegance.",
    icon: <Soup size={32} className="text-gold" />,
    image: "/sofa.jpg",
  },
  {
    id: 8,
    title: "False Ceiling",
    description: "Modern false ceiling designs with integrated lighting solutions to enhance the ambiance of your workspace or home.",
    icon: <LayoutTemplate size={32} className="text-gold" />,
    image: "/false-ceiling-modern.jpg",
  },
  {
    id: 11,
    title: "Modular Kitchen",
    description: "Modern modular kitchen solutions with smart storage, premium finishes, and ergonomic designs to transform your culinary space.",
    icon: <Utensils size={32} className="text-gold" />,
    image: "/modular-kitchen.jpg",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4"
          >
            Our Premium Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Discover our wide range of new and refurbished office furniture, backed by our comprehensive warranty.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-light-grey rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white w-10 h-10 rounded-lg flex items-center justify-center shadow-md">
                  {React.cloneElement(product.icon as React.ReactElement, { size: 20 })}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-heading font-bold text-navy mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{product.description}</p>
                <a
                  href="https://wa.me/c/919945111867"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-navy font-semibold hover:text-gold transition-colors mt-auto"
                >
                  View Catalog
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
