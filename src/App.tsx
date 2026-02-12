import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import Index from "./pages/Index";
import DestinationDetail from "./pages/DestinationDetail";
import HellsGateGallery from "./pages/HellsGateGallery";
import MaasaiMaraGallery from "./pages/MaasaiMaraGallery";
import DianiGallery from "./pages/DianiGallery";
import TsavoGallery from "./pages/TsavoGallery";
import AmboseliGallery from "./pages/AmboseliGallery";
import LakeNakuruGallery from "./pages/LakeNakuruGallery";
import LamuGallery from "./pages/LamuGallery";
import FortJesusGallery from "./pages/FortJesusGallery";
import SamburuGallery from "./pages/SamburuGallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="kenya-tourism-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/hells-gate-gallery" element={<HellsGateGallery />} />
            <Route path="/maasai-mara-gallery" element={<MaasaiMaraGallery />} />
            <Route path="/diani-gallery" element={<DianiGallery />} />
            <Route path="/tsavo-gallery" element={<TsavoGallery />} />
            <Route path="/amboseli-gallery" element={<AmboseliGallery />} />
            <Route path="/lake-nakuru-gallery" element={<LakeNakuruGallery />} />
            <Route path="/lamu-gallery" element={<LamuGallery />} />
            <Route path="/fort-jesus-gallery" element={<FortJesusGallery />} />
            <Route path="/samburu-gallery" element={<SamburuGallery />} />
            <Route path="/:slug" element={<DestinationDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => {
              const message = encodeURIComponent("Hello! I'd like to inquire about Kenya safari tours. Can you help me plan my trip?");
              window.open(`https://wa.me/+254118805166?text=${message}`, '_blank');
            }}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg animate-bounce transition-transform hover:scale-110"
            title="Chat with us on WhatsApp"
          >
            <MessageCircle className="w-8 h-8" />
          </button>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
