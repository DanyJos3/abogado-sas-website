import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abogado SAS Ecuador - Constitución de Sociedades por Acciones Simplificada",
  description: "Servicios legales especializados en constitución de SAS en Ecuador. Asesoría profesional para empresarios y emprendedores. Proceso rápido y seguro.",
  keywords: "abogado, SAS, constitución, sociedades, Ecuador, empresa, legal, asesoría",
  authors: [{ name: "Abogado SAS Ecuador" }],
  creator: "Abogado SAS Ecuador",
  publisher: "Abogado SAS Ecuador",
  openGraph: {
    title: "Abogado SAS Ecuador - Constitución de Sociedades",
    description: "Servicios legales especializados en constitución de SAS en Ecuador",
    url: "https://abogado-sas-ecuador.com",
    siteName: "Abogado SAS Ecuador",
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogado SAS Ecuador - Constitución de Sociedades",
    description: "Servicios legales especializados en constitución de SAS en Ecuador",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
