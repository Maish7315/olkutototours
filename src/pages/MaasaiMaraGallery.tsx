import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Rating } from "@/components/ui/rating";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar as CalendarIcon, MessageCircle, MapPin, Star } from "lucide-react";

const imageModules = import.meta.glob('../assets/mara/*.jpeg', { eager: true }) as Record<string, { default: string }>;

const fece49bfdafb48938a5468c9dab8ac8e = imageModules['../assets/mara/fece49bf-dafb-4893-8a54-68c9dab8ac8e.jpeg'].default;
const gameDrivesInSamburuNationalReserveKenya = imageModules['../assets/mara/Game drives in Samburu National Reserve-Kenya.jpeg'].default;
const iescapeUltimateWildlife13days12nightsCapeTownHermanusWinelandsSabiSandGameReserve = imageModules['../assets/mara/i-escape - Ultimate Wildlife (13 days, 12 nights)Cape Town, Hermanus, Winelands, Sabi Sand Game Reserve.jpeg'].default;
const nicProustBush24TheSunWasSettingInThe = imageModules['../assets/mara/Nic Proust - Bush24 -The sun was setting in the---.jpeg'].default;
const selousGameReserveTanzania = imageModules['../assets/mara/Selous Game Reserve - Tanzania.jpeg'].default;
const thandaSafariReviewThePerfectBushBreakInKZN = imageModules['../assets/mara/Thanda Safari Review_ The Perfect Bush Break in KZN.jpeg'].default;
const thisIsToBeSeenInKenyaItsTheAnnualWild = imageModules['../assets/mara/This is to be seen in kenya, its the annual wild---.jpeg'].default;
const ulusabaRockLodgeSabiSandGameReserveSouthAfricaHIPHotels = imageModules['../assets/mara/Ulusaba Rock Lodge - Sabi Sand Game Reserve (South Africa) - HIP Hotels.jpeg'].default;

const MaasaiMaraGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const destinationData = {
    name: "Maasai Mara National Park",
    description: "Witness the spectacular Great Wildebeest Migration and encounter Africa's Big Five in their natural habitat. This world-renowned reserve offers unparalleled wildlife viewing opportunities.",
    location: "Southwestern Kenya",
    bestTime: "July - October",
    duration: "3-5 Days",
    price: "Contact Us",
    rating: 4.9,
    highlights: [
      "Great Migration",
      "Big Five",
      "Maasai Culture",
      "Hot Air Balloons",
      "Game Drives",
      "Lion Prides",
      "Cheetah Hunts",
      "Elephant Herds",
      "Zebras & Wildebeest",
      "Bird Watching"
    ],
    images: [
      fece49bfdafb48938a5468c9dab8ac8e,
      gameDrivesInSamburuNationalReserveKenya,
      iescapeUltimateWildlife13days12nightsCapeTownHermanusWinelandsSabiSandGameReserve,
      nicProustBush24TheSunWasSettingInThe,
      selousGameReserveTanzania,
      thandaSafariReviewThePerfectBushBreakInKZN,
      thisIsToBeSeenInKenyaItsTheAnnualWild,
      ulusabaRockLodgeSabiSandGameReserveSouthAfricaHIPHotels
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
          <h1 className="text-3xl font-bold text-gray-800">{destinationData.name}</h1>
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
                <p className="text-gray-700 mb-4">{destinationData.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Best Time</div>
                    <div className="font-semibold">{destinationData.bestTime}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="font-semibold">{destinationData.duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Price</div>
                    <div className="font-semibold">{destinationData.price}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Rating</div>
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
                        <option>Standard Safari</option>
                        <option>Luxury Camp</option>
                        <option>Hot Air Balloon</option>
                        <option>Migration Special</option>
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
                    <p className="text-gray-600 mb-4">
                      Ready to witness the Great Migration? Contact us for an unforgettable Maasai Mara experience.
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

export default MaasaiMaraGallery;