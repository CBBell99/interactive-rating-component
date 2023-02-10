import React, { useState } from 'react';

function RatingContainer({ handleRating, rating }) {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="rating-container">
      {ratings.map((num) => (
        <div
          key={num}
          className={`rating-button ${rating === num ? 'clicked' : ''}`}
          onClick={() => handleRating(num)}
        >
          {num}
        </div>
      ))}
    </div>
  );
}

export default RatingContainer;
