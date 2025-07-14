import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: 
// export const metadata: Metadata = {
//   openGraph: {
//     title: 'Votre Nom - Développeur Full Stack',
//     description: 'Portfolio professionnel',
//     url: 'https://votre-domaine.com',
//     siteName: 'Portfolio Votre Nom',
//     images: ['/images/og-image.png'],
//     locale: 'fr_FR',
//     type: 'website',
//   },
// };

export const metadata: Metadata = {
  title: "Antoine Coulon - Développeur full stack",
  description: "Portfolio professionnel d'Antoine Coulon, développeur full stack",
  keywords: ['développeur', 'web', 'react', 'nextjs', 'portfolio'],
  authors: [{ name: 'Antoine Coulon' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`min-h-screen overflow-y-hidden scan-lines cursor-terminal ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
