// Efeito de rolagem na Régua (Ruler)
const tracks = document.querySelectorAll('.ruler-track');
const rulerObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('in-view'); }
  });
}, { threshold: 0.4 });
tracks.forEach(t => rulerObserver.observe(t));

// Efeito Fade-up animation (Seções surgindo no scroll)
const fadeElements = document.querySelectorAll('.fade-up');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

fadeElements.forEach(el => fadeObserver.observe(el));

// Lógica do Menu Mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Fecha o menu mobile quando um link é clicado
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});