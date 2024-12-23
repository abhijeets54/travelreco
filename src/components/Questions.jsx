import { useState } from 'react';
import {
  Coffee, Mountain, Globe, Palmtree, Camera, Utensils,
  Plane, ChevronRight, ChevronLeft, Heart, Music,
  Hotel, Users, Calendar, Clock, Sun, Moon
} from 'lucide-react';

const questions = [
  {
    id: 'travelStyle',
    type: 'cards',
    question: "What's your ideal travel style?",
    background: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    options: [
      { value: 'luxury', label: 'Luxury & Comfort', icon: 'Coffee', image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
      { value: 'adventure', label: 'Adventure & Thrill', icon: 'Mountain', image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e" },
      { value: 'cultural', label: 'Cultural & Historical', icon: 'Globe', image: "/cul.jpg" },
      { value: 'relaxation', label: 'Beach & Relaxation', icon: 'Palmtree', image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    ],
  },
  {
    id: 'budget',
    type: 'slider',
    question: 'Whats your daily budget (USD)?',
    background: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
    min: 50,
    max: 1000,
    step: 50,
  },
  {
    id: 'climate',
    type: 'toggle',
    question: 'Which climates do you enjoy?',
    background: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17",
    options: [
      { value: 'tropical', label: 'Tropical', image: "https://images.unsplash.com/photo-1516815231560-8f41ec531527" },
      { value: 'mediterranean', label: 'Mediterranean', image: "https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1" },
      { value: 'alpine', label: 'Alpine', image: "/alp.webp" },
      { value: 'desert', label: 'Desert', image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35" },
    ],
  },
  {
    id: 'travelCompanions',
    type: 'cards',
    question: 'Who are you traveling with?',
    background: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc",
    options: [
      { value: 'solo', label: 'Solo Adventure', icon: 'User', image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b" },
      { value: 'couple', label: 'Romantic Getaway', icon: 'Heart', image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2" },
      { value: 'family', label: 'Family Trip', icon: 'Users', image: "https://images.unsplash.com/photo-1511895426328-dc8714191300" },
      { value: 'friends', label: 'Friends Group', icon: 'Users', image: "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e" },
    ],
  },
  {
    id: 'accommodationType',
    type: 'cards',
    question: 'Where do you prefer to stay?',
    background: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    options: [
      { value: 'resort', label: 'Luxury Resort', icon: 'Hotel', image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
      { value: 'boutique', label: 'Boutique Hotel', icon: 'Hotel', image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4" },
      { value: 'airbnb', label: 'Local Apartment', icon: 'Home', image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" },
      { value: 'camping', label: 'Outdoor Camping', icon: 'Tent', image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4" },
    ],
  },
  {
    id: 'activities',
    type: 'multiSelect',
    question: 'Select your must-have activities:',
    background: "https://images.unsplash.com/photo-1530789253388-582c481c54b0",
    options: [
      { value: 'hiking', label: 'Hiking', icon: 'Mountain', image: "https://images.unsplash.com/photo-1551632811-561732d1e306" },
      { value: 'food', label: 'Food Tours', icon: 'Utensils', image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b" },
      { value: 'museums', label: 'Museums', icon: 'Building', image: "/mus.webp" },
      { value: 'nightlife', label: 'Nightlife', icon: 'Music', image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7" },
      { value: 'photography', label: 'Photography', icon: 'Camera', image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848" },
      { value: 'water', label: 'Water Sports', icon: 'Swim', image: "https://images.unsplash.com/photo-1530053969600-caed2596d242" },
    ],
  },
  {
    id: 'duration',
    type: 'radio',
    question: 'How long do you plan to travel?',
    background: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
    options: [
      { value: 'weekend', label: 'Weekend Getaway (2-3 days)', icon: 'Calendar' },
      { value: 'week', label: 'One Week', icon: 'Calendar' },
      { value: 'twoWeeks', label: '2 Weeks+', icon: 'Calendar' },
      { value: 'month', label: 'A Month or More', icon: 'Calendar' },
    ],
  },
  {
    id: 'seasonPreference',
    type: 'toggle',
    question: 'When do you prefer to travel?',
    background: "https://images.unsplash.com/photo-1530908295418-a12e326966ba",
    options: [
      { value: 'summer', label: 'Summer', icon: 'Sun', image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
      { value: 'spring', label: 'Spring', icon: 'Flower', image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946" },
      { value: 'autumn', label: 'Autumn', icon: 'Tree', image: "/aut.webp" },
      { value: 'winter', label: 'Winter', icon: 'Snowflake', image: "https://images.unsplash.com/photo-1418985991508-e47386d96a71" },
    ],
  },
  {
    id: 'pacePreference',
    type: 'slider',
    question: 'Whats your preferred travel pace?',
    background: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902",
    min: 1,
    max: 10,
    step: 1,
    labels: {
      1: 'Relaxed',
      5: 'Balanced',
      10: 'Fast-paced',
    },
  },
  {
    id: 'localExperience',
    type: 'cards',
    question: 'How do you want to experience the local culture?',
    background: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
    options: [
      { value: 'authentic', label: 'Live Like a Local', icon: 'Home', image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205" },
      { value: 'guided', label: 'Guided Tours', icon: 'Map', image: "https://images.unsplash.com/photo-1473163928189-364b2c4e1135" },
      { value: 'mix', label: 'Mix of Both', icon: 'Shuffle', image: "https://images.unsplash.com/photo-1568849676085-51415703900f" },
      { value: 'luxury', label: 'Premium Experience', icon: 'Star', image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
    ],
  },
];

const Questions = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [sliderValue, setSliderValue] = useState(50);

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const renderIcon = (iconName) => {
    const icons = {
      Coffee: <Coffee size={32} />,
      Mountain: <Mountain size={32} />,
      Globe: <Globe size={32} />,
      Palmtree: <Palmtree size={32} />,
      Camera: <Camera size={32} />,
      Utensils: <Utensils size={32} />,
      Heart: <Heart size={32} />,
      Music: <Music size={32} />,
      Hotel: <Hotel size={32} />,
      Users: <Users size={32} />,
      Calendar: <Calendar size={32} />,
      Clock: <Clock size={32} />,
      Sun: <Sun size={32} />,
      Moon: <Moon size={32} />,
    };
    return icons[iconName] || null;
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case 'cards':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {question.options.map(option => (
              <button
                key={option.value}
                onClick={() => {
                  handleAnswer(question.id, option.value);
                  handleNext();
                }}
                className="group relative h-48 w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img
                  src={option.image}
                  alt={option.label}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="text-white mb-2">
                    {renderIcon(option.icon)}
                  </div>
                  <span className="text-white font-medium text-center">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        );

      case 'slider':
        return (
          <div className="w-full max-w-md mx-auto">
            <input
              type="range"
              min={question.min}
              max={question.max}
              step={question.step}
              value={sliderValue}
              onChange={(e) => {
                setSliderValue(e.target.value);
                handleAnswer(question.id, e.target.value);
              }}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between mt-2 text-white">
              <span>${question.min}</span>
              <span className="text-2xl font-bold">${sliderValue}</span>
              <span>${question.max}</span>
            </div>
            <button
              onClick={handleNext}
              className="mt-6 bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-purple-100 transition-colors duration-300"
            >
              Next
            </button>
          </div>
        );

      case 'toggle':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {question.options.map(option => (
              <button
                key={option.value}
                onClick={() => {
                  handleAnswer(question.id, option.value);
                  handleNext();
                }}
                className="group relative h-48 w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img
                  src={option.image}
                  alt={option.label}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        );

        case 'multiSelect':
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {question.options.map(option => (
                <label
                  key={option.value}
                  className="group relative h-48 cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={option.image}
                    alt={option.label}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <input
                      type="checkbox"
                      value={option.value}
                      onChange={(e) => {
                        const selectedActivities = answers[question.id] || [];
                        const newActivities = e.target.checked
                          ? [...selectedActivities, option.value]
                          : selectedActivities.filter(act => act !== option.value);
                        handleAnswer(question.id, newActivities);
                      }}
                      className="h-5 w-5"
                    />
                    <span className="mt-2 text-white font-medium text-center">{option.label}</span>
                  </div>
                </label>
              ))}
              <button
                onClick={handleNext}
                className="col-span-full mt-6 bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-purple-100 transition-colors duration-300"
              >
                Next
              </button>
            </div>
          );
  
        case 'radio':
          return (
            <div className="space-y-4">
              {question.options.map(option => (
                <label
                  key={option.value}
                  className="flex items-center space-x-2 bg-white/10 p-4 rounded-lg cursor-pointer hover:bg-white/20 transition-colors duration-300"
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={option.value}
                    onChange={(e) => {
                      handleAnswer(question.id, e.target.value);
                      handleNext();
                    }}
                    className="h-5 w-5"
                  />
                  <span className="text-white">{option.label}</span>
                </label>
              ))}
            </div>
          );
  
        default:
          return null;
      }
    };
  
    const question = questions[currentQuestion];
  
    return (
      <div className="max-w-4xl mx-auto">
        <div 
          className="relative min-h-screen bg-cover bg-center rounded-2xl p-8"
          style={{ backgroundImage: `url(${question.background})` }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-2xl" />
          <div className="relative z-10">
            <div className="mb-8">
              <div className="flex justify-between text-white mb-4">
                <span>Question {currentQuestion + 1}/{questions.length}</span>
                <span className="font-medium">
                  {Math.round((currentQuestion / questions.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-2">
                <div
                  className="bg-white rounded-full h-2 transition-all duration-500"
                  style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                />
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              {question.question}
            </h2>
            
            {renderQuestion(question)}
            
            {currentQuestion > 0 && (
              <button onClick={handleBack}
              className="mt-6 mr-4 bg-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white/30 transition-colors duration-300"
            >
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
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
    'Bora Bora': '/bb.jpeg',
    'Seychelles': 'https://images.unsplash.com/photo-1589979481223-deb893043163',
    'Santorini': 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
    'Dubai': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    'Thailand': 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
    'Rome': '/haw.jpeg',
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

export default Questions;
                
  
