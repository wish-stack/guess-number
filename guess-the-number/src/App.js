import React, { useState } from 'react';
import './App.css';

function App() {
  const [randomNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  // Function to handle user input
  const handleGuess = () => {
    const guessedNumber = parseInt(guess, 10);

    if (guessedNumber === randomNumber) {
      setFeedback('Correct! You guessed the right number!');
    } else if (guessedNumber > randomNumber) {
      setFeedback('Too high! Try again.');
    } else if (guessedNumber < randomNumber) {
      setFeedback('Too low! Try again.');
    } else {
      setFeedback('Please enter a valid number between 1 and 10.');
    }
  };

  return (
    <div className="App">
      <h1>Guess the Number Game</h1>
      <p>Guess a number between 1 and 10</p>
      
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      
      <button onClick={handleGuess}>Guess</button>
      
      <p>{feedback}</p>
    </div>
  );
}

export default App;