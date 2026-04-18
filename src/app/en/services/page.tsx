import type { Metadata } from 'next';
import ServicesPage from '@/components/pages/ServicesPage';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Data Platform on Databricks, Data Engineering, ML/MLOps, Generative AI/LLMs, Cloud and DevOps. We cover the full chain.',
};

export default function Page() {
  return <ServicesPage locale="en" />;
}
