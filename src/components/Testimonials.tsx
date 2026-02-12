import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import review1 from "@/assets/review 1 .jpg";
import review2 from "@/assets/review 2.jpg";
import review3 from "@/assets/review 3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United States",
      flag: "🇺🇸",
      rating: 5,
      text: "The Maasai Mara experience was absolutely breathtaking! The AI-powered language support made everything so easy, and our guide spoke fluent English. Witnessing the Great Migration was a dream come true.",
      trip: "7-Day Safari Adventure",
      image: review3
    },
    {
      name: "Hans Mueller",
      country: "Germany",
      flag: "🇩🇪",
      rating: 5,
      text: "Fantastisch! The WhatsApp booking system worked perfectly in German. The attention to detail and cultural experiences in Samburu were exceptional. Kenya exceeded all our expectations!",
      trip: "Cultural & Wildlife Tour",
      image: review2
    },
    {
      name: "Marie Dubois",
      country: "France",
      flag: "🇫🇷",
      rating: 5,
      text: "Magnifique! From the pristine beaches of Diani to the elephants of Amboseli with Kilimanjaro backdrop - every moment was magical. The multilingual support made us feel at home.",
      trip: "Beach & Safari Combo",
      image: review1
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Global</span> Travelers Love Kenya
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover what travelers from around the world say about their unforgettable Kenyan adventures.
            Our multilingual support ensures everyone feels at home.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Satisfaction</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-glow transition-smooth hover:scale-105 animate-fade-in-delayed`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-sunset fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Trip Info */}
                <div className="mb-4">
                  <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                    {testimonial.trip}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <div className="font-semibold text-foreground flex items-center gap-2">
                      {testimonial.name}
                      <span className="text-lg">{testimonial.flag}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.country}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-morphism p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Join Thousands of Satisfied Travelers
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience Kenya's magic with our AI-powered multilingual support. 
              Your dream safari adventure is just a WhatsApp message away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-accent hover:bg-accent-glow text-accent-foreground rounded-full font-semibold transition-bounce hover:scale-105">
                📱 Start Planning Now
              </button>
              <button className="px-6 py-3 bg-primary hover:bg-primary-glow text-primary-foreground rounded-full font-semibold transition-bounce hover:scale-105">
                🎯 Custom Itinerary
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;