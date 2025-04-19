import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Curso Premium | Transforme sua carreira e alcance resultados extraordinários",
  description: "Domine as habilidades essenciais para se destacar no mercado com nosso curso exclusivo. Metodologia comprovada, mentoria especializada e resultados garantidos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
