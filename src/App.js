import star from "./images/icon-star.svg";
import thanks from "./images/illustration-thank-you.svg";

function App() {
  return (
    <>
      <div className="card">
        <img className="star" src={star} alt="star" />
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul className="rating-container">
          <li>
            <button className="btn">1</button>
          </li>
          <li>
            <button className="btn">2</button>
          </li>
          <li>
            <button className="btn">3</button>
          </li>
          <li>
            <button className="btn">4</button>
          </li>
          <li>
            <button className="btn">5</button>
          </li>
        </ul>
        <button className="btn-submit">SUBMIT</button>
      </div>
      <div className="card">
        <div className="thank-you">
          <img src={thanks} alt="POS machine" />
        </div>
        <p>You selected 4 out of 5</p>
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking your time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </>
  );
}

export default App;
