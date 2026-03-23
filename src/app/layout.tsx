import type { Metadata } from "next";
import "./globals.css";

import LoadingSplash from "../components/LoadingSplash";

export const metadata: Metadata = {
  title: "Atlas Pool Solutions",
  description:
    "Commercial rooftop pool and spa renovations, water features, decks, and equipment modernization by Atlas Pool Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LoadingSplash
          src="https://static.wixstatic.com/media/f060bf_a822feb1696d484ba7444a2c953faaff~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,enc_avif,quality_auto/Run-Like-a-Girl-04.png"
          alt="Run Like a Girl loading"
          durationMs={2000}
        />
        {children}
      </body>
    </html>
  );
}
