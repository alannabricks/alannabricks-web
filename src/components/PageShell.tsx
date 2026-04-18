import Header from './Header';
import Footer from './Footer';
import type { Locale } from '@/lib/site.config';
import type { RouteKey } from '@/lib/i18n';

type Props = {
  locale: Locale;
  current: RouteKey;
  children: React.ReactNode;
};

export default function PageShell({ locale, current, children }: Props) {
  return (
    <>
      <Header locale={locale} current={current} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
