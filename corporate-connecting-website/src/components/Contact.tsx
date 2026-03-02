import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4"
          >
            Visit Our Store
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Experience our premium office furniture firsthand at our Bengaluru showroom.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100"
          >
            <h3 className="text-2xl font-heading font-bold text-navy mb-8">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-full text-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Survey No. 165, Manipal County Rd,<br />
                    Begur, Bengaluru,<br />
                    Karnataka 560068, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-full text-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Phone</h4>
                  <a href="tel:+919945111867" className="text-gray-600 hover:text-gold transition-colors">
                    +91 99451 11867
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-full text-gold shrink-0">
                  <Mail size={24} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-navy mb-1">Email</h4>
                  <a href="mailto:<!-- REPLACE: email -->" className="text-gray-600 hover:text-gold transition-colors break-all">
                    contact@corporateconnecting.com {/* <!-- REPLACE: email --> */}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-full text-gold shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Working Hours</h4>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 8:00 PM<br />
                    Sunday: Closed {/* <!-- REPLACE: working hours --> */}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map & Directions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex-grow relative min-h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=Corporate+Connecting,+Survey+No.+165,+Manipal+County+Rd,+Begur,+Bengaluru,+Karnataka+560068&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Corporate Connecting Location"
              ></iframe>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Corporate+Connecting,+Survey+No.+165,+Manipal+County+Rd,+Begur,+Bengaluru,+Karnataka+560068"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white font-semibold px-8 py-4 rounded-md transition-colors shadow-md w-full"
            >
              <Navigation size={20} />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
