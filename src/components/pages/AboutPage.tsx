import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { getDict } from '@/lib/content';
import { path } from '@/lib/i18n';
import type { Locale } from '@/lib/site.config';

export default function AboutPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  return (
    <PageShell locale={locale} current="about">
      <section className="relative overflow-hidden bg-brand-radial border-b border-border">
        <div className="container-x py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {t.about.hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl font-semibold leading-tight">
            {t.about.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{t.about.hero.subtitle}</p>
        </div>
      </section>

      <section className="container-x py-16 grid gap-10 md:grid-cols-[1fr_2fr]">
        <h2 className="text-2xl md:text-3xl font-semibold">{t.about.mission.title}</h2>
        <p className="text-lg text-fg/90">{t.about.mission.body}</p>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-x py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold">{t.about.team.title}</h2>
            <p className="mt-4 text-fg/90">{t.about.team.body}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {t.about.team.roles.map((r, idx) => (
              <article key={r.title} className="rounded-xl border border-border bg-bg p-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand/10 text-brand font-mono text-xs">
                  0{idx + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted">{r.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted italic">{t.about.team.note}</p>
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">{t.about.values.title}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.about.values.items.map((v, idx) => (
            <div key={v.title} className="rounded-xl border border-border bg-bg p-6">
              <span className="font-mono text-xs text-brand">0{idx + 1}</span>
              <h3 className="mt-3 text-base font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-fg text-white">
        <div className="container-x py-16 flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-lg">
            {locale === 'es'
              ? '¿Quieres trabajar con nosotros o contratarnos para un proyecto crítico?'
              : 'Want to work with us or hire us for a critical project?'}
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
