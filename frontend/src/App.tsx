import { Routes, Route } from "react-router-dom";
import SmoothScroll from "@/components/SmoothScroll";
import TransitNav from "@/components/TransitNav";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Resume from "@/pages/Resume";
import Research from "@/pages/Research";
import Teaching from "@/pages/Teaching";
import AlterEgoGallery from "@/pages/AlterEgoGallery";
import Contact from "@/pages/Contact";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-lacquer font-sans text-cream">
        <div className="grain-overlay" aria-hidden="true" />
        <TransitNav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/research" element={<Research />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/alter-ego/:type" element={<AlterEgoGallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <Toaster richColors />
      </div>
    </SmoothScroll>
  );
}
