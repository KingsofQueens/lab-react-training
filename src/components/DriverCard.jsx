const DriverCard = (props) => {
  return (
    <div class="driverCard">
      <header>
        <img src={props.img} alt={props.name} />
      </header>
      <div>
        <h3>{props.name}</h3>
        <p>
          {(Math.ceil(props.rating) === 0 && <p>☆☆☆☆☆</p>) ||
            (Math.ceil(props.rating) === 1 && <p>★☆☆☆☆</p>) ||
            (Math.ceil(props.rating) === 2 && <p>★★☆☆☆</p>) ||
            (Math.ceil(props.rating) === 3 && <p>★★★☆☆</p>) ||
            (Math.ceil(props.rating) === 4 && <p>★★★★☆</p>) ||
            (Math.ceil(props.rating) === 5 && <p>★★★★★</p>)}
        </p>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
