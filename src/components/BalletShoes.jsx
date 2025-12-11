const BalletShoes = ({ size = 100, className = '' }) => {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 100 50"
      className={className}
    >
      {/* Left ballet shoe */}
      <ellipse cx="25" cy="35" rx="20" ry="12" fill="#C0C0C0" />
      <ellipse cx="25" cy="33" rx="18" ry="10" fill="#D3D3D3" />
      <path d="M10 25 Q25 15 40 25" stroke="#FFB6C1" strokeWidth="3" fill="none" />
      <ellipse cx="25" cy="25" rx="8" ry="5" fill="#FFB6C1" />

      {/* Right ballet shoe */}
      <ellipse cx="75" cy="35" rx="20" ry="12" fill="#C0C0C0" />
      <ellipse cx="75" cy="33" rx="18" ry="10" fill="#D3D3D3" />
      <path d="M60 25 Q75 15 90 25" stroke="#FFB6C1" strokeWidth="3" fill="none" />
      <ellipse cx="75" cy="25" rx="8" ry="5" fill="#FFB6C1" />

      {/* Ribbons */}
      <path d="M15 22 Q5 10 15 5" stroke="#FFB6C1" strokeWidth="2" fill="none" />
      <path d="M35 22 Q45 10 35 5" stroke="#FFB6C1" strokeWidth="2" fill="none" />
      <path d="M65 22 Q55 10 65 5" stroke="#FFB6C1" strokeWidth="2" fill="none" />
      <path d="M85 22 Q95 10 85 5" stroke="#FFB6C1" strokeWidth="2" fill="none" />
    </svg>
  )
}

export default BalletShoes
