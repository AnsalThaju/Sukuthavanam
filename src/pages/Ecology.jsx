import { motion } from 'framer-motion';
import { Bird, TreePine, Droplets, Sun, Recycle, Leaf } from 'lucide-react';

const stats = [
  { icon: TreePine, value: "500+", label: "Native Tree Species", color: "text-green-600 dark:text-green-400", bg: "bg-green-500/10" },
  { icon: Bird, value: "120+", label: "Bird Species Recorded", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/10" },
  { icon: Droplets, value: "10M", label: "Liters of Water Conserved", color: "text-cyan-600 dark:text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: Sun, value: "100%", label: "Solar Powered Campus", color: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-500/10" },
];

export default function Ecology() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-primary overflow-hidden text-white -mt-20">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a5d?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center mt-12">
          <Leaf className="w-12 h-12 text-brand-secondary mx-auto mb-6" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-md text-balance"
          >
            Nature & Ecology
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl font-light text-brand-bg/90 max-w-3xl mx-auto text-balance"
          >
            Preserving Kerala's fragile biodiversity through active conservation and education.
          </motion.p>
        </div>
      </section>

      {/* Biodiversity Infographics */}
      <section className="py-24 bg-brand-bg relative">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-brand-dark mb-4">Our Ecosystem Impact</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Sugathavanam is a thriving hotspot for endemic flora and fauna. Here is a glimpse into the life we protect.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  className="bg-white dark:bg-brand-surface-dark p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 text-center hover:shadow-xl transition-shadow"
                >
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${stat.bg} ${stat.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="text-4xl font-bold text-brand-dark mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Interactive Ecology Visual */}
      <section className="py-24 bg-white dark:bg-[#151815] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative px-8">
              <div className="aspect-square rounded-full overflow-hidden border-[12px] border-brand-bg dark:border-[#1a1d1a] shadow-2xl relative z-10">
                <img loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80'; }} 
                  src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1974&auto=format&fit=crop" 
                  alt="Ecosystem" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Labels */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-10 left-0 glass dark:bg-black/50 px-5 py-3 rounded-full text-sm font-bold z-20 shadow-xl text-brand-primary border border-white/20"
              >
                Medicinal Plants
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute bottom-20 right-0 glass dark:bg-black/50 px-5 py-3 rounded-full text-sm font-bold z-20 shadow-xl text-brand-secondary border border-white/20"
              >
                Endangered Trees
              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-brand-secondary font-bold tracking-widest uppercase mb-4 block">Conservation</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">Tree Preservation Programs</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-balance">
                Our core initiative revolves around planting and protecting trees. Every sapling planted at Sugathavanam is nurtured until it reaches self-sustainability, ensuring a greener tomorrow.
              </p>
              
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 shadow-inner">
                    <TreePine className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-2">Sacred Groves (Kaavu)</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Recreating traditional sacred groves to maintain local microclimates and protect soil integrity.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 shadow-inner">
                    <Recycle className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-2">Zero Waste Campus</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">All organic waste is composted on-site and used as natural fertilizer for our nursery and gardens.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
