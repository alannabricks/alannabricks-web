export type SiteEnv = 'dev' | 'stg' | 'main';
export type Locale = 'es' | 'en';

export const siteConfig = {
  name: 'AlannaBricks',
  shortName: 'AlannaBricks',
  defaultLocale: 'es' as Locale,
  locales: ['es', 'en'] as const satisfies readonly Locale[],
  contact: {
    email: 'contacto@alannabricks.cl',
    linkedin: 'https://www.linkedin.com/company/aabricks',
  },
  domains: {
    dev: 'dev.alannabricks.cl',
    stg: 'stg.alannabricks.cl',
    main: 'alannabricks.cl',
  } satisfies Record<SiteEnv, string>,
} as const;

export const currentEnv: SiteEnv =
  (process.env.NEXT_PUBLIC_SITE_ENV as SiteEnv) || 'dev';

export const currentUrl = `https://${siteConfig.domains[currentEnv]}`;
