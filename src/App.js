import './App.css';
import RatingCard from './components/RatingCard';
import ThankYou from './components/ThankYou';
import { useState } from 'react';

function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>{submitted ? <ThankYou /> : <RatingCard setSubmitted={setSubmitted} />}</>
  );
}

export default App;
