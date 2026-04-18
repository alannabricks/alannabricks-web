import type { Metadata } from 'next';
import ContactPage from '@/components/pages/ContactPage';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell us the problem. We reply with a concrete technical plan within 48 business hours.',
};

export default function Page() {
  return <ContactPage locale="en" />;
}
