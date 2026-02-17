import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GlitchDivider from '@/components/GlitchDivider';
import ServicesSection from '@/components/ServicesSection';
import TechStackSection from '@/components/TechStackSection';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] btn-neon-green focus:inline-block"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <HeroSection />
        <GlitchDivider />
        <ServicesSection />
        <GlitchDivider />
        <TechStackSection />
        <GlitchDivider />
        <AboutSection />
        <GlitchDivider />
        <ProcessSection />
        <GlitchDivider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
