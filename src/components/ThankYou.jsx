import Card from './Card';
import thanks from '../images/illustration-thank-you.svg';
import './ThankYou.css';

function ThankYou({ rating }) {
  return (
    <Card>
      <div className="image-container">
        <img src={thanks} alt="" />
      </div>
      <div className="rating">
        <p>You selected {rating} out of 5</p>
      </div>
      <div className="message">
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </Card>
  );
}

export default ThankYou;
