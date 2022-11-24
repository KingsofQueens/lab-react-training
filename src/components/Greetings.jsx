import { useState } from 'react';

const Greetings = (props) => {
  const [greet, changeLang] = useState('');

  const handleLangChange = (event) => {
    const value = event.target.value;
    changeLang(value);
  };

  // let optionValue;
  // switch (props.lang) {
  //   case 'de':
  //     optionValue = 'Hallo';
  //     break;
  //   case 'fr':
  //     optionValue = 'Bonjour';
  //     break;
  //   default:
  //     optionValue = 'Select Language';
  // }

  return (
    <div className="greeting">
      <select onChange={handleLangChange}>
        <option value="">Select Language</option>
        <option value="Hallo Ludwig">de</option>
        <option value="Bonjour François">fr</option>
      </select>
      <h2>
        {greet} {props.children}
      </h2>
    </div>
  );
};

export default Greetings;
