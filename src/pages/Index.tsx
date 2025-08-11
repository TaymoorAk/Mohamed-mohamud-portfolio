import Header from "@/components/Layout/Header";
import Hero from "@/components/HomePage/Hero";
import PressureSection from "@/components/HomePage/PressureSection";
import ServicesSection from "@/components/HomePage/ServicesSection";
import ClientsSection from "@/components/HomePage/ClientsSection";
import LeadershipSections from "@/components/HomePage/LeaderShipSetion";
import Testtimonials from "@/components/HomePage/Testimonials";
import MeetWithShaneSection from "@/components/HomePage/MeetWithShaneSection";
// import QuickInsightsSection from "@/components/HomePage/QuickInsightsSection";
import Footer from "@/components/Layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PressureSection />
      <ServicesSection />
      <ClientsSection />
      {/* <LeadershipSections /> */}
      <Testtimonials />
      <MeetWithShaneSection />
      {/* <QuickInsightsSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
