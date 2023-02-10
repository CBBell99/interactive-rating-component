import './App.css';
import RatingCard from './components/RatingCard';
import ThankYou from './components/ThankYou';
import { useState } from 'react';

function App() {
  // change this later
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(null);

  const updateRating = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <>
      {submitted ? (
        <ThankYou rating={rating} />
      ) : (
        <RatingCard setSubmitted={setSubmitted} updateRating={updateRating} />
      )}
    </>
  );
}

export default App;
