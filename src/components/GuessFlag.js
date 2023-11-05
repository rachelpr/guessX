import React, { useState } from "react";
import Modal from "./Modal";
import flagData from "../flag_data/flags.json";

function GuessFlag({
  correctFlag,
  opacity,
  setOpacity,
  isCorrect,
  setIsCorrect,
  randomFlagGenerator,
}) {
  const [userGuess, setUserGuess] = useState("");
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [numberOfGuesses, setNumberOfGuesses] = useState(4);
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDropdownChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleOnClose = () => {
    setGameOver(false);
    setModalOpen(false);
  };

  const handlePlayAgain = () => {
    if (attempts >= 5) {
    } else {
    }
    setOpacity(1);
    setNumberOfGuesses(4);
    setAttempts(0);
    setIsCorrect(null);
    randomFlagGenerator();
    setUserGuess("Guess the flag...");
    setGameOver(false);
    setModalOpen(false);
  };

  const handleGuess = (event) => {
    if (attempts >= 5) {
      setGameOver(true);
      setModalOpen(true);
      return;
    }
    event.preventDefault();

    if (userGuess.toLowerCase() === correctFlag.name.toLowerCase()) {
      setIsCorrect(true);
      setOpacity(0);
      setAttempts(attempts + 1);
      setGameOver(true);
      setModalOpen(true);
    } else if (
      userGuess.toLowerCase() !== correctFlag.name.toLowerCase() &&
      numberOfGuesses === 0
    ) {
      setOpacity(0);
      setAttempts(attempts + 1);
      setGameOver(true);
      setModalOpen(true);
    } else {
      setOpacity(opacity - 0.1);
      setNumberOfGuesses(numberOfGuesses - 1);
      setIsCorrect(false);
      setAttempts(attempts + 1);
    }
    setPreviousGuesses([...previousGuesses, userGuess]);
  };

  return (
    <div className="flag_guess_container">
      {modalOpen && <div className="game-over-overlay"></div>}
      <form onSubmit={handleGuess}>
        <div className="dropdown_container">
          <select onChange={handleDropdownChange} value={userGuess}>
            <option defaultValue={"Guess the flag"}>Guess the flag...</option>
            {flagData.flags.map((flag) => (
              <option key={flag.id} value={flag.name}>
                {flag.name}
              </option>
            ))}
          </select>
        </div>
        <div className="attempts_container">
          <h1>Attempts: {attempts}/5</h1>
        </div>
        <div className="submit_button_container">
          <input
            onClick={attempts >= 5 ? handlePlayAgain : handleGuess}
            type="submit"
            value={attempts >= 5 ? "Play Again?" : "Submit"}
            disabled={isCorrect}
          />
        </div>
      </form>

      {isCorrect === true && !gameOver && <p>Correct!</p>}
      {isCorrect === false && !gameOver && <p>Incorrect!</p>}

      {modalOpen && (
        <Modal
          outcome={isCorrect ? "win" : "lose"}
          onClose={handleOnClose}
          onPlayAgain={handlePlayAgain}
          correctFlag={correctFlag}
        />
      )}
    </div>
  );
}

export default GuessFlag;
