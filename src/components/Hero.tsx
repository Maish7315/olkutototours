import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-kenya.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToDestinations = () => {
    document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in exploring Kenya's amazing destinations. Can you help me plan my dream safari adventure?");
    window.open(`https://wa.me/+254118805166?text=${message}`, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Kenya's magnificent landscapes with elephants and Mount Kilimanjaro"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-60"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animated Content */}
      <div className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-20'
      }`}>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Discover
          <span className="block gradient-text animate-glow-pulse">
            KENYA
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
          Experience Africa's most breathtaking wildlife, pristine beaches, and rich cultural heritage.
          Your dream safari adventure awaits with Olkutoto Travels. Best and safest Kenya safari tours.
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-delayed">
          <span className="glass-morphism px-4 py-2 rounded-full text-white/90 text-sm flex items-center gap-2">
            <Globe className="w-4 h-4" />
            50+ Languages Supported
          </span>
          <span className="glass-morphism px-4 py-2 rounded-full text-white/90 text-sm">
            ⭐ World-Class Safari Experiences ⭐
          </span>
          <span className="glass-morphism px-4 py-2 rounded-full text-white/90 text-sm">
            🦁 Big Five Guaranteed 🦁
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-scale-in">
          <Button 
            onClick={scrollToDestinations}
            size="lg" 
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full glow-primary transition-smooth hover:scale-105"
          >
            Explore Destinations
            <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
          </Button>
          
          <Button
            onClick={openWhatsApp}
            size="lg"
            className="bg-white/90 text-gray-900 hover:bg-white border-2 border-white/50 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-full transition-bounce hover:scale-105 shadow-xl"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Book via WhatsApp
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-white animate-fade-in-delayed">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">50K+</div>
            <div className="text-sm opacity-80">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">15+</div>
            <div className="text-sm opacity-80">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">24/7</div>
            <div className="text-sm opacity-80">Customer Care Support</div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;