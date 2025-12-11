const CuteBadge = ({ children, className = '' }) => {
  return (
    <div className={`cute-badge ${className}`}>
      <span className="badge-sparkle badge-sparkle-1">✨</span>
      <span className="badge-sparkle badge-sparkle-2">⭐</span>
      {children}
      <span className="badge-sparkle badge-sparkle-3">✨</span>
      <span className="badge-sparkle badge-sparkle-4">⭐</span>
    </div>
  )
}

export default CuteBadge
