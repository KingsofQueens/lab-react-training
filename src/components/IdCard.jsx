const IdCard = (props) => {
  return (
    <div className="idCard">
      <header>
        <img src={props.picture} alt={props.firstName} />
      </header>
      <ul>
        <li>
          <strong>First Name:</strong>
          {props.firstName}
        </li>
        <li>
          <strong>Last Name:</strong>
          {props.lastName}
        </li>
        <li>
          <strong>Gender: </strong>
          {props.gender}
        </li>
        <li>
          <strong>Height:</strong>
          {props.height}
        </li>
        <li>
          <strong>Birth: </strong>
          {props.birth.toDateString()}
        </li>
      </ul>
    </div>
  );
};

export default IdCard;
