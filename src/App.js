import React, { useState } from "react";
import DiceRoll from "./components/Roll/DiceRoll";
import NumberDisplay from "./components/UI/NumberDisplay";
import SelectorFaces from "./components/UI/SelectorFaces";

const INITIAL_STATE_FACES = 6;

function App() {
  const [faces, setFaces] = useState(INITIAL_STATE_FACES);
  const [diceNumber, setDiceNumber] = useState(DiceRoll(INITIAL_STATE_FACES));

  const handleRoll = () => {
    const newRoll = DiceRoll(faces);
    setDiceNumber(newRoll);
  };

  return (
    <div className={`container mx-auto px-4 mt-24`}>
      <div
        className={`bg-gray-200 max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg my-auto p-4`}
      >
        <h1 className={`font-bold text-5xl text-center text-blue-500`}>
          Dice App
        </h1>
        <NumberDisplay diceNumber={diceNumber} faces={faces} />
        <SelectorFaces setFaces={setFaces} faces={faces} />
        <button
          className={`flex mx-auto my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 px-16 rounded`}
          onClick={handleRoll}
        >
          ROLL
        </button>
      </div>
    </div>
  );
}

export default App;
