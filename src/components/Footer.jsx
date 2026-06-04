import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121512] text-gray-300 pt-16 pb-8 border-t border-gray-800 w-full mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Brand & About */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 text-white">
              <Leaf className="w-8 h-8 text-brand-secondary" />
              <span className="font-serif text-2xl font-bold tracking-tight">Sugathavanam</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-2">
              A sanctuary for nature, culture, and environmental awareness in Aranmula, Kerala. Carrying forward the legacy of poet and activist Sugathakumari.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors font-bold text-sm" aria-label="Facebook">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors font-bold text-sm" aria-label="Twitter">
                X
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors font-bold text-sm" aria-label="Instagram">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors font-bold text-sm" aria-label="Youtube">
                YT
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 lg:pl-8">
            <h3 className="text-white font-serif text-lg font-semibold mb-2 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-brand-primary"></span>
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/about" className="hover:text-brand-secondary transition-colors">About Us</Link></li>
              <li><Link to="/legacy" className="hover:text-brand-secondary transition-colors">Sugathakumari Legacy</Link></li>
              <li><Link to="/ecology" className="hover:text-brand-secondary transition-colors">Nature & Ecology</Link></li>
              <li><Link to="/events" className="hover:text-brand-secondary transition-colors">Events & Activities</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-secondary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="flex flex-col gap-4 lg:pl-4">
            <h3 className="text-white font-serif text-lg font-semibold mb-2 relative inline-block">
              Get Involved
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-brand-primary"></span>
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/donate" className="hover:text-brand-secondary transition-colors">Make a Donation</Link></li>
              <li><Link to="/volunteer" className="hover:text-brand-secondary transition-colors">Become a Volunteer</Link></li>
              <li><Link to="/charity" className="hover:text-brand-secondary transition-colors">Charitable Activities</Link></li>
              <li><Link to="/visit" className="hover:text-brand-secondary transition-colors">Visit Sugathavanam</Link></li>
              <li><Link to="/contact" className="hover:text-brand-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-serif text-lg font-semibold mb-2 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-brand-primary"></span>
            </h3>
            <ul className="flex flex-col gap-4 text-sm mt-2">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                <span>Sugathavanam, Aranmula,<br/>Pathanamthitta District,<br/>Kerala, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-secondary shrink-0" />
                <span>+91 98xxxxx210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-secondary shrink-0" />
                <a href="mailto:info@sugathavanam.org" className="hover:text-white transition-colors">info@sugathavanam.org</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} Sugathavanam. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
