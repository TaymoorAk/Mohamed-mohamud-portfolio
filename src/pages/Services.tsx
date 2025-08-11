import Header from "@/components/Layout/Header";
// import QuickInsightsSection from "@/components/HomePage/QuickInsightsSection";
import Footer from "@/components/Layout/Footer";
import FirstSerivceSection from "@/components/Services/FirstSerivceSection";
import CoachingSection from "@/components/Services/CoachingSection";
import CoachingProcess from "@/components/Services/CoachingProcess";
import CoachingBenefits from "@/components/Services/CoachingBenefits";
import PressureCoachingSection from "@/components/Services/PressureCoaching";
import CoachingOfferSection from "@/components/Services/CoachingOfferSection";
import ServicesSection from "@/components/HomePage/ServicesSection";
import ServicesFAQ from "@/components/Services/ServicesFAQ";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FirstSerivceSection />
      <CoachingSection />
      <CoachingProcess />
      <CoachingBenefits />
      <PressureCoachingSection />
      <CoachingOfferSection />
      <ServicesSection />
      <ServicesFAQ />
      {/* <QuickInsightsSection /> */}
      <Footer />
    </div>
  );
};

export default Services;
