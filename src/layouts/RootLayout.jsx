import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import FloatingLeaves from '../components/FloatingLeaves';
import ChatbotPlaceholder from '../components/ChatbotPlaceholder';
import { motion, AnimatePresence } from 'framer-motion';

export default function RootLayout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col w-full relative bg-brand-bg dark:bg-brand-dark transition-colors duration-300 overflow-hidden">
      <CustomCursor />
      <FloatingLeaves />
      
      <Navbar />
      
      {/* Route transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex-grow w-full pt-16 md:pt-20 flex flex-col"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <div className="relative z-10">
        <Footer />
      </div>

      <ChatbotPlaceholder />
    </div>
  );
}
