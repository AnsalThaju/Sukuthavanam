import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Video, X } from 'lucide-react';
import { cn } from '../lib/utils';

const filters = ['All', 'Flora', 'Fauna', 'Events', 'Videos'];

const galleryItems = [
  { id: 1, type: 'Flora', src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a5d?q=80&w=1200&auto=format&fit=crop', title: 'Tropical Canopy' },
  { id: 2, type: 'Fauna', src: 'https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=1200&auto=format&fit=crop', title: 'Malabar Hornbill' },
  { id: 3, type: 'Events', src: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop', title: 'Plantation Drive' },
  { id: 4, type: 'Flora', src: 'https://images.unsplash.com/photo-1620077873634-8c01d9f8be78?q=80&w=1200&auto=format&fit=crop', title: 'Sacred Grove' },
  { id: 5, type: 'Videos', src: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1200&auto=format&fit=crop', title: 'Documentary Teaser', isVideo: true },
  { id: 6, type: 'Fauna', src: 'https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?q=80&w=1200&auto=format&fit=crop', title: 'Butterflies of Aranmula' },
  { id: 7, type: 'Flora', src: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop', title: 'Monsoon in Kerala' },
  { id: 8, type: 'Events', src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200&auto=format&fit=crop', title: 'Volunteer Camp' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = galleryItems.filter(item => activeFilter === 'All' || item.type === activeFilter);

  return (
    <div className="w-full pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <ImageIcon className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-dark mb-6">Gallery</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A visual journey through the lush landscapes, vibrant wildlife, and impactful events at Sugathavanam.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all cursor-pointer",
                activeFilter === filter 
                  ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20" 
                  : "bg-white dark:bg-[#151815] text-brand-dark border border-gray-200 dark:border-gray-800 hover:border-brand-primary"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 bg-white"
                onClick={() => setSelectedImage(item)}
              >
                <img loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80'; }} 
                  src={item.src} 
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  {item.isVideo && <Video className="w-8 h-8 text-white mb-2" />}
                  <h3 className="text-white font-serif text-xl font-bold">{item.title}</h3>
                  <span className="text-brand-secondary text-sm font-medium uppercase tracking-wider">{item.type}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-pointer"
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80'; }} 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 md:p-8 pointer-events-none">
                {selectedImage.isVideo && <Video className="w-6 h-6 text-brand-secondary mb-2" />}
                <h3 className="text-white font-serif text-2xl md:text-3xl font-bold">{selectedImage.title}</h3>
                <span className="text-gray-300 text-sm font-medium uppercase tracking-wider">{selectedImage.type}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
