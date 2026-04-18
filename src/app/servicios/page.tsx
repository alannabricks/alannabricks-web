import type { Metadata } from 'next';
import ServicesPage from '@/components/pages/ServicesPage';

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Data Platform sobre Databricks, Data Engineering, ML/MLOps, Generative AI/LLMs, Cloud y DevOps. Cubrimos la cadena completa.',
};

export default function Page() {
  return <ServicesPage locale="es" />;
}
