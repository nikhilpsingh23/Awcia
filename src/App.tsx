
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ImpactDetails from "./pages/ImpactDetails";
import Gallery from "./pages/Gallery";
import Story from "./pages/Story";
import NotFound from "./pages/NotFound";
import GetInvolved from './pages/Volunteer';
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import WhatsAppButton from "./components/WhatsAppButton";
import HealthPage from "./pages/impact/health";
import EducationPage from "./pages/impact/education";
import RuralPage from "./pages/impact/rural";
import WomenPage from "./pages/impact/women";
import ArtPage from "./pages/impact/art";

const queryClient = new QueryClient();

const App = () => (
  <>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/impact/:category" element={<ImpactDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/story" element={<Story />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/donate" element={<Donate/>} />
          <Route path="/impact/health" element={<HealthPage/>} />
          <Route path="/impact/education" element={<EducationPage/>} />
          <Route path="/impact/rural-transformation" element={<RuralPage/>} />
          <Route path="/impact/women-empowerment" element={<WomenPage/>} />
          <Route path="/impact/art-culture-heritage" element={<ArtPage/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes> 
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  <WhatsAppButton/>
  </>
);

export default App;
