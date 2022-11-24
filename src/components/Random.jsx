const Random = (props) => {
  return (
    <div class="randomNumber">
      <h2>
        Random value between {props.min} and {props.max} ={'>'}{' '}
        {Math.floor(Math.random() * (props.max - props.min) + props.min)}
      </h2>
    </div>
  );
};
export default Random;
