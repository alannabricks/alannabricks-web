import Link from 'next/link';
import Logo from './Logo';
import { siteConfig } from '@/lib/site.config';
import { getDict } from '@/lib/content';
import { path, type RouteKey } from '@/lib/i18n';
import type { Locale } from '@/lib/site.config';

type Props = { locale: Locale };

export default function Footer({ locale }: Props) {
  const t = getDict(locale);
  const year = new Date().getFullYear();
  const nav: { key: RouteKey; label: string }[] = [
    { key: 'services', label: t.nav.services },
    { key: 'technologies', label: t.nav.technologies },
    { key: 'cases', label: t.nav.cases },
    { key: 'about', label: t.nav.about },
    { key: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted">{t.footer.tagline}</p>
          <a
            href={siteConfig.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm text-fg/80 hover:text-brand"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.34V9h3.41v1.56h.05c.47-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
            </svg>
            LinkedIn
          </a>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-fg/80">
            {t.footer.navTitle}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {nav.map((n) => (
              <li key={n.key}>
                <Link href={path(n.key, locale)} className="hover:text-brand">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-fg/80">
            {t.footer.contactTitle}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-brand">
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand"
              >
                linkedin.com/company/aabricks
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <span>
            © {year} {siteConfig.name}. {t.footer.rights}
          </span>
          <span>
            {locale === 'es' ? 'Santiago, Chile · Clientes globales' : 'Santiago, Chile · Global clients'}
          </span>
        </div>
      </div>
    </footer>
  );
}
