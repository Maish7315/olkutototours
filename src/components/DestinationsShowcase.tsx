import { useState } from 'react';
import DestinationCard from './DestinationCard';
import maasaiMaraImage from "../assets/maasai-mara.jpg";
import dianiBeachImage from "../assets/diani-beach.jpg";
import tsavoLionsImage from "../assets/tsavo-lions.jpg";
import amboseliImage from "../assets/amboseli-elephants.jpg";
import nakuruImage from "../assets/lake-nakuru-flamingos.jpg";
import samburuImage from "../assets/samburu-wildlife.jpg";
import lamuImage from "../assets/lamu.jpg";
import hellsGateImage from "../assets/Hells Gate National Park - A Day Trip From Nairobi-BxGL_meQ.jpeg";
import fortJesusImage from "../assets/mombasa_ kenya_ fort jesus museum-C__h5-AU.jpeg";

// Additional adventure images - using verified existing images
import heroKenyaImage from "../assets/hero-kenya.jpg";
import review1Image from "../assets/review 1 .jpg";
import review2Image from "../assets/review 2.jpg";
import review3Image from "../assets/review 3.jpg";
import royImage from "../assets/roy (2).png";
import roy2Image from "../assets/roy2.png";
import safariImage from "../assets/Safari in Kenya — BARBARA ATHANASSIADIS_ Travel Writer-BMQQlWer.jpeg";
import kenyaTravelImage from "../assets/Kenya Travel Guide – Parks_ Best Time_ Reviews _ More!-BEqwugbx.jpeg";
import wildlifeKenyaImage from "../assets/Kenya wildlife safari Masai mara game reserve and Lake Nakuru national park_-BmaB9kFa.jpeg";
import image1 from "../assets/image 1.jpeg";
import image2 from "../assets/image 2.jpeg";
import image3 from "../assets/image 3.jpeg";
import image4 from "../assets/image 4.jpeg";
import image5 from "../assets/image 5.jpeg";
import image6 from "../assets/image 6.jpeg";
import image7 from "../assets/image 7.jpeg";
import image8 from "../assets/image 8.jpeg";
import image9 from "../assets/image 9.jpeg";
import image10 from "../assets/image 10.jpeg";
import image11 from "../assets/image 11.jpeg";
import image12 from "../assets/image 12.jpeg";
import image13 from "../assets/image 13.jpeg";
import image14 from "../assets/image 14.jpeg";

const DestinationsShowcase = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const adventureImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14
  ];

  const destinations = [
    {
      title: "Maasai Mara National Park",
      description: "Witness the spectacular Great Wildebeest Migration and encounter Africa's Big Five in their natural habitat. This world-renowned reserve offers unparalleled wildlife viewing opportunities.",
      image: maasaiMaraImage,
      category: "Wildlife Safari",
      rating: 4.9,
      highlights: ["Great Migration", "Big Five", "Maasai Culture", "Hot Air Balloons", "Game Drives"]
    },
    {
      title: "Diani Beach Paradise",
      description: "Pristine white sand beaches meet turquoise Indian Ocean waters. Perfect for relaxation, water sports, and exploring vibrant coral reefs.",
      image: dianiBeachImage,
      category: "Coastal Paradise",
      rating: 4.8,
      highlights: ["White Sand Beaches", "Coral Reefs", "Water Sports", "Dhow Sailing", "Beach Resorts"]
    },
    {
      title: "Tsavo National Parks",
      description: "Kenya's largest protected area, famous for red elephants, diverse wildlife, and dramatic landscapes. Experience authentic African wilderness.",
      image: tsavoLionsImage,
      category: "Wilderness Adventure",
      rating: 4.7,
      highlights: ["Red Elephants", "Lion Prides", "Baobab Trees", "Rock Formations", "Bird Watching"]
    }
  ];

  const additionalDestinations = [
    {
      title: "Amboseli National Park",
      description: "Iconic views of Mount Kilimanjaro provide the perfect backdrop for incredible elephant encounters and diverse wildlife photography.",
      image: amboseliImage,
      category: "Mountain Safari",
      rating: 4.8,
      highlights: ["Mount Kilimanjaro Views", "Elephant Herds", "Photography", "Maasai Villages", "Birdlife"]
    },
    {
      title: "Lake Nakuru National Park",
      description: "Famous for millions of flamingos creating a pink spectacle, plus rhino sanctuary and diverse wildlife in a compact area.",
      image: nakuruImage,
      category: "Bird Sanctuary",
      rating: 4.6,
      highlights: ["Flamingo Flocks", "Rhino Sanctuary", "Waterfalls", "Baboon Cliffs", "Birdwatching"]
    },
    {
      title: "Samburu National Reserve",
      description: "Unique wildlife species not found elsewhere in Kenya, including Grevy's zebra, reticulated giraffe, and gerenuk antelope.",
      image: samburuImage,
      category: "Unique Wildlife",
      rating: 4.7,
      highlights: ["Unique Species", "Ewaso Nyiro River", "Cultural Visits", "Desert Landscapes", "Endemic Animals"]
    },
    {
      title: "Lamu Island Heritage",
      description: "UNESCO World Heritage site showcasing Swahili culture, ancient architecture, and pristine beaches in a car-free paradise.",
      image: lamuImage,
      category: "Cultural Heritage",
      rating: 4.5,
      highlights: ["UNESCO Site", "Swahili Culture", "Dhow Rides", "Historic Architecture", "Car-Free Island"]
    },
    {
      title: "Hell's Gate National Park",
      description: "Walk or cycle among wildlife in this unique park featuring dramatic gorges, geothermal features, and rock climbing.",
      image: hellsGateImage,
      category: "Adventure Park",
      rating: 4.4,
      highlights: ["Walking Safaris", "Rock Climbing", "Geothermal Springs", "Cycling", "Gorge Hiking"]
    },
    {
      title: "Fort Jesus Museum",
      description: "Historic Portuguese fort in Mombasa showcasing centuries of coastal history, architecture, and maritime heritage.",
      image: fortJesusImage,
      category: "Historical Site",
      rating: 4.3,
      highlights: ["Portuguese Architecture", "Maritime History", "Museum Collections", "Coastal Views", "Cultural Tours"]
    }
  ];

  const allDestinations = [...destinations, ...additionalDestinations];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % adventureImages.length : 0));
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + adventureImages.length) % adventureImages.length : 0));
  };

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Explore</span> Kenya's Wonders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From the legendary Maasai Mara to pristine coastal paradises, discover Kenya's most spectacular destinations with our AI-powered multilingual booking experience.
          </p>
        </div>

        {/* Featured Destinations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.title}
              {...destination}
              className={`animate-fade-in-delayed ${index === 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            />
          ))}
        </div>

        {/* More Destinations */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            More Amazing Destinations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalDestinations.map((destination) => (
              <DestinationCard
                key={destination.title}
                {...destination}
                className="animate-scale-in"
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-morphism p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our AI travel assistant can help you discover hidden gems and create a personalized itinerary that matches your interests perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary hover:bg-primary-glow text-primary-foreground rounded-full font-semibold transition-bounce hover:scale-105">
                🤖 Ask AI Assistant
              </button>
              <button className="px-6 py-3 bg-adventure hover:bg-adventure-glow text-adventure-foreground rounded-full font-semibold transition-bounce hover:scale-105">
                ✨ Custom Trip Planner
              </button>
            </div>
          </div>
        </div>

        {/* More Kenya Adventures Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">More Kenya Adventures</span> with Olkutoto
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the untold stories and hidden gems of Kenya through our curated collection of unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {adventureImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={image}
                  alt={`Kenya Adventure ${index + 1}`}
                  className="w-full h-32 md:h-40 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">View Gallery</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-5xl max-h-full flex items-center justify-center">
            <img
              src={adventureImages[selectedImageIndex]}
              alt={`Kenya Adventure ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all"
              aria-label="Close gallery"
              title="Close gallery"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all"
              aria-label="Previous image"
              title="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all"
              aria-label="Next image"
              title="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 rounded-full px-4 py-2">
              <span className="text-sm font-medium">
                {selectedImageIndex + 1} / {adventureImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DestinationsShowcase;