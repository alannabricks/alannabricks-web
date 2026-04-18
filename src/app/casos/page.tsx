import type { Metadata } from 'next';
import CasesPage from '@/components/pages/CasesPage';

export const metadata: Metadata = {
  title: 'Casos',
  description:
    'Caso flagship: migración a la nube sobre Databricks con 100% de datos migrados, policies de gobernanza e infraestructura como código.',
};

export default function Page() {
  return <CasesPage locale="es" />;
}
