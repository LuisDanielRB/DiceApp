import React from "react";
import D4 from "../DiceIMG/D4";
import D6 from "../DiceIMG/D6";
import D8 from "../DiceIMG/D8";
import D10 from "../DiceIMG/D10";
import D12 from "../DiceIMG/D12";
import D20 from "../DiceIMG/D20";

const DICE_CLASS = "flex, mx-auto my-4";

const getSVG = (n) => {
  switch (n) {
    case 4:
      return <D4 className={DICE_CLASS} />;
    case 6:
      return <D6 className={DICE_CLASS} />;
    case 8:
      return <D8 className={DICE_CLASS} />;
    case 10:
      return <D10 className={DICE_CLASS} />;
    case 12:
      return <D12 className={DICE_CLASS} />;
    case 20:
      return <D20 className={DICE_CLASS} />;
    default:
      return;
  }
};

const NumberDisplay = (props) => {
  return (
    <div>
      <div className={`text-center text-8xl mt-5`}>
        {props.diceNumber}
        {getSVG(props.faces)}
        {/* <img src={process.env.PUBLIC_URL + '/D10.svg'} /> */}
      </div>
    </div>
  );
};

export default NumberDisplay;
