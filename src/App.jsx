import { useState } from 'react';
import Welcome from './components/Welcome';
import Questions from './components/Questions';
import Results from './components/Results';

const App = () => {
  const [stage, setStage] = useState('welcome');
  const [answers, setAnswers] = useState({});

  const handleStart = () => setStage('questions');
  const handleComplete = (answers) => {
    setAnswers(answers);
    setStage('results');
  };
  const handleRestart = () => setStage('welcome');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600">
      {stage === 'welcome' && <Welcome onStart={handleStart} />}
      {stage === 'questions' && <Questions onComplete={handleComplete} />}
      {stage === 'results' && <Results answers={answers} onRestart={handleRestart} />}
    </div>
  );
};

export default App;