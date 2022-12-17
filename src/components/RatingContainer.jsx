import "./RatingContainer.css";

import { useState } from "react";
import Button from "./Button";

function RatingContainer(props) {
  const [rating, setRating] = useState({
    oneStar: false,
    twoStar: false,
    threeStar: false,
    fourStar: false,
    fiveStar: false,
  });

  return (
    <>
      <div className="rating-container">
        <Button className="" number={1} />
        <Button number={2} />
        <Button number={3} />
        <Button number={4} />
        <Button number={5} />
      </div>
    </>
  );
}

export default RatingContainer;
