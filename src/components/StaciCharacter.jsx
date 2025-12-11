const StaciCharacter = ({ size = 200, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
    >
      {/* Background circle */}
      <circle cx="100" cy="100" r="95" fill="#FFE4EC" stroke="#FFB6C1" strokeWidth="3" />

      {/* Hair - black ponytail */}
      <ellipse cx="100" cy="65" rx="45" ry="40" fill="#2C1810" />
      <ellipse cx="100" cy="55" rx="38" ry="30" fill="#2C1810" />

      {/* Ponytail */}
      <path d="M130 45 Q160 30 155 60 Q150 90 140 70 Q135 55 130 45" fill="#2C1810" />

      {/* Pink hair tie with beads */}
      <circle cx="135" cy="50" r="6" fill="#FF69B4" />
      <circle cx="142" cy="55" r="4" fill="#FF1493" />
      <circle cx="128" cy="48" r="4" fill="#FF1493" />

      {/* Face */}
      <ellipse cx="100" cy="85" rx="35" ry="38" fill="#FFDAB9" />

      {/* Bangs */}
      <path d="M65 70 Q75 55 85 68 Q90 60 100 65 Q110 58 115 68 Q125 55 135 70" fill="#2C1810" />

      {/* Eyes */}
      <ellipse cx="85" cy="85" rx="8" ry="10" fill="white" />
      <ellipse cx="115" cy="85" rx="8" ry="10" fill="white" />
      <circle cx="85" cy="87" r="5" fill="#4A3728" />
      <circle cx="115" cy="87" r="5" fill="#4A3728" />
      <circle cx="87" cy="85" r="2" fill="white" />
      <circle cx="117" cy="85" r="2" fill="white" />

      {/* Eyebrows */}
      <path d="M75 75 Q85 72 92 75" stroke="#2C1810" strokeWidth="2" fill="none" />
      <path d="M108 75 Q115 72 125 75" stroke="#2C1810" strokeWidth="2" fill="none" />

      {/* Blush */}
      <ellipse cx="70" cy="95" rx="8" ry="5" fill="#FFB6C1" opacity="0.6" />
      <ellipse cx="130" cy="95" rx="8" ry="5" fill="#FFB6C1" opacity="0.6" />

      {/* Nose */}
      <ellipse cx="100" cy="95" rx="3" ry="4" fill="#F4C4A8" />

      {/* Smile */}
      <path d="M90 105 Q100 115 110 105" stroke="#D4837A" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Body - white shirt */}
      <path d="M60 130 Q60 125 70 122 Q100 115 130 122 Q140 125 140 130 L145 165 Q100 175 55 165 L60 130" fill="white" stroke="#E0E0E0" strokeWidth="1" />

      {/* Collar detail */}
      <path d="M85 122 L100 132 L115 122" stroke="#E0E0E0" strokeWidth="2" fill="none" />

      {/* Pink tutu */}
      <ellipse cx="100" cy="165" rx="50" ry="20" fill="#FF69B4" />
      <ellipse cx="100" cy="168" rx="48" ry="18" fill="#FF85C1" />
      <ellipse cx="100" cy="171" rx="45" ry="15" fill="#FFB6C1" />

      {/* Tutu ruffles */}
      <path d="M50 165 Q60 155 70 165 Q80 155 90 165 Q100 155 110 165 Q120 155 130 165 Q140 155 150 165" stroke="#FF1493" strokeWidth="2" fill="none" />

      {/* Arms */}
      <ellipse cx="50" cy="140" rx="12" ry="8" fill="#FFDAB9" />
      <ellipse cx="150" cy="140" rx="12" ry="8" fill="#FFDAB9" />

      {/* Small bow on shirt */}
      <path d="M95 122 Q90 118 95 115 Q100 118 100 122 Q100 118 105 115 Q110 118 105 122" fill="#FF69B4" />
      <circle cx="100" cy="120" r="3" fill="#FF1493" />
    </svg>
  )
}

export default StaciCharacter
