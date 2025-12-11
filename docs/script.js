// Party date: January 10, 2026 at 10:00 AM
const partyDate = new Date('2026-01-10T10:00:00');

// Countdown Timer
function updateCountdown() {
  const now = new Date();
  const difference = partyDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Generate Sparkles
function createSparkles() {
  const container = document.getElementById('sparkles');
  const sparkleChars = ['✨', '⭐', '💫', '✧', '★'];

  for (let i = 0; i < 25; i++) {
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle-star';
    sparkle.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
    sparkle.style.animationDelay = Math.random() * 3 + 's';
    sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's';
    container.appendChild(sparkle);
  }
}

// Generate Floating Hearts
function createFloatingHearts() {
  const container = document.getElementById('floating-hearts');
  const heartChars = ['💕', '💖', '💗', '💝', '🩷'];

  for (let i = 0; i < 12; i++) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
    heart.style.animationDelay = Math.random() * 6 + 's';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    container.appendChild(heart);
  }
}

// Generate Confetti
function createConfetti() {
  const container = document.getElementById('confetti');
  const colors = ['#FF69B4', '#FFB6C1', '#FFD700', '#FF1493', '#E6E6FA', '#FFC0CB'];

  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.width = (Math.random() * 8 + 4) + 'px';
    confetti.style.height = (Math.random() * 12 + 6) + 'px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 5 + 's';
    confetti.style.animationDuration = (Math.random() * 3 + 4) + 's';
    container.appendChild(confetti);
  }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  createSparkles();
  createFloatingHearts();
  createConfetti();
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections with animate-section class
document.querySelectorAll('.animate-section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
  observer.observe(section);
});
