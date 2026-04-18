import PageShell from '@/components/PageShell';
import { getDict } from '@/lib/content';
import { siteConfig } from '@/lib/site.config';
import type { Locale } from '@/lib/site.config';

export default function ContactPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  return (
    <PageShell locale={locale} current="contact">
      <section className="relative overflow-hidden bg-brand-radial border-b border-border">
        <div className="container-x py-20 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {t.contact.hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-5xl font-semibold leading-tight">
            {t.contact.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{t.contact.hero.subtitle}</p>
        </div>
      </section>

      <section className="container-x py-16 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <form
          action={`mailto:${siteConfig.contact.email}`}
          method="post"
          encType="text/plain"
          className="rounded-2xl border border-border bg-surface p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label={t.contact.form.name} name="name" required />
            <Field label={t.contact.form.company} name="company" required />
            <Field label={t.contact.form.email} name="email" type="email" required />
            <SelectField
              label={t.contact.form.projectType}
              name="projectType"
              options={t.contact.form.projectTypeOptions}
              required
            />
            <Field label={t.contact.form.timeline} name="timeline" />
          </div>
          <div className="mt-5">
            <Textarea label={t.contact.form.message} name="message" required />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center rounded-md bg-brand px-6 py-3 text-sm font-medium text-brand-fg hover:bg-brand-dark transition-colors"
          >
            {t.contact.form.submit} →
          </button>
          <p className="mt-4 text-xs text-muted">{t.contact.form.note}</p>
        </form>

        <aside className="self-start rounded-2xl border border-border bg-bg p-8">
          <h2 className="text-lg font-semibold">{t.contact.directEmail.title}</h2>
          <p className="mt-2 text-sm text-muted">{t.contact.directEmail.body}</p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="mt-5 block rounded-md bg-fg px-4 py-3 text-center text-sm font-mono text-white hover:bg-brand"
          >
            {siteConfig.contact.email}
          </a>
          <div className="mt-8 border-t border-border pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-fg/70">LinkedIn</p>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-fg hover:text-brand"
            >
              linkedin.com/company/aabricks
            </a>
          </div>
        </aside>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-fg/70">
        {label}
        {required && <span className="text-brand"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-border bg-bg px-3 py-2.5 text-sm focus:border-brand focus:outline-none"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-fg/70">
        {label}
        {required && <span className="text-brand"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full rounded-md border border-border bg-bg px-3 py-2.5 text-sm focus:border-brand focus:outline-none"
      >
        <option value="" disabled>
          —
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function Textarea({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-fg/70">
        {label}
        {required && <span className="text-brand"> *</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={6}
        className="mt-2 w-full rounded-md border border-border bg-bg px-3 py-2.5 text-sm focus:border-brand focus:outline-none"
      />
    </label>
  );
}
