import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Feather, Video, Quote, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const quotes = [
  "We have not inherited this earth from our ancestors, we have borrowed it from our children.",
  "Poetry is not a retreat from the world, it is a weapon to fight for it.",
  "A tree is not just wood and leaves, it is the silent prayer of the earth to the sky.",
  "When the last river dries up, we will realize that we cannot drink our wealth."
];

export default function Legacy() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const nextQuote = () => setCurrentQuote((prev) => (prev + 1) % quotes.length);
  const prevQuote = () => setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);

  useEffect(() => {
    const timer = setInterval(nextQuote, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#1A1A1A] overflow-hidden text-white -mt-20">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=1973&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center mt-12">
          <Feather className="w-12 h-12 text-brand-accent mx-auto mb-6" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-md"
          >
            Sugathakumari Legacy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl font-light text-gray-300 max-w-3xl mx-auto"
          >
            Poet, activist, and the guardian of Silent Valley. Her words moved hearts, and her actions moved mountains.
          </motion.p>
        </div>
      </section>

      {/* Biography & Poetry */}
      <section className="py-24 bg-brand-bg relative">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">The Voice of the Voiceless</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                <p>
                  Sugathakumari (22 January 1934 – 23 December 2020) was an Indian poet and activist, who was at the forefront of environmental and feminist movements in Kerala, South India. 
                </p>
                <p>
                  She played a pivotal role in the Save Silent Valley movement, fighting against the construction of a hydroelectric dam that would have submerged India's most pristine tropical evergreen forest.
                </p>
                <p>
                  Her poetry is characterized by a deep sense of compassion, sorrow for the destruction of nature, and an unwavering commitment to the marginalized. She founded 'Abhaya', an organization providing shelter to destitute women and mental health patients.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white dark:bg-[#151815] p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 relative z-10">
                <Book className="w-10 h-10 text-brand-secondary mb-6" />
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Notable Literary Works</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0" />
                    <div>
                      <span className="font-bold text-brand-dark">Muthuchippi</span> (1961)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0" />
                    <div>
                      <span className="font-bold text-brand-dark">Pathirappookal</span> (1967) - Kerala Sahitya Akademi Award
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0" />
                    <div>
                      <span className="font-bold text-brand-dark">Rathrimazha</span> (1982) - Kendra Sahitya Akademi Award
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0" />
                    <div>
                      <span className="font-bold text-brand-dark">Manalezhuthu</span> (2006) - Saraswati Samman
                    </div>
                  </li>
                </ul>
              </div>
              <div className="absolute -top-6 -right-6 w-full h-full bg-brand-secondary/10 rounded-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Carousel */}
      <section className="py-24 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1974&auto=format&fit=crop')] mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <Quote className="w-16 h-16 text-brand-accent mx-auto mb-8 opacity-50" />
          
          <div className="relative min-h-[200px] md:min-h-[150px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl font-serif font-medium leading-relaxed italic"
              >
                "{quotes[currentQuote]}"
              </motion.p>
            </AnimatePresence>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-12">
            <button onClick={prevQuote} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-colors cursor-pointer">
              <ChevronLeft />
            </button>
            <div className="flex gap-2">
              {quotes.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentQuote(i)}
                  className={cn("w-2 h-2 rounded-full transition-all cursor-pointer", i === currentQuote ? "w-8 bg-brand-accent" : "bg-white/30")}
                  aria-label={`Go to quote ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={nextQuote} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-colors cursor-pointer">
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Achievements / Awards */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <Award className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
            <h2 className="text-4xl font-serif font-bold text-brand-dark mb-4">Recognitions & Awards</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Her contributions to literature and the environment were recognized with numerous prestigious awards.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: "2006", title: "Padma Shri", org: "Government of India" },
              { year: "2012", title: "Saraswati Samman", org: "K.K. Birla Foundation" },
              { year: "2001", title: "Vriksha Mitra Award", org: "Government of India" },
              { year: "2009", title: "Ezhuthachan Puraskaram", org: "Government of Kerala" },
            ].map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-brand-surface-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-brand-primary font-bold text-xl mb-2">{award.year}</div>
                <h4 className="text-xl font-serif font-bold text-brand-dark mb-2">{award.title}</h4>
                <p className="text-sm text-gray-500">{award.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentary / Video Section */}
      <section className="py-24 bg-[#151815] text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <Video className="w-12 h-12 text-brand-accent mx-auto mb-6" />
          <h2 className="text-4xl font-serif font-bold mb-6">Watch the Documentary</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Explore the life, struggles, and triumphs of Sugathakumari in this exclusive documentary capturing her fight for Silent Valley.
          </p>
          
          <div className="aspect-video bg-black rounded-3xl overflow-hidden relative group cursor-pointer border border-gray-800 shadow-2xl">
            <img loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80'; }} 
              src="https://images.unsplash.com/photo-1620077873634-8c01d9f8be78?q=80&w=1974&auto=format&fit=crop" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center pl-2 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-brand-primary/30">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
