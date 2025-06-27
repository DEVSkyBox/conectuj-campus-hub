
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const EarlyAccess = () => {
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !studentId) {
      toast({
        title: "Please fill in all fields",
        description: "Both email and student ID are required for early access.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to the waitlist! 🎉",
        description: "You'll be among the first to experience ConectUJ when we launch.",
      });
      setEmail("");
      setStudentId("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="early-access" className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Be the First to Experience ConectUJ
          </h2>
          <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">
            Join our exclusive early access program and help shape the future of campus trading and community at UniJos.
          </p>

          {/* Early Access Form */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-left text-lg font-semibold text-gray-700 mb-2">
                  University Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.name@unijos.edu.ng"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-lg py-3 px-4"
                  required
                />
                <p className="text-sm text-gray-500 mt-1 text-left">Use your official UniJos email for verification</p>
              </div>

              <div>
                <label htmlFor="studentId" className="block text-left text-lg font-semibold text-gray-700 mb-2">
                  Student ID Number
                </label>
                <Input
                  id="studentId"
                  type="text"
                  placeholder="UJ/2023/1234"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="text-lg py-3 px-4"
                  required
                />
                <p className="text-sm text-gray-500 mt-1 text-left">Your student ID helps us verify your enrollment</p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Joining Waitlist..." : "Get Early Access"}
              </Button>
            </form>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600">Students Interested</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">Q1 2025</div>
                <div className="text-sm text-gray-600">Expected Launch</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">Free</div>
                <div className="text-sm text-gray-600">For Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
