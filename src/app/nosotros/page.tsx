import type { Metadata } from 'next';
import AboutPage from '@/components/pages/AboutPage';

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Equipo senior de consultoría en datos, ML e IA. Trabajamos con clientes internacionales en problemas críticos sobre Databricks y las tres clouds.',
};

export default function Page() {
  return <AboutPage locale="es" />;
}
