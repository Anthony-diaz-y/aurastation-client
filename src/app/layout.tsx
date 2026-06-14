import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../shared/styles/globals.css";
import Providers from "./providers";
import { Toaster } from "sonner";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AURASTATION",
  description: "AURASTATION App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${dmSans.className} antialiased`}>
        <Providers>
          {children}
          <Toaster
            position="top-right"
            richColors
            theme="dark"
          />
        </Providers>
      </body>
    </html>
  );
}
