const faqItems = [
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Monthly plans can be canceled with one click from your dashboard. Access remains active until your billing cycle ends.',
  },
  {
    q: 'Is this for beginners?',
    a: 'Absolutely. Base is designed for clarity and fundamentals. Premium layers on speed, depth, and direct implementation support.',
  },
  {
    q: 'What makes Premium different in practice?',
    a: 'Premium includes advanced playbooks, live teardown sessions, and a private operator channel where members get direct feedback.',
  },
  {
    q: 'Do you offer team access?',
    a: 'Yes. Teams of 5+ can request custom onboarding and consolidated billing.',
  },
];

const tiers = [
  {
    name: 'Base',
    price: '$19',
    description: 'For focused learners who want the core system.',
    features: ['Weekly curriculum drops', 'Core templates', 'Community forum access', 'Monthly recap notes'],
    cta: 'Start Base',
  },
  {
    name: 'Premium',
    price: '$79',
    description: 'For operators who want speed, clarity, and direct support.',
    features: ['Everything in Base', 'Private operator channel', 'Live teardown sessions', 'Premium implementation vault'],
    cta: 'Go Premium',
    featured: true,
  },
];

export default function AccessPage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top,_#23133f_0%,_#0a0714_45%,_#05030a_100%)] text-white">
      <div className="mx-auto max-w-6xl space-y-16 px-5 py-14 sm:space-y-20 sm:px-8 sm:py-20 lg:space-y-24 lg:py-24">
        <section className="rounded-3xl border border-white/10 bg-violetDeep/60 p-7 shadow-glow sm:p-10 lg:p-12">
          <p className="inline-flex items-center rounded-full border border-lilac/30 bg-lilac/10 px-3 py-1 text-xs font-medium text-lilac">
            Premium Access • DuckDuck Club
          </p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Built for serious builders. <span className="text-lilac">Designed for trust.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            DuckDuck Club Premium gives you structured systems, practical execution frameworks, and direct guidance—without noise,
            hype, or distractions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-cta px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95">
              Get Premium Access
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
              Explore Base Plan
            </button>
          </div>
        </section>

        <section className="grid gap-3 rounded-2xl border border-white/10 bg-black/35 p-5 text-sm sm:grid-cols-3 sm:gap-4 sm:p-6">
          <div>
            <p className="text-2xl font-semibold text-cta">1,200+</p>
            <p className="mt-1 text-white/70">active members building weekly</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-cta">42%</p>
            <p className="mt-1 text-white/70">faster execution after 30 days</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-cta">4.9/5</p>
            <p className="mt-1 text-white/70">average satisfaction score</p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-lilac/90">O problema</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Muito conteúdo. Pouca clareza de execução.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
              Quem quer resultado rápido geralmente entra em comunidades barulhentas, com aulas soltas, promessas exageradas e pouco
              direcionamento real para avançar toda semana.
            </p>
          </div>
          <div className="rounded-2xl border border-lilac/25 bg-lilac/5 p-6 sm:p-8">
            <ul className="space-y-4 text-sm text-white/80 sm:text-base">
              <li className="border-b border-white/10 pb-3">Playbooks fragmentados e sem ordem de prioridade.</li>
              <li className="border-b border-white/10 pb-3">Feedback genérico, sem contexto de operação.</li>
              <li className="border-b border-white/10 pb-3">Excesso de informação e baixa taxa de implementação.</li>
              <li>Tempo desperdiçado entre ferramentas, conteúdos e opiniões conflitantes.</li>
            </ul>
          </div>
        </section>

        <section>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-lilac/90">O que você encontra ao entrar</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Entregáveis concretos para evoluir com consistência.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3 md:gap-5">
            {[
              {
                title: 'Roteiro de 30 dias',
                desc: 'Plano de execução com foco em prioridades, checkpoints semanais e métricas claras.',
              },
              {
                title: 'Vault de templates',
                desc: 'Modelos prontos para copy, oferta, operação e acompanhamento de performance.',
              },
              {
                title: 'Canal de operadores',
                desc: 'Ambiente privado para revisão de decisões, gargalos e próximos passos práticos.',
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-black/35 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold sm:text-3xl">Base vs Premium</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-white/80">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Base</th>
                  <th className="px-4 py-3">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/80">
                {[
                  ['Weekly curriculum', 'Included', 'Included'],
                  ['Template vault', 'Core set', 'Full vault + updates'],
                  ['Live teardown sessions', '—', 'Weekly'],
                  ['Operator channel', '—', 'Private access'],
                ].map((row) => (
                  <tr key={row[0]} className="bg-black/30">
                    <td className="px-4 py-3 font-medium text-white">{row[0]}</td>
                    <td className="px-4 py-3">{row[1]}</td>
                    <td className="px-4 py-3 text-lilac">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-lilac/90">Sobre o criador</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Experiência prática, processo claro e compromisso com resultado.</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
            <div className="rounded-lg border border-white/10 bg-black/50 p-4 text-xs text-white/70 sm:text-sm">
              <p className="font-medium text-white">Mais de 8 anos construindo operações digitais enxutas.</p>
              <p className="mt-3 leading-relaxed">
                "A proposta do clube não é motivação vazia. É encurtar o caminho entre entender e executar com confiança."
              </p>
            </div>
            <div className="rounded-lg border border-lilac/25 bg-lilac/5 p-4 text-sm text-white/80">
              <p className="font-medium text-white">Sinais de confiança</p>
              <ul className="mt-3 space-y-2">
                <li>• Mentoria aplicada em mais de 30 nichos.</li>
                <li>• Processos usados por operadores iniciantes e avançados.</li>
                <li>• Atualizações contínuas com base em execução real.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold sm:text-3xl">Pricing</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2 lg:gap-5">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={`rounded-2xl border p-6 sm:p-7 ${
                  tier.featured
                    ? 'border-cta/60 bg-cta/10 shadow-[0_12px_36px_rgba(255,216,77,0.15)]'
                    : 'border-white/10 bg-black/35'
                }`}
              >
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <p className="mt-2 text-4xl font-semibold">{tier.price}</p>
                <p className="mt-1 text-xs text-white/60">per month</p>
                <p className="mt-5 text-sm leading-relaxed text-white/75">{tier.description}</p>
                <ul className="mt-5 space-y-2.5 text-sm text-white/80">
                  {tier.features.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <button
                  className={`mt-7 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                    tier.featured ? 'bg-cta text-black hover:brightness-95' : 'border border-white/20 text-white hover:bg-white/5'
                  }`}
                >
                  {tier.cta}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold sm:text-3xl">FAQ</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <article key={item.q} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 sm:p-6">
                <h3 className="text-sm font-semibold text-lilac sm:text-base">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-lilac/30 bg-lilac/10 p-7 text-center sm:p-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Join DuckDuck Club Premium</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 sm:text-base">
            If you value clear direction, practical systems, and momentum without noise, this is your place.
          </p>
          <button className="mt-6 rounded-full bg-cta px-7 py-3 text-sm font-semibold text-black transition hover:brightness-95">
            Unlock Premium Access
          </button>
        </section>
      </div>
    </main>
  );
}
