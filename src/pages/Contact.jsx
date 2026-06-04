import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';

const faqs = [
  {
    q: "Can I visit Sugathavanam without prior booking?",
    a: "Yes, you can visit during our regular visiting hours (Tuesday - Sunday, 09:00 AM - 05:30 PM). However, for guided tours and large groups, prior booking is recommended."
  },
  {
    q: "How can I contribute to the Abhaya shelter home?",
    a: "You can contribute via our Donation page or by volunteering your time. We also accept in-kind donations such as clothes, books, and non-perishable food items."
  },
  {
    q: "Are pets allowed inside the botanical garden?",
    a: "To protect the local wildlife and flora, we kindly request that you leave your pets at home. Service animals are permitted."
  },
  {
    q: "Can I host an event or workshop at Sugathavanam?",
    a: "We do offer our amphitheatre and eco-zones for environmentally aligned workshops and cultural events. Please fill out the contact form for inquiries."
  }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <MessageSquare className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-dark mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question, feedback, or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* Contact Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-brand-primary p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-3xl font-serif font-bold mb-8 relative z-10">Contact Information</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Location</h4>
                    <p className="text-white/80 leading-relaxed">Sugathavanam, Near Parthasarathy Temple, Aranmula, Pathanamthitta District, Kerala 689533</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-white/80">+91 98xxxxx210 <br/>+91 98xxxxx234</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-white/80">info@sugathavanam.org<br/>volunteer@sugathavanam.org</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="h-64 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62985.45171738592!2d76.64332921008061!3d9.332306714032903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622c342f025e1%3A0xb3f56ebfa9b7203b!2sAranmula%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Map"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-brand-surface-dark p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-3xl font-serif font-bold text-brand-dark mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                  <input type="text" className="w-full bg-brand-bg dark:bg-[#1a1d1a] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-brand-dark" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                  <input type="text" className="w-full bg-brand-bg dark:bg-[#1a1d1a] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-brand-dark" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <input type="email" className="w-full bg-brand-bg dark:bg-[#1a1d1a] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-brand-dark" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                <select className="w-full bg-brand-bg dark:bg-[#1a1d1a] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-brand-dark">
                  <option>General Inquiry</option>
                  <option>Volunteering</option>
                  <option>Donation Information</option>
                  <option>Event Booking</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea rows={5} className="w-full bg-brand-bg dark:bg-[#1a1d1a] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-brand-dark resize-none" placeholder="How can we help you?" />
              </div>
              <Button type="submit" className="w-full h-14 text-lg mt-4">
                Send Message <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
        
        {/* FAQs */}
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-brand-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-brand-dark text-lg">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-brand-secondary transition-transform duration-300", openFaq === i ? "rotate-180" : "")} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
