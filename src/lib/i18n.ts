import type { Locale } from './site.config';

export type RouteKey =
  | 'home'
  | 'services'
  | 'technologies'
  | 'cases'
  | 'about'
  | 'contact';

export const routes: Record<RouteKey, Record<Locale, string>> = {
  home:         { es: '/',               en: '/en/' },
  services:     { es: '/servicios/',     en: '/en/services/' },
  technologies: { es: '/tecnologias/',   en: '/en/technologies/' },
  cases:        { es: '/casos/',         en: '/en/cases/' },
  about:        { es: '/nosotros/',      en: '/en/about/' },
  contact:      { es: '/contacto/',      en: '/en/contact/' },
};

export function path(key: RouteKey, locale: Locale): string {
  return routes[key][locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

export function switchLocalePath(currentKey: RouteKey, locale: Locale): string {
  return routes[currentKey][otherLocale(locale)];
}
