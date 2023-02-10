import Card from './Card';
import star from '../images/icon-star.svg';
import './RatingCard.css';
import { useState } from 'react';
import RatingContainer from './RatingContainer';

function Rating({ setSubmitted }) {
  const [rating, setRating] = useState(null);

  const handleRating = (num) => {
    setRating(num);
  };

  const submitHandler = () => {
    rating ? setSubmitted(true) : console.log('try again');
  };

  return (
    <Card>
      <div className="container-round">
        <img src={star} alt="" />
      </div>
      <h2 className="title">How did we do?</h2>
      <p className="text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingContainer handleRating={handleRating} rating={rating} />
      <div className="submit-btn" onClick={submitHandler}>
        submit
      </div>
    </Card>
  );
}
export default Rating;
