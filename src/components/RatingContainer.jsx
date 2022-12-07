import "./RatingContainer.css";

import { useState } from "react";
import Button from "./Button";

function RatingContainer(props) {
  console.log("rating", props);
  const [rating, setRating] = useState();

  return (
    <>
      <div className="rating-container">
        <Button number={1} />
        <Button number={2} />
        <Button number={3} />
        <Button number={4} />
        <Button number={5} />
      </div>
    </>
  );
}

export default RatingContainer;
