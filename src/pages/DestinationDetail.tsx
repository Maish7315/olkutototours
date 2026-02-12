import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Rating } from "@/components/ui/rating";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar as CalendarIcon, MessageCircle, MapPin, Star } from "lucide-react";

interface DestinationData {
  name: string;
  description: string;
  images: string[];
  category: string;
  rating: number;
  highlights: string[];
  location: string;
  bestTime: string;
  duration: string;
  price: string;
}

// Resolve all assets in src/assets at build time to their final URLs.
// import.meta.glob with { query: '?url', eager: true } returns a map of pathname -> url string.
const assetUrls = import.meta.glob('../assets/**', { query: '?url', eager: true }) as Record<string, string>;

// Helper function to resolve asset URLs
const resolveAssetUrl = (path: string) => {
  // Normalize path (remove leading slash if present)
  const normalized = path.replace(/^\//, '');
  // Construct the key relative to the assets directory
  const key = `../assets/${normalized}`;
  return assetUrls[key] || path; // fallback to original path
};

const DestinationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [destinationData, setDestinationData] = useState<DestinationData | null>(null);
  const [userRating, setUserRating] = useState(0);

  // Map slugs to destination data - memoized for performance
  const destinations: Record<string, DestinationData> = useMemo(() => ({
    'maasai-mara-national-park': {
      name: 'Maasai Mara National Park',
      description: 'Witness the spectacular Great Wildebeest Migration and encounter Africa\'s Big Five in their natural habitat. This world-renowned reserve offers unparalleled wildlife viewing opportunities.',
      images: [
        'mara/fece49bf-dafb-4893-8a54-68c9dab8ac8e.jpeg',
        'mara/Game drives in Samburu National Reserve-Kenya.jpeg',
        'mara/i-escape - Ultimate Wildlife (13 days, 12 nights)Cape Town, Hermanus, Winelands, Sabi Sand Game Reserve.jpeg',
        'mara/Nic Proust - Bush24 -The sun was setting in the---.jpeg',
        'mara/Selous Game Reserve - Tanzania.jpeg',
        'mara/Thanda Safari Review_ The Perfect Bush Break in KZN.jpeg',
        'mara/This is to be seen in kenya, its the annual wild---.jpeg',
        'mara/Ulusaba Rock Lodge - Sabi Sand Game Reserve (South Africa) - HIP Hotels.jpeg'
      ],
      category: 'Wildlife Safari',
      rating: 4.9,
      highlights: ['Great Migration', 'Big Five', 'Maasai Culture', 'Hot Air Balloons', 'Game Drives'],
      location: 'Southwestern Kenya',
      bestTime: 'July - October',
      duration: '3-7 Days',
      price: 'Contact Us'
    },
    'diani-beach-paradise': {
      name: 'Diani Beach Paradise',
      description: 'Pristine white sand beaches meet turquoise Indian Ocean waters. Perfect for relaxation, water sports, and exploring vibrant coral reefs.',
      images: [
        '29 Colorful Coastal Living Decorating Inspirations-CZI39Gcp.jpeg',
        'diani/5c9c1718-04b3-4fc0-bc7b-94665ad34622.jpeg',
        'diani/835bb76c-ceaa-4f23-a3ec-e27e8c8ab851.jpeg',
        'diani/Discover the Hidden Treasures of Sarasota, Florida_ A Day-by-Day Itinerary!.jpeg',
        'diani/SC.jpeg',
        'diani/Serene beach scene with gentle waves lapping at shore, palm trees swaying under bright s.jpeg'
      ],
      category: 'Coastal Paradise',
      rating: 4.8,
      highlights: ['White Sand Beaches', 'Coral Reefs', 'Water Sports', 'Dhow Sailing', 'Beach Resorts'],
      location: 'South Coast Kenya',
      bestTime: 'December - March',
      duration: '3-7 Days',
      price: 'Contact Us'
    },
    'tsavo-national-parks': {
      name: 'Tsavo National Parks',
      description: 'Kenya\'s largest protected area, famous for red elephants, diverse wildlife, and dramatic landscapes. Experience authentic African wilderness.',
      images: [
        'tsavo/East African Oryx or Beisa Oryx(Oryx beisa) at---.jpeg',
        'tsavo/Embrace Unique Activities Beyond game drive in---.jpeg',
        'tsavo/Explore Tarangire National Park In Tanzania.jpeg',
        'tsavo/Giraffes and sunset in Tsavo East and Tsavo West National Park stock photography.jpeg',
        'tsavo/Kenya Travel Guide – Parks, Best Time, Reviews & More!.jpeg',
        'tsavo/Plan to explore Tsavo West National Park and---.jpeg',
        'tsavo/Safari in Kenya — BARBARA ATHANASSIADIS, Travel Writer.jpeg',
        'tsavo/Seeing Chimpanzees In The Wild At Gombe Stream National Park.jpeg',
        'tsavo/Serengeti National Park - National Park Field Guide.jpeg',
        'tsavo/There is no end to the adventures, we can have if---.jpeg',
        'tsavo/WILDLIFE KENYA SAFARIS - DAY TRIPS (2025) All You Should Know BEFORE You Go (w_ Reviews) (1).jpeg',
        'tsavo/𝐖𝐡𝐞𝐫𝐞 𝐖𝐢𝐥𝐝𝐥𝐢𝐟𝐞 𝐌𝐞𝐞𝐭𝐬---.jpeg',
        'tsavo/📌Watch animals from the aerial view of the---.jpeg'
      ],
      category: 'Wilderness Adventure',
      rating: 4.7,
      highlights: ['Red Elephants', 'Lion Prides', 'Baobab Trees', 'Rock Formations', 'Bird Watching'],
      location: 'Southeastern Kenya',
      bestTime: 'June - October',
      duration: '2-5 Days',
      price: 'Contact Us'
    },
    'amboseli-national-park': {
      name: 'Amboseli National Park',
      description: 'Iconic views of Mount Kilimanjaro provide the perfect backdrop for incredible elephant encounters and diverse wildlife photography.',
      images: [
        'amboseli/2-Day Safari in Taita Hills from Mombasa-DUz0GCDo.jpeg',
        'amboseli/9 PLACES TO PLAN YOUR VACATION IN KENYA 🔥.jpeg',
        'amboseli/Amboseli National Park Kenya 🇰🇪 Photo by---.jpeg',
        'amboseli/Amboseli National Park travel.jpeg',
        'amboseli/An African Safari with Kids.jpeg',
        'amboseli/See things from a different perspective when you---.jpeg',
        'amboseli/Spot the Big Five in Amboseli with Mt_ Kilimanjaro---.jpeg',
        'amboseli/We have daily group departures to; ✓Amboseli---.jpeg',
        'amboseli/🗓️ Day 2_ Tsavo East to Amboseli National Park –---.jpeg'
      ],
      category: 'Mountain Safari',
      rating: 4.8,
      highlights: ['Mount Kilimanjaro Views', 'Elephant Herds', 'Photography', 'Maasai Villages', 'Birdlife'],
      location: 'Southern Kenya',
      bestTime: 'June - September',
      duration: '2-4 Days',
      price: 'Contact Us'
    },
    'lake-nakuru-national-park': {
      name: 'Lake Nakuru National Park',
      description: 'Famous for millions of flamingos creating a pink spectacle, plus rhino sanctuary and diverse wildlife in a compact area.',
      images: [
        'lake-nakuru/9-Day Luxury and Scenic Kenya Safari These safari---.jpeg',
        'lake nakuru/A phenominal wonder of the World! The great---.jpeg',
        'lake nakuru/Book and enjoy a 4-day getaway experience at the---.jpeg',
        'lake nakuru/Can you guess the name of this enchanting lake---.jpeg',
        'lake nakuru/f11a27ee-c19a-4586-80dd-a32abf256520.jpeg',
        'lake nakuru/Kenya wildlife safari Masai mara game reserve and Lake Nakuru national park_.jpeg',
        'lake nakuru/Kenya’s Lake Nakuru National Park_ A Photo Story of Wild Riches.jpeg',
        'lake nakuru/Lake Nakuru national park – The Birders’ Paradise.jpeg',
        'lake nakuru/Lake Nakuru National Park is one of the best….jpeg',
        'lake nakuru/Lake Nakuru National Park, Kenya.jpeg',
        'lake nakuru/Lake Nakuru.jpeg',
        'lake nakuru/Waterfall, Lake Nakuru National Park, Rift Valley, Nakuru County, Kenya.jpeg'
      ],
      category: 'Bird Sanctuary',
      rating: 4.6,
      highlights: ['Flamingo Flocks', 'Rhino Sanctuary', 'Waterfalls', 'Baboon Cliffs', 'Birdwatching'],
      location: 'Rift Valley, Kenya',
      bestTime: 'October - March',
      duration: '1-2 Days',
      price: 'Contact Us'
    },
    'samburu-national-reserve': {
      name: 'Samburu National Reserve',
      description: 'Unique wildlife species not found elsewhere in Kenya, including Grevy\'s zebra, reticulated giraffe, and gerenuk antelope.',
      images: [
        '10-Day Samburu_ Nakuru_ Masai Mara_ Naivasha---CJXNqgT5.jpeg',
        'samburu/11-Day Samburu_Ol Pejeta_ Ark_ Nakuru_ Mara and---Bcvj_yD7.jpeg',
        'samburu/7 Days Samburu and Masai Mara Safari Itinerary Ideas.jpeg',
        'samburu/Honeymoon Breakfast - Picture of Sasaab, Samburu National Reserve - Tripadvisor.jpeg',
        'samburu/Rare Wildlife Wonders_ Discover Samburu\'s Unique Zebras and Giraffes_.jpeg',
        'samburu/Samburu -  national park.jpeg',
        'samburu/Samburu National Reserve Guide - Shaz On The Move.jpeg',
        'samburu/Samburu National Reserve – Travel Guide, Map & More!.jpeg',
        'samburu/SARUNI SAMBURU - Updated 2025 Prices &  Cottage Reviews (Kenya_Samburu National Reserve).jpeg',
        'samburu/Two Days in Samburu National Reserve.jpeg',
        'samburu/When you go on an African safari in Kenya and--- (1).jpeg'
      ],
      category: 'Unique Wildlife',
      rating: 4.7,
      highlights: ['Unique Species', 'Ewaso Nyiro River', 'Cultural Visits', 'Desert Landscapes', 'Endemic Animals'],
      location: 'Northern Kenya',
      bestTime: 'June - September',
      duration: '2-4 Days',
      price: 'Contact Us'
    },
    'lamu-island-heritage': {
      name: 'Lamu Island Heritage',
      description: 'UNESCO World Heritage site showcasing Swahili culture, ancient architecture, and pristine beaches in a car-free paradise.',
      images: [
        'lamu/an old photo of Shela 1967.jpeg',
        'lamu/Forodhani House — The Perfect Hideaway.jpeg',
        'lamu/Lamu highway - Kenya.jpeg',
        'lamu/Lamu Island, Kenya.jpeg',
        'lamu/Lamu Old Town (2025) - All You Need to Know BEFORE You Go (with Reviews).jpeg',
        'lamu/Lamu port - Kenya.jpeg',
        'lamu/Lamu, a small island off the coast of Kenya---.jpeg',
        'lamu/Starfish.jpeg',
        'lamu/The 71 most beautiful places in the world (1).jpeg',
        'lamu/Woman hand with henna - Lamu Kenya.jpeg'
      ],
      category: 'Cultural Heritage',
      rating: 4.5,
      highlights: ['UNESCO Site', 'Swahili Culture', 'Dhow Rides', 'Historic Architecture', 'Car-Free Island'],
      location: 'North Coast Kenya',
      bestTime: 'December - March',
      duration: '3-7 Days',
      price: 'Contact Us'
    },
    'hells-gate-national-park': {
      name: 'Hell\'s Gate National Park',
      description: 'Walk or cycle among wildlife in this unique park featuring dramatic gorges, geothermal features, and rock climbing.',
      images: [
        'hell\'s gate/hell\'s gate gorge, naivasha, kenya.jpeg',
        'hell\'s gate/hell\'s gate national park - kenya.jpeg',
        'hell\'s gate/Hell\'s Gate National Park lies south of Lake--- (1).jpeg',
        'hell\'s gate/Hell\'s Gate National Park lies south of Lake----.jpeg',
        'hell\'s gate/Hell\'s Gate National Park, Kenya (1).jpeg',
        'hell\'s gate/Hells Gate National Park - A Day Trip From Nairobi.jpeg',
        'hell\'s gate/Hells Gate National Park and Green Crater Lake, Kenya.jpeg',
        'hell\'s gate/Hell\'s Gate National Park, Kenya The day after----.jpeg',
        'hell\'s gate/Hell\'s Gate National Park.jpeg',
        'hell\'s gate/_Cycle with Wildlife_ Hell\'s Gate\'s Geothermal Wonders Await!__.jpeg',
        'hell\'s gate/__🌄 1-Day Trip to Hell\'s Gate and Lake Naivasha----.jpeg'
      ],
      category: 'Adventure Park',
      rating: 4.4,
      highlights: ['Walking Safaris', 'Rock Climbing', 'Geothermal Springs', 'Cycling', 'Gorge Hiking'],
      location: 'Rift Valley, Kenya',
      bestTime: 'June - September',
      duration: '1 Day',
      price: 'Contact Us'
    },
    'fort-jesus-museum': {
      name: 'Fort Jesus Museum',
      description: 'Historic Portuguese fort in Mombasa showcasing centuries of coastal history, architecture, and maritime heritage.',
      images: [
        'fortjesus/Canon in Fort Jesus Mombasa - Visit Kenya.jpeg',
        'fortjesus/Fort Jesus in Mombasa, Kenya.jpeg',
        'fortjesus/Fort Jesus Kenya.jpeg',
        'fortjesus/Fort Jesus Mombasa, Kenya.jpeg',
        'fortjesus/Fort Jesus 📍Kenya 🇰🇪.jpeg',
        'fortjesus/Fort Jesus, Mombasa Kenya.jpeg',
        'fortjesus/Fort Jesus, Mombasa.jpeg',
        'fortjesus/FORT JESUS.jpeg',
        'fortjesus/Fort Jesus_.jpeg',
        'fortjesus/Fort Jésus, Mombasa_ Kenya.jpeg',
        'fortjesus/Kenya cruise port_ Mombasa.jpeg',
        'fortjesus/MOMBASA CITY DAY TOUR Explore the beautiful city---.jpeg',
        'fortjesus/mombasa, kenya_ fort jesus museum.jpeg',
        'fortjesus/Today, our clients embarked on an unforgettable--- (1).jpeg',
        'fortjesus/Today, our clients embarked on an unforgettable---.jpeg'
      ],
      category: 'Historical Site',
      rating: 4.3,
      highlights: ['Portuguese Architecture', 'Maritime History', 'Museum Collections', 'Coastal Views', 'Cultural Tours'],
      location: 'Mombasa, Kenya',
      bestTime: 'Year-round',
      duration: 'Half Day',
      price: 'Contact Us'
    }
  }), []);

  // destinations is a static lookup defined in this module; disable exhaustive-deps warning for now
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (slug && destinations[slug]) {
      setDestinationData(destinations[slug]);
    } else {
      navigate('/');
    }
  }, [slug, navigate]);

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm interested in booking a trip to ${destinationData?.name}. Can you help me plan this adventure?`);
    window.open(`https://wa.me/+254711939160?text=${message}`, '_blank');
  };

  if (!destinationData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-20">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="flex items-center gap-2 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Destinations
          </Button>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 bg-gradient-to-b from-background to-muted/30">
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

        {/* Image Gallery */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Photo Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinationData.images.map((image, index) => {
                const imageUrl = resolveAssetUrl(image);
                // Create image metadata based on actual image filenames and content
                const getImageInfo = (dest: string, imagePath: string, idx: number) => {
                  // Extract meaningful descriptions based on actual image filenames
                  const filename = imagePath.split('/').pop()?.toLowerCase() || '';

                  if (filename.includes('wildebeest') || filename.includes('migration')) {
                    return 'Massive wildebeest migration crossing the Mara River in dramatic scenes';
                  }
                  if (filename.includes('maasai') || filename.includes('warrior')) {
                    return 'Maasai tribesmen in traditional red shukas and beaded jewelry';
                  }
                  if (filename.includes('lion')) {
                    return 'Majestic lion pride resting in the golden savanna grasslands';
                  }
                  if (filename.includes('balloon') || filename.includes('hot air')) {
                    return 'Spectacular hot air balloon safari at sunrise over the plains';
                  }
                  if (filename.includes('elephant')) {
                    return 'Towering African elephants walking gracefully through the plains';
                  }
                  if (filename.includes('cheetah')) {
                    return 'Lightning-fast cheetah hunting in the tall golden grass';
                  }
                  if (filename.includes('hippo')) {
                    return 'Hippopotamus pod wallowing in the muddy Mara River waters';
                  }
                  if (filename.includes('zebra')) {
                    return 'Striking zebra herds grazing peacefully at sunset';
                  }
                  if (filename.includes('flamingo') || filename.includes('pink')) {
                    return 'Millions of flamingos creating a stunning pink lake spectacle';
                  }
                  if (filename.includes('rhino')) {
                    return 'Majestic rhinoceros in their natural grassland habitat';
                  }
                  if (filename.includes('waterfall')) {
                    return 'Cascading waterfall in the lush gorge landscape';
                  }
                  if (filename.includes('baboon')) {
                    return 'Curious baboon family perched on dramatic cliff faces';
                  }
                  if (filename.includes('pelican')) {
                    return 'Elegant pelicans fishing in the pristine lake waters';
                  }
                  if (filename.includes('buffalo')) {
                    return 'Powerful Cape buffalo herd near shimmering waterholes';
                  }
                  if (filename.includes('giraffe')) {
                    return 'Graceful giraffes with unique patterned coats';
                  }
                  if (filename.includes('grevy')) {
                    return 'Rare Grevy\'s zebra with striking narrow stripes';
                  }
                  if (filename.includes('reticulated')) {
                    return 'Reticulated giraffe with intricate network pattern';
                  }
                  if (filename.includes('gerenuk')) {
                    return 'Elegant gerenuk antelope standing tall on hind legs';
                  }
                  if (filename.includes('ostrich')) {
                    return 'Majestic Somali ostrich in the arid plains';
                  }
                  if (filename.includes('oryx')) {
                    return 'Desert-adapted oryx with long straight horns';
                  }
                  if (filename.includes('kilimanjaro')) {
                    return 'Snow-capped Mount Kilimanjaro towering over the plains';
                  }
                  if (filename.includes('beach') || filename.includes('diani')) {
                    return 'Pristine white sand beaches with turquoise Indian Ocean waters';
                  }
                  if (filename.includes('dhow')) {
                    return 'Traditional Swahili dhow sailing boats on crystal waters';
                  }
                  if (filename.includes('coral') || filename.includes('reef')) {
                    return 'Vibrant coral reefs teeming with marine life';
                  }
                  if (filename.includes('lamu') || filename.includes('swahili')) {
                    return 'Ancient Swahili architecture and cultural heritage';
                  }
                  if (filename.includes('fort jesus') || filename.includes('museum')) {
                    return 'Historic Portuguese Fort Jesus and maritime exhibits';
                  }
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

                  // Fallback descriptions based on destination
                  const fallbacks: Record<string, string> = {
                    'Maasai Mara National Park': 'Iconic wildlife scenes from Kenya\'s most famous reserve',
                    'Diani Beach Paradise': 'Tropical paradise with pristine beaches and ocean views',
                    'Tsavo National Parks': 'Vast wilderness landscapes and diverse wildlife encounters',
                    'Amboseli National Park': 'Mountain views and elephant encounters in rich grasslands',
                    'Lake Nakuru National Park': 'Unique lake ecosystem with spectacular birdlife',
                    'Samburu National Reserve': 'Arid landscapes with specialized desert wildlife',
                    'Lamu Island Heritage': 'Cultural heritage and historic island architecture',
                    'Hell\'s Gate National Park': 'Dramatic gorges and geothermal wonders',
                    'Fort Jesus Museum': 'Colonial history and maritime heritage exhibits'
                  };

                  return fallbacks[dest] || `${dest} wildlife and landscape scenes`;
                };

                const imageDescription = getImageInfo(destinationData.name, image, index);

                return (
                  <div key={index} className="relative group overflow-hidden rounded-xl cursor-pointer" onClick={() => {
                    const modal = document.createElement('div');
                    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4';
                    modal.innerHTML = `
                      <div class="relative max-w-4xl max-h-full">
                        <img src="${imageUrl}" alt="${imageDescription}" class="w-full h-full object-contain rounded-lg" />
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
                  }}>
                    <img
                      src={imageUrl}
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
                      aria-label="Number of travelers"
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
                      aria-label="Trip duration"
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
                      aria-label="Preferred budget range"
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
                        onClick={openWhatsApp}
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
      </main>

      <Footer />
    </div>
  );
};

export default DestinationDetail;
