import { motion } from 'framer-motion';
import { Leaf, Target, Eye, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const timeline = [
  { year: "2010", title: "The Inception", desc: "Sugathakumari laid the foundation stone for the sanctuary." },
  { year: "2015", title: "First 1000 Trees", desc: "A massive planting drive completed with local volunteers." },
  { year: "2019", title: "Eco-Heritage Tag", desc: "Recognized as a site of ecological and cultural importance." },
  { year: "2023", title: "Sugathavanam Foundation", desc: "Expanded charitable and educational activities statewide." }
];

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-primary overflow-hidden text-white -mt-20">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-md"
          >
            About Sugathavanam
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl font-light text-brand-bg/90 max-w-3xl mx-auto"
          >
            A living memorial rooted in compassion, poetry, and ecological conservation.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-brand-bg relative">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-surface dark:bg-brand-surface-dark p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
            >
              <Eye className="w-12 h-12 text-brand-secondary mb-6" />
              <h3 className="text-3xl font-serif font-bold text-brand-dark mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                To create a world where humanity thrives in perfect harmony with nature, preserving the cultural and ecological heritage of Kerala for generations to come.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-surface dark:bg-brand-surface-dark p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
            >
              <Target className="w-12 h-12 text-brand-secondary mb-6" />
              <h3 className="text-3xl font-serif font-bold text-brand-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                To actively protect biodiversity, promote sustainable living practices, and empower marginalized communities through education and charity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History & Timeline */}
      <section className="py-24 bg-white dark:bg-[#151815]">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <Leaf className="w-10 h-10 text-brand-primary mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">Our Journey</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              From a simple vision of preserving a small patch of forest to becoming a statewide movement for environmental and social justice.
            </p>
          </div>

          <div className="relative border-l-2 border-brand-primary/20 ml-4 md:ml-1/2 md:left-1/2 md:-translate-x-1/2 md:border-l-0">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-brand-primary/20 -translate-x-1/2" />
            
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "relative mb-12 md:mb-24 pl-8 md:pl-0 md:w-1/2",
                  index % 2 === 0 ? "md:pr-12 md:ml-0 md:text-right" : "md:pl-12 md:ml-auto"
                )}
              >
                {/* Dot */}
                <div className={cn(
                  "absolute top-1 w-5 h-5 bg-brand-primary rounded-full border-4 border-white dark:border-[#151815] shadow",
                  "-left-[26px] md:left-auto md:top-1/2 md:-translate-y-1/2",
                  index % 2 === 0 ? "md:-right-2.5" : "md:-left-2.5"
                )} />
                
                <div className="bg-brand-bg dark:bg-brand-surface-dark p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                  <span className="text-brand-secondary font-bold text-xl block mb-2">{item.year}</span>
                  <h4 className="text-2xl font-serif font-bold text-brand-dark mb-3">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Guiding Light */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <BookOpen className="w-12 h-12 text-brand-secondary mx-auto mb-6" />
          <h2 className="text-4xl font-serif font-bold text-brand-dark mb-6">The Guiding Light</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-balance">
            Sugathavanam is built upon the philosophies and activism of Sugathakumari. Her poetry and her fight for nature continue to guide our everyday actions.
          </p>
          <Link to="/legacy" className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-secondary transition-colors text-lg group">
            Read about Sugathakumari's Legacy <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
