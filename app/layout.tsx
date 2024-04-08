import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ViajaItalia Viaggi",
  description: "Agencia de viajes con sede en Milano Italia",
  icons: "/logo2.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">

      <body className={inter.className}>

        {children}
        
      </body>
    </html>
  );
}
