import React from "react";

import { checkGuess } from "../../game-helpers";

const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function GameKeyboard({ guesses, answer }) {
  const qwerty = {};
  guesses.forEach((guess) => {
    const check = checkGuess(guess, answer);
    check.forEach((ch) => {
      if (!qwerty[ch.letter] || qwerty[ch.letter] === "misplaced")
        qwerty[ch.letter] = ch.status;
    });
  });

  return (
    <div className="keyboard-wrapper">
      {keys.map((keyRow, index) => (
        <div key={index} className="key-row">
          {keyRow.map((key) => (
            <span
              key={key}
              className={qwerty[key] ? `key ${qwerty[key]}` : "key"}
            >
              {key}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameKeyboard;
