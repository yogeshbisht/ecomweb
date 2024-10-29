import { Star, StarHalf } from "lucide-react";

type RatingStarsProps = {
  rating: number;
};

const RatingStars = ({ rating }: RatingStarsProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star key={index} className="size-4" fill="currentColor" />
      ))}
      {hasHalfStar && <StarHalf className="size-4" fill="currentColor" />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Star
          key={index}
          className="size-4"
          fill="none"
          stroke="currentColor"
        />
      ))}
    </div>
  );
};

export default RatingStars;
