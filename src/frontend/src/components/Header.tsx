import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const WA_LINK =
  "https://wa.me/971557998925?text=Hi%20Chef%20Mom%2C%20I%20want%20to%20place%20an%20order!";
const PHONE_LINK = "tel:+971557998925";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 shrink-0"
            data-ocid="header.link"
          >
            <img
              src="/assets/generated/logo-transparent.dim_400x120.png"
              alt="The Chef Mom Dubai"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-heading font-medium text-foreground/75 hover:text-primary transition-colors rounded-lg hover:bg-accent"
                data-ocid="header.nav_link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="flex items-center gap-2">
            <a
              href={PHONE_LINK}
              className="flex items-center gap-1.5 px-3 py-2 bg-primary text-white rounded-full text-sm font-heading font-semibold hover:bg-primary/90 transition-all shadow-warm hover:shadow-warm-lg"
              data-ocid="header.call_button"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">+971 55 799 8925</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-border shadow-card">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 text-base font-heading font-medium text-foreground/80 hover:text-primary hover:bg-accent rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 whatsapp-green text-white rounded-xl font-heading font-semibold"
            >
              <span aria-hidden="true">💬</span>
              Order on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
