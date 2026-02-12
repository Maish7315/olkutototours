import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Rating } from "@/components/ui/rating";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar as CalendarIcon, MessageCircle, MapPin, Star } from "lucide-react";

const imageModules = import.meta.glob('../assets/hell\'s gate/*.jpeg', { eager: true }) as Record<string, { default: string }>;

const hellsGateGorge = imageModules['../assets/hell\'s gate/hell\'s gate gorge, naivasha, kenya.jpeg'].default;
const hellsGateNationalPark = imageModules['../assets/hell\'s gate/hell\'s gate national park - kenya.jpeg'].default;
const hellsGateLake1 = imageModules['../assets/hell\'s gate/Hell\'s Gate National Park lies south of Lake--- (1).jpeg'].default;
const hellsGateLake = imageModules['../assets/hell\'s gate/Hell\'s Gate National Park lies south of Lake---.jpeg'].default;
const hellsGateKenya1 = imageModules['../assets/hell\'s gate/Hell\'s Gate National Park, Kenya (1).jpeg'].default;
const hellsGateDayTrip = imageModules['../assets/hell\'s gate/Hells Gate National Park - A Day Trip From Nairobi.jpeg'].default;
const hellsGateGreenCrater = imageModules['../assets/hell\'s gate/Hells Gate National Park and Green Crater Lake, Kenya.jpeg'].default;
const hellsGateDayAfter = imageModules['../assets/hell\'s gate/Hell’s Gate National Park, Kenya The day after---.jpeg'].default;
const hellsGateMain = imageModules['../assets/hell\'s gate/Hell’s Gate National Park.jpeg'].default;
const hellsGateCycle = imageModules['../assets/hell\'s gate/_Cycle with Wildlife_ Hell\'s Gate\'s Geothermal Wonders Await!__.jpeg'].default;
const hellsGateTrip = imageModules['../assets/hell\'s gate/__🌄 1-Day Trip to Hell\'s Gate and Lake Naivasha---.jpeg'].default;

const HellsGateGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [userRating, setUserRating] = useState(0);

  const destinationData = {
    name: "Hell's Gate National Park",
    description: "Walk or cycle among wildlife in this unique park featuring dramatic gorges, geothermal features, and rock climbing. Kenya's only national park where you can walk or cycle on your own through the wilderness.",
    location: "Rift Valley, Kenya",
    bestTime: "June - September",
    duration: "1 Day",
    price: "Contact Us",
    rating: 4.4,
    highlights: [
      "Walking Safaris",
      "Rock Climbing",
      "Geothermal Springs",
      "Cycling",
      "Gorge Hiking",
      "Fischer's Tower",
      "Central Tower",
      "Ol Njorowa Gorge"
    ]
  };

  const images = [
    hellsGateGorge,
    hellsGateNationalPark,
    hellsGateLake1,
    hellsGateLake,
    hellsGateKenya1,
    hellsGateDayTrip,
    hellsGateGreenCrater,
    hellsGateDayAfter,
    hellsGateMain,
    hellsGateCycle,
    hellsGateTrip
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button
            onClick={() => window.history.back()}
            variant="ghost"
            className="flex items-center gap-2 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Destinations
          </Button>
        </div>

        {/* Header */}
        <section className="py-12 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                {destinationData.name}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {destinationData.description}
              </p>
            </div>

            {/* Key Info Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card>
                <CardContent className="p-4 text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{destinationData.location}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <CalendarIcon className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <div className="font-semibold">{destinationData.bestTime}</div>
                  <div className="text-sm text-muted-foreground">Best Time</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{destinationData.rating}</div>
                  <div className="flex justify-center mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(destinationData.rating) ? 'text-sunset fill-current' : 'text-muted'}`} />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">Average Rating</div>

                  {/* User Rating Section */}
                  <div className="border-t border-border pt-3">
                    <div className="text-xs text-muted-foreground mb-2">Rate this destination:</div>
                    <Rating
                      initialRating={userRating}
                      onRatingChange={setUserRating}
                      size="sm"
                    />
                    {userRating > 0 && (
                      <div className="text-xs text-primary mt-1">
                        Thank you for rating!
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-lg font-bold text-adventure">Contact Us</div>
                  <div className="text-sm text-muted-foreground">For Pricing</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enquiry Form Section */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 gradient-text">Book Your {destinationData.name} Adventure</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll help you plan your perfect Kenyan safari experience.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    const name = formData.get('name') as string;
                    const email = formData.get('email') as string;
                    const phone = formData.get('phone') as string;
                    const travelers = formData.get('travelers') as string;
                    const duration = formData.get('duration') as string;
                    const budget = formData.get('budget') as string;
                    const message = formData.get('message') as string;

                    const enquiryMessage = encodeURIComponent(
                      `Hi! I'm interested in booking a trip to ${destinationData.name}.\n\n` +
                      `Name: ${name}\n` +
                      `Email: ${email}\n` +
                      `Phone: ${phone}\n` +
                      `Number of Travelers: ${travelers}\n` +
                      `Trip Duration: ${duration}\n` +
                      `Budget Range: ${budget}\n` +
                      `Additional Requirements: ${message}\n\n` +
                      `Please help me plan this amazing safari adventure!`
                    );
                    window.open(`https://wa.me/+254711939160?text=${enquiryMessage}`, '_blank');
                  }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Travelers</label>
                    <select
                      name="travelers"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6+">6+ People</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Trip Duration</label>
                    <select
                      name="duration"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="1-2 days">1-2 Days</option>
                      <option value="3-5 days">3-5 Days</option>
                      <option value="6-8 days">6-8 Days</option>
                      <option value="9-12 days">9-12 Days</option>
                      <option value="2+ weeks">2+ Weeks</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Budget Range (Optional)</label>
                    <select
                      name="budget"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select budget range (optional)</option>
                      <option value="Budget-friendly">Budget-friendly</option>
                      <option value="Mid-range">Mid-range</option>
                      <option value="Luxury">Luxury</option>
                      <option value="Ultra-luxury">Ultra-luxury</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Additional Requirements</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us about your interests, special requirements, accommodation preferences, or any questions you have..."
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent-glow text-accent-foreground py-4 text-lg font-semibold"
                      size="lg"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Send Enquiry via WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Highlights & Booking */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Highlights */}
              <div>
                <h2 className="text-3xl font-bold mb-6 gradient-text">Highlights</h2>
                <div className="grid gap-4">
                  {destinationData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-lg">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Calendar */}
              <div>
                <h2 className="text-3xl font-bold mb-6 gradient-text">Book Your Trip</h2>
                <Card>
                  <CardContent className="p-6">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border mb-4"
                    />
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-lg font-semibold mb-2">Selected Date</div>
                        <div className="text-muted-foreground">
                          {selectedDate ? selectedDate.toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          }) : 'Please select a date'}
                        </div>
                      </div>
                      <Button
                        onClick={() => {
                          const message = encodeURIComponent(`Hi! I'm interested in booking a trip to ${destinationData.name}. Can you help me plan this adventure?`);
                          window.open(`https://wa.me/+254711939160?text=${message}`, '_blank');
                        }}
                        className="w-full bg-accent hover:bg-accent-glow text-accent-foreground"
                        size="lg"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Book via WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Photo Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => {
                // Create image metadata based on actual image filenames and content
                const getImageInfo = (imagePath: string, idx: number) => {
                  // Extract meaningful descriptions based on actual image filenames
                  const filename = imagePath.split('/').pop()?.toLowerCase() || '';

                  if (filename.includes('hells gate') || filename.includes('gorge')) {
                    return 'Dramatic red rock gorges and volcanic formations';
                  }
                  if (filename.includes('geothermal') || filename.includes('crater')) {
                    return 'Steaming geothermal features and crater lakes';
                  }
                  if (filename.includes('cycling') || filename.includes('bike')) {
                    return 'Scenic cycling routes through pristine wilderness';
                  }
                  if (filename.includes('climbing') || filename.includes('rock')) {
                    return 'Rock climbing adventures on natural formations';
                  }
                  if (filename.includes('naivasha')) {
                    return 'Adventure route to Hell\'s Gate from Lake Naivasha';
                  }
                  if (filename.includes('nairobi')) {
                    return 'Day trip destination from Nairobi city';
                  }

                  // Fallback descriptions
                  const fallbacks = [
                    "Hell's Gate Gorge with dramatic red rock cliffs and natural formations",
                    "Hell's Gate National Park entrance with volcanic rock formations",
                    "Hell's Gate Gorge showing the deep canyon carved by ancient rivers",
                    "Hell's Gate National Park with its unique rock formations and gorges",
                    "Hell's Gate Gorge featuring the famous natural rock arch",
                    "Hell's Gate National Park - A Day Trip From Nairobi showing the main gorge",
                    "Hell's Gate National Park and Green Crater Lake with geothermal features",
                    "Hell's Gate National Park, Kenya - The day after exploring the gorges",
                    "Hell's Gate National Park main gorge with steep cliffs",
                    "Cycling through Hell's Gate's Geothermal Wonders",
                    "1-Day Trip to Hell's Gate and Lake Naivasha showing the adventure route"
                  ];

                  return fallbacks[idx] || "Hell's Gate National Park landscape and adventure scenes";
                };

                const imageDescription = getImageInfo(image, index);

                return (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => {
                      const modal = document.createElement('div');
                      modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4';
                      modal.innerHTML = `
                        <div class="relative max-w-4xl max-h-full">
                          <img src="${image}" alt="${imageDescription}" class="w-full h-full object-contain rounded-lg" />
                          <div class="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                            <p class="text-sm">${imageDescription}</p>
                          </div>
                          <button class="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-2xl" onclick="this.closest('.fixed').remove()">&times;</button>
                        </div>
                      `;
                      document.body.appendChild(modal);
                      modal.addEventListener('click', (e) => {
                        if (e.target === modal) modal.remove();
                      });
                    }}
                  >
                    <img
                      src={image}
                      alt={imageDescription}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-4">
                        <p className="text-sm font-medium mb-2">Click to view full size</p>
                        <p className="text-xs opacity-90 line-clamp-2">{imageDescription}</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                      <p className="text-white text-xs line-clamp-2">{imageDescription}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] p-4">
              <img
                src={selectedImage}
                alt="Hell's Gate National Park"
                className="w-full h-full object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-2xl"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default HellsGateGallery;