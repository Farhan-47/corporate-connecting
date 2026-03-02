import { CheckCircle2, Package, Wrench, Truck, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  const trustSignals = [
    { icon: <CheckCircle2 className="text-navy" size={24} />, text: "Wholesale & Retail Available" },
    { icon: <Package className="text-navy" size={24} />, text: "1000+ Chairs in Stock" },
    { icon: <Wrench className="text-navy" size={24} />, text: "Warranty & Repair Included" },
    { icon: <Truck className="text-navy" size={24} />, text: "Delivery to Your Doorstep" },
    { icon: <ShieldCheck className="text-navy" size={24} />, text: "Trusted by 500+ Businesses" },
  ];

  return (
    <div className="bg-gold/10 border-y border-gold/20 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-5 gap-4">
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3">
              <div className="bg-white p-3 rounded-full shadow-sm">
                {signal.icon}
              </div>
              <span className="text-sm font-semibold text-navy leading-tight">
                {signal.text}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile Scrolling Strip */}
        <div className="md:hidden flex overflow-x-auto pb-4 -mb-4 snap-x space-x-6">
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex-none w-48 flex flex-col items-center text-center gap-3 snap-center">
              <div className="bg-white p-3 rounded-full shadow-sm">
                {signal.icon}
              </div>
              <span className="text-sm font-semibold text-navy leading-tight">
                {signal.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
