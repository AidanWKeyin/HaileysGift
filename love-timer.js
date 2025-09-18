// love-timer.js
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('loveTimer');
  if (!el) return;

  const start = new Date('2021-09-18T00:00:00');

  function computeElapsed(startDate, now) {
    let Y = now.getFullYear() - startDate.getFullYear();
    let M = now.getMonth() - startDate.getMonth();
    let D = now.getDate() - startDate.getDate();
    let h = now.getHours() - startDate.getHours();
    let m = now.getMinutes() - startDate.getMinutes();
    let s = now.getSeconds() - startDate.getSeconds();

    if (s < 0) { s += 60; m -= 1; }
    if (m < 0) { m += 60; h -= 1; }
    if (h < 0) { h += 24; D -= 1; }
    if (D < 0) {
      // borrow days from previous month (relative to now)
      const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      D += prevMonthDays;
      M -= 1;
    }
    if (M < 0) { M += 12; Y -= 1; }

    return {Y, M, D, h, m, s};
  }

  function update() {
    const now = new Date();
    const {Y, M, D, h, m, s} = computeElapsed(start, now);
    el.textContent = `${Y}y ${M}m ${D}d ${h}h ${m}m ${s}s ❤️`;

    // anniversary burst once per day (use localStorage to throttle)
    if (M === 0 && D === 0) {
      const todayKey = now.toISOString().slice(0,10); // YYYY-MM-DD
      if (localStorage.getItem('lastAnniversaryBurst') !== todayKey) {
        if (typeof window.spawnBurstHearts === 'function') {
          window.spawnBurstHearts(12);
        }
        localStorage.setItem('lastAnniversaryBurst', todayKey);
      }
    }
  }

  update();
  setInterval(update, 1000);
});
