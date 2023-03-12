import React, { useState } from "react";
import "./App.css";

function App() {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");

  const [result, setResult] = useState("Let's see who wins!!!");

  const choices = ["rock", "paper", "scissors"];

  const handleClick = (value) => {
    setUserChoice(value);
    console.log("userChoice", value, userChoice);
    const comChoice = generateComputerChoice();
    checkResult(value, comChoice);
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    return randomChoice;
  };

  const reset = () => {
    window.location.reload();
  };

  const checkResult = (u, c) => {
    console.log(u + c);
    switch (u + c) {
      case "rockscissors":
      case "scissorspaper":
      case "paperrock":
        setResult("You Win!");
        break;
      case "scissorsrock":
      case "paperscissors":
      case "rockpaper":
        setResult("You Lose!");
        break;
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        setResult("Its a Draw!");
        break;
      default:
    }
  };
  return (
    <div>
      <h1 className="title">Rock Paper Scissors</h1>
      <div className="playground">
        <div className="user">
          <h1>User choice is:{userChoice} </h1>
          <img className="user-hand" src={`../img/${userChoice}.png`} />
        </div>

        <div className="computer">
          <h1>Computer choice is:{computerChoice}</h1>
          <img className="computer-hand" src={`../img/${computerChoice}.png`} />
        </div>
      </div>
      <div className="user-choice">
        {choices.map((choice, index) => (
          <button
            className="btn-choice"
            key={index}
            onClick={() => handleClick(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      <div className="result">
        <h1>{result}</h1>
      </div>
      <div className="reset">
        <button className="btn-reset" onClick={() => reset()}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
