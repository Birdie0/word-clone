import React from "react";

function GuessInput() {
  const [word, setWord] = React.useState("");

  function handleChange(event) {
    const newWord = event.target.value.toUpperCase();
    setWord(newWord);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (word.length !== 5) {
      window.alert("the entered word should be 5 letters long!");
      return;
    }

    console.log(word);

    setWord("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        value={word}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
