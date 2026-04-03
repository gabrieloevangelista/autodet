import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import AnimateProvider from '@/components/AnimateProvider';
import CustomCursor from '@/components/CustomCursor';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ["300", "400", "500"] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: 'AUTODET. | Estética Automotiva Premium a Domicílio em Alphaville, SP',
  description: 'Estética Automotiva de Alto Padrão. Atendimento a Domicílio. Exclusivo para Alphaville, SP e região.',
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
