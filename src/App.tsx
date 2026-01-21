import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Services from "./pages/Services";
import UIUXDesign from "./pages/services/UIUXDesign";
import GraphicDesign from "./pages/services/GraphicDesign";
import MerchandiseDesign from "./pages/services/MerchandiseDesign";
import BrandIdentity from "./pages/services/BrandIdentity";
import CreativeStrategy from "./pages/services/CreativeStrategy";
import ContentServices from "./pages/services/ContentServices";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/merchandise-design" element={<MerchandiseDesign />} />
          <Route path="/services/brand-identity" element={<BrandIdentity />} />
          <Route path="/services/creative-strategy" element={<CreativeStrategy />} />
          <Route path="/services/content-services" element={<ContentServices />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
