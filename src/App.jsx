import Header from "./components/Header";
import Hero from "./components/Hero";
import CoreMarkets from "./components/CoreMarkets";
import CapabilitiesStrip from "./components/CapabilitiesStrip";
import SolutionsSection from "./components/SolutionsSection";
import IndustrySection from "./components/IndustrySection";
import AboutSection from "./components/AboutSection";
import CareersSection from "./components/CareersSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950 antialiased">
      <Header />
      <main>
        <Hero />
        <CoreMarkets />
        <CapabilitiesStrip />
        <SolutionsSection />
        <IndustrySection />
        <AboutSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
