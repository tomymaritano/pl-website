import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Private Limo - Servicios de Transporte Premium",
  description: "Servicios de transporte ejecutivo y limusinas de lujo en Buenos Aires. Traslados corporativos, transfers al aeropuerto, servicios VIP y flota de vehículos premium.",
  keywords: [
    'transporte ejecutivo',
    'limusina',
    'private limo',
    'traslados corporativos',
    'transfer aeropuerto',
    'Buenos Aires',
    'servicios premium',
    'vehículos de lujo',
    'transporte VIP',
    'choferes profesionales'
  ],
  authors: [{ name: 'Private Limo' }],
  creator: 'Private Limo',
  publisher: 'Private Limo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://privatelimo.com.ar'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: '/',
    title: 'Private Limo - Servicios de Transporte Premium',
    description: 'Servicios de transporte ejecutivo y limusinas de lujo en Buenos Aires. Traslados corporativos, transfers al aeropuerto, servicios VIP y flota de vehículos premium.',
    siteName: 'Private Limo',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Private Limo - Servicios de Transporte Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Limo - Servicios de Transporte Premium',
    description: 'Servicios de transporte ejecutivo y limusinas de lujo en Buenos Aires.',
    images: ['/images/twitter-image.jpg'],
    creator: '@privatelimo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${openSans.variable} antialiased font-sans`}>
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
