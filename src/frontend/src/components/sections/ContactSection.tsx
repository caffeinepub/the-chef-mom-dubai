const PHONE_LINK = "tel:+971557998925";
const WA_LINK =
  "https://wa.me/971557998925?text=Hi%20Chef%20Mom%2C%20I%20want%20to%20place%20an%20order!";

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <span className="inline-block text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Contact Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Find Us & Get in Touch
          </h2>
          <p className="text-foreground/60 font-body text-lg max-w-xl mx-auto">
            We're here Monday to Saturday, ready to take your order.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="fade-up">
            <div className="space-y-5">
              {/* Phone */}
              <a
                href={PHONE_LINK}
                data-ocid="contact.call_button"
                className="flex items-center gap-4 bg-accent/40 border border-primary/10 rounded-2xl p-4 sm:p-5 hover:border-primary/30 hover:bg-accent/60 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center shrink-0">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-primary"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.95 19.79 19.79 0 01.01 1.37 2 2 0 011.99 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground/60 text-xs uppercase tracking-wider mb-0.5">
                    Call Us
                  </p>
                  <p className="font-heading font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                    +971 55 799 8925
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.whatsapp_button"
                className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-2xl p-4 sm:p-5 hover:border-green-300 hover:bg-green-100 transition-all group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground/60 text-xs uppercase tracking-wider mb-0.5">
                    WhatsApp
                  </p>
                  <p className="font-heading font-bold text-foreground text-lg group-hover:text-green-700 transition-colors">
                    +971 55 799 8925
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 bg-accent/40 border border-primary/10 rounded-2xl p-4 sm:p-5">
                <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-primary"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground/60 text-xs uppercase tracking-wider mb-0.5">
                    Kitchen Location
                  </p>
                  <p className="font-body text-foreground text-base leading-relaxed">
                    Kitchen Works, Al Quoz Industrial Area 4,
                    <br />
                    Al Quoz, Dubai, UAE
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 bg-accent/40 border border-primary/10 rounded-2xl p-4 sm:p-5">
                <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center shrink-0">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground/60 text-xs uppercase tracking-wider mb-0.5">
                    Operating Hours
                  </p>
                  <p className="font-body text-foreground text-base">
                    Monday – Saturday
                  </p>
                  <p className="font-heading font-bold text-primary text-base">
                    8:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="fade-up fade-up-delay-1">
            <div
              data-ocid="contact.map_marker"
              className="rounded-3xl overflow-hidden shadow-card h-72 sm:h-96 lg:h-full min-h-[300px]"
            >
              <iframe
                title="The Chef Mom Dubai Location"
                src="https://maps.google.com/maps?q=Al+Quoz+Industrial+Area+4+Dubai+UAE&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
