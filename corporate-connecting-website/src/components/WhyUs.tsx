import { motion } from 'motion/react';
import { Tag, RefreshCw, Wrench, PackageSearch, Zap } from 'lucide-react';

const reasons = [
  {
    icon: <Tag className="w-8 h-8 text-gold" />,
    title: "Unbeatable Wholesale Pricing",
    description: "Get direct-from-warehouse prices whether you're buying a single chair for your home office or 100 for your corporate floor.",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-gold" />,
    title: "Premium Refurbished Brand Chairs",
    description: "Access top-tier ergonomic brands at a fraction of the cost. Fully restored, sanitized, and quality-checked.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-gold" />,
    title: "Warranty + After-Sale Repair Support",
    description: "We don't just sell; we support. Enjoy comprehensive warranties and reliable repair services right here in Bengaluru.",
  },
  {
    icon: <PackageSearch className="w-8 h-8 text-gold" />,
    title: "Bulk Order Specialists",
    description: "Setting up a new office? We handle workstation setups with quick delivery and professional installation.",
  },
  {
    icon: <Zap className="w-8 h-8 text-gold" />,
    title: "Quick Turnaround & Responsive Team",
    description: "Time is money. We ensure fast delivery across Bengaluru and prompt customer service for all your queries.",
  },
];

const images = [
  "https://picsum.photos/seed/wholesale/600/400",
  "https://picsum.photos/seed/refurbished/600/400",
  "https://picsum.photos/seed/warranty/600/400",
  "/workstation.jpg",
  "https://picsum.photos/seed/quick/600/400"
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4"
          >
            Why Choose Corporate Connecting?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            We are more than just a furniture store. We are your partners in creating productive workspaces.
          </motion.p>
        </div>

        <div className="space-y-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full max-w-md relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                  <div className="relative z-10">
                    <div className="bg-navy/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      {reason.icon}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-navy mb-4">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block w-full md:w-1/2 p-4 lg:p-8">
                <img
                  src={images[index]}
                  alt={reason.title}
                  className="w-full h-72 object-cover rounded-2xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
