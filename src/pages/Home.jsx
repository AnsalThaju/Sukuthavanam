import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Leaf, Sprout, Wind } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    // GSAP Scroll Animations for sections
    const sections = document.querySelectorAll('.gsap-fade-up');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden -mt-20">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80'; }} 
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a5d?q=80&w=2074&auto=format&fit=crop" 
            alt="Kerala Nature" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="font-medium tracking-widest uppercase text-brand-secondary mb-4 block">
              Welcome to Sugathavanam
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-balance leading-tight drop-shadow-lg">
              A Sanctuary for <br/><span className="text-brand-secondary italic">Nature & Culture</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light drop-shadow-md text-balance">
              Carrying forward the legacy of poet and activist Sugathakumari through ecological conservation and community welfare in Aranmula.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/visit">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Plan Your Visit
                </Button>
              </Link>
              <Link to="/legacy">
                <Button variant="glass" size="lg" className="w-full sm:w-auto">
                  Discover the Legacy
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white gap-2"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-white/70">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-2 bg-brand-secondary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Inspirational Quote Section */}
      <section className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <Leaf className="w-96 h-96 -rotate-45" />
        </div>
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10 gsap-fade-up">
          <Wind className="w-12 h-12 text-brand-secondary mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-serif font-medium leading-relaxed text-brand-dark mb-8">
            "We have not inherited this earth from our ancestors, we have borrowed it from our children."
          </h2>
          <p className="text-xl font-bold tracking-wider text-brand-primary uppercase">— Sugathakumari</p>
        </div>
      </section>

      {/* 3. About Preview */}
      <section className="py-24 bg-brand-surface dark:bg-brand-surface-dark relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="gsap-fade-up">
              <span className="text-brand-secondary font-bold tracking-widest uppercase mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
                Rooted in Heritage, <br/>Growing for Tomorrow
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 text-balance">
                Situated in the culturally rich town of Aranmula, Sugathavanam is more than a botanical garden. It is a living memorial dedicated to environmental protection, biodiversity conservation, and the preservation of Kerala's natural heritage.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-brand-dark font-medium">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0"><Leaf className="w-5 h-5"/></div>
                  Over 500 species of native plants
                </li>
                <li className="flex items-center gap-3 text-brand-dark font-medium">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0"><Heart className="w-5 h-5"/></div>
                  Active community welfare programs
                </li>
                <li className="flex items-center gap-3 text-brand-dark font-medium">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0"><Sprout className="w-5 h-5"/></div>
                  Sustainable ecological practices
                </li>
              </ul>
              <Link to="/about">
                <Button variant="outline" className="group">
                  Read Full Story <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="relative gsap-fade-up">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80'; }} 
                  src="https://images.unsplash.com/photo-1620077873634-8c01d9f8be78?q=80&w=1974&auto=format&fit=crop" 
                  alt="Sugathavanam Environment" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl z-0" />
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl z-0" />
              
              {/* Floating Stat Card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white/80 dark:bg-black/80 backdrop-blur-md p-6 rounded-2xl z-20 w-48 shadow-xl border border-white/20"
              >
                <div className="text-4xl font-bold text-brand-primary mb-2">10k+</div>
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200">Trees Planted & Protected</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Support & Donate CTA */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80'; }} 
            src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1974&auto=format&fit=crop" 
            alt="Nature pattern" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center gsap-fade-up">
          <Heart className="w-16 h-16 text-brand-accent mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light text-balance">
            Your contribution helps us preserve biodiversity and run charitable programs for the underprivileged.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/donate">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-lg px-12">
                Donate Now
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button variant="glass" size="lg" className="w-full sm:w-auto text-lg px-12">
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
