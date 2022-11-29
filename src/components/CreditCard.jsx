import visa from '../assets/images/visa.png';
// import masterCard from '../assets/images/master-card.svg';

const CreditCard = (props) => {
  return (
    <div class="creditCardContainer">
      <div
        class="creditCard"
        style={{ color: `${props.color}`, backgroundColor: `${props.bgColor}` }}
      >
        <header>
          <img
            src={
              props.type === 'Visa'
                ? `${visa}`
                : '../assets/images/master-card.svg'
            }
            alt={props.type}
          />
        </header>
        <p>
          &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;
          &#8226;&#8226;&#8226;&#8226; {props.number.slice(12)}
          <br />
          <small>
            Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
            <br />
            {props.owner}
          </small>
        </p>
      </div>
    </div>
  );
};

// Correct Answer
// import visaImage from './../assets/images/visa.png';
// import masterCardImage from './../assets/images/master-card.svg';

// const normalizeNumber = (value) => {
//   return String(value).padStart(2, '0').slice(-2);
// };

// const censorCreditCardNumber = (value) => {
//   return `•••• `.repeat(3) + value.slice(-4);
// };

// const CreditCard = (props) => {
//   return (
//     <div style={{ color: props.color, backgroundColor: props.bgColor }}>
//       <span>{props.type}</span>
//       <img
//         src={props.type === 'Visa' ? visaImage : masterCardImage}
//         alt={props.type}
//       />
//       <h4>{censorCreditCardNumber(props.number)}</h4>
//       <span>
//         Expires {normalizeNumber(props.expirationMonth)}/
//         {normalizeNumber(props.expirationYear)} {props.bank}
//       </span>
//       <br />
//       <span>{props.owner}</span>
//     </div>
//   );
// };

export default CreditCard;
