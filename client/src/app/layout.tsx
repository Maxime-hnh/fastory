import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { PublicProviders } from "@/_core/public-providers";
import './globals.css';


const sora = Sora({
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sora',
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Fastory",
  description: "Exercice SWAPI",
  icons: {
    icon: '/favicon.ico'
  },
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${sora.variable} dark`}>
        <PublicProviders>
          {children}
        </PublicProviders>
      </body>
    </html>

  );
}
