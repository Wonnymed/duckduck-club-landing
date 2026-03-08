import Link from 'next/link';

import { navLinks } from '@/lib/navigation';
import { Container } from '@/components/ui/Container';

export function SiteHeader() {
  return (
    <header style={{ borderBottom: '1px solid #252b38', position: 'sticky', top: 0, background: 'rgba(15,17,21,.8)', backdropFilter: 'blur(6px)' }}>
      <Container className="header-inner">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
          <Link href="/" style={{ fontWeight: 700 }}>DuckDuck Club</Link>
          <nav style={{ display: 'flex', gap: '1rem', color: '#a8b0c0' }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
