import type { Metadata } from 'next';
import HomePage from '@/components/home/HomePage';

export const metadata: Metadata = {
  title: 'AlannaBricks — Data & AI consulting on Databricks',
  description:
    'Data & AI consulting on Databricks. We solve the most critical data, ML and generative AI problems for global teams.',
};

export default function Page() {
  return <HomePage locale="en" />;
}
