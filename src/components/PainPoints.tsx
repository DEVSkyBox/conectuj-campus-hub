
import { AlertTriangle, Clock, Shield, MessageSquare } from "lucide-react";

const PainPoints = () => {
  const painPoints = [
    {
      icon: Shield,
      title: "Unsafe Trading",
      description: "Students risk scams and unsafe meetups when buying/selling items through random WhatsApp groups and unverified platforms."
    },
    {
      icon: MessageSquare,
      title: "Spam & Clutter",
      description: "Course group chats are constantly flooded with marketplace posts, making it hard to find important academic information."
    },
    {
      icon: Clock,
      title: "Time Wasted Searching",
      description: "Students spend hours scrolling through multiple group chats to find items, services, or campus information they need."
    },
    {
      icon: AlertTriangle,
      title: "No Verification System",
      description: "Anyone can post anything, anywhere - leading to fake items, overpricing, and no accountability for bad actors."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Campus Trading Problem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every day, UniJos students face these challenges when trying to buy, sell, or find what they need on campus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-red-50 p-8 rounded-2xl border border-red-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <point.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
