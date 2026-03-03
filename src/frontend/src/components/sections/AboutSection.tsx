const WA_LINK =
  "https://wa.me/971557998925?text=Hi%20Chef%20Mom%2C%20I%20want%20to%20place%20an%20order!";

const highlights = [
  { icon: "🌿", text: "Authentic North Indian flavors" },
  { icon: "⚖️", text: "Balanced spices for every palate" },
  { icon: "✨", text: "Clean & hygienic kitchen practices" },
  { icon: "🥦", text: "Only fresh, quality ingredients" },
  { icon: "⏰", text: "Cooked fresh every single day" },
  { icon: "🚚", text: "Reliable, on-time delivery" },
];

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

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative fade-up">
            <div className="relative">
              <img
                src="/assets/generated/kitchen-cooking.dim_800x600.jpg"
                alt="Chef Mom cooking fresh Indian meals in a clean kitchen"
                className="w-full h-72 sm:h-96 object-cover rounded-3xl shadow-card"
                loading="lazy"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 right-4 bg-white rounded-2xl px-4 py-3 shadow-card border border-primary/10">
                <p className="font-heading font-bold text-foreground text-sm">
                  ❤️ Made with Love
                </p>
                <p className="text-primary text-xs font-body mt-0.5">
                  Every single meal
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="fade-up fade-up-delay-1">
            <span className="inline-block text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
              Our Story
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
              Food Just Like Home
            </h2>
            <p className="text-foreground/65 font-body text-lg leading-relaxed mb-6">
              At The Chef Mom Dubai, we believe every meal should feel like a
              hug from home. Far from family, living the fast-paced Dubai life —
              you deserve food that nourishes both your body and your soul.
            </p>
            <p className="text-foreground/65 font-body text-base leading-relaxed mb-8 italic border-l-4 border-primary/30 pl-4">
              "Bringing the taste of home to your busy Dubai life."
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2.5 bg-accent/50 rounded-xl px-3 py-2.5"
                >
                  <span className="text-base leading-none">{item.icon}</span>
                  <span className="text-sm font-heading font-medium text-foreground/80">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="about.whatsapp_button"
              className="inline-flex items-center gap-2 px-6 py-3.5 whatsapp-green text-white rounded-full font-heading font-bold text-base shadow-warm hover:shadow-warm-lg transition-all hover:scale-105"
            >
              <WhatsAppIcon />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
