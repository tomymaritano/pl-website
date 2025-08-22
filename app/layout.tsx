import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import "./globals.css";

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
      <body className="antialiased">
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
