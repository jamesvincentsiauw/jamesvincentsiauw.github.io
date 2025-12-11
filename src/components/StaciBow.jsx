const StaciBow = ({ size = 80, className = '' }) => {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 100 60"
      className={className}
    >
      {/* Left bow loop */}
      <ellipse cx="25" cy="30" rx="22" ry="18" fill="#FF69B4" />
      <ellipse cx="25" cy="30" rx="18" ry="14" fill="#FF85C1" />
      <ellipse cx="25" cy="30" rx="10" ry="8" fill="#FFB6C1" />

      {/* Right bow loop */}
      <ellipse cx="75" cy="30" rx="22" ry="18" fill="#FF69B4" />
      <ellipse cx="75" cy="30" rx="18" ry="14" fill="#FF85C1" />
      <ellipse cx="75" cy="30" rx="10" ry="8" fill="#FFB6C1" />

      {/* Center knot */}
      <ellipse cx="50" cy="30" rx="12" ry="15" fill="#FF1493" />
      <ellipse cx="50" cy="30" rx="8" ry="10" fill="#FF69B4" />

      {/* Ribbon tails */}
      <path d="M45 42 L40 58 Q42 55 45 58 L48 42" fill="#FF69B4" />
      <path d="M55 42 L52 58 Q55 55 58 58 L60 42" fill="#FF69B4" />

      {/* Sparkle details */}
      <circle cx="18" cy="25" r="2" fill="white" opacity="0.7" />
      <circle cx="82" cy="25" r="2" fill="white" opacity="0.7" />
    </svg>
  )
}

export default StaciBow
