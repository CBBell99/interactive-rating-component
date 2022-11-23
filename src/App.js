import star from "./images/icon-star.svg";

function App() {
  return (
    <>
      <div className="container">
        <img src={star} alt="" />
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul>
          <li>
            <button>1</button>
          </li>
          <li>
            <button>2</button>
          </li>
          <li>
            <button>3</button>
          </li>
          <li>
            <button>4</button>
          </li>
          <li>
            <button>5</button>
          </li>
        </ul>
        <button className="btn-rating">Submit</button>
      </div>
    </>
  );
}

export default App;
