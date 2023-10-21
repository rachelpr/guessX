import React from "react";

function Modal({ outcome, onClose, onPlayAgain, correctFlag }) {
  let title, buttonText;
  console.log(correctFlag);

  if (outcome === "win") {
    title = "You won!";
    buttonText = "Play Again?";
  } else {
    title = "You lost";
    buttonText = "Try Again?";
  }

  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>It's the {correctFlag.name}!</p>
        <p>{correctFlag.description}</p>
        <button onClick={onPlayAgain}>{buttonText}</button>
      </div>
    </div>
  );
}

export default Modal;
