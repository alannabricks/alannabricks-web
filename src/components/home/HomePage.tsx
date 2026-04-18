import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { getDict } from '@/lib/content';
import { path } from '@/lib/i18n';
import type { Locale } from '@/lib/site.config';
import { siteConfig } from '@/lib/site.config';

export default function HomePage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  return (
    <PageShell locale={locale} current="home">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-radial">
        <div className="absolute inset-0 brick-grid opacity-40" aria-hidden="true" />
        <div className="container-x relative py-24 md:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {t.home.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl md:text-6xl font-semibold leading-[1.05]">
            {t.home.hero.titleLine1}
            <br />
            <span className="text-brand">{t.home.hero.titleLine2}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{t.home.hero.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={path('contact', locale)}
              className="inline-flex items-center rounded-md bg-brand px-6 py-3 text-sm font-medium text-brand-fg hover:bg-brand-dark transition-colors"
            >
              {t.home.hero.ctaPrimary}
              <span aria-hidden="true" className="ml-2">→</span>
            </Link>
            <Link
              href={path('services', locale)}
              className="inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-medium text-fg hover:border-brand hover:text-brand transition-colors"
            >
              {t.home.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Clouds strap */}
      <section className="border-y border-border bg-surface">
        <div className="container-x py-10 grid items-center gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold text-fg">{t.home.cloudsStrap.title}</p>
            <p className="mt-1 text-sm text-muted max-w-2xl">{t.home.cloudsStrap.body}</p>
          </div>
          <ul className="flex flex-wrap items-center gap-5 text-xs font-medium text-fg/70">
            <li className="rounded-md border border-border bg-bg px-3 py-1.5">AWS</li>
            <li className="rounded-md border border-border bg-bg px-3 py-1.5">Azure</li>
            <li className="rounded-md border border-border bg-bg px-3 py-1.5">Google Cloud</li>
            <li className="rounded-md border border-brand/40 bg-brand/5 px-3 py-1.5 text-brand">Databricks</li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="container-x py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">{t.home.servicesStrap.title}</h2>
          <p className="mt-3 text-muted">{t.home.servicesStrap.body}</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.services.list.map((s) => (
            <Link
              key={s.id}
              href={`${path('services', locale)}#${s.id}`}
              className="group rounded-xl border border-border bg-bg p-6 transition-all hover:border-brand hover:shadow-sm"
            >
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-brand">
                0{t.services.list.indexOf(s) + 1}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.lead}</p>
              <span className="mt-5 inline-flex items-center text-sm text-fg/70 group-hover:text-brand">
                {locale === 'es' ? 'Ver detalle' : 'See detail'} <span className="ml-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured case */}
      <section className="bg-fg text-white">
        <div className="container-x py-20 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              {t.home.featuredCase.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
              {t.home.featuredCase.title}
            </h2>
            <p className="mt-5 text-white/70 max-w-2xl">{t.home.featuredCase.body}</p>
            <Link
              href={path('cases', locale)}
              className="mt-8 inline-flex items-center text-sm font-medium text-brand hover:text-white"
            >
              {t.home.featuredCase.cta} <span className="ml-1">→</span>
            </Link>
          </div>
          <dl className="grid grid-cols-1 gap-4 self-start">
            {t.home.featuredCase.metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <dt className="text-xs uppercase tracking-wider text-white/60">{m.label}</dt>
                <dd className="mt-2 text-3xl font-semibold text-brand">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Why us */}
      <section className="container-x py-20">
        <h2 className="text-3xl md:text-4xl font-semibold">{t.home.whyUs.title}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.home.whyUs.items.map((it, idx) => (
            <div key={idx} className="rounded-xl border border-border bg-surface p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand/10 text-brand font-semibold text-sm">
                {idx + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted">{it.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech teaser */}
      <section className="border-t border-border bg-surface">
        <div className="container-x py-16 grid gap-8 md:grid-cols-[1fr_auto] items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">{t.home.techTeaser.title}</h2>
            <p className="mt-3 text-muted max-w-2xl">{t.home.techTeaser.body}</p>
          </div>
          <Link
            href={path('technologies', locale)}
            className="inline-flex items-center rounded-md border border-border bg-bg px-5 py-3 text-sm font-medium hover:border-brand hover:text-brand transition-colors"
          >
            {t.home.techTeaser.cta} →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand text-brand-fg">
        <div className="container-x py-20 text-center">
          <h2 className="mx-auto max-w-3xl text-3xl md:text-4xl font-semibold">
            {t.home.finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-fg/85">{t.home.finalCta.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={path('contact', locale)}
              className="rounded-md bg-white px-6 py-3 text-sm font-medium text-brand hover:bg-white/90"
            >
              {t.home.finalCta.primary}
            </Link>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="rounded-md border border-white/40 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              {t.home.finalCta.secondary}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
