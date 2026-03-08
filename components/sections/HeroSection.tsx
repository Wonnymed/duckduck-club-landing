import { ButtonLink } from '@/components/ui/ButtonLink';
import { Container } from '@/components/ui/Container';

export function HeroSection() {
  return (
    <section style={{ paddingTop: '4rem' }}>
      <Container>
        <div className="card" style={{ padding: '2.5rem', display: 'grid', gap: '1.25rem' }}>
          <p style={{ margin: 0, color: '#58a6ff', letterSpacing: '.04em', textTransform: 'uppercase', fontSize: '.85rem' }}>
            Membership landing
          </p>
          <h1 style={{ margin: 0, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Reusable layout with clear route organization.
          </h1>
          <p style={{ margin: 0, color: '#a8b0c0', maxWidth: '65ch' }}>
            This base structure separates UI primitives, layout wrappers, and sections so new pages can be added quickly.
          </p>
          <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
            <ButtonLink href="/access">Request Access</ButtonLink>
            <ButtonLink href="/" variant="secondary">Explore Home</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
