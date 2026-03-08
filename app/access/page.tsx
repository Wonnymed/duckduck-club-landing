import { ButtonLink } from '@/components/ui/ButtonLink';
import { Container } from '@/components/ui/Container';

export default function AccessPage() {
  return (
    <section style={{ paddingTop: '4rem' }}>
      <Container>
        <div className="card" style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
          <h1 style={{ margin: 0 }}>Access Route</h1>
          <p style={{ margin: 0, color: '#a8b0c0' }}>
            This `/access` route is now scaffolded and ready to host onboarding logic, eligibility checks, or a waitlist form.
          </p>
          <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
            <ButtonLink href="/" variant="secondary">Back Home</ButtonLink>
            <ButtonLink href="mailto:hello@duckduck.club">Contact Team</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
