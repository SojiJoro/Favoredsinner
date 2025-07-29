interface StarRatingProps {
  rating: number
  maxRating?: number
}

export default function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {[...Array(maxRating)].map((_, index) => (
        <span
          key={index}
          className={`text-lg ${
            index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      ))}
      <span className="text-sm text-deep-grey ml-2">({rating})</span>
    </div>
  )
}