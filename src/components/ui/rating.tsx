import { useState } from "react";
import { Star } from "lucide-react";

interface RatingProps {
  initialRating?: number;
  maxRating?: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Rating({
  initialRating = 0,
  maxRating = 5,
  onRatingChange,
  readonly = false,
  size = "md",
  showEmojis = true
}: RatingProps & { showEmojis?: boolean }) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (newRating: number) => {
    if (readonly) return;
    setRating(newRating);
    onRatingChange?.(newRating);
  };

  const handleMouseEnter = (starIndex: number) => {
    if (readonly) return;
    setHoverRating(starIndex);
  };

  const handleMouseLeave = () => {
    if (readonly) return;
    setHoverRating(0);
  };

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  const getEmoji = (rating: number) => {
    if (rating >= 5) return "🤩";
    if (rating >= 4) return "😊";
    if (rating >= 3) return "😐";
    if (rating >= 2) return "😕";
    if (rating >= 1) return "😞";
    return "🤔";
  };

  const getRatingText = (rating: number) => {
    if (rating >= 5) return "Amazing!";
    if (rating >= 4) return "Great!";
    if (rating >= 3) return "Good";
    if (rating >= 2) return "Okay";
    if (rating >= 1) return "Poor";
    return "Not rated";
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {Array.from({ length: maxRating }, (_, index) => {
          const starIndex = index + 1;
          const isActive = starIndex <= (hoverRating || rating);

          return (
            <button
              key={index}
              type="button"
              className={`transition-all duration-200 ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-125'}`}
              onClick={() => handleRating(starIndex)}
              onMouseEnter={() => handleMouseEnter(starIndex)}
              onMouseLeave={handleMouseLeave}
              disabled={readonly}
              title={`Rate ${starIndex} star${starIndex > 1 ? 's' : ''}`}
            >
              <Star
                className={`${sizeClasses[size]} ${
                  isActive
                    ? 'text-yellow-400 fill-current drop-shadow-sm'
                    : 'text-gray-300 hover:text-yellow-300'
                } transition-all duration-200`}
              />
            </button>
          );
        })}
      </div>

      {rating > 0 && showEmojis && (
        <div className="flex items-center gap-2 animate-fade-in">
          <span className="text-lg animate-bounce">{getEmoji(rating)}</span>
          <span className="text-sm text-muted-foreground font-medium">
            {getRatingText(rating)}
          </span>
        </div>
      )}

      <span className="text-xs text-muted-foreground">
        {rating > 0 ? `(${rating}/${maxRating})` : 'Click to rate'}
      </span>
    </div>
  );
}