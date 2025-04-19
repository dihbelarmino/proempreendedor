import Link from "next/link";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-8 pb-8">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row justify-between mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <p className="flex items-center text-gray-400">
              <Phone className="h-5 w-5 mr-2 text-orange-500" />
              +55 (17) 99628-6699
            </p>
            <p className="flex items-center text-gray-400">
              <Mail className="h-5 w-5 mr-2 text-orange-500" />
              cursoproempreendedor@gmail.com
            </p>
            <p className="flex items-center text-gray-400">
              <MapPin className="h-5 w-5 mr-2 text-orange-500" />
              SINCOMÉRCIO CATANDUVA, Catanduva - SP
            </p>
          </div>
          <h3 className="text-xl font-bold mt-6 sm:mt-0 text-center sm:text-left">
            <span className="text-orange-500">PRO</span>EMPREENDEDOR
          </h3>
        </div>

        <div className="border-t border-zinc-800 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} PROEMPREENDEDOR. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}