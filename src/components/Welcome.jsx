import { Globe, ChevronRight } from 'lucide-react';

const Welcome = ({ onStart }) => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080')" }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
        <Globe className="w-24 h-24 mb-8 animate-pulse" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Wanderlust Wizard</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Discover your perfect travel destination through our magical quiz! We'll match your preferences 
          with incredible destinations worldwide.
        </p>
        <button
          onClick={onStart}
          className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-purple-100 transition-colors duration-300 flex items-center"
        >
          Begin Journey <ChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Welcome;