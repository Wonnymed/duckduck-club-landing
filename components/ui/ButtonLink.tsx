import Link from 'next/link';
import { PropsWithChildren } from 'react';

type ButtonLinkProps = PropsWithChildren<{
  href: string;
  variant?: 'primary' | 'secondary';
}>;

export function ButtonLink({ href, variant = 'primary', children }: ButtonLinkProps) {
  return (
    <Link href={href} className={`button ${variant}`}>
      {children}
    </Link>
  );
}
