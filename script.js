const LANGUAGE_OPTIONS = ["English", "Spanish", "Italian", "French", "German", "Mandarin", "Korean", "Japanese"];

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("customizerOverlay");
  const modal = overlay?.querySelector(".modal");
  const closeBtn = document.getElementById("closeModal");
  const planButtons = document.querySelectorAll("[data-plan-trigger]");

  if (!overlay || !modal || !closeBtn || !planButtons.length) {
    console.error("Modal elements not found.");
    return;
  }

  const state = {
    plan: null,
    polymarket: false,
    selectedLanguages: new Set(),
    extraLanguages: 0,
  };

  const chipsContainer = document.getElementById("languageChips");
  const polymarketToggle = document.getElementById("polymarketToggle");

  const PRICES = {
    base: 15,
    premium: 29,
    polymarket: 10,
    language: 5,
    usdToBrl: 5.2,
  };

  function recalculateExtras() {
    state.extraLanguages = state.plan === "premium" ? Math.max(0, state.selectedLanguages.size - 2) : 0;
  }

  function resetState(plan) {
    state.plan = plan;
    state.polymarket = false;
    state.selectedLanguages = new Set();
    state.extraLanguages = 0;

    const polymarketToggle = document.getElementById("polymarketToggle");
    if (polymarketToggle) {
      polymarketToggle.checked = false;
      polymarketToggle.classList.remove("active");
      polymarketToggle.setAttribute("aria-pressed", "false");
      polymarketToggle.textContent = "Adicionar";
    }
  }

  function openModal(plan) {
    if (!plan) return;

    resetState(plan);
    renderLanguageChips();
    updateModalContent();
    overlay.classList.remove("hidden");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    overlay.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }

  function updateModalContent() {
    const subtitle = document.getElementById("modalSubtitle");
    const languagesTitle = document.getElementById("languagesTitle");
    const languagesSubtitle = document.getElementById("languagesSubtitle");
    const summaryPlan = document.getElementById("summaryPlan");
    const summaryIncludedItems = document.getElementById("summaryIncludedItems");
    const summaryLanguages = document.getElementById("summaryLanguages");
    const summaryExtensions = document.getElementById("summaryExtensions");
    const summaryTotalUsd = document.getElementById("summaryTotalUsd");
    const summaryTotalBrl = document.getElementById("summaryTotalBrl");
    const premiumExtrasPanel = document.getElementById("premiumExtrasPanel");
    const premiumExtrasLabel = document.getElementById("premiumExtrasLabel");
    const extraLanguageCount = document.getElementById("extraLanguageCount");

    if (!subtitle || !languagesTitle || !languagesSubtitle || !summaryPlan || !summaryIncludedItems || !summaryLanguages || !summaryExtensions || !summaryTotalUsd || !summaryTotalBrl) {
      return;
    }

    recalculateExtras();

    if (state.plan === "base") {
      subtitle.textContent = "Você selecionou o Base. Agora escolha os idiomas que deseja liberar no seu acesso.";
      languagesTitle.textContent = "Escolha os idiomas do seu acesso";
      languagesSubtitle.textContent = "+US$5/mês por idioma · aprox. R$26/mês por idioma";
      summaryIncludedItems.textContent = "The Portal, The Core, The Lounge e Geopolitics";
      if (premiumExtrasPanel) premiumExtrasPanel.classList.add("hidden");
    } else {
      subtitle.textContent = "Você selecionou o Premium. Os 2 primeiros idiomas já estão incluídos no plano.";
      languagesTitle.textContent = "Escolha seus 2 idiomas incluídos";
      languagesSubtitle.textContent = "A partir do terceiro idioma: +US$5/mês por idioma adicional.";
      summaryIncludedItems.textContent = "The Sanctum, Duck Tank, Black Book, Global Moves e 2 idiomas incluídos";

      if (premiumExtrasPanel) {
        premiumExtrasPanel.classList.toggle("hidden", state.selectedLanguages.size < 2);
      }
      if (premiumExtrasLabel) {
        premiumExtrasLabel.textContent = "Idiomas extras: +US$5/mês por idioma adicional";
      }
      if (extraLanguageCount) {
        extraLanguageCount.textContent = String(state.extraLanguages);
      }
    }

    summaryPlan.textContent = state.plan === "premium" ? "Premium" : "Base";

    const selected = [...state.selectedLanguages];
    summaryLanguages.textContent = selected.length ? selected.join(", ") : "Nenhum";

    const addOns = [];
    if (state.polymarket) addOns.push("Polymarket Lab");
    if (state.plan === "base" && selected.length > 0) addOns.push(`${selected.length} idioma(s)`);
    if (state.plan === "premium" && state.extraLanguages > 0) addOns.push(`${state.extraLanguages} idioma(s) extra(s)`);

    summaryExtensions.textContent = addOns.length ? addOns.join(" + ") : "Nenhum";

    const total =
      PRICES[state.plan] +
      (state.polymarket ? PRICES.polymarket : 0) +
      (state.plan === "base" ? selected.length * PRICES.language : state.extraLanguages * PRICES.language);

    summaryTotalUsd.textContent = `US$${total}`;
    summaryTotalBrl.textContent = `aprox. R$${Math.round(total * PRICES.usdToBrl)}/mês`;
  }

  function renderLanguageChips() {
    if (!chipsContainer) return;
    chipsContainer.innerHTML = "";

    LANGUAGE_OPTIONS.forEach((lang) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip";
      chip.textContent = lang;
      chip.classList.toggle("active", state.selectedLanguages.has(lang));

      chip.addEventListener("click", () => {
        if (state.selectedLanguages.has(lang)) {
          state.selectedLanguages.delete(lang);
        } else {
          state.selectedLanguages.add(lang);
        }

        renderLanguageChips();
        updateModalContent();
      });

      chipsContainer.appendChild(chip);
    });
  }

  planButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const plan = button.getAttribute("data-plan-trigger");
      openModal(plan);
    });
  });

  closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeModal();
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeModal();
    }
  });

  modal.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.classList.contains("hidden")) {
      closeModal();
    }
  });

  polymarketToggle?.addEventListener("click", () => {
    state.polymarket = !state.polymarket;
    polymarketToggle.classList.toggle("active", state.polymarket);
    polymarketToggle.setAttribute("aria-pressed", String(state.polymarket));
    polymarketToggle.textContent = state.polymarket ? "Adicionado" : "Adicionar";
    updateModalContent();
  });

  document.getElementById("openAccess")?.addEventListener("click", () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
