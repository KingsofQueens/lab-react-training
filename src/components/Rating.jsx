const Rating = (props) => {
  return (
    <div>
      {(Math.ceil(props.children) === 0 && <p>☆☆☆☆☆</p>) ||
        (Math.ceil(props.children) === 1 && <p>★☆☆☆☆</p>) ||
        (Math.ceil(props.children) === 2 && <p>★★☆☆☆</p>) ||
        (Math.ceil(props.children) === 3 && <p>★★★☆☆</p>) ||
        (Math.ceil(props.children) === 4 && <p>★★★★☆</p>) ||
        (Math.ceil(props.children) === 5 && <p>★★★★★</p>)}
    </div>
  );
};

export default Rating;
