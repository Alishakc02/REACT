import React, { useState, useEffect } from "react";

const Guess = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);

    if (isNaN(userGuess)) {
      setMessage("Please enter a valid number.");
    } else if (userGuess === randomNumber) {
      setMessage("Congratulations! You guessed the correct number.");
    } else if (userGuess < randomNumber) {
      setMessage("Try a higher number.");
    } else {
      setMessage("Try a lower number.");
    }

    setGuess("");
  };

  return (
    <div>
      <h1>Guess the Number Game</h1>
      <p>Guess a number between 1 and 100:</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleGuess}>Submit Guess</button>
      <p>{message}</p>
    </div>
  );
};

export default Guess;
