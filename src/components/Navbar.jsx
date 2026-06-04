import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf, Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Legacy', path: '/legacy' },
  { name: 'Ecology', path: '/ecology' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Events', path: '/events' },
  { name: 'Charity', path: '/charity' },
  { name: 'Visit', path: '/visit' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('EN');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });
  const location = useLocation();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
      isScrolled ? "bg-white/80 dark:bg-[#121512]/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-brand-primary dark:text-brand-secondary z-50" onClick={() => setMobileMenuOpen(false)}>
          <Leaf className="w-8 h-8" />
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight">Sugathavanam</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-primary relative group",
                location.pathname === link.path ? "text-brand-primary" : "text-gray-700 dark:text-gray-300"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary"
                  initial={false}
                />
              )}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-2 pl-4 border-l border-gray-200 dark:border-gray-700">
            <button 
              onClick={() => setLang(lang === 'EN' ? 'ML' : 'EN')}
              className="px-2 py-1 rounded-md bg-brand-primary/10 text-brand-primary font-bold text-xs hover:bg-brand-primary/20 transition-colors cursor-pointer"
            >
              {lang}
            </button>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-brand-dark" /> : <Moon className="w-5 h-5 text-brand-dark" />}
            </button>
            <Link to="/volunteer" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary transition-colors">Volunteer</Link>
            <Link to="/donate" className="bg-brand-primary hover:bg-brand-primary/90 text-white px-5 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105 active:scale-95 shadow-md">
              Donate
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2 z-50">
          <button 
            onClick={() => setLang(lang === 'EN' ? 'ML' : 'EN')}
            className="px-2 py-1 rounded-md bg-brand-primary/10 text-brand-primary font-bold text-xs hover:bg-brand-primary/20 transition-colors cursor-pointer"
          >
            {lang}
          </button>
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gray-800 dark:text-gray-200 p-2 cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            className="text-gray-800 dark:text-gray-200 p-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-brand-bg dark:bg-brand-dark z-40 flex flex-col pt-24 px-6 pb-6 overflow-y-auto h-[100dvh]"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block text-2xl font-serif py-3 border-b border-gray-100 dark:border-gray-800/50",
                      location.pathname === link.path ? "text-brand-primary" : "text-gray-800 dark:text-gray-200"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col gap-3 mt-8"
              >
                <Link 
                  to="/volunteer" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-4 border-2 border-brand-primary text-brand-primary rounded-full font-medium text-lg"
                >
                  Become a Volunteer
                </Link>
                <Link 
                  to="/donate" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-4 bg-brand-primary text-white rounded-full font-medium text-lg shadow-lg"
                >
                  Make a Donation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
