import { Container } from '@/components/ui/Container';

export function SiteFooter() {
  return (
    <footer style={{ borderTop: '1px solid #252b38', padding: '2rem 0', color: '#a8b0c0' }}>
      <Container>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} DuckDuck Club. Built for fast onboarding.</p>
      </Container>
    </footer>
  );
}
