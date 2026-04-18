import type { Metadata } from 'next';
import TechnologiesPage from '@/components/pages/TechnologiesPage';

export const metadata: Metadata = {
  title: 'Tecnologías',
  description:
    'El stack que usamos en producción: Databricks, AWS, Azure, GCP, LLMs de frontera, vector DBs, MLOps y LLMOps.',
};

export default function Page() {
  return <TechnologiesPage locale="es" />;
}
