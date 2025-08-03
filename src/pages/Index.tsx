import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PressureSection from "@/components/PressureSection";
import ServicesSection from "@/components/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PressureSection />
      <ServicesSection />
    </div>
  );
};

export default Index;
