import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GlitchDivider from '@/components/GlitchDivider';
import ServicesSection from '@/components/ServicesSection';
import TechStackSection from '@/components/TechStackSection';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MouseFollower from '@/components/MouseFollower';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <MouseFollower />
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default Index;
