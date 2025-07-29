interface StarRatingProps {
  rating: number
  maxRating?: number
}

export default function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
      {[...Array(maxRating)].map((_, index) => (
        <span
          key={index}
          style={{
            fontSize: '18px',
            color: index < Math.floor(rating) ? '#fbbf24' : '#e5e7eb'
          }}
        >
          ★
        </span>
      ))}
      <span style={{
        fontSize: '14px',
        color: '#657786',
        marginLeft: '8px'
      }}>({rating})</span>
    </div>
  )
}