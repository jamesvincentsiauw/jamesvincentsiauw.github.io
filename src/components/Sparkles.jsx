import { useEffect, useState } from 'react'

const Sparkles = () => {
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    const createSparkle = () => {
      const sparkle = {
        id: Math.random(),
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 10 + 5,
        duration: Math.random() * 2 + 1,
        delay: Math.random() * 2,
      }
      return sparkle
    }

    const initialSparkles = Array.from({ length: 20 }, createSparkle)
    setSparkles(initialSparkles)

    const interval = setInterval(() => {
      setSparkles(prev => {
        const newSparkles = prev.slice(1)
        newSparkles.push(createSparkle())
        return newSparkles
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="sparkles-container">
      {sparkles.map(sparkle => (
        <svg
          key={sparkle.id}
          className="sparkle-star"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: sparkle.size,
            height: sparkle.size,
            animationDuration: `${sparkle.duration}s`,
            animationDelay: `${sparkle.delay}s`,
          }}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
            fill="#FFD700"
          />
        </svg>
      ))}
    </div>
  )
}

export default Sparkles
