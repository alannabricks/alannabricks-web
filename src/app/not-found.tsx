import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="max-w-md text-center px-6">
        <p className="font-mono text-sm text-brand">404</p>
        <h1 className="mt-4 text-3xl font-semibold">Página no encontrada / Page not found</h1>
        <p className="mt-3 text-muted">
          La página que buscas no existe. / The page you are looking for does not exist.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/"
            className="rounded-md bg-brand px-5 py-2.5 text-sm font-medium text-brand-fg hover:bg-brand-dark"
          >
            Inicio
          </Link>
          <Link
            href="/en/"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:border-brand"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
