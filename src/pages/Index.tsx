import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WildebeestMigration from "@/components/WildebeestMigration";
import DestinationsShowcase from "@/components/DestinationsShowcase";
import InteractiveMap from "@/components/InteractiveMap";
import AIFeatures from "@/components/AIFeatures";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

// Add IDs to sections for navigation

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <section id="experiences">
          <WildebeestMigration />
        </section>
        <DestinationsShowcase />
        <InteractiveMap />
        <AIFeatures />
        <section id="about">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
