import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hizmetia - Güvenilir Hizmet Alım Platformu",
  description: "Ev temizliği, nakliyat, tadilat ve daha fazlası için en iyi profesyonellerden teklif alın. Güvenilir ve hızlı hizmetin adresi Hizmetia.",
  keywords: "hizmet al, ev temizliği, nakliyat, tadilat, boya badana, tesisatçı, profesyonel hizmet",
  openGraph: {
    title: "Hizmetia - Güvenilir Hizmet Alım Platformu",
    description: "İhtiyacınız olan hizmete en iyi profesyonellerden teklif alarak ulaşın.",
    url: "https://hizmetia.org",
    siteName: "Hizmetia",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#402e47" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Hizmetia" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
