import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone, Compass, Mail } from 'lucide-react';

export default function Visit() {
  return (
    <div className="w-full pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Compass className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-dark mb-6 text-balance">Plan Your Visit</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
            Experience the tranquility of nature and the richness of Kerala's heritage at Sugathavanam. We look forward to welcoming you.
          </p>
        </div>

        {/* Map & Info Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          
          {/* Map (Placeholder using iframe for Google Maps or an image) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 bg-gray-200 relative"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62985.45171738592!2d76.64332921008061!3d9.332306714032903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622c342f025e1%3A0xb3f56ebfa9b7203b!2sAranmula%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Sugathavanam Location"
            />
          </motion.div>

          {/* Info */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-brand-surface-dark p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-brand-primary" /> Visiting Hours
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                  <span className="font-medium">Tuesday - Sunday</span>
                  <span>09:00 AM - 05:30 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                  <span className="font-medium">Monday</span>
                  <span className="text-red-500 font-medium">Closed</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span className="font-medium">Public Holidays</span>
                  <span>10:00 AM - 04:00 PM</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brand-primary p-8 rounded-3xl shadow-lg text-white"
            >
              <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-brand-secondary" /> Location
              </h3>
              <p className="mb-6 leading-relaxed text-brand-bg/90">
                Sugathavanam, Near Parthasarathy Temple,<br/>
                Aranmula, Pathanamthitta District,<br/>
                Kerala 689533, India
              </p>
              <div className="flex flex-col gap-3">
                <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-brand-secondary transition-colors w-fit">
                  <Phone className="w-5 h-5" /> +91 98765 43210
                </a>
                <a href="mailto:visit@sugathavanam.org" className="flex items-center gap-3 hover:text-brand-secondary transition-colors w-fit">
                  <Mail className="w-5 h-5" /> visit@sugathavanam.org
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Travel Guidance */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">How to Reach Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "By Air", desc: "The nearest airport is Trivandrum International Airport (TRV), approximately 115 km away. Cochin International Airport (COK) is about 125 km away." },
              { title: "By Train", desc: "Chengannur Railway Station (CNGR) is the closest major station, just 10 km from Aranmula. Taxis and buses are readily available from the station." },
              { title: "By Road", desc: "Aranmula is well-connected by road. It lies on the Main Central (MC) Road. Regular bus services connect it to major cities in Kerala." }
            ].map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-[#1a1d1a] p-8 rounded-3xl text-center border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <Navigation className="w-10 h-10 text-brand-secondary mx-auto mb-4" />
                <h4 className="text-xl font-bold text-brand-dark mb-3">{method.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Nearby Attractions */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">Nearby Attractions</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Make the most of your trip to Aranmula.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Aranmula Parthasarathy Temple", img: "https://images.unsplash.com/photo-1601058268499-e52658b8ebf8?q=80&w=800", desc: "One of the oldest temples in Kerala, situated on the banks of Pampa river." },
              { title: "Aranmula Kannadi Workshops", img: "https://images.unsplash.com/photo-1621213032549-b3a58e2d422a?q=80&w=800", desc: "Witness the crafting of the world-famous Aranmula metal mirrors." },
              { title: "Pampa River Banks", img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800", desc: "Enjoy a serene walk or boat ride along the holy river Pampa." },
            ].map((attr, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-sm group border border-gray-100 dark:border-gray-800"
              >
                <div className="h-48 overflow-hidden">
                  <img loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80'; }} src={attr.img} alt={attr.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="bg-white dark:bg-brand-surface-dark p-6 rounded-b-2xl">
                  <h4 className="text-lg font-bold text-brand-dark mb-2">{attr.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{attr.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
