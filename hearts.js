// hearts.js
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('hearts-container');
  if (!container) return;

  function createHeartElement() {
    const el = document.createElement('div');
    el.className = 'heart';
    el.textContent = '❤️';
    el.style.left = (Math.random() * 100) + 'vw';
    el.style.fontSize = (14 + Math.random() * 30) + 'px';
    el.style.animationDuration = (4 + Math.random() * 4) + 's';
    el.style.opacity = (0.6 + Math.random() * 0.4);
    return el;
  }

  function spawnHeart() {
    const h = createHeartElement();
    container.appendChild(h);
    // remove after animation
    setTimeout(() => h.remove(), 9000);
  }

  // continuous gentle hearts
  const regularInterval = setInterval(spawnHeart, 1400);

  // burst (exposed)
  function spawnBurstHearts(amount = 8) {
    for (let i = 0; i < amount; i++) {
      setTimeout(spawnHeart, i * 120);
    }
  }

  // expose to global (so other scripts can trigger)
  window.spawnBurstHearts = spawnBurstHearts;

  // clean up if page unloads
  window.addEventListener('beforeunload', () => clearInterval(regularInterval));
});
