import type { Metadata } from 'next';
import TechnologiesPage from '@/components/pages/TechnologiesPage';

export const metadata: Metadata = {
  title: 'Technologies',
  description:
    'The stack we use in production: Databricks, AWS, Azure, GCP, frontier LLMs, vector DBs, MLOps and LLMOps.',
};

export default function Page() {
  return <TechnologiesPage locale="en" />;
}
