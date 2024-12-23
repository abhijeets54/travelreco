import { Plane } from 'lucide-react';

const DESTINATIONS = {
  luxury: {
    tropical: ['Maldives', 'Bora Bora', 'Seychelles'],
    mediterranean: ['Santorini', 'Amalfi Coast', 'Monaco'],
    alpine: ['St. Moritz', 'Aspen', 'Zermatt'],
    desert: ['Dubai', 'Abu Dhabi', 'Las Vegas'],
  },
  adventure: {
    tropical: ['Costa Rica', 'Bali', 'Thailand'],
    mediterranean: ['Croatia', 'Malta', 'Cyprus'],
    alpine: ['Nepal', 'New Zealand', 'Patagonia'],
    desert: ['Morocco', 'Jordan', 'Namibia'],
  },
  cultural: {
    tropical: ['Vietnam', 'Cambodia', 'Sri Lanka'],
    mediterranean: ['Rome', 'Athens', 'Istanbul'],
    alpine: ['Switzerland', 'Austria', 'Tibet'],
    desert: ['Egypt', 'Petra', 'Rajasthan'],
  },
  relaxation: {
    tropical: ['Hawaii', 'Caribbean Islands', 'Fiji'],
    mediterranean: ['Spanish Coast', 'Greek Islands', 'French Riviera'],
    alpine: ['Lake Como', 'Lake Bled', 'Banff'],
    desert: ['Palm Springs', 'Sedona', 'Dead Sea'],
  },
};

const Results = ({ answers, onRestart }) => {
  const getRecommendations = () => {
    const style = answers.travelStyle;
    const climate = answers.climate;
    
    let recommendations = DESTINATIONS[style]?.[climate] || [];
    
    // Filter based on budget
    if (answers.budget < 200) {
      recommendations = recommendations.filter(dest => 
        !['Maldives', 'Bora Bora', 'Monaco', 'Dubai', 'St. Moritz'].includes(dest)
      );
    }
    
    return recommendations.slice(0, 3);
  };

  const recommendations = getRecommendations();
  const destinationImages = {
    'Maldives': 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
    'Bora Bora': 'https://images.unsplash.com/photo-1598127953773-ea4320d43b07',
    'Seychelles': 'https://images.unsplash.com/photo-1589979481223-deb893043163',
    'Santorini': 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
    'Dubai': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    'Thailand': 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
    'Rome': 'https://images.unsplash.com/photo-1552832230-c0197dd311b5',
    'Hawaii': 'https://images.unsplash.com/photo-1542259009477-49d890e5ed90'
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-xl text-white">
        <div className="flex items-center justify-center mb-8">
          <Plane className="w-16 h-16 animate-bounce" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Your Perfect Destinations Await!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {recommendations.map((destination) => (
            <div
              key={destination}
              className="group relative h-64 overflow-hidden rounded-xl transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={destinationImages[destination] || "https://images.unsplash.com/photo-1488646953014-85cb44e25828"}
                alt={destination}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <h3 className="text-2xl font-bold mb-2">{destination}</h3>
                <p className="text-sm opacity-90 text-center">
                  Perfect for your {answers.travelStyle} style and {answers.climate} climate preference!
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button
            onClick={onRestart}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-purple-100 transition-colors duration-300"
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;