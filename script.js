const LANGUAGE_OPTIONS = ['English', 'Spanish', 'Italian', 'French', 'German', 'Mandarin', 'Korean', 'Japanese'];

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('customizerOverlay');
  const modal = overlay?.querySelector('.modal');
  const closeBtn = document.getElementById('closeModal');
  const chipsContainer = document.getElementById('languageChips');
  const polymarketToggle = document.getElementById('polymarketToggle');

  if (!overlay || !modal || !closeBtn || !chipsContainer || !polymarketToggle) return;

  const state = {
    plan: 'base',
    polymarket: false,
    selectedLanguages: new Set(),
    extraLanguages: 0,
  };

  const PRICES = { base: 15, premium: 29, polymarket: 10, language: 5, usdToBrl: 5.2 };

  const elements = {
    planLabel: document.getElementById('planLabel'),
    subtitle: document.getElementById('modalSubtitle'),
    languagesTitle: document.getElementById('languagesTitle'),
    languagesSubtitle: document.getElementById('languagesSubtitle'),
    languagesProgress: document.getElementById('languagesProgress'),
    premiumExtrasPanel: document.getElementById('premiumExtrasPanel'),
    premiumExtrasLabel: document.getElementById('premiumExtrasLabel'),
    extraLanguageCount: document.getElementById('extraLanguageCount'),
    summaryPlan: document.getElementById('summaryPlan'),
    summaryIncludedItems: document.getElementById('summaryIncludedItems'),
    summaryLanguages: document.getElementById('summaryLanguages'),
    summaryExtensions: document.getElementById('summaryExtensions'),
    summaryTotalUsd: document.getElementById('summaryTotalUsd'),
    summaryTotalBrl: document.getElementById('summaryTotalBrl'),
  };

  const recalculateExtras = () => {
    state.extraLanguages = state.plan === 'premium' ? Math.max(0, state.selectedLanguages.size - 2) : 0;
  };

  const resetState = (plan) => {
    state.plan = plan;
    state.polymarket = false;
    state.selectedLanguages = new Set();
    state.extraLanguages = 0;
    polymarketToggle.classList.remove('active');
    polymarketToggle.setAttribute('aria-checked', 'false');
  };

  const closeModal = () => {
    overlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
  };

  const renderLanguageChips = () => {
    chipsContainer.innerHTML = '';
    LANGUAGE_OPTIONS.forEach((lang) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `chip${state.selectedLanguages.has(lang) ? ' active' : ''}`;
      chip.textContent = lang;
      chip.addEventListener('click', () => {
        if (state.selectedLanguages.has(lang)) state.selectedLanguages.delete(lang);
        else state.selectedLanguages.add(lang);
        renderLanguageChips();
        updateModalContent();
      });
      chipsContainer.appendChild(chip);
    });
  };

  const updateModalContent = () => {
    recalculateExtras();

    const selected = [...state.selectedLanguages];
    const isPremium = state.plan === 'premium';

    elements.planLabel.textContent = isPremium ? 'PLANO PREMIUM' : 'PLANO BASE';
    elements.summaryPlan.textContent = isPremium ? 'Premium' : 'Base';

    if (isPremium) {
      elements.subtitle.textContent =
        'Você selecionou o Premium. Seus 2 primeiros idiomas já estão incluídos no plano. Se quiser expandir ainda mais, adicione idiomas extras e o Polymarket Lab.';
      elements.languagesTitle.textContent = 'Escolha seus idiomas';
      elements.languagesSubtitle.textContent =
        '2 idiomas já estão incluídos no Premium. A partir do 3º idioma: +US$5/mês por idioma.';
      elements.languagesProgress.textContent = `${Math.min(2, selected.length)}/2 idiomas incluídos selecionados`;
      elements.languagesProgress.classList.remove('hidden');
      elements.summaryIncludedItems.textContent =
        'Tudo do Base + The Sanctum, Duck Tank, Black Book, Global Moves e 2 idiomas incluídos';
      elements.premiumExtrasPanel.classList.toggle('hidden', selected.length < 2);
      elements.premiumExtrasLabel.textContent = 'Cobrança extra: +US$5/mês por idioma além dos 2 incluídos';
      elements.extraLanguageCount.textContent = String(state.extraLanguages);
    } else {
      elements.subtitle.textContent =
        'Você selecionou o Base. Nenhum idioma está incluído no plano: escolha quantos quiser por +US$5/mês cada, e adicione o Polymarket Lab se desejar.';
      elements.languagesTitle.textContent = 'Escolha os idiomas que deseja liberar';
      elements.languagesSubtitle.textContent = 'No Base, nenhum idioma está incluído. +US$5/mês por idioma · aprox. R$26/mês por idioma.';
      elements.languagesProgress.classList.add('hidden');
      elements.summaryIncludedItems.textContent = 'The Portal, The Core, The Lounge e Geopolitics';
      elements.premiumExtrasPanel.classList.add('hidden');
    }

    elements.summaryLanguages.textContent = selected.length ? selected.join(', ') : 'Nenhum';

    const addOns = [];
    if (state.polymarket) addOns.push('Polymarket Lab');
    if (!isPremium && selected.length > 0) addOns.push(`${selected.length} idioma(s)`);
    if (isPremium && state.extraLanguages > 0) addOns.push(`${state.extraLanguages} idioma(s) extra(s)`);
    elements.summaryExtensions.textContent = addOns.length ? addOns.join(' + ') : 'Nenhum';

    const total =
      PRICES[state.plan] +
      (state.polymarket ? PRICES.polymarket : 0) +
      (isPremium ? state.extraLanguages * PRICES.language : selected.length * PRICES.language);

    elements.summaryTotalUsd.textContent = `US$${total}`;
    elements.summaryTotalBrl.textContent = `Aproximação em BRL: R$${Math.round(total * PRICES.usdToBrl)}/mês`;
  };

  const openModal = (plan) => {
    if (plan !== 'base' && plan !== 'premium') return;
    resetState(plan);
    renderLanguageChips();
    updateModalContent();
    overlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
  };

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-plan-trigger]');
    if (!trigger) return;
    trigger.type = 'button';
    openModal(trigger.dataset.planTrigger);
  });

  polymarketToggle.addEventListener('click', () => {
    state.polymarket = !state.polymarket;
    polymarketToggle.classList.toggle('active', state.polymarket);
    polymarketToggle.setAttribute('aria-checked', String(state.polymarket));
    updateModalContent();
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !overlay.classList.contains('hidden')) closeModal();
  });

  document.getElementById('openAccess')?.addEventListener('click', () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
});
