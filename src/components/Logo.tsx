import { siteConfig } from '@/lib/site.config';

type Props = {
  variant?: 'on-light' | 'on-brand';
  withWordmark?: boolean;
  className?: string;
};

export default function Logo({
  variant = 'on-light',
  withWordmark = true,
  className = '',
}: Props) {
  const onBrand = variant === 'on-brand';
  const markColor = onBrand ? 'text-white' : 'text-brand';
  const textColor = onBrand ? 'text-white' : 'text-fg';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className={`h-7 w-7 ${markColor}`}
      >
        <path
          d="M32 6 L58 19 L58 45 L32 58 L6 45 L6 19 Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M6 19 L32 32 L58 19"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path d="M32 32 L32 58" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      </svg>
      {withWordmark && (
        <span className={`font-display text-lg font-semibold tracking-tight ${textColor}`}>
          {siteConfig.name}
        </span>
      )}
    </span>
  );
}
