import AboutPersonSection from "@/components/About/AboutPerson";
// import ClientWinsSection from "@/components/About/ClientsWinSection";
import CredentialsSection from "@/components/About/CredentialSection";
import ExpertHumanSection from "@/components/About/ExpertHumanSection";
// import QuickInsightsSection from "@/components/HomePage/QuickInsightsSection";
import Testimonials from "@/components/HomePage/Testimonials";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

export const About = () => {
  return (
    <>
      {" "}
      <div className="min-h-screen bg-background">
        <Header />
        <AboutPersonSection />
        <ExpertHumanSection />
        <CredentialsSection />
        <Testimonials />
        {/* <ClientWinsSection /> */}
        {/* <QuickInsightsSection /> */}

        <Footer />
      </div>
    </>
  );
};
