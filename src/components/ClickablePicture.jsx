import { useState } from 'react';

const ClickablePicture = (props) => {
  const [nonGlassesImage, setToggle] = useState();
  const handleToggle = () => {
    setToggle(!nonGlassesImage);
  };

  return (
    <div onClick={handleToggle}>
      {(nonGlassesImage && <img src={props.imgClicked} alt="profile" />) || (
        <img src={props.img} alt="glassProfile" />
      )}
    </div>
  );
};

export default ClickablePicture;
