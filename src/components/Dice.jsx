import { useState } from 'react';

import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const Dice = () => {
  const [emptyDiceImage, setToggle] = useState();
  const handleToggle = () => {
    setToggle(!emptyDiceImage);
  };

  const randomNumber = Math.floor(Math.random() * 6 + 1);

  return (
    <div class="dice">
      <div onClick={handleToggle}>
        {(!emptyDiceImage &&
          ((randomNumber === 1 && <img src={dice1} alt="dice1" />) ||
            (randomNumber === 2 && <img src={dice2} alt="dice2" />) ||
            (randomNumber === 3 && <img src={dice3} alt="dice3" />) ||
            (randomNumber === 4 && <img src={dice4} alt="dice4" />) ||
            (randomNumber === 5 && <img src={dice5} alt="dice5" />) ||
            (randomNumber === 6 && <img src={dice6} alt="dice6" />))) || (
          <img src={emptyDice} alt="empty-dice" />
        )}
        {/* <img src={emptyDice} alt="empty-dice" /> */}
      </div>
    </div>
  );
};

export default Dice;
