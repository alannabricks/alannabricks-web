import type { Metadata } from 'next';
import ContactPage from '@/components/pages/ContactPage';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Cuéntanos el problema. Respondemos con un plan técnico concreto en menos de 48 horas hábiles.',
};

export default function Page() {
  return <ContactPage locale="es" />;
}
