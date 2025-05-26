import "./App.css";
import Die from "./Die";
import React from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [allDice, setAllDice] = React.useState(() => generateAllNewDice());

  let focusRef = React.useRef(null);

  let gameWon =
    allDice.every((die) => die.isHeld) &&
    allDice.every((die) => die.value === allDice[0].value);

  React.useEffect(() => {
    if (gameWon) {
      focusRef.current.focus();
    }
  }, [gameWon]);

  function hold(id) {
    setAllDice((prevDice) =>
      prevDice.map((prevDie) => {
        return prevDie.id === id
          ? { ...prevDie, isHeld: !prevDie.isHeld }
          : prevDie;
      })
    );
  }

  const diceElements = allDice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      onClick={hold}
      id={die.id}
    />
  ));

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    if (gameWon) {
      setAllDice(generateAllNewDice());

      return;
    }

    setAllDice((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.ceil(Math.random() * 6) };
      })
    );
  }

  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      <div className="top">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="dice-container">{diceElements}</div>
      <button onClick={rollDice} className="roll-button" ref={focusRef}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
