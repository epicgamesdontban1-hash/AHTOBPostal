import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { companyConfig } from "@/lib/config";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Track Package", href: "/tracking" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-card/95 glass-effect backdrop-blur-md border-b border-border"
          : "bg-card/80 glass-effect backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <div className="flex items-center space-x-2 hover-elevate">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
                A
              </div>
              <span className="font-bold text-xl text-foreground">
                {companyConfig.name}
              </span>
              <span className="text-muted-foreground text-sm hidden sm:inline">
                South Africa to the World
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-testid={`link-nav-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                <span
                  className={`transition-colors hover-elevate px-2 py-1 rounded-md ${
                    isActiveLink(item.href)
                      ? "text-primary font-medium"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <Button data-testid="button-get-quote">Get Quote</Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                data-testid="button-mobile-menu"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-lg flex items-center justify-center font-bold">
                    A
                  </div>
                  <span className="font-bold text-lg">{companyConfig.name}</span>
                </div>
              </div>
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-testid={`link-mobile-${item.name.toLowerCase().replace(" ", "-")}`}
                  >
                    <span
                      className={`block transition-colors py-2 hover-elevate px-2 rounded-md ${
                        isActiveLink(item.href)
                          ? "text-primary font-medium"
                          : "text-foreground hover:text-primary"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
                <Button
                  className="w-full mt-4"
                  data-testid="button-mobile-get-quote"
                >
                  Get Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
