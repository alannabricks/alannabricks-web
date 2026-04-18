import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { getDict } from '@/lib/content';
import { path } from '@/lib/i18n';
import type { Locale } from '@/lib/site.config';

export default function ServicesPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  return (
    <PageShell locale={locale} current="services">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-radial border-b border-border">
        <div className="container-x py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {t.services.hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl font-semibold leading-tight">
            {t.services.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{t.services.hero.subtitle}</p>
          <nav className="mt-10" aria-label={locale === 'es' ? 'Índice de servicios' : 'Services index'}>
            <ul className="flex flex-wrap gap-2">
              {t.services.list.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-4 py-2 text-sm text-fg/80 hover:border-brand hover:text-brand transition-colors"
                  >
                    <span className="text-xs font-semibold text-brand">0{i + 1}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Sections */}
      {t.services.list.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-24 border-b border-border ${i % 2 === 0 ? 'bg-bg' : 'bg-surface'}`}
        >
          <div className="container-x py-20 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                0{i + 1}
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold">{s.title}</h2>
              <p className="mt-4 text-lg text-muted">{s.lead}</p>
              <div className="mt-8 rounded-lg border border-border bg-bg p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-fg/70">
                  {t.services.labels.forWhom}
                </p>
                <p className="mt-2 text-sm text-fg/90">{s.forWhom}</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-fg/70">
                {t.services.labels.weDeliver}
              </p>
              <ul className="mt-4 space-y-3">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm text-fg/90">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-brand"
                      aria-hidden="true"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-brand text-brand-fg">
        <div className="container-x py-16 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl md:text-4xl font-semibold">
            {t.services.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-fg/85">{t.services.cta.body}</p>
          <Link
            href={path('contact', locale)}
            className="mt-8 inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-medium text-brand hover:bg-white/90"
          >
            {t.services.cta.button} →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
