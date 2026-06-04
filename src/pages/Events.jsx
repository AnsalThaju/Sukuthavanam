import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

const events = [
  {
    id: 1,
    title: "Annual Sapling Distribution",
    category: "Environmental",
    date: "August 15, 2024",
    time: "09:00 AM - 02:00 PM",
    location: "Sugathavanam Main Campus",
    attendees: "200+",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800",
    desc: "Join us in distributing over 5000 native tree saplings to local schools and community members to promote a greener Aranmula.",
  },
  {
    id: 2,
    title: "Poetry Reading & Cultural Evening",
    category: "Cultural",
    date: "September 05, 2024",
    time: "05:30 PM - 08:00 PM",
    location: "Open Air Amphitheatre",
    attendees: "150",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800",
    desc: "An evening celebrating the literary works of Sugathakumari with recitations by prominent poets, classical music, and discussions.",
  },
  {
    id: 3,
    title: "Organic Farming Workshop",
    category: "Workshop",
    date: "October 12, 2024",
    time: "10:00 AM - 04:00 PM",
    location: "Eco-farming Zone",
    attendees: "50",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800",
    desc: "Learn the basics of organic farming, composting, and sustainable agriculture from experts. Practical sessions included.",
  }
];

export default function Events() {
  return (
    <div className="w-full pt-32 pb-24 bg-brand-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Calendar className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-brand-dark mb-6">Upcoming Events</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Participate in our workshops, cultural gatherings, and environmental programs. Be a part of the change.
          </p>
        </div>

        {/* Featured Events List */}
        <div className="space-y-12">
          {events.map((event, i) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-brand-surface-dark rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row group hover:shadow-xl transition-shadow"
            >
              <div className="md:w-2/5 relative overflow-hidden">
                <img loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80'; }} 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover min-h-[250px] md:min-h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  {event.category}
                </div>
              </div>
              
              <div className="md:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="text-3xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">{event.desc}</p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                    <Calendar className="w-5 h-5 text-brand-secondary shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                    <Clock className="w-5 h-5 text-brand-secondary shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                    <MapPin className="w-5 h-5 text-brand-secondary shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                    <Users className="w-5 h-5 text-brand-secondary shrink-0" />
                    <span>{event.attendees} Expected</span>
                  </div>
                </div>
                
                <div>
                  <Button variant="outline" className="w-full sm:w-auto group/btn">
                    Register Now <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Past Events */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-serif font-bold text-brand-dark mb-4">Looking for past events?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">Explore our archive of past programs and cultural gatherings.</p>
          <Button variant="ghost" size="lg">View Event Archive</Button>
        </div>

      </div>
    </div>
  );
}
