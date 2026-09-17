import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Curso Prático de Estética Automotiva | AUTODET SELECT',
  description: 'Treinamento presencial de detalhamento automotivo e polimento técnico em Ponte Nova, MG. Turma exclusiva de até 8 alunos com bancada individual.',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Curso Prático de Estética Automotiva | AUTODET SELECT',
    description: 'Aprenda na prática polimento técnico, vitrificação cerâmica 9H e higienização interna. Apenas 8 vagas por turma.',
    images: ['/images/og-academy.jpg'],
  },
};

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
