import React from "react";

function Guess({ word = "" }) {
  const letters = word.split("");

  return (
    <p className="guess">
      {letters.map((letter, index) => (
        <span key={index} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
