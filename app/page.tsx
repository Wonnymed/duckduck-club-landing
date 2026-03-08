import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-night px-6">
      <Link
        href="/access"
        className="rounded-full bg-cta px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
      >
        Open DuckDuck Club Access Page
      </Link>
    </main>
  );
}
