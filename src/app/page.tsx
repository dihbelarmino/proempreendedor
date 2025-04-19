import type { Metadata } from "next";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Curso Premium | Transforme sua carreira e alcance resultados extraordinários",
  description: "Domine as habilidades essenciais para se destacar no mercado com nosso curso exclusivo. Metodologia comprovada, mentoria especializada e resultados garantidos.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
