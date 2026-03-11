const faqItems = [
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim. O plano mensal pode ser cancelado em 1 clique no painel. Seu acesso segue ativo até o fim do ciclo atual.',
  },
  {
    q: 'É para iniciantes?',
    a: 'Sim. O Base organiza fundamentos e execução. O Premium adiciona profundidade, velocidade e feedback direto.',
  },
  {
    q: 'O que muda na prática no Premium?',
    a: 'Você recebe playbooks avançados, sessões de teardown ao vivo e canal privado para revisão das suas decisões.',
  },
  {
    q: 'O que eu recebo depois de pagar?',
    a: 'Acesso imediato à área de membros, trilha de 30 dias, vault de templates e calendário de encontros conforme o plano escolhido.',
  },
  {
    q: 'Tem acesso para equipe?',
    a: 'Sim. Times com 5+ pessoas podem solicitar onboarding dedicado e cobrança consolidada.',
  },
];

const tiers = [
  {
    name: 'Base',
    price: '$19',
    description: 'Para quem quer clareza e consistência com o sistema essencial.',
    features: ['Trilha semanal objetiva', 'Templates essenciais', 'Comunidade de membros', 'Resumo mensal acionável'],
    cta: 'Ver meu acesso',
  },
  {
    name: 'Premium',
    price: '$79',
    description: 'Para quem quer acelerar com direção estratégica e suporte próximo.',
    features: ['Tudo do Base', 'Canal privado de operadores', 'Teardowns ao vivo semanais', 'Vault completo com atualizações'],
    cta: 'Ver meu acesso',
    featured: true,
  },
];

const ctaLabel = 'Ver meu acesso';

export default function AccessPage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top,_#23133f_0%,_#0a0714_45%,_#05030a_100%)] text-white">
      <div className="mx-auto max-w-6xl space-y-16 px-5 py-14 sm:space-y-20 sm:px-8 sm:py-20 lg:space-y-24 lg:py-24">
        <section className="rounded-3xl border border-white/10 bg-violetDeep/60 p-7 shadow-glow sm:p-10 lg:p-12">
          <p className="inline-flex items-center rounded-full border border-lilac/30 bg-lilac/10 px-3 py-1 text-xs font-medium text-lilac">
            Premium Access • DuckDuck Club
          </p>
          <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Clareza para executar. <span className="text-lilac">Sistema para crescer.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            DuckDuck Club é uma comunidade de execução para quem constrói negócios digitais e quer menos ruído, mais decisão prática e
            evolução semanal.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-cta px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95">{ctaLabel}</button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
              Ver plano Base
            </button>
          </div>
        </section>

        <section className="grid gap-3 rounded-2xl border border-white/10 bg-black/35 p-5 text-sm sm:grid-cols-3 sm:gap-4 sm:p-6">
          <div>
            <p className="text-2xl font-semibold text-cta">1,200+</p>
            <p className="mt-1 text-white/70">membros ativos em execução semanal</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-cta">42%</p>
            <p className="mt-1 text-white/70">ganho médio de velocidade em 30 dias</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-cta">4.9/5</p>
            <p className="mt-1 text-white/70">satisfação média dos membros</p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-lilac/90">Para quem é</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Para operadores, criadores e freelancers que querem ritmo real.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
              Se você já cansou de conteúdo solto e quer um caminho claro para decidir, priorizar e implementar, o clube foi feito para
              você.
            </p>
          </div>
          <div className="rounded-2xl border border-lilac/25 bg-lilac/5 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-lilac/90">O que trava hoje</p>
            <ul className="mt-4 space-y-4 text-sm text-white/80 sm:text-base">
              <li className="border-b border-white/10 pb-3">Informação demais e prioridade de menos.</li>
              <li className="border-b border-white/10 pb-3">Feedback genérico, sem contexto da sua operação.</li>
              <li className="border-b border-white/10 pb-3">Sem sistema para transformar aprendizado em ação.</li>
              <li>Tempo perdido entre ferramentas, opiniões e promessas vazias.</li>
            </ul>
          </div>
        </section>

        <section>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-lilac/90">O que existe dentro</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Tudo que você precisa para executar com consistência.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3 md:gap-5">
            {[
              {
                title: 'Trilha de 30 dias',
                desc: 'Plano guiado com prioridades semanais, checkpoints e métricas para não perder foco.',
              },
              {
                title: 'Vault de templates',
                desc: 'Modelos prontos para oferta, copy, operação e acompanhamento de resultado.',
              },
              {
                title: 'Canal de operadores',
                desc: 'Espaço privado para destravar gargalos e ajustar o próximo passo com rapidez.',
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-black/35 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.desc}</p>
              </article>
            ))}
          </div>
          <button className="mt-6 rounded-full bg-cta px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95">{ctaLabel}</button>
        </section>

        <section>
          <h2 className="text-2xl font-semibold sm:text-3xl">Base vs Premium</h2>
          <p className="mt-3 max-w-3xl text-sm text-white/75 sm:text-base">
            O Base entrega o sistema essencial. O Premium é para quem quer reduzir tentativa e erro com apoio próximo, profundidade e
            decisões mais rápidas.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-white/80">
                <tr>
                  <th className="px-4 py-3">Recurso</th>
                  <th className="px-4 py-3">Base</th>
                  <th className="px-4 py-3">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/80">
                {[
                  ['Trilha semanal', 'Incluído', 'Incluído'],
                  ['Vault de templates', 'Essencial', 'Completo + updates'],
                  ['Sessões de teardown', '—', 'Semanal ao vivo'],
                  ['Canal de operadores', '—', 'Privado com feedback'],
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
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-lilac/90">Após o pagamento</p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Você entra e já começa com direção.</h2>
          <div className="mt-6 grid gap-4 text-sm text-white/80 sm:grid-cols-3 sm:text-base">
            <article className="rounded-xl border border-white/10 bg-black/45 p-4">
              <p className="font-medium text-white">1. Acesso imediato</p>
              <p className="mt-2 text-white/75">Recebe login e entra na área de membros no mesmo momento.</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-black/45 p-4">
              <p className="font-medium text-white">2. Plano acionável</p>
              <p className="mt-2 text-white/75">Começa pela trilha de 30 dias com próximos passos claros.</p>
            </article>
            <article className="rounded-xl border border-white/10 bg-black/45 p-4">
              <p className="font-medium text-white">3. Rotina de execução</p>
              <p className="mt-2 text-white/75">Ativa o calendário, participa das sessões e ajusta sua operação toda semana.</p>
            </article>
          </div>
          <button className="mt-6 rounded-full bg-cta px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95">{ctaLabel}</button>
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
          <h2 className="text-2xl font-semibold sm:text-3xl">Pronto para entrar no DuckDuck Club?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 sm:text-base">
            Se você quer um ambiente premium, prático e com direção real, seu próximo passo está aqui.
          </p>
          <button className="mt-6 rounded-full bg-cta px-7 py-3 text-sm font-semibold text-black transition hover:brightness-95">{ctaLabel}</button>
        </section>
      </div>
    </main>
  );
}
