import type { Metadata } from 'next';
import AboutPage from '@/components/pages/AboutPage';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Senior data, ML and AI consulting team. We work with international clients on critical problems on Databricks and the three clouds.',
};

export default function Page() {
  return <AboutPage locale="en" />;
}
