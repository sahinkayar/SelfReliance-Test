import { useState } from "react";

import Data from "./Data";
import "./App.css";
import questions from "./Data";

function App() {
  const [score, setScore] = useState(0);
  const [Results, setResults] = useState(false);
  const [currentq, setCurrentq] = useState(0);

  const HandleOption = (isCorrect) => {
    setCurrentq((prev) => prev + 1);
    console.log(currentq);
    if (isCorrect == true) {
      setScore((prev) => prev + 1);
    }
    if (currentq == 6) {
      setCurrentq(0);
      setResults(true);
    }
  };
  const handleReset = () => {
    setResults(false);
    setScore(0);
  };
  const Result = () => {
    let result = (score / questions.length) * 100;
    if (score == 0) {
      return <span>You are unconfident </span>;
    }
    if (score == 1 || score == 2) {
      return result.toFixed(2) + "%  ; You have low Confidence :)";
    }
    if (score == 3 || score == 4) {
      return (
        result.toFixed(2) +
        "%  ; You have some Confidence keep working on it :)"
      );
    } else if (score > 4) {
      return result.toFixed(2) + "%  ; You are confident person :)";
    }
  };
  return (
    <div className="container">
      <div>
        {Results ? (
          <div className="Results">
            {" "}
            <h1 className="title">Self-reliance Test</h1>
            <h2>
              Results : <span className="color"> {Result()} </span>
            </h2>{" "}
            <button onClick={() => handleReset()}>Restart Test</button>
          </div>
        ) : (
          <div className="row">
            <h1>Self-Reliance Test</h1>
            <p>current score : {score}</p>
            <p className="question">
              questions {currentq + 1} out of {questions.length}
            </p>{" "}
            <div className="main">
              <div>
                <p className="quote">{Data[currentq].text}?</p>{" "}
              </div>

              {Data[currentq].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => HandleOption(option.isCorrect)}
                  >
                    {option.text}
                  </li>
                );
              })}
            </div>{" "}
          </div>
        )}{" "}
      </div>
    </div>
  );
}

export default App;
