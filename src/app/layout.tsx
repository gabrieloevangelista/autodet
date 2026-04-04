import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import AnimateProvider from '@/components/AnimateProvider';
import CustomCursor from '@/components/CustomCursor';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ["300", "400", "500"] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: {
    default: 'AUTODET | Estética Automotiva de Luxo em Alphaville',
    template: '%s | AUTODET'
  },
  description: 'Rigor absoluto e curadoria técnica na custódia do seu patrimônio. Estética automotiva de alto padrão com atendimento exclusivo a domicílio em Alphaville, SP.',
  keywords: ['estética automotiva', 'alphaville', 'detalhamento automotivo', 'luxury detailing', 'vitrificação', 'autodet', 'higienização interna'],
  authors: [{ name: 'AUTODET Academy' }],
  creator: 'AUTODET',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://autodet.com.br',
    title: 'AUTODET | Estética Automotiva de Luxo',
    description: 'Rigor absoluto na custódia da perfeição técnica do seu veículo. Experiência de atelier a domicílio.',
    siteName: 'AUTODET',
    images: [
      {
        url: '/images/snow-foam-luxury.jpg',
        width: 1200,
        height: 630,
        alt: 'AUTODET Luxury Detailing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AUTODET | Estética Automotiva de Luxo',
    description: 'Rigor absoluto na custódia da perfeição técnica. Atelier a domicílio.',
    images: ['/images/snow-foam-luxury.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <head>
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" defer></script>
      </head>
      <body className="bg-[#050505] text-[#FFFFFF] font-space-grotesk m-0 overflow-x-hidden selection:bg-[#FACC15] selection:text-white text-sm sm:text-base leading-relaxed">
        <CustomCursor />
        <AnimateProvider>
          {children}
        </AnimateProvider>
      </body>
    </html>
  );
}
