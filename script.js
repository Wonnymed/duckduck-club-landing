const LANGUAGE_OPTIONS = ["English", "Spanish", "Italian", "French", "German", "Mandarin", "Korean", "Japanese"];

const PRICES = {
  base: 15,
  premium: 29,
  polymarket: 10,
  language: 5,
  usdToBrl: 5.2,
};

const state = {
  plan: null,
  polymarket: false,
  languages: new Set(),
};

const overlay = document.getElementById("customizerOverlay");
const subtitle = document.getElementById("modalSubtitle");
const planLabel = document.getElementById("planLabel");
const languagesTitle = document.getElementById("languagesTitle");
const languagesSubtitle = document.getElementById("languagesSubtitle");
const premiumExtrasLabel = document.getElementById("premiumExtrasLabel");
const chipsContainer = document.getElementById("languageChips");
const polymarketToggle = document.getElementById("polymarketToggle");
const summaryPlan = document.getElementById("summaryPlan");
const summaryIncludedRow = document.getElementById("summaryIncludedRow");
const summaryLanguages = document.getElementById("summaryLanguages");
const summaryLanguageExtras = document.getElementById("summaryLanguageExtras");
const summaryPolymarket = document.getElementById("summaryPolymarket");
const summaryTotalUsd = document.getElementById("summaryTotalUsd");
const summaryTotalBrl = document.getElementById("summaryTotalBrl");

function openModal(plan) {
  state.plan = plan;
  state.polymarket = false;
  state.languages = new Set();
  polymarketToggle.checked = false;

  if (plan === "base") {
    planLabel.textContent = "BASE";
    subtitle.textContent = "Você selecionou o Base. Agora escolha os idiomas que deseja liberar no seu acesso.";
    languagesTitle.textContent = "Escolha os idiomas do seu acesso";
    languagesSubtitle.textContent = "+US$5/mês por idioma · aprox. R$26/mês por idioma";
    summaryIncludedRow.classList.add("hidden");
    premiumExtrasLabel.classList.add("hidden");
  } else {
    planLabel.textContent = "PREMIUM";
    subtitle.textContent = "Você selecionou o Premium. Os 2 primeiros idiomas já estão incluídos no plano.";
    languagesTitle.textContent = "Escolha seus 2 idiomas incluídos";
    languagesSubtitle.textContent = "A partir do terceiro idioma: +US$5/mês por idioma adicional.";
    summaryIncludedRow.classList.remove("hidden");
  }

  renderChips();
  refreshSummary();
  overlay.classList.remove("hidden");
}

function renderChips() {
  chipsContainer.innerHTML = "";
  for (const lang of LANGUAGE_OPTIONS) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.textContent = lang;
    button.classList.toggle("active", state.languages.has(lang));
    button.addEventListener("click", () => {
      if (state.languages.has(lang)) state.languages.delete(lang);
      else state.languages.add(lang);
      renderChips();
      refreshSummary();
    });
    chipsContainer.appendChild(button);
  }
}

function calculateTotal() {
  const langCount = state.languages.size;
  const billableLanguages = state.plan === "premium" ? Math.max(0, langCount - 2) : langCount;
  return PRICES[state.plan] + (state.polymarket ? PRICES.polymarket : 0) + billableLanguages * PRICES.language;
}

function refreshSummary() {
  const selected = [...state.languages];
  const extrasCount = state.plan === "premium" ? Math.max(0, selected.length - 2) : selected.length;

  summaryPlan.textContent = state.plan === "premium" ? "Premium" : "Base";
  summaryLanguages.textContent = selected.length ? selected.join(", ") : "Nenhum";
  summaryLanguageExtras.textContent = extrasCount ? `${extrasCount} idioma(s)` : "Nenhum";
  summaryPolymarket.textContent = state.polymarket ? "Ativo" : "Não";

  if (state.plan === "premium" && extrasCount > 0) {
    premiumExtrasLabel.classList.remove("hidden");
    premiumExtrasLabel.textContent = "Idiomas extras serão cobrados como adicional mensal.";
  } else {
    premiumExtrasLabel.classList.add("hidden");
  }

  const total = calculateTotal();
  summaryTotalUsd.textContent = `US$${total}`;
  summaryTotalBrl.textContent = `aprox. R$${Math.round(total * PRICES.usdToBrl)}/mês`;
}

document.querySelectorAll(".cta[data-plan]").forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.plan));
});

polymarketToggle.addEventListener("change", () => {
  state.polymarket = polymarketToggle.checked;
  refreshSummary();
});

document.getElementById("closeModal").addEventListener("click", () => {
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) overlay.classList.add("hidden");
});

document.getElementById("openAccess").addEventListener("click", () => {
  document.getElementById("mainHero").scrollIntoView({ behavior: "smooth", block: "start" });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
