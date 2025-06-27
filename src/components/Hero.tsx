
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSignup = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-400 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-amber-400 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-red-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-green-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/5e1f5060-2ffa-4bd2-8c2e-c5f54599b2c3.png" 
            alt="ConectUJ Logo" 
            className="h-24 w-auto hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
          Connect. Trade. Thrive.
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          The safe, student-only marketplace and community platform designed specifically for 
          <span className="text-orange-600 font-semibold"> University of Jos</span> students.
        </p>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Buy, sell, and discover everything you need on campus through a verified, 
          student-exclusive platform that puts safety and community first.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            onClick={scrollToSignup}
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Early Access
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-pulse">
          <ArrowDown className="mx-auto text-orange-600 h-8 w-8" />
          <p className="text-sm text-gray-500 mt-2">Discover the solution</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
