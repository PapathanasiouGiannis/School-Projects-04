// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const content = document.getElementById('main-content');
  setTimeout(() => {
    loader.classList.add('hidden');
    content.classList.add('visible');
  }, 1200);
});

// Dark Mode
const toggleBtn = document.getElementById('mode-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Scroll Reveal
const cards = document.querySelectorAll('.fade-up');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) card.classList.add('visible');
  });
});

// Animated Particles (soft floating lights)
const particles = document.getElementById('particles');
for (let i = 0; i < 25; i++) {
  const dot = document.createElement('span');
  dot.classList.add('particle');
  dot.style.left = Math.random() * 100 + '%';
  dot.style.top = Math.random() * 100 + '%';
  dot.style.animationDelay = Math.random() * 5 + 's';
  particles.appendChild(dot);
}
