import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { getDict } from '@/lib/content';
import { path } from '@/lib/i18n';
import type { Locale } from '@/lib/site.config';

export default function CasesPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const f = t.cases.flagship;
  return (
    <PageShell locale={locale} current="cases">
      <section className="relative overflow-hidden bg-brand-radial border-b border-border">
        <div className="container-x py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {t.cases.hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl font-semibold leading-tight">
            {t.cases.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{t.cases.hero.subtitle}</p>
        </div>
      </section>

      <section className="container-x py-16">
        <article className="rounded-2xl border border-border bg-surface p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-fg">
              {f.badge}
            </span>
            <span className="text-xs text-muted">{f.industry}</span>
          </div>
          <h2 className="mt-5 text-2xl md:text-3xl font-semibold">{f.title}</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-fg/70">
                {f.problemLabel}
              </p>
              <p className="mt-3 text-fg/90">{f.problem}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-fg/70">
                {f.solutionLabel}
              </p>
              <p className="mt-3 text-fg/90">{f.solution}</p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-fg/70">
              {f.impactLabel}
            </p>
            <dl className="mt-4 grid gap-4 md:grid-cols-3">
              {f.impact.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-border bg-bg p-5"
                >
                  <dd className="text-3xl font-semibold text-brand">{m.value}</dd>
                  <dt className="mt-2 text-sm text-muted">{m.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </article>

        <p className="mt-10 max-w-2xl text-sm text-muted">{t.cases.note}</p>

        <div className="mt-10">
          <Link
            href={path('contact', locale)}
            className="inline-flex items-center rounded-md bg-brand px-5 py-3 text-sm font-medium text-brand-fg hover:bg-brand-dark transition-colors"
          >
            {locale === 'es' ? '¿Tienes un caso similar? Conversemos' : 'Got a similar case? Let\'s talk'} →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
