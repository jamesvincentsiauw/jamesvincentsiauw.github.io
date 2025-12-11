const StaciTutu = ({ size = 120, className = '' }) => {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 120 60"
      className={className}
    >
      {/* Tutu layers */}
      <ellipse cx="60" cy="30" rx="55" ry="25" fill="#FF69B4" />
      <ellipse cx="60" cy="33" rx="52" ry="22" fill="#FF85C1" />
      <ellipse cx="60" cy="36" rx="48" ry="18" fill="#FFB6C1" />
      <ellipse cx="60" cy="38" rx="44" ry="14" fill="#FFD1DC" />

      {/* Ruffles */}
      <path d="M5 30 Q15 20 25 30 Q35 20 45 30 Q55 20 65 30 Q75 20 85 30 Q95 20 105 30 Q115 20 115 30"
        stroke="#FF1493" strokeWidth="2" fill="none" />

      {/* Waistband */}
      <rect x="30" y="8" width="60" height="12" rx="6" fill="#FF1493" />
      <rect x="35" y="10" width="50" height="8" rx="4" fill="#FF69B4" />

      {/* Small bow on waistband */}
      <ellipse cx="60" cy="14" rx="8" ry="5" fill="#FFD700" />
      <circle cx="60" cy="14" r="3" fill="#FFA500" />

      {/* Sparkles */}
      <circle cx="20" cy="35" r="2" fill="white" opacity="0.6" />
      <circle cx="100" cy="35" r="2" fill="white" opacity="0.6" />
      <circle cx="60" cy="45" r="2" fill="white" opacity="0.6" />
    </svg>
  )
}

export default StaciTutu
