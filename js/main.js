/* =============================================
   كورة90 - Main JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Dark Mode Toggle ---- */
  const btnTheme = document.querySelector('.btn-theme');
  if (btnTheme) {
    btnTheme.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      const icon = this.querySelector('svg use') || this.querySelector('svg');
      // Simply toggle the title for now
    });
  }

  /* ---- Mobile Menu Toggle ---- */
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
      const spans = this.querySelectorAll('span');
      this.classList.toggle('active');
    });
  }

  /* ---- Hero Slider ---- */
  initSlider();

  /* ---- Matches Tabs (matches.html) ---- */
  const matchTabs = document.querySelectorAll('.match-tab');
  if (matchTabs.length) {
    matchTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        matchTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }

});

/* =============================================
   Hero Slider Logic
   ============================================= */
function initSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow.next');

  if (!slides.length) return;

  let current = 0;
  let autoTimer = null;

  function goTo(index) {
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }

  function startAuto() {
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }

  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); resetAuto(); });
  });

  // Start auto-play
  startAuto();
}
