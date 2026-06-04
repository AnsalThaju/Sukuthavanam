import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatbotPlaceholder() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-primary text-white shadow-xl shadow-brand-primary/30 flex items-center justify-center cursor-pointer hover:bg-brand-primary/90 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-white dark:bg-[#1a1d1a] rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col"
          >
            <div className="bg-brand-primary p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse" />
                <span className="font-bold">Sugatha Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-md transition-colors cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="h-64 p-4 flex flex-col gap-3 overflow-y-auto bg-gray-50 dark:bg-[#151815]">
              <div className="bg-white dark:bg-brand-surface-dark p-3 rounded-xl rounded-tl-none shadow-sm text-sm text-brand-dark self-start max-w-[80%] border border-gray-100 dark:border-gray-800">
                Hello! I can help you learn more about Sugathavanam, volunteering, or donating. How can I assist you today?
              </div>
            </div>
            
            <div className="p-3 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-brand-surface-dark flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-grow bg-gray-100 dark:bg-[#151815] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary text-brand-dark"
              />
              <button className="w-9 h-9 rounded-full bg-brand-primary text-white flex items-center justify-center shrink-0 hover:bg-brand-primary/90 transition-colors cursor-pointer">
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
