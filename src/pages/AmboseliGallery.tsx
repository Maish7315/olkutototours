import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Rating } from "@/components/ui/rating";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar as CalendarIcon, MessageCircle, MapPin, Star } from "lucide-react";

const imageModules = import.meta.glob('../assets/amboseli/*.jpeg', { eager: true }) as Record<string, { default: string }>;

const daySafariInTaitaHillsFromMombasa = imageModules['../assets/amboseli/2-Day Safari in Taita Hills from Mombasa.jpeg'].default;
const placesToPlanYourVacationInKenya = imageModules['../assets/amboseli/9 PLACES TO PLAN YOUR VACATION IN KENYA 🔥.jpeg'].default;
const amboseliNationalParkKenyaPhotoBy = imageModules['../assets/amboseli/Amboseli National Park Kenya 🇰🇪 Photo by---.jpeg'].default;
const amboseliNationalParkTravel = imageModules['../assets/amboseli/Amboseli National Park travel.jpeg'].default;
const anAfricanSafariWithKids = imageModules['../assets/amboseli/An African Safari with Kids.jpeg'].default;
const f11a27eec19458680dda32abf256520 = imageModules['../assets/amboseli/f11a27ee-c19a-4586-80dd-a32abf256520.jpeg'].default;
const seeThingsFromADifferentPerspectiveWhenYou = imageModules['../assets/amboseli/See things from a different perspective when you---.jpeg'].default;
const spotTheBigFiveInAmboseliWithMtKilimanjaro = imageModules['../assets/amboseli/Spot the Big Five in Amboseli with Mt_ Kilimanjaro---.jpeg'].default;
const weHaveDailyGroupDeparturesToAmboseli = imageModules['../assets/amboseli/We have daily group departures to; ✓Amboseli---.jpeg'].default;
const day2TsavoEastToAmboseliNationalPark = imageModules['../assets/amboseli/🗓️ Day 2_ Tsavo East to Amboseli National Park –---.jpeg'].default;

const AmboseliGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const destinationData = {
    name: "Amboseli National Park",
    description: "Iconic views of Mount Kilimanjaro provide the perfect backdrop for incredible elephant encounters and diverse wildlife photography.",
    location: "Rift Valley, Kenya",
    bestTime: "June - September",
    duration: "1-2 Days",
    price: "Contact Us",
    rating: 4.8,
    highlights: [
      "Mount Kilimanjaro Views",
      "Elephant Herds",
      "Photography",
      "Maasai Villages",
      "Birdlife",
      "Dust Devils",
      "Observation Hill",
      "Swamp Walks",
      "Lion Hunts",
      "Cheetah Sightings"
    ],
    images: [
      daySafariInTaitaHillsFromMombasa,
      placesToPlanYourVacationInKenya,
      amboseliNationalParkKenyaPhotoBy,
      amboseliNationalParkTravel,
      anAfricanSafariWithKids,
      f11a27eec19458680dda32abf256520,
      seeThingsFromADifferentPerspectiveWhenYou,
      spotTheBigFiveInAmboseliWithMtKilimanjaro,
      weHaveDailyGroupDeparturesToAmboseli,
      day2TsavoEastToAmboseliNationalPark
    ]
  };

  const handleBooking = () => {
    setShowBooking(true);
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.history.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">{destinationData.name}</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-orange-600" />
                  <span className="text-lg font-semibold">{destinationData.location}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{destinationData.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Best Time</div>
                    <div className="font-semibold">{destinationData.bestTime}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Duration</div>
                    <div className="font-semibold">{destinationData.duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Price</div>
                    <div className="font-semibold">{destinationData.price}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
                    <div className="font-semibold flex items-center justify-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {destinationData.rating}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Highlights</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {destinationData.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={handleBooking}
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Book This Experience
                </Button>
              </CardContent>
            </Card>

            {/* Gallery */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Photo Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {destinationData.images.map((image, index) => (
                    <div 
                      key={index} 
                      className="relative group cursor-pointer overflow-hidden rounded-lg"
                      onClick={() => handleImageClick(image)}
                    >
                      <img 
                        src={image} 
                        alt={`${destinationData.name} ${index + 1}`}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Book Your Experience</h3>
                
                {showBooking ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Select Date</label>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Number of People</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4 People</option>
                        <option>5+ People</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Experience Type</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Kilimanjaro View Safari</option>
                        <option>Elephant Encounter</option>
                        <option>Photography Tour</option>
                        <option>Maasai Cultural Visit</option>
                      </select>
                    </div>
                    
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      Send Inquiry
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setShowBooking(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Ready to see Mount Kilimanjaro and elephants? Contact us for your Amboseli safari.
                    </p>
                    <Button 
                      onClick={handleBooking}
                      className="w-full bg-orange-600 hover:bg-orange-700"
                    >
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      Start Booking
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default AmboseliGallery;