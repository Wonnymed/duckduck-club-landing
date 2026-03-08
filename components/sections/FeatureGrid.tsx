import { Container } from '@/components/ui/Container';

const features = [
  {
    title: 'Composable UI',
    description: 'Common actions use the same button and container components.',
  },
  {
    title: 'Route-first architecture',
    description: 'Each route keeps just page-level content while shared sections stay reusable.',
  },
  {
    title: 'Fast extension',
    description: 'Add more routes under app/ and reuse existing pieces without copy/paste.',
  },
];

export function FeatureGrid() {
  return (
    <section>
      <Container>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {features.map((feature) => (
            <article key={feature.title} className="card" style={{ padding: '1.25rem' }}>
              <h3 style={{ marginTop: 0 }}>{feature.title}</h3>
              <p style={{ marginBottom: 0, color: '#a8b0c0' }}>{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
