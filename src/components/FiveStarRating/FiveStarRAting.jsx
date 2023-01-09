import { StarFill, StarHalf, Star as StarEmpty } from 'react-bootstrap-icons';

const FiveStarRating = ({ rating }) => {
  // Declare star icon array
  const starList = [];

  // Store number of filled stars
  const starFillCount = Math.floor(rating);

  // Store if yes or no there is a half star
  const hasHalfStar = rating - parseInt(rating) >= 0.5;

  // Store number of empty stars
  const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0);

  // Push the filled stars icons
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={'star-fill' + i} />);
  }

  return <div>{starList}</div>;
};

export default FiveStarRating;
