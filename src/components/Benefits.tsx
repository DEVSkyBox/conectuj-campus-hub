
import { Shield, Users, Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Verified student-only community ensures safety and trust",
    "Clean, organized marketplace separate from academic discussions", 
    "Smart search and discovery tools save time",
    "Direct peer-to-peer connections without middlemen",
    "Campus-specific features and local business integration",
    "Anti-spam measures keep content relevant and useful"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Benefits List */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Why Choose ConectUJ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the difference of a platform designed specifically for university students, by students who understand your needs.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Feature Highlights */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 rounded-2xl text-white">
              <Shield className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">100% Verified Students</h3>
              <p className="text-orange-100">
                Every user is verified with their UniJos student ID, ensuring a safe and trusted community.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-2xl text-white">
              <Users className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Built for Community</h3>
              <p className="text-blue-100">
                Connect with fellow students, build relationships, and create a stronger campus community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
