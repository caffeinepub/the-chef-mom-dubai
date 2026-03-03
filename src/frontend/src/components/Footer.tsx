const WA_LINK =
  "https://wa.me/971557998925?text=Hi%20Chef%20Mom%2C%20I%20want%20to%20place%20an%20order!";
const PHONE_LINK = "tel:+971557998925";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-foreground text-white pb-20 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main footer content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/assets/generated/logo-transparent.dim_400x120.png"
              alt="The Chef Mom Dubai"
              className="h-10 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="font-body text-white/65 text-base leading-relaxed mb-5 max-w-xs">
              Homemade Indian Tiffin in Dubai. Fresh, hygienic, and full of love
              — delivered daily across Al Quoz.
            </p>
            {/* Contact quick */}
            <div className="space-y-3">
              <a
                href={PHONE_LINK}
                className="flex items-center gap-2 text-white/75 hover:text-white font-body text-sm transition-colors"
              >
                📞 +971 55 799 8925
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/75 hover:text-white font-body text-sm transition-colors"
              >
                <WhatsAppIcon /> +971 55 799 8925 (WhatsApp)
              </a>
              <p className="flex items-start gap-2 text-white/55 font-body text-sm">
                📍 Kitchen Works, Al Quoz Industrial Area 4, Dubai, UAE
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading font-bold text-white text-base mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/60 hover:text-white font-body text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & order */}
          <div>
            <h3 className="font-heading font-bold text-white text-base mb-4">
              Opening Hours
            </h3>
            <div className="space-y-2 mb-5">
              <p className="text-white/60 font-body text-sm">
                Monday – Saturday
              </p>
              <p className="text-primary font-heading font-semibold text-sm">
                8:00 AM – 8:00 PM
              </p>
              <p className="text-white/45 font-body text-xs">
                Order before 10 AM for same-day delivery
              </p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 whatsapp-green text-white rounded-full font-heading font-semibold text-sm hover:scale-105 transition-transform"
            >
              <WhatsAppIcon />
              Order Now
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/45 font-body text-sm text-center sm:text-left">
            © {new Date().getFullYear()} The Chef Mom Dubai. All rights
            reserved.
          </p>
          <p className="text-white/30 font-body text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
