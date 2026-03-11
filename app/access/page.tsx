const faqItems = [
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim. O plano mensal pode ser cancelado em um clique. Seu acesso fica ativo até o fim do ciclo já pago.',
  },
  {
    q: 'Serve para iniciante?',
    a: 'Serve para quem quer executar com método. No Base você ganha clareza e fundamento; no Premium, velocidade, profundidade e revisão direta.',
  },
  {
    q: 'O que muda no Premium, na prática?',
    a: 'Você recebe playbooks avançados, sessões ao vivo de teardown e canal privado para decisões de operação com feedback aplicado.',
  },
  {
    q: 'O que eu recebo após pagar?',
    a: 'Acesso imediato ao painel, trilha de 30 dias, vault de templates e comunidade. No Premium, libera também canal privado e sessões semanais.',
  },
];

const tiers = [
  {
    name: 'Base',
    price: '$19',
    description: 'Para quem quer o método essencial e consistência semanal.',
    features: ['Trilha semanal guiada', 'Templates essenciais', 'Comunidade de membros', 'Resumo mensal de implementação'],
    cta: 'Começar no Base',
  },
  {
    name: 'Premium',
    price: '$79',
    description: 'Para operadores que querem avançar mais rápido, com direção direta.',
    features: ['Tudo do Base', 'Canal privado de operadores', 'Teardowns ao vivo semanais', 'Vault Premium de implementação'],
    cta: 'Ver meu acesso',
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
            Clareza para executar. <span className="text-lilac">Estrutura para crescer.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            O DuckDuck Club é um clube de execução para criadores e operadores digitais que querem transformar estudo em resultado real,
            sem ruído e sem promessas vazias.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-cta px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95">
              Ver meu acesso
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
              Ver plano Base
            </button>
          </div>
        </section>

        <section className="grid gap-3 rounded-2xl border border-white/10 bg-black/35 p-5 text-sm sm:grid-cols-3 sm:gap-4 sm:p-6">
          <div>
            <p className="text-2xl font-semibold text-cta">1,200+</p>
            <p className="mt-1 text-white/70">membros ativos em rotina semanal</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-cta">42%</p>
            <p className="mt-1 text-white/70">mais velocidade de execução em 30 dias</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-cta">4.9/5</p>
            <p className="mt-1 text-white/70">nota média de satisfação dos membros</p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-lilac/90">O problema</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Muito conteúdo. Pouca clareza de execução.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
              O cenário comum é: aulas soltas, comunidade barulhenta e pouca prioridade prática. Você consome mais, implementa menos e
              segue travado.
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
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Tudo que existe dentro foi feito para sair do plano e ir para execução.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3 md:gap-5">
            {[
              {
                title: 'Roteiro de 30 dias',
                desc: 'Plano com prioridades semanais, checkpoints e métricas para você saber exatamente o próximo passo.',
              },
              {
                title: 'Vault de templates',
                desc: 'Modelos prontos de copy, oferta e operação para reduzir tempo e aumentar qualidade da entrega.',
              },
              {
                title: 'Canal de operadores',
                desc: 'Espaço privado para revisar decisões, resolver gargalos e manter ritmo de implementação.',
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
          <h2 className="text-2xl font-semibold sm:text-3xl">Por que o Premium entrega mais valor</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-white/80">
                <tr>
                  <th className="px-4 py-3">Entrega</th>
                  <th className="px-4 py-3">Base</th>
                  <th className="px-4 py-3">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/80">
                {[
                  ['Trilha semanal', 'Incluído', 'Incluído'],
                  ['Vault de templates', 'Essencial', 'Completo + atualizações'],
                  ['Teardowns ao vivo', '—', 'Semanal'],
                  ['Canal de operadores', '—', 'Acesso privado'],
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

        <section className="rounded-2xl border border-white/10 bg-black/35 p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-lilac/90">Depois do pagamento</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Você entra já com próximo passo definido.</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/80 sm:text-base">
            <li>• Liberação imediata do painel de membros.</li>
            <li>• Acesso à trilha inicial de 30 dias para começar hoje.</li>
            <li>• Templates prontos para aplicar no seu contexto.</li>
            <li>• Comunidade e atualizações contínuas conforme execução real.</li>
          </ul>
          <button className="mt-7 rounded-full bg-cta px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95">
            Ver meu acesso
          </button>
        </section>

        <section>
          <h2 className="text-2xl font-semibold sm:text-3xl">Escolha seu nível de acesso</h2>
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
                <p className="mt-1 text-xs text-white/60">por mês</p>
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
          <h2 className="text-2xl font-semibold sm:text-3xl">Pronto para entrar no DuckDuck Club Premium?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 sm:text-base">
            Se você quer direção clara, sistema aplicável e evolução semanal, o próximo passo é simples.
          </p>
          <button className="mt-6 rounded-full bg-cta px-7 py-3 text-sm font-semibold text-black transition hover:brightness-95">
            Ver meu acesso
          </button>
        </section>
      </div>
    </main>
  );
}
