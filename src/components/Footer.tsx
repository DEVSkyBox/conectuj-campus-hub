
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <img 
            src="/lovable-uploads/5e1f5060-2ffa-4bd2-8c2e-c5f54599b2c3.png" 
            alt="ConectUJ Logo" 
            className="h-16 w-auto mx-auto mb-6 opacity-90"
          />
          <h3 className="text-2xl font-bold mb-4">ConectUJ</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Connecting the University of Jos community through safe, verified student-to-student interactions.
          </p>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              © 2024 ConectUJ. Built with ❤️ for UniJos students.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Not affiliated with the University of Jos administration.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
