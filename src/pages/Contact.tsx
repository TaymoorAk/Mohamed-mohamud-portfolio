import ContactFormSection from "@/components/Contact/ContactForm";
import QuickInsightsSection from "@/components/HomePage/QuickInsightsSection";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

export const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactFormSection />
      <QuickInsightsSection />
      <Footer />
    </div>
  );
};
