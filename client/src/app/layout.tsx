import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Sora, IBM_Plex_Sans } from "next/font/google";
import { PublicProviders } from "@/_core/public-providers";
import { cookies } from "next/headers";
import './globals.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  subsets: ['latin']
});

const sora = Sora({
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sora',
  subsets: ["latin"]
});
const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Title",
  description: "Description",
  icons: {
    icon: '/favicon.ico'
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const theme = (await cookies()).get('theme')?.value || 'light';

  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${sora.variable} ${ibmPlexSans.variable} ${theme}`}
      >
        <PublicProviders>
          {children}
        </PublicProviders>

      </body>
    </html>

  );
}
