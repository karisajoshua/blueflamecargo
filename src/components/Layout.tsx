import { Link, useLocation } from "react-router-dom";
import { Package, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About Us" },
    { to: "/track", label: "Track" },
    { to: "/quote", label: "Quote" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header 
        className={`${isHomePage && !isScrolled ? 'absolute' : 'sticky'} top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-card border-b shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-accent p-2 rounded-lg group-hover:scale-110 transition-transform">
                <Package className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-lg leading-none transition-colors ${
                  isScrolled ? "text-primary" : "text-white"
                }`}>BlueFlame</span>
                <span className={`text-xs transition-colors ${
                  isScrolled ? "text-muted-foreground" : "text-white/70"
                }`}>Cargo Masters</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    isActive(link.to)
                      ? "text-accent bg-accent/10"
                      : isScrolled 
                        ? "text-foreground hover:text-accent hover:bg-accent/5"
                        : "text-white hover:text-accent hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="hero" size="lg" asChild>
                <Link to="/quote">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${
                isScrolled ? "hover:bg-secondary" : "hover:bg-white/10"
              }`}
            >
              {mobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? "" : "text-white"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? "" : "text-white"}`} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className={`md:hidden mt-4 pb-4 space-y-2 border-t pt-4 ${
              isScrolled ? "bg-card" : "bg-primary/95 backdrop-blur-sm"
            }`}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-md font-medium transition-colors ${
                    isActive(link.to)
                      ? "text-accent bg-accent/10"
                      : isScrolled
                        ? "text-foreground hover:bg-secondary"
                        : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="hero" size="lg" className="w-full" asChild>
                <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Package className="h-6 w-6" />
                <span className="font-bold text-lg">BlueFlame</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Global Reach. Local Expertise. Seamless Logistics.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/services" className="hover:text-accent transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-accent transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/track" className="hover:text-accent transition-colors">
                    Track Cargo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-3">Services</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-primary-foreground/80">Freight Forwarding</li>
                <li className="text-primary-foreground/80">Customs Clearance</li>
                <li className="text-primary-foreground/80">Import & Export</li>
                <li className="text-primary-foreground/80">Warehousing</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>📍 Nairobi, Kenya</li>
                <li>📞 +254 XXX XXX XXX</li>
                <li>📧 info@blueflamecargo.com</li>
                <li>🕘 Mon–Fri: 8:00 AM – 6:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
            <p className="text-sm text-primary-foreground/70">
              © 2025 BlueFlame Cargo Masters Ltd. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/50 mt-2">
              Powered by Texcortech Systems
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
