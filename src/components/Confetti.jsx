const Confetti = () => {
  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 3,
    color: ['#FF69B4', '#FFB6C1', '#FFD700', '#FF1493', '#E6E6FA', '#FFC0CB'][Math.floor(Math.random() * 6)],
    rotation: Math.random() * 360,
    size: 8 + Math.random() * 8,
  }))

  return (
    <div className="confetti-container">
      {confettiPieces.map(piece => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            width: `${piece.size}px`,
            height: `${piece.size * 0.4}px`,
          }}
        />
      ))}
    </div>
  )
}

export default Confetti
