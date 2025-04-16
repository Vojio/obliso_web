"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, SplitSquareHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#why-obliso-exists", label: "Why" },
  { href: "#what-obliso-is", label: "What" },
  { href: "#how-it-works", label: "How" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "backdrop-blur-lg bg-black/60 border-b border-white/5" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-white font-medium"
          >
            <SplitSquareHorizontal className="w-5 h-5 stroke-white stroke-[1.5]" />
            <span className="text-lg">obliso</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild 
              size="sm" 
              className="bg-white text-black hover:bg-white/90 ml-2"
            >
              <Link href="https://github.com/Vojio/shamir-secret-manager" target="_blank" rel="noopener noreferrer">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] bg-black border-l border-white/10">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full pt-6">
                  <div className="flex items-center mb-8">
                    <Link
                      href="/"
                      className="flex items-center space-x-2 text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <SplitSquareHorizontal className="w-5 h-5 stroke-white stroke-[1.5]" />
                      <span className="text-lg font-medium">obliso</span>
                    </Link>
                  </div>
                  <nav className="flex flex-col space-y-5">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Button 
                      asChild 
                      className="bg-white text-black hover:bg-white/90 mt-4 w-full"
                    >
                      <Link 
                        href="https://github.com/Vojio/shamir-secret-manager" target="_blank" rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Get Started
                      </Link>
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;