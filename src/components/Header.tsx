import Link from 'next/link';
import Logo from './Logo';
import { getDict } from '@/lib/content';
import { path, switchLocalePath, type RouteKey } from '@/lib/i18n';
import type { Locale } from '@/lib/site.config';

type Props = {
  locale: Locale;
  current: RouteKey;
};

export default function Header({ locale, current }: Props) {
  const t = getDict(locale);
  const items: { key: RouteKey; label: string }[] = [
    { key: 'services',     label: t.nav.services },
    { key: 'technologies', label: t.nav.technologies },
    { key: 'cases',        label: t.nav.cases },
    { key: 'about',        label: t.nav.about },
    { key: 'contact',      label: t.nav.contact },
  ];
  const altPath = switchLocalePath(current, locale);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-fg focus:text-white focus:px-3 focus:py-2 focus:rounded-md"
      >
        {t.header.skipToContent}
      </a>
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link href={path('home', locale)} aria-label={`${t.nav.services} — AlannaBricks`}>
          <Logo />
        </Link>
        <nav aria-label="primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm">
            {items.map((it) => (
              <li key={it.key}>
                <Link
                  href={path(it.key, locale)}
                  className={`transition-colors hover:text-brand ${
                    current === it.key ? 'text-brand font-medium' : 'text-fg/80'
                  }`}
                  aria-current={current === it.key ? 'page' : undefined}
                >
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={altPath}
            className="text-xs font-medium text-fg/70 hover:text-brand uppercase tracking-wider"
            aria-label={t.header.switchLanguage}
          >
            {t.header.switchLanguage}
          </Link>
          <Link
            href={path('contact', locale)}
            className="hidden sm:inline-flex rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-fg hover:bg-brand-dark transition-colors"
          >
            {t.nav.cta}
          </Link>
        </div>
      </div>
      <nav aria-label="primary-mobile" className="md:hidden border-t border-border">
        <ul className="container-x flex items-center gap-4 py-2 text-xs overflow-x-auto">
          {items.map((it) => (
            <li key={it.key} className="shrink-0">
              <Link
                href={path(it.key, locale)}
                className={`py-1 ${
                  current === it.key ? 'text-brand font-medium' : 'text-fg/70'
                }`}
                aria-current={current === it.key ? 'page' : undefined}
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
