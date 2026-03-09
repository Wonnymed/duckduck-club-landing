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

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("customizerOverlay");
  const subtitle = document.getElementById("modalSubtitle");
  const planLabel = document.getElementById("planLabel");
  const languagesTitle = document.getElementById("languagesTitle");
  const languagesSubtitle = document.getElementById("languagesSubtitle");
  const languagesProgress = document.getElementById("languagesProgress");
  const premiumExtrasBlock = document.getElementById("premiumExtrasBlock");
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

  const summaryTargets = [summaryTotalUsd, summaryTotalBrl];

  function pulseSummaryTotals() {
    summaryTargets.forEach((target) => target.classList.add("pulse-update"));
    window.setTimeout(() => {
      summaryTargets.forEach((target) => target.classList.remove("pulse-update"));
    }, 260);
  }

  function setPolymarketButtonState() {
    const active = state.polymarket;
    polymarketToggle.classList.toggle("active", active);
    polymarketToggle.textContent = active ? "Adicionado" : "Adicionar";
    polymarketToggle.setAttribute("aria-pressed", String(active));
  }

  function getPremiumProgress(selectedCount) {
    if (selectedCount === 1) return "1/2 selecionado";
    return `${Math.min(selectedCount, 2)}/2 selecionados`;
  }

  function openModal(plan) {
    if (!["base", "premium"].includes(plan)) return;

    state.plan = plan;
    state.polymarket = false;
    state.languages = new Set();
    setPolymarketButtonState();

    if (plan === "base") {
      planLabel.textContent = "BASE";
      subtitle.textContent = "Você escolheu o Base. Monte seu acesso e siga para o checkout.";
      languagesTitle.textContent = "Escolha os idiomas do seu acesso";
      languagesSubtitle.textContent = "+US$5/mês por idioma · aprox. R$26/mês por idioma";
      languagesProgress.classList.add("hidden");
      summaryIncludedRow.classList.add("hidden");
      premiumExtrasBlock.classList.add("hidden");
    } else {
      planLabel.textContent = "PREMIUM";
      subtitle.textContent = "Você escolheu o Premium. Selecione seus 2 idiomas incluídos e personalize seu acesso.";
      languagesTitle.textContent = "Escolha seus 2 idiomas incluídos";
      languagesSubtitle.textContent = "Após os 2 incluídos, idiomas extras podem ser adicionados por +US$5/mês.";
      languagesProgress.classList.remove("hidden");
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
    const langCount = state.languages.size;
    const billableLanguages = state.plan === "premium" ? Math.max(0, langCount - 2) : langCount;
    return PRICES[state.plan] + (state.polymarket ? PRICES.polymarket : 0) + billableLanguages * PRICES.language;
  }

  function refreshSummary() {
    const selected = [...state.languages];
    const selectedCount = selected.length;
    const extrasCount = state.plan === "premium" ? Math.max(0, selectedCount - 2) : selectedCount;

    summaryPlan.textContent = state.plan === "premium" ? "Premium · US$29/mês" : "Base · US$15/mês";
    summaryLanguages.textContent = selectedCount ? selected.join(", ") : "Nenhum";
    summaryLanguageExtras.textContent = extrasCount ? `${extrasCount} idioma(s)` : "Nenhum";
    summaryPolymarket.textContent = state.polymarket ? "Adicionado" : "Não adicionado";

    if (state.plan === "premium") {
      languagesProgress.textContent = getPremiumProgress(selectedCount);

      if (selectedCount >= 2) {
        premiumExtrasBlock.classList.remove("hidden");
        premiumExtrasLabel.textContent = "Idiomas extras serão cobrados apenas a partir do 3º idioma.";
      } else {
        premiumExtrasBlock.classList.add("hidden");
      }
    }

    const total = calculateTotal();
    summaryTotalUsd.textContent = `US$${total}`;
    summaryTotalBrl.textContent = `aprox. R$${Math.round(total * PRICES.usdToBrl)}/mês`;
    pulseSummaryTotals();
  }

  function closeModal() {
    overlay.classList.add("hidden");
  }

  document.querySelectorAll("button[data-plan]").forEach((button) => {
    button.addEventListener("click", () => openModal(button.dataset.plan));
  });

  polymarketToggle.addEventListener("click", () => {
    state.polymarket = !state.polymarket;
    setPolymarketButtonState();
    refreshSummary();
  });

  document.getElementById("closeModal").addEventListener("click", closeModal);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });

  document.getElementById("openAccess").addEventListener("click", () => {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth", block: "start" });
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
  document.querySelectorAll(".layer-card, .plan-card").forEach((card, index) => {
    card.style.transitionDelay = `${90 + (index % 2) * 90}ms`;
    card.classList.add("reveal");
    observer.observe(card);
  });
});
