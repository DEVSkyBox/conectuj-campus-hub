
import { Users, BookOpen, TrendingUp, GraduationCap, Store } from "lucide-react";

const ValuePropositions = () => {
  const segments = [
    {
      icon: Users,
      title: "Regular Students",
      subtitle: "Safe Trading & Campus Navigation",
      description: "Buy and sell items directly with verified peers, stay updated on campus trends, and find locations or services quickly.",
      color: "bg-blue-50 border-blue-200",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Freshers & New Students",
      subtitle: "Easy Campus Integration",
      description: "Find essential items, discover important locations, and stay informed with campus updates through our student-friendly platform.",
      color: "bg-green-50 border-green-200",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Student Entrepreneurs",
      subtitle: "Grow Your Campus Business",
      description: "Promote products and services exclusively to fellow students with visibility tools that boost sales without spamming group chats.",
      color: "bg-purple-50 border-purple-200",
      iconColor: "bg-purple-100 text-purple-600"
    },
    {
      icon: GraduationCap,
      title: "Final-Year Students",
      subtitle: "Quick & Safe Item Sales",
      description: "Offload books, gadgets, and belongings safely and quickly by connecting with verified underclassmen buyers.",
      color: "bg-orange-50 border-orange-200",
      iconColor: "bg-orange-100 text-orange-600"
    },
    {
      icon: Store,
      title: "Local Businesses",
      subtitle: "Target Student Customers",
      description: "Reach the student market effectively through paid promotions and listings, driving sales and building campus visibility.",
      color: "bg-amber-50 border-amber-200",
      iconColor: "bg-amber-100 text-amber-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for Every Student
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ConectUJ serves the unique needs of different student segments with tailored solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div 
              key={index}
              className={`${segment.color} p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div className={`${segment.iconColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                <segment.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{segment.title}</h3>
              <h4 className="text-lg font-semibold text-gray-700 mb-4">{segment.subtitle}</h4>
              <p className="text-gray-600 leading-relaxed">{segment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
