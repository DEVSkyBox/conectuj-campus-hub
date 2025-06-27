
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ValuePropositions from "@/components/ValuePropositions";
import Benefits from "@/components/Benefits";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Hero />
      <PainPoints />
      <ValuePropositions />
      <Benefits />
      <EarlyAccess />
      <Footer />
    </div>
  );
};

export default Index;
