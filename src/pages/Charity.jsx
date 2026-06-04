import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HeartHandshake, BookOpen, GraduationCap, Home, Smile } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const initiatives = [
  {
    icon: Home,
    title: "Shelter Homes (Abhaya)",
    desc: "Providing safe havens and rehabilitation for destitute women, children, and people with mental health challenges."
  },
  {
    icon: GraduationCap,
    title: "Educational Support",
    desc: "Sponsoring the education of children from marginalized communities and providing necessary study materials."
  },
  {
    icon: BookOpen,
    title: "Awareness Camps",
    desc: "Conducting seminars and workshops in rural areas to promote health, hygiene, and environmental consciousness."
  }
];

const Counter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration * 1000) {
        setCount(Math.min(end, Math.floor((progress / (duration * 1000)) * end)));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function Charity() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-primary overflow-hidden text-white -mt-20">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center mt-12">
          <HeartHandshake className="w-16 h-16 text-brand-secondary mx-auto mb-6" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-md text-balance"
          >
            Charitable Activities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl font-light text-brand-bg/90 max-w-3xl mx-auto text-balance"
          >
            Spreading compassion beyond nature. Extending a helping hand to those who need it the most.
          </motion.p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-brand-bg border-b border-gray-200 dark:border-gray-800 relative z-20 shadow-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2"><Counter end={5000} suffix="+" /></div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Lives Touched</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-4xl md:text-5xl font-bold text-brand-secondary mb-2"><Counter end={50} suffix="+" /></div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Active Volunteers</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2"><Counter end={120} /></div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Children Educated</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="text-4xl md:text-5xl font-bold text-brand-secondary mb-2"><Counter end={15} suffix="+" /></div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Years of Service</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-24 bg-brand-surface dark:bg-brand-surface-dark relative">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Our Core Initiatives</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Driven by the ideals of Sugathakumari, we focus on uplifting the underprivileged and providing them with opportunities to thrive.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((init, i) => {
              const Icon = init.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-[#1a1d1a] p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-4">{init.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {init.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success Stories & CTA */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-primary rounded-[3rem] p-10 md:p-16 text-center text-white relative shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <Smile className="w-16 h-16 text-brand-accent mx-auto mb-6 relative z-10" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 relative z-10 text-balance">
              Every small act of kindness creates a ripple.
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light relative z-10 text-balance">
              You can be a part of this change. Whether it's through volunteering your time or making a donation, your support makes a real difference.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link to="/donate">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto px-10 text-lg">
                  Donate Now
                </Button>
              </Link>
              <Link to="/volunteer">
                <Button variant="glass" size="lg" className="w-full sm:w-auto px-10 text-lg border-white/30">
                  Become a Volunteer
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
