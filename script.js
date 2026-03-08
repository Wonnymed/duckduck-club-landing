const LANGUAGE_OPTIONS = [
  "English",
  "Spanish",
  "Italian",
  "French",
  "German",
  "Mandarin",
  "Korean",
  "Japanese",
];

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
const languagesTitle = document.getElementById("languagesTitle");
const languagesSubtitle = document.getElementById("languagesSubtitle");
const premiumExtrasLabel = document.getElementById("premiumExtrasLabel");
const chipsContainer = document.getElementById("languageChips");
const polymarketToggle = document.getElementById("polymarketToggle");
const summaryPlan = document.getElementById("summaryPlan");
const summaryIncludedRow = document.getElementById("summaryIncludedRow");
const summaryLanguages = document.getElementById("summaryLanguages");
const summaryExtensions = document.getElementById("summaryExtensions");
const summaryTotalUsd = document.getElementById("summaryTotalUsd");
const summaryTotalBrl = document.getElementById("summaryTotalBrl");

function openModal(plan) {
  state.plan = plan;
  state.polymarket = false;
  state.languages = new Set();
  polymarketToggle.checked = false;

  if (plan === "base") {
    subtitle.textContent =
      "Você selecionou o Base. Adicione os idiomas que deseja liberar no seu acesso.";
    languagesTitle.textContent = "Escolha seus idiomas";
    languagesSubtitle.textContent = "+US$5/mês por idioma · aprox. R$26/mês por idioma";
    summaryIncludedRow.classList.add("hidden");
    premiumExtrasLabel.classList.add("hidden");
  } else {
    subtitle.textContent =
      "Você selecionou o Premium. Os 2 primeiros idiomas já estão incluídos no plano.";
    languagesTitle.textContent = "Escolha seus 2 idiomas incluídos";
    languagesSubtitle.textContent = "Selecione idiomas diretamente nos chips.";
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
      if (state.languages.has(lang)) {
        state.languages.delete(lang);
      } else {
        state.languages.add(lang);
      }
      renderChips();
      refreshSummary();
    });
    chipsContainer.appendChild(button);
  }
}

function calculateTotal() {
  const basePrice = PRICES[state.plan];
  const langCount = state.languages.size;
  const billableLanguages =
    state.plan === "premium" ? Math.max(0, langCount - 2) : langCount;

  return (
    basePrice +
    (state.polymarket ? PRICES.polymarket : 0) +
    billableLanguages * PRICES.language
  );
}

function refreshSummary() {
  const planLabel = state.plan === "premium" ? "Premium" : "Base";
  const selected = [...state.languages];
  const selectedCount = selected.length;
  const extrasCount = state.plan === "premium" ? Math.max(0, selectedCount - 2) : selectedCount;

  summaryPlan.textContent = planLabel;
  summaryLanguages.textContent = selectedCount ? selected.join(", ") : "Nenhum";

  const extensionParts = [];
  if (state.polymarket) extensionParts.push("Polymarket Lab");
  if (state.plan === "base" && selectedCount > 0) {
    extensionParts.push(`${selectedCount} idioma(s)`);
  }
  if (state.plan === "premium" && extrasCount > 0) {
    extensionParts.push(`${extrasCount} idioma(s) extra(s)`);
  }
  summaryExtensions.textContent = extensionParts.length ? extensionParts.join(" + ") : "Nenhuma";

  if (state.plan === "premium" && extrasCount > 0) {
    premiumExtrasLabel.classList.remove("hidden");
    premiumExtrasLabel.textContent =
      "Idiomas extras: +US$5/mês por idioma adicional · aprox. R$26/mês por idioma";
  } else {
    premiumExtrasLabel.classList.add("hidden");
  }

  const totalUsd = calculateTotal();
  const totalBrl = totalUsd * PRICES.usdToBrl;
  summaryTotalUsd.textContent = `US$${totalUsd}`;
  summaryTotalBrl.textContent = `aprox. R$${Math.round(totalBrl)}/mês`;
}

document.querySelectorAll(".cta").forEach((button) => {
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
