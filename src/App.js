import star from "./images/icon-star.svg";
import thanks from "./images/illustration-thank-you.svg";
import { useState } from "react";

import Card from "./components/Card";
import RatingContainer from "./components/RatingContainer";

function App() {
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  const clickHandler = () => {
    setRatingSubmitted(true);
  };

  const frontPage = (
    <Card>
      <img className="star" src={star} alt="star" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingContainer />
      <button className="btn-submit" onClick={clickHandler}>
        SUBMIT
      </button>
    </Card>
  );

  const thankYouPage = (
    <Card>
      <div className="thank-you">
        <img src={thanks} alt="POS machine" />
      </div>
      <p>You selected 4 out of 5</p>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking your time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </Card>
  );

  return <>{!ratingSubmitted ? frontPage : thankYouPage}</>;
}

export default App;
