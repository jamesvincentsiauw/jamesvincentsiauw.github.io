import { useState, useEffect } from 'react'
import './App.css'
import StaciCharacter from './components/StaciCharacter'
import StaciBow from './components/StaciBow'
import StaciTutu from './components/StaciTutu'
import BalletShoes from './components/BalletShoes'
import Sparkles from './components/Sparkles'
import FloatingHearts from './components/FloatingHearts'
import Confetti from './components/Confetti'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Party date: January 10, 2026 at 10:00 AM
  const partyDate = new Date('2026-01-10T10:00:00')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = partyDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="app">
      {/* Background Effects */}
      <Sparkles />
      <FloatingHearts />

      {/* Floating Decorations */}
      <div className="floating-decorations">
        <span className="decoration bow-float"><StaciBow size={50} /></span>
        <span className="decoration">⭐</span>
        <span className="decoration tutu-float"><StaciTutu size={60} /></span>
        <span className="decoration">💖</span>
        <span className="decoration bow-float"><StaciBow size={40} /></span>
        <span className="decoration">✨</span>
        <span className="decoration">🌸</span>
        <span className="decoration shoes-float"><BalletShoes size={50} /></span>
        <span className="decoration">🍼</span>
        <span className="decoration">🎀</span>
        <span className="decoration">👑</span>
        <span className="decoration">🦋</span>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <Confetti />
        <div className="hero-content animate-pop">
          <div className="hero-photo">
            <img src="./gwyneth.png" alt="Gwyneth" className="gwyneth-photo" />
            <StaciBow size={60} className="photo-bow-left" />
            <StaciBow size={60} className="photo-bow-right" />
            <div className="photo-sparkles">
              <span className="mini-sparkle">✨</span>
              <span className="mini-sparkle">⭐</span>
              <span className="mini-sparkle">✨</span>
            </div>
          </div>
          <StaciBow size={80} className="hero-bow" />
          <p className="invitation-text">You're Invited to</p>
          <h1 className="baby-name">Gwyneth's</h1>
          <p className="turning-one">
            <span className="number-one">1st</span> Birthday Party!
          </p>
          <div className="cute-emojis">
            🎀 👶 🎂 🎈 🎁
          </div>
          <div className="theme-badge">
            <StaciBow size={30} className="badge-bow" />
            <span>Boss Baby: Staci Theme</span>
            <StaciBow size={30} className="badge-bow" />
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="gallery-section animate-section">
        <h2 className="section-title">
          <span className="title-icon">🎬</span>
          Meet Gwyneth!
          <span className="title-icon">🎬</span>
        </h2>
        <div className="video-gallery">
          <div className="video-card">
            <video
              src="./video1.mp4"
              controls
              playsInline
              poster=""
              className="gallery-video"
            />
            <StaciBow size={40} className="video-bow" />
          </div>
          <div className="video-card">
            <video
              src="./video2.mp4"
              controls
              playsInline
              poster=""
              className="gallery-video"
            />
            <StaciBow size={40} className="video-bow" />
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="countdown-section animate-section">
        <div className="section-header">
          <StaciBow size={60} className="section-bow-left" />
          <h2 className="section-title">
            <span className="title-icon">⏰</span>
            Counting Down!
            <span className="title-icon">⏰</span>
          </h2>
          <StaciBow size={60} className="section-bow-right" />
        </div>
        <div className="countdown-container">
          <div className="countdown-item wiggle-hover">
            <div className="countdown-number">{timeLeft.days}</div>
            <div className="countdown-label">Days</div>
            <span className="countdown-emoji">📅</span>
          </div>
          <div className="countdown-item wiggle-hover">
            <div className="countdown-number">{timeLeft.hours}</div>
            <div className="countdown-label">Hours</div>
            <span className="countdown-emoji">🕐</span>
          </div>
          <div className="countdown-item wiggle-hover">
            <div className="countdown-number">{timeLeft.minutes}</div>
            <div className="countdown-label">Minutes</div>
            <span className="countdown-emoji">⏱️</span>
          </div>
          <div className="countdown-item wiggle-hover">
            <div className="countdown-number">{timeLeft.seconds}</div>
            <div className="countdown-label">Seconds</div>
            <span className="countdown-emoji">⚡</span>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="details-section animate-section">
        <h2 className="section-title">
          <span className="title-icon">🎉</span>
          Party Details
          <span className="title-icon">🎉</span>
        </h2>
        <div className="details-container">
          <div className="detail-card wiggle-hover">
            <div className="detail-icon">📅</div>
            <h3 className="detail-title">When</h3>
            <p className="detail-info">
              <strong>Saturday, January 10, 2026</strong>
              <br />
              10:00 AM
            </p>
            <StaciTutu size={80} className="card-decoration" />
          </div>
          <div className="detail-card wiggle-hover">
            <div className="detail-icon">📍</div>
            <h3 className="detail-title">Where</h3>
            <p className="detail-info">
              <strong>Hachi Garden</strong>
              <br />
              Alam Sutera
            </p>
            <a
              href="https://maps.google.com/?q=Hachi+Garden+Alam+Sutera"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              📍 View Map
            </a>
            <BalletShoes size={70} className="card-decoration" />
          </div>
        </div>
      </section>

      {/* Character Section */}
      <section className="character-section animate-section">
        <h2 className="section-title">
          <span className="title-icon">⭐</span>
          Meet Our Theme Star!
          <span className="title-icon">⭐</span>
        </h2>
        <div className="character-container">
          <div className="staci-showcase">
            <img src="./gwyneth2.png" alt="Gwyneth as Staci" className="staci-photo" />
            <StaciBow size={50} className="staci-photo-bow" />
          </div>
          <h3 className="character-name">Staci from Boss Baby</h3>
          <p className="character-desc">
            Join us for a fabulous celebration inspired by the adorable
            Staci! With her signature pink tutu, cute ponytail with pink beads,
            and ballet shoes - get ready for a day full of pink, bows, and fun!
          </p>
          <div className="staci-items">
            <div className="staci-item wiggle-hover">
              <StaciBow size={60} />
              <span>Pink Bows</span>
            </div>
            <div className="staci-item wiggle-hover">
              <StaciTutu size={80} />
              <span>Tutu</span>
            </div>
            <div className="staci-item wiggle-hover">
              <BalletShoes size={70} />
              <span>Ballet Shoes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="dresscode-section animate-section">
        <div className="dresscode-container">
          <h2 className="section-title white-title">
            <span className="title-icon">👗</span>
            Dress Code
            <span className="title-icon">👗</span>
          </h2>
          <div className="dresscode-content">
            <StaciBow size={80} className="dresscode-bow" />
            <p className="dresscode-text">
              Pink & White Theme
            </p>
            <p className="dresscode-subtitle">
              Channel your inner Staci! Think tutus, bows, and ballet-inspired outfits
            </p>
            <div className="dresscode-icons">
              👗 🎀 💕 👠 💖
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="rsvp-section animate-section">
        <div className="rsvp-container">
          <div className="rsvp-emoji-top">🎈🎀🎈</div>
          <div className="rsvp-photo-wrapper">
            <img src="./gwyneth.png" alt="Gwyneth" className="rsvp-photo" />
          </div>
          <h2 className="rsvp-title">RSVP</h2>
          <p className="rsvp-text">
            We would be delighted to have you celebrate with us!
            <br />
            Please let us know if you can make it.
          </p>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="rsvp-button pulse-button"
          >
            💬 RSVP via WhatsApp
          </a>
          <div className="rsvp-emoji-bottom">🎁🎂🎁</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-decoration">
          🎀 ✨ 💕 ✨ 🎀
        </div>
        <StaciBow size={50} className="footer-bow" />
        <p className="footer-text">
          We can't wait to celebrate with you!
        </p>
        <p className="footer-name">Love, Gwyneth & Family</p>
        <div className="footer-hearts">💕💖💕</div>
        <div className="footer-baby">👶</div>
      </footer>
    </div>
  )
}

export default App
