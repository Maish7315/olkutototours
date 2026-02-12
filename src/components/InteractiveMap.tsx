import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Phone } from "lucide-react";
import mapBackground from "@/assets/MAJESTIC SUNSET WITH LION VIEW-BhrCCGOJ.jpeg";

const InteractiveMap = () => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  const destinations = [
    {
      id: 'maasai-mara',
      name: 'Maasai Mara',
      coordinates: { x: 25, y: 65 },
      description: 'World-famous for the Great Migration',
      category: 'Wildlife Safari'
    },
    {
      id: 'amboseli',
      name: 'Amboseli',
      coordinates: { x: 45, y: 80 },
      description: 'Elephant paradise with Mt. Kilimanjaro views',
      category: 'Mountain Safari'
    },
    {
      id: 'tsavo',
      name: 'Tsavo Parks',
      coordinates: { x: 65, y: 75 },
      description: 'Largest protected area with red elephants',
      category: 'Wilderness'
    },
    {
      id: 'samburu',
      name: 'Samburu',
      coordinates: { x: 50, y: 45 },
      description: 'Unique wildlife species',
      category: 'Desert Safari'
    },
    {
      id: 'nakuru',
      name: 'Lake Nakuru',
      coordinates: { x: 30, y: 55 },
      description: 'Flamingo spectacular',
      category: 'Bird Sanctuary'
    },
    {
      id: 'nairobi',
      name: 'Nairobi NP',
      coordinates: { x: 40, y: 60 },
      description: 'Urban safari experience',
      category: 'City Safari'
    },
    {
      id: 'diani',
      name: 'Diani Beach',
      coordinates: { x: 75, y: 85 },
      description: 'Pristine coastal paradise',
      category: 'Beach Resort'
    },
    {
      id: 'lamu',
      name: 'Lamu Island',
      coordinates: { x: 80, y: 70 },
      description: 'UNESCO heritage culture',
      category: 'Cultural Site'
    }
  ];

  const openWhatsApp = (destination: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in visiting ${destination}. Can you help me plan my trip?`);
    window.open(`https://wa.me/+254711939160?text=${message}`, '_blank');
  };

  return (
    <section id="map" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Interactive</span> Kenya Map
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Click on any destination to explore what makes it special. Plan your perfect Kenyan adventure with our interactive guide.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-surface rounded-2xl p-8 shadow-elegant">
              
              {/* Kenya Map SVG */}
              <div className="relative aspect-[4/3] bg-primary/5 rounded-xl overflow-hidden">
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full"
                  style={{ filter: 'drop-shadow(0 4px 20px hsl(var(--primary) / 0.1))' }}
                >
                  {/* Kenya outline (simplified) */}
                  <path
                    d="M20 30 L20 85 L85 85 L85 75 L70 60 L75 45 L65 25 L45 20 L30 25 Z"
                    fill="hsl(var(--primary) / 0.1)"
                    stroke="hsl(var(--primary) / 0.3)"
                    strokeWidth="0.5"
                    className="animate-fade-in-delayed"
                  />
                  
                  {/* Destination markers */}
                  {destinations.map((dest) => (
                    <g key={dest.id}>
                      <circle
                        cx={dest.coordinates.x}
                        cy={dest.coordinates.y}
                        r={selectedDestination === dest.id ? "3" : "2"}
                        fill={selectedDestination === dest.id ? "hsl(var(--accent))" : "hsl(var(--primary))"}
                        className="cursor-pointer transition-all duration-300 hover:r-3"
                        onClick={() => setSelectedDestination(
                          selectedDestination === dest.id ? null : dest.id
                        )}
                      />
                      <circle
                        cx={dest.coordinates.x}
                        cy={dest.coordinates.y}
                        r="6"
                        fill="transparent"
                        className="cursor-pointer animate-glow-pulse"
                        stroke={selectedDestination === dest.id ? "hsl(var(--accent) / 0.5)" : "hsl(var(--primary) / 0.3)"}
                        strokeWidth="1"
                        onClick={() => setSelectedDestination(
                          selectedDestination === dest.id ? null : dest.id
                        )}
                      />
                    </g>
                  ))}
                </svg>

                {/* Destination labels */}
                {destinations.map((dest) => (
                  <div
                    key={`label-${dest.id}`}
                    className="absolute text-xs font-medium text-foreground pointer-events-none"
                    style={{
                      left: `${dest.coordinates.x}%`,
                      top: `${dest.coordinates.y - 8}%`,
                      transform: 'translate(-50%, -100%)'
                    }}
                  >
                    {dest.name}
                  </div>
                ))}
              </div>

              {/* Map Legend */}
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span>Wildlife Safari</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span>Beach & Culture</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-adventure"></div>
                  <span>Adventure Parks</span>
                </div>
              </div>
            </div>
          </div>

          {/* Destination Info Panel */}
          <div className="lg:col-span-1">
            <div
              className="glass-morphism rounded-2xl p-6 min-h-[400px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${mapBackground})`
              }}
            >
              
              {selectedDestination ? (
                <div className="animate-fade-in-delayed">
                  {(() => {
                    const dest = destinations.find(d => d.id === selectedDestination);
                    return dest ? (
                      <>
                        <div className="flex items-center gap-3 mb-4">
                          <MapPin className="w-6 h-6 text-primary" />
                          <h3 className="text-2xl font-bold gradient-text">{dest.name}</h3>
                        </div>
                        
                        <div className="mb-4">
                          <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                            {dest.category}
                          </span>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {dest.description}
                        </p>

                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Navigation className="w-4 h-4" />
                            <span>Best accessed via road/air</span>
                          </div>
                          
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Phone className="w-4 h-4" />
                            <span>24/7 booking support</span>
                          </div>
                        </div>

                        <div className="mt-8 space-y-3">
                          <Button 
                            onClick={() => openWhatsApp(dest.name)}
                            className="w-full bg-accent hover:bg-accent-glow text-accent-foreground"
                          >
                            Book {dest.name} Tour
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full"
                          >
                            View Gallery
                          </Button>
                        </div>
                      </>
                    ) : null;
                  })()}
                </div>
              ) : (
                <div className="text-center py-12">
                  <MapPin className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Explore Kenya</h3>
                  <p className="text-muted-foreground mb-6">
                    Click on any destination marker to learn more about what makes each location special.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    🔥 Hot tip: Each destination offers unique experiences!
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;