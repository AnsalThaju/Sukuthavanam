import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, Search } from 'lucide-react';
import { Button } from '../components/ui/Button';

const posts = [
  {
    id: 1,
    title: "The Importance of Sacred Groves in Modern Ecology",
    category: "Environment",
    date: "May 12, 2024",
    image: "https://images.unsplash.com/photo-1620077873634-8c01d9f8be78?q=80&w=800",
    excerpt: "Discover how traditional Kaavus are acting as micro-reserves for endangered plant species and supporting local biodiversity."
  },
  {
    id: 2,
    title: "Sugathakumari's Vision for a Greener Kerala",
    category: "Legacy",
    date: "April 28, 2024",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=800",
    excerpt: "Reflecting on the Silent Valley movement and its relevance in today's climate crisis and conservation efforts."
  },
  {
    id: 3,
    title: "How to Build a Zero-Waste Community",
    category: "Sustainability",
    date: "April 15, 2024",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800",
    excerpt: "Practical steps taken by the Sugathavanam foundation to minimize waste in rural areas and promote composting."
  },
  {
    id: 4,
    title: "Avian Visitors of Sugathavanam this Monsoon",
    category: "Wildlife",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?q=80&w=800",
    excerpt: "A photographic journey of the migratory birds that visited our sanctuary this season, captured by local enthusiasts."
  },
  {
    id: 5,
    title: "Empowering Women Through Eco-Tourism",
    category: "Community",
    date: "February 22, 2024",
    image: "https://images.unsplash.com/photo-1601058268499-e52658b8ebf8?q=80&w=800",
    excerpt: "How local women are leading our guided tours and promoting sustainable tourism while gaining financial independence."
  },
  {
    id: 6,
    title: "The Medicinal Plants of Aranmula",
    category: "Education",
    date: "January 05, 2024",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800",
    excerpt: "An overview of the rare medicinal herbs grown and protected within our botanical gardens, used in Ayurveda."
  }
];

export default function Blog() {
  return (
    <div className="w-full pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-center md:text-left">
            <BookOpen className="w-10 h-10 text-brand-secondary mx-auto md:mx-0 mb-4" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Blog & News</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">Stories of nature, conservation, and community.</p>
          </div>
          
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-white dark:bg-[#151815] border border-gray-200 dark:border-gray-800 rounded-full py-3 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 shadow-sm text-brand-dark transition-shadow"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Featured Post (Latest) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-brand-surface-dark rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row group mb-12 hover:shadow-xl transition-shadow cursor-pointer"
        >
          <div className="md:w-1/2 relative overflow-hidden">
            <img loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80'; }} 
              src={posts[0].image} 
              alt={posts[0].title}
              className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-brand-primary font-bold text-sm uppercase tracking-wider">{posts[0].category}</span>
              <span className="flex items-center gap-1 text-gray-500 text-sm"><Calendar className="w-4 h-4" /> {posts[0].date}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
              {posts[0].title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed text-balance">
              {posts[0].excerpt}
            </p>
            <div>
              <Button variant="outline" className="group/btn pointer-events-none">
                Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Grid Posts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-brand-surface-dark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 group hover:shadow-xl transition-shadow flex flex-col cursor-pointer"
            >
              <div className="h-56 relative overflow-hidden">
                <img loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80'; }} 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-brand-secondary font-bold text-xs uppercase tracking-wider">{post.category}</span>
                  <span className="text-gray-500 text-xs flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="text-brand-primary font-medium text-sm flex items-center gap-1 group/link">
                  Read more <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="ghost">Load More Articles</Button>
        </div>

      </div>
    </div>
  );
}
