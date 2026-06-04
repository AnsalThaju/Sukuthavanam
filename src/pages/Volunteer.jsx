import { motion } from 'framer-motion';
import { Users, Sprout, HandHeart, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Volunteer() {
  return (
    <div className="w-full pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Users className="w-16 h-16 text-brand-secondary mx-auto mb-4" />
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-dark mb-6">Become a Volunteer</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Give your time to nature and community. Join our network of dedicated volunteers and make a tangible difference in Aranmula.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* Why Volunteer / Areas */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl font-serif font-bold text-brand-dark mb-6">Areas of Contribution</h3>
              <div className="space-y-6">
                {[
                  { icon: Sprout, title: "Nature Conservation", desc: "Help with tree planting drives, maintaining the botanical garden, and organizing eco-awareness camps." },
                  { icon: HandHeart, title: "Community Welfare", desc: "Assist at the Abhaya shelter home, conduct educational sessions for children, and help distribute supplies." },
                  { icon: Calendar, title: "Event Management", desc: "Support the coordination of cultural events, poetry readings, and workshops hosted at Sugathavanam." }
                ].map((area, i) => {
                  const Icon = area.icon;
                  return (
                    <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-brand-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
                      <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-dark text-lg mb-1">{area.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{area.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6">What You Get</h3>
              <ul className="space-y-3">
                {[
                  "Official volunteer certificate for hours contributed",
                  "Hands-on experience in ecological conservation",
                  "Free access to exclusive workshops and events",
                  "The satisfaction of carrying forward Sugathakumari's legacy"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Volunteer Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-brand-surface-dark p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-3xl font-serif font-bold text-brand-dark mb-8">Registration Form</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                  <input type="text" className="w-full bg-brand-bg dark:bg-[#1a1d1a] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-brand-dark" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                  <input type="text" className="w-full bg-brand-bg dark:bg-[#1a1d1a] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-brand-dark" required />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                  <input type="email" className="w-full bg-brand-bg dark:bg-[#1a1d1a] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-brand-dark" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                  <input type="tel" className="w-full bg-brand-bg dark:bg-[#1a1d1a] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-brand-dark" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Area of Interest</label>
                <select className="w-full bg-brand-bg dark:bg-[#1a1d1a] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-brand-dark">
                  <option>Nature Conservation</option>
                  <option>Community Welfare (Abhaya)</option>
                  <option>Event Management</option>
                  <option>Any Area Where Needed</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Availability</label>
                <select className="w-full bg-brand-bg dark:bg-[#1a1d1a] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-brand-dark">
                  <option>Weekends Only</option>
                  <option>Weekdays</option>
                  <option>Flexible</option>
                  <option>Specific Events Only</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Why do you want to volunteer? (Optional)</label>
                <textarea rows={3} className="w-full bg-brand-bg dark:bg-[#1a1d1a] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-brand-dark resize-none" />
              </div>
              
              <Button type="submit" className="w-full h-14 text-lg mt-4">
                Submit Application
              </Button>
            </form>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
