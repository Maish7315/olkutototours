import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  MessageCircle,
  Globe,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle
} from "lucide-react";

const AIFeatures = () => {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [tripDuration, setTripDuration] = useState([7]);

  const destinations = [
    'Amboseli', 'Lake Naivasha', 'Nairobi National Park',
    'Lamu', 'Diani', 'Maasai Mara', 'Tsavo Parks', 'Samburu'
  ];

  const activities = ['Safari', 'Tours'];

  const handleDestinationChange = (destination: string, checked: boolean) => {
    if (checked) {
      setSelectedDestinations([...selectedDestinations, destination]);
    } else {
      setSelectedDestinations(selectedDestinations.filter(d => d !== destination));
    }
  };

  const handleActivityChange = (activity: string, checked: boolean) => {
    if (checked) {
      setSelectedActivities([...selectedActivities, activity]);
    } else {
      setSelectedActivities(selectedActivities.filter(a => a !== activity));
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in planning a ${tripDuration[0]}-day trip to Kenya.\n\nDestinations: ${selectedDestinations.join(', ') || 'Not specified'}\nActivities: ${selectedActivities.join(', ') || 'Not specified'}\n\nCan you help me customize this itinerary?`
    );
    window.open(`https://wa.me/+254711939160?text=${message}`, '_blank');
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-glow-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">OLKUTOTO TOURS & TRAVEL</span> EXPERIENCE
            </h2>
            <Sparkles className="w-8 h-8 text-accent animate-glow-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Plan your perfect Kenyan adventure with our interactive trip planner.
            Select your destinations, activities, and customize your trip duration.
          </p>
        </div>

        {/* Trip Planner */}
        <div className="bg-gradient-surface rounded-2xl p-8 mb-16 shadow-elegant">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Destinations */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                Destinations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {destinations.map((destination) => (
                  <div key={destination} className="flex items-center space-x-2">
                    <Checkbox
                      id={destination}
                      checked={selectedDestinations.includes(destination)}
                      onCheckedChange={(checked) => handleDestinationChange(destination, checked as boolean)}
                    />
                    <label
                      htmlFor={destination}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {destination}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                Activities
              </h3>
              <div className="space-y-3">
                {activities.map((activity) => (
                  <div key={activity} className="flex items-center space-x-2">
                    <Checkbox
                      id={activity}
                      checked={selectedActivities.includes(activity)}
                      onCheckedChange={(checked) => handleActivityChange(activity, checked as boolean)}
                    />
                    <label
                      htmlFor={activity}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {activity}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Trip Duration */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                Trip Duration
              </h3>
              <div className="space-y-4">
                <div className="px-3">
                  <Slider
                    value={tripDuration}
                    onValueChange={setTripDuration}
                    max={30}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold gradient-text">{tripDuration[0]}</span>
                  <span className="text-muted-foreground ml-2">days</span>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Adjust the slider to set your preferred trip length
                </p>
              </div>
            </div>
          </div>

          {/* Trip Summary */}
          <div className="mt-8 p-6 bg-background/50 rounded-xl border border-border">
            <h4 className="text-lg font-semibold mb-4">Your Trip Summary</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium text-muted-foreground">Destinations:</span>
                <p className="mt-1">{selectedDestinations.length > 0 ? selectedDestinations.join(', ') : 'None selected'}</p>
              </div>
              <div>
                <span className="font-medium text-muted-foreground">Activities:</span>
                <p className="mt-1">{selectedActivities.length > 0 ? selectedActivities.join(', ') : 'None selected'}</p>
              </div>
              <div>
                <span className="font-medium text-muted-foreground">Duration:</span>
                <p className="mt-1">{tripDuration[0]} days</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Ready to Start Planning?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our expert team will create a personalized itinerary based on your selections.
            Get in touch to turn your dream Kenya trip into reality.
          </p>
          <Button
            onClick={openWhatsApp}
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg glow-primary transition-bounce hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Plan My Trip Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;