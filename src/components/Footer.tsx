import { MessageCircle, Phone, Mail, MapPin, Globe, Facebook, Twitter, Instagram, Youtube, Video } from "lucide-react";
import logo from "@/assets/roy (2).png";

const Footer = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'd like to inquire about Kenya safari tours. Can you help me plan my trip?");
    window.open(`https://wa.me/+254118805166?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Olkutoto Tours & Travel Logo"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-lg font-bold bg-gradient-hero bg-clip-text text-transparent">
                Olkutoto Tours & Travel
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Experience Kenya's breathtaking wildlife, pristine beaches, and rich culture with our AI-powered multilingual safari booking.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/OlkutotoTours" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@olkutoto.tours?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                <Video className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/olkutototoursand/#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@olkutototours" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#destinations" className="text-muted-foreground hover:text-primary transition-colors">Destinations</a></li>
              <li><a href="#experiences" className="text-muted-foreground hover:text-primary transition-colors">Experiences</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Kenya</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+254118805166" className="text-muted-foreground hover:text-primary transition-colors underline">011 880 5166</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+254711939160" className="text-muted-foreground hover:text-primary transition-colors underline">0711 939 160</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <button
                  onClick={() => window.open('mailto:orkutototours@gmail.com', '_blank')}
                  className="text-muted-foreground hover:text-primary transition-colors underline"
                >
                  orkutototours@gmail.com
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Narok County, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">50+ Languages Supported</span>
              </div>
            </div>
          </div>

          {/* Newsletter & CTA */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Book Your Safari</h3>
            <p className="text-muted-foreground text-sm">
              Ready for an unforgettable Kenyan adventure? Our AI assistant is here to help!
            </p>
            <button
              onClick={openWhatsApp}
              className="w-full bg-accent hover:bg-accent-glow text-accent-foreground px-4 py-3 rounded-lg font-semibold transition-bounce hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Start Planning Now
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2026 Olkutoto Tours & Travel. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-muted-foreground">
            Site created by <a href="https://roy-tecxprosanga.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline">roy-tecxprosanga.netlify.app</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;