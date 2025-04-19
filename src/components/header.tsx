"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Corrected import statement
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils"; // Corrected import statement

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#about", label: "O Treinamento" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrollPosition > 50 ? "bg-black backdrop-blur-md py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/images/logopro.png" alt="Logo" className="h-8" /> {/* Logo image */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className={cn(
                "font-medium transition-colors",
                scrollPosition > 50
                  ? "text-gray-300 hover:text-orange-500"
                  : "text-gray-300 hover:text-white"
              )}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="default"
            className={cn(
              "ml-4 transition-all",
              scrollPosition > 50
                ? "bg-orange-600 hover:bg-orange-700 text-white"
                : "bg-orange-600 text-white hover:bg-orange-700"
            )}
          >
            GARANTA SUA VAGA
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "md:hidden",
            scrollPosition > 50 ? "text-orange-500" : "text-white"
          )}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 md:hidden pt-20">
          <nav className="flex flex-col items-center justify-center h-full space-y-8 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="text-xl text-gray-300 hover:text-orange-500 transition-colors font-medium"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="default"
              className="mt-4 bg-orange-600 hover:bg-orange-700 text-white"
              onClick={closeMenu}
            >
              GARANTA SUA VAGA
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}