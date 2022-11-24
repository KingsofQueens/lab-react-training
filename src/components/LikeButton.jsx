import { useState } from 'react';

const LikeButton = () => {
  const [like, likeCount] = useState(0);
  const handleAddOnLikes = () => {
    likeCount(like + 1);
  };

  return (
    <button
      id="button1"
      onClick={handleAddOnLikes}
      style={{
        backgroundColor: `rgb(
            ${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)})`,
      }}
    >
      {like} Likes
    </button>
  );
};

export default LikeButton;
