import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg:       'rgb(var(--color-bg) / <alpha-value>)',
        fg:       'rgb(var(--color-fg) / <alpha-value>)',
        muted:    'rgb(var(--color-muted) / <alpha-value>)',
        border:   'rgb(var(--color-border) / <alpha-value>)',
        surface:  'rgb(var(--color-surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--color-surface-2) / <alpha-value>)',
        brand: {
          DEFAULT: 'rgb(var(--color-brand) / <alpha-value>)',
          fg:      'rgb(var(--color-brand-fg) / <alpha-value>)',
          dark:    'rgb(var(--color-brand-dark) / <alpha-value>)',
        },
        accent:   'rgb(var(--color-accent) / <alpha-value>)',
      },
      fontFamily: {
        sans:    ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
        mono:    ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgb(var(--color-border) / 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--color-border) / 0.4) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-24': '24px 24px',
      },
    },
  },
  plugins: [],
};

export default config;
