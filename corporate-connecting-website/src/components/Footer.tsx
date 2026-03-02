export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-heading font-bold text-2xl mb-4">
              Corporate<span className="text-gold">Connecting</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Your Office, Our Priority. Bengaluru's premier destination for new and refurbished corporate furniture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('#home')} className="text-gray-400 hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#products')} className="text-gray-400 hover:text-white transition-colors">Products</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#why-us')} className="text-gray-400 hover:text-white transition-colors">Why Choose Us</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#reviews')} className="text-gray-400 hover:text-white transition-colors">Reviews</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Survey No. 165, Manipal County Rd</li>
              <li>Begur, Bengaluru, Karnataka 560068</li>
              <li className="pt-2">
                <a href="tel:+919945111867" className="hover:text-white transition-colors">
                  +91 99451 11867
                </a>
              </li>
              <li>
                <a href="mailto:<!-- REPLACE: email -->" className="hover:text-white transition-colors">
                  contact@corporateconnecting.com {/* <!-- REPLACE: email --> */}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Corporate Connecting. All rights reserved.
          </p>
          <div className="text-gray-500 text-sm flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
