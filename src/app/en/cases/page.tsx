import type { Metadata } from 'next';
import CasesPage from '@/components/pages/CasesPage';

export const metadata: Metadata = {
  title: 'Cases',
  description:
    'Flagship case: cloud migration on Databricks with 100% of data migrated, governance policies and infrastructure as code.',
};

export default function Page() {
  return <CasesPage locale="en" />;
}
