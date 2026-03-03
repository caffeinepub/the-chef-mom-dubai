const WA_LINK =
  "https://wa.me/971557998925?text=Hi%20Chef%20Mom%2C%20I%20want%20to%20place%20an%20order!";
const PHONE_LINK = "tel:+971557998925";

const trustBadges = [
  { icon: "⭐", text: "4.9 Google Rated" },
  { icon: "🍳", text: "Freshly Cooked Daily" },
  { icon: "✨", text: "Hygienic Kitchen" },
  { icon: "🚚", text: "Timely Delivery" },
];

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen hero-gradient flex items-center pt-16 pb-20 sm:pb-8 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Rating pill */}
            <div className="inline-flex items-center gap-2 bg-white/80 border border-primary/20 rounded-full px-4 py-2 mb-6 shadow-xs fade-up">
              <span className="text-yellow-500 font-semibold text-sm">
                ⭐ 4.9
              </span>
              <span className="text-foreground/60 text-sm">
                Rated by 30+ Happy Customers
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4 fade-up fade-up-delay-1">
              Homemade Indian Tiffin in Dubai –{" "}
              <span className="text-primary">
                Fresh, Hygienic & Full of Love
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-foreground/65 font-body mb-8 leading-relaxed fade-up fade-up-delay-2">
              Healthy North Indian Meals Delivered Daily in Al Quoz & Nearby
              Areas
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-8 fade-up fade-up-delay-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-primary/15 rounded-xl px-3 py-2.5 shadow-xs"
                >
                  <span className="text-lg leading-none" aria-hidden="true">
                    {badge.icon}
                  </span>
                  <span className="text-sm font-heading font-semibold text-foreground/80">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 fade-up fade-up-delay-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.whatsapp_button"
                className="flex items-center gap-2 px-6 py-3.5 whatsapp-green text-white rounded-full font-heading font-bold text-base shadow-warm hover:shadow-warm-lg transition-all hover:scale-105"
              >
                <WhatsAppIcon />
                Order on WhatsApp
              </a>
              <a
                href={PHONE_LINK}
                data-ocid="hero.call_button"
                className="flex items-center gap-2 px-6 py-3.5 bg-white border-2 border-primary text-primary rounded-full font-heading font-bold text-base hover:bg-primary hover:text-white transition-all hover:scale-105 shadow-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.95 19.79 19.79 0 01.01 1.37 2 2 0 011.99 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                📞 Call Now
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative fade-up">
            <div className="relative mx-auto max-w-md lg:max-w-full">
              {/* Decorative blob behind image */}
              <div className="absolute inset-0 -inset-4 bg-primary/10 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] blur-2xl" />
              <img
                src="/assets/generated/hero-thali.dim_1200x800.jpg"
                alt="Delicious North Indian Thali - The Chef Mom Dubai"
                className="relative w-full h-64 sm:h-80 lg:h-[480px] object-cover rounded-3xl shadow-warm-lg"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white rounded-2xl px-4 py-3 shadow-card border border-primary/10">
                <div className="flex items-center gap-2">
                  <span className="text-2xl" aria-hidden="true">
                    🍱
                  </span>
                  <div>
                    <p className="font-heading font-bold text-foreground text-sm leading-none">
                      Daily Fresh
                    </p>
                    <p className="text-primary text-xs font-body mt-0.5">
                      Homemade meals
                    </p>
                  </div>
                </div>
              </div>
              {/* Price badge */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-primary text-white rounded-2xl px-3 py-2.5 shadow-warm">
                <p className="font-heading font-bold text-sm leading-none">
                  From AED 15
                </p>
                <p className="text-white/80 text-xs font-body">Per meal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
