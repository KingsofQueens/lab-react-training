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

export default CreditCard;
