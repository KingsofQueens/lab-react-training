import { useState } from 'react';

const Carousel = (props) => {
  const [images, setImage] = useState(0);
  let x = 0;
  const handleMoveLeft = () => {
    if (x > 0) {
      setImage((x = x - 1));
    } else {
      setImage(x);
    }
  };
  const handleMoveRight = () => {
    if (x < props.images.length) {
      setImage((x = x + 1));
    } else {
      setImage(x);
    }
  };

  return (
    <div class="carousel">
      {console.log(props.images.length)}
      <img src={props.images[`${images}`]} alt="Portraits" />
      <button onClick={handleMoveLeft}>Left</button>
      <button onClick={handleMoveRight}>Right</button>
    </div>
  );
};

export default Carousel;
