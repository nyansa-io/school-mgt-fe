"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavLinks: { link: string; name: string }[] = [
  { link: "/", name: "Home" },
  { link: "/about", name: "About" },
  { link: "/#programs", name: "Programs" },
  { link: "/admissions", name: "Admissions" },
  { link: "/campus-life", name: "Campus" },
  { link: "/contact", name: "Contact" },
];

export function MainLayoutNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathName = usePathname();

  const isActiveLink = (link: string): boolean => {
    if (link === "/") {
      return pathName === "/";
    }
    return pathName.includes(link);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-2xl font-serif font-semibold tracking-tight"
          >
            Sunflower School
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NavLinks.map((el) => (
              <Link
                key={el.link}
                href={el.link}
                className={cn(
                  "text-sm font-medium px-4 py-2 rounded hover:bg-gray-100 hover:text-muted-foreground transition-colors",
                  isActiveLink(el.link) &&
                    "text-primary hover:bg-primary/5 hover:text-primary"
                )}
              >
                {el.name}
              </Link>
            ))}

            {/* <Link href="/" className={cn("text-sm font-medium px-4 py-2 rounded hover:bg-gray-300 hover:text-muted-foreground transition-colors")}>
              Home
            </Link> */}

            <Button size="sm" className="ml-4" asChild>
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-border">
            <Link
              href="/home"
              className="block text-sm font-medium hover:text-muted-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium hover:text-muted-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#programs"
              className="block text-sm font-medium hover:text-muted-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/admissions"
              className="block text-sm font-medium hover:text-muted-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admissions
            </Link>
            <Link
              href="/campus-life"
              className="block text-sm font-medium hover:text-muted-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Campus Life
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium hover:text-muted-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button size="sm" className="w-full" asChild>
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
