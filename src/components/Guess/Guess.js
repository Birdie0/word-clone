import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word = "", answer }) {
  const check = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((index) => (
        <span
          key={index}
          className={check ? `cell ${check[index].status}` : "cell"}
        >
          {check?.[index].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
