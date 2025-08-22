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
  description: "Servicios de transporte ejecutivo y limusinas de lujo",
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
