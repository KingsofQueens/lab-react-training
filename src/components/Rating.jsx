// const Rating = (props) => {
//   return (
//     <div>
//       {(Math.ceil(props.children) === 0 && <p>☆☆☆☆☆</p>) ||
//         (Math.ceil(props.children) === 1 && <p>★☆☆☆☆</p>) ||
//         (Math.ceil(props.children) === 2 && <p>★★☆☆☆</p>) ||
//         (Math.ceil(props.children) === 3 && <p>★★★☆☆</p>) ||
//         (Math.ceil(props.children) === 4 && <p>★★★★☆</p>) ||
//         (Math.ceil(props.children) === 5 && <p>★★★★★</p>)}
//     </div>
//   );
// };

const Rating = (props) => {
  const fullStarCount = Math.round(Number(props.children));
  const emptyStarCount = 5 - fullStarCount;
  return <div>{'★'.repeat(fullStarCount) + '☆'.repeat(emptyStarCount)}</div>;
};

export default Rating;
