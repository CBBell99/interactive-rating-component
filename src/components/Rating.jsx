import Card from './Card';
import star from '../images/icon-star.svg';
import './Rating.css';

function Rating() {
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
      <div className="rating-container">
        <div className="rating-button">1</div>
        <div className="rating-button">2</div>
        <div className="rating-button">3</div>
        <div className="rating-button">4</div>
        <div className="rating-button">5</div>
      </div>
      <div className="submit-btn">submit</div>
    </Card>
  );
}
export default Rating;
