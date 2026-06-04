import { motion } from 'framer-motion';
import { Heart, CreditCard, Landmark, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Donation() {
  return (
    <div className="w-full pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Heart className="w-16 h-16 text-brand-accent mx-auto mb-4" />
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-dark mb-6">Support Our Mission</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your generous contributions allow us to maintain the sanctuary, plant more trees, and provide shelter and education to those in need.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          
          {/* Donation Options */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white dark:bg-brand-surface-dark p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-3xl font-serif font-bold text-brand-dark mb-8">Make a Donation</h3>
            
            <div className="space-y-8">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-4">Select Amount (INR)</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['₹500', '₹1,000', '₹5,000', 'Custom'].map((amt, i) => (
                    <button key={i} className={`py-4 rounded-xl font-bold transition-all border-2 cursor-pointer ${i === 1 ? 'bg-brand-primary border-brand-primary text-white shadow-md' : 'bg-brand-bg dark:bg-[#1a1d1a] border-gray-200 dark:border-gray-700 text-brand-dark hover:border-brand-primary'}`}>
                      {amt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-4">I would like my donation to go towards:</label>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "General Fund (Area of Greatest Need)", active: true },
                    { title: "Tree Planting & Conservation", active: false },
                    { title: "Abhaya Shelter Home Support", active: false },
                    { title: "Children's Education Fund", active: false }
                  ].map((fund, i) => (
                    <div key={i} className={`p-4 rounded-xl border-2 cursor-pointer transition-colors ${fund.active ? 'border-brand-primary bg-brand-primary/5' : 'border-gray-200 dark:border-gray-700 hover:border-brand-primary/50'}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${fund.active ? 'border-brand-primary' : 'border-gray-400'}`}>
                          {fund.active && <div className="w-2.5 h-2.5 bg-brand-primary rounded-full" />}
                        </div>
                        <span className="font-medium text-brand-dark">{fund.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <Button className="w-full h-14 text-lg">
                  Proceed to Secure Payment <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
                  <ShieldCheck className="w-4 h-4 text-green-500" /> Secure 256-bit SSL encryption
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bank Transfer Details & Sponsorship */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-brand-primary text-white p-10 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <Landmark className="w-10 h-10 mb-6 text-brand-secondary" />
              <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Bank Transfer</h3>
              <p className="text-white/80 mb-6 text-sm relative z-10">You can also transfer funds directly to our foundation's bank account.</p>
              
              <div className="space-y-4 text-sm relative z-10">
                <div>
                  <div className="text-white/60 mb-1">Account Name</div>
                  <div className="font-bold text-lg">Sugathavanam Foundation</div>
                </div>
                <div>
                  <div className="text-white/60 mb-1">Account Number</div>
                  <div className="font-bold text-lg font-mono">1234 5678 9012 3456</div>
                </div>
                <div>
                  <div className="text-white/60 mb-1">IFSC Code</div>
                  <div className="font-bold text-lg font-mono">SBIN0001234</div>
                </div>
                <div>
                  <div className="text-white/60 mb-1">Bank Branch</div>
                  <div className="font-bold text-lg">SBI, Aranmula Branch</div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-brand-surface-dark p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-serif font-bold text-brand-dark mb-4">Tax Exemption</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                All donations made to Sugathavanam Foundation are eligible for tax deduction under Section 80G of the Income Tax Act, 1961. A receipt will be emailed to you upon successful payment.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
