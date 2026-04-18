import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { getDict } from '@/lib/content';
import { path } from '@/lib/i18n';
import type { Locale } from '@/lib/site.config';

export default function TechnologiesPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  return (
    <PageShell locale={locale} current="technologies">
      <section className="relative overflow-hidden bg-brand-radial border-b border-border">
        <div className="container-x py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {t.technologies.hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl font-semibold leading-tight">
            {t.technologies.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{t.technologies.hero.subtitle}</p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {t.technologies.groups.map((g, idx) => (
            <article
              key={g.title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-lg font-semibold">{g.title}</h2>
                <span className="text-xs font-mono text-muted">0{idx + 1}</span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-bg px-3 py-1.5 text-xs font-medium text-fg/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-x py-14 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-fg/80">
            {locale === 'es'
              ? '¿Quieres ver cómo combinamos esto en un proyecto concreto? Cuéntanos el caso.'
              : 'Want to see how we combine this in a concrete project? Tell us the case.'}
          </p>
          <Link
            href={path('contact', locale)}
            className="inline-flex items-center rounded-md bg-brand px-5 py-3 text-sm font-medium text-brand-fg hover:bg-brand-dark transition-colors"
          >
            {locale === 'es' ? 'Conversemos' : "Let's talk"} →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
