// =========================================
// BRILHO MAGNÉTICO GLOBAL (Fica sempre no cursor)
// =========================================
const globalGlow = document.getElementById("globalGlow");

window.addEventListener("mousemove", (e) => {
  // Move o brilho global suavemente pela tela com o mouse padrão
  globalGlow.style.left = `${e.clientX}px`;
  globalGlow.style.top = `${e.clientY}px`;
});

// =========================================
// EFEITO SPOTLIGHT NOS CARDS (MAGNETIC GLOW NAS PRANCHAS)
// =========================================
const cards = document.querySelectorAll(".plate");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Passa as coordenadas X e Y relativas para o CSS do card
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});

// =========================================
// DROPDOWN DE IDIOMAS (Traduz toda a página)
// =========================================
const langToggleBtn = document.getElementById("langToggleBtn");
const langMenu = document.getElementById("langMenu");
const langOptions = document.querySelectorAll(".lang-option");
let currentLang = "PT";

// Abre e fecha o menu
langToggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  langMenu.classList.toggle("show");
});

// Fecha o menu clicando fora
document.addEventListener("click", () => {
  langMenu.classList.remove("show");
});

// Troca de Textos
langOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    currentLang = e.target.getAttribute("data-lang");
    langToggleBtn.textContent = e.target.textContent;

    document.querySelectorAll("[data-pt]").forEach((el) => {
      let text = "";
      if (currentLang === "PT") text = el.getAttribute("data-pt");
      if (currentLang === "EN") text = el.getAttribute("data-en");
      if (currentLang === "ES") text = el.getAttribute("data-es");
      if (text) el.innerHTML = text;
    });
  });
});

// =========================================
// RÉGUA E FADE-UP ANIMATIONS (SCROLL)
// =========================================
const tracks = document.querySelectorAll(".ruler-track");
const rulerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.4 },
);
tracks.forEach((t) => rulerObserver.observe(t));

const fadeElements = document.querySelectorAll(".fade-up");
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 },
);
fadeElements.forEach((el) => fadeObserver.observe(el));
