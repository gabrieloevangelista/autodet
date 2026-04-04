import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academy | Domine a Estética de Luxo',
  description: 'O treinamento definitivo para quem busca o topo do mercado de estética automotiva. Aprenda a metodologia AUTODET de alto ticket e rigor absoluto.',
  openGraph: {
    title: 'AUTODET Academy | Estética de Alto Ticket',
    description: 'Transforme seu estúdio em um atelier de luxo. Aprenda com quem atende os clientes mais exigentes de Alphaville.',
    images: ['https://images.unsplash.com/photo-1603584173870-7f37371ac901?auto=format&fit=crop&q=80&w=1200&h=630'],
  },
};

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
