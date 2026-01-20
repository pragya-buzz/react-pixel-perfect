import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ClientsSection from '@/components/ClientsSection';
import PowerSection from '@/components/PowerSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import ProjectsSection from '@/components/ProjectsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ClientsSection />
        <PowerSection />
        <ServicesSection />
        <TestimonialSection />
        <ProjectsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
