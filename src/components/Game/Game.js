import React from "react";

import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import GameBanner from "../GameBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [result, setResult] = React.useState("");

  function recordGuess(word) {
    setGuesses([...guesses, word]);

    // win condition
    if (word === answer) {
      setResult("win");
      return;
    }

    // lose condition
    if (guesses.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setResult("lose");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput submitGuess={recordGuess} gameResult={result} />
      {!!result && (
        <GameBanner
          result={result}
          numOfGuesses={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
