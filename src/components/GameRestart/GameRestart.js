import React from "react";

function GameRestart({ onClick }) {
  return (
    <button type="button" className="new-game" onClick={onClick}>
      New game!
    </button>
  );
}

export default GameRestart;
