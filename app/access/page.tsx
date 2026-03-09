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
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <section className="rounded-3xl border border-white/10 bg-violetDeep/60 p-7 shadow-glow sm:p-10">
          <p className="inline-flex items-center rounded-full border border-lilac/30 bg-lilac/10 px-3 py-1 text-xs font-medium text-lilac">
            Premium Access • DuckDuck Club
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
            Built for serious builders. <span className="text-lilac">Designed for trust.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/75 sm:text-base">
            DuckDuck Club Premium gives you structured systems, practical execution frameworks, and direct guidance—without noise,
            hype, or distractions.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-cta px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95">
              Get Premium Access
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
              Explore Base Plan
            </button>
          </div>
        </section>

        <section className="mt-7 grid gap-3 rounded-2xl border border-white/10 bg-black/35 p-5 text-sm sm:grid-cols-3">
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

        <section className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">What DuckDuck Club is</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
              A premium learning-and-execution environment for people who prefer clear systems over empty motivation. Every module
              is practical, actionable, and intended to create measurable progress.
            </p>
          </div>
          <div className="rounded-2xl border border-lilac/25 bg-lilac/5 p-6 text-sm text-white/80">
            <ul className="space-y-3">
              <li>• Structured roadmap from fundamentals to advanced playbooks</li>
              <li>• Real examples and implementation templates</li>
              <li>• Focused community with high signal-to-noise</li>
              <li>• Premium support for deeper execution</li>
            </ul>
          </div>
        </section>

        <section className="mt-12 sm:mt-16">
          <h2 className="text-2xl font-semibold sm:text-3xl">Base vs Premium</h2>
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
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

        <section className="mt-12 rounded-2xl border border-white/10 bg-black/40 p-6 sm:mt-16">
          <h2 className="text-2xl font-semibold sm:text-3xl">Screenshot proof</h2>
          <div className="mt-5 rounded-xl border border-white/10 bg-gradient-to-br from-violetDeep to-black p-4">
            <div className="rounded-lg border border-white/10 bg-black/50 p-4 text-xs text-white/70 sm:text-sm">
              <p className="font-medium text-white">Weekly Progress Snapshot</p>
              <p className="mt-2">Completed modules: 8 / 10</p>
              <p>Execution streak: 27 days</p>
              <p>Peer review score: 96%</p>
            </div>
          </div>
        </section>

        <section className="mt-12 sm:mt-16">
          <h2 className="text-2xl font-semibold sm:text-3xl">Pricing</h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={`rounded-2xl border p-6 ${
                  tier.featured
                    ? 'border-cta/60 bg-cta/10 shadow-[0_12px_36px_rgba(255,216,77,0.15)]'
                    : 'border-white/10 bg-black/35'
                }`}
              >
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <p className="mt-2 text-4xl font-semibold">{tier.price}</p>
                <p className="mt-1 text-xs text-white/60">per month</p>
                <p className="mt-4 text-sm text-white/75">{tier.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {tier.features.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <button
                  className={`mt-6 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                    tier.featured ? 'bg-cta text-black hover:brightness-95' : 'border border-white/20 text-white hover:bg-white/5'
                  }`}
                >
                  {tier.cta}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 sm:mt-16">
          <h2 className="text-2xl font-semibold sm:text-3xl">FAQ</h2>
          <div className="mt-5 space-y-3">
            {faqItems.map((item) => (
              <article key={item.q} className="rounded-xl border border-white/10 bg-black/35 p-5">
                <h3 className="text-sm font-semibold text-lilac sm:text-base">{item.q}</h3>
                <p className="mt-2 text-sm text-white/75">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-lilac/30 bg-lilac/10 p-7 text-center sm:mt-16 sm:p-10">
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
