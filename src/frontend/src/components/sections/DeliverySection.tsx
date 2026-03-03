const WA_LINK =
  "https://wa.me/971557998925?text=Hi%20Chef%20Mom%2C%20I%20want%20to%20check%20if%20you%20deliver%20to%20my%20area!";

const deliveryAreas = [
  {
    zone: "Al Quoz Area",
    areas: [
      "Al Quoz Industrial Area 1",
      "Al Quoz Industrial Area 2",
      "Al Quoz Industrial Area 3",
      "Al Quoz Industrial Area 4",
      "Al Quoz Residential",
    ],
  },
  {
    zone: "Nearby Districts",
    areas: [
      "Business Bay",
      "Dubai Investment Park",
      "Jebel Ali",
      "Barsha Heights",
      "Dubai Science Park",
    ],
  },
  {
    zone: "We Serve",
    areas: [
      "Office Buildings",
      "Residential Towers",
      "Labour Accommodations",
      "Construction Sites",
      "Warehouses & Factories",
    ],
  },
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

export function DeliverySection() {
  return (
    <section id="delivery" className="py-20 lg:py-28 section-warm">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <span className="inline-block text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Delivery Coverage
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We Deliver Across Al Quoz & Beyond
          </h2>
          <p className="text-foreground/60 font-body text-lg max-w-2xl mx-auto">
            Hot, fresh meals delivered to your office or home on schedule.
          </p>
        </div>

        {/* Delivery timing banner */}
        <div className="bg-primary/10 border border-primary/20 rounded-2xl px-6 py-5 mb-10 text-center fade-up">
          <div className="flex flex-wrap justify-center gap-6 text-foreground/80">
            <div className="flex items-center gap-2">
              <span className="text-xl">📅</span>
              <span className="font-heading font-semibold text-base">
                Monday to Saturday
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">⏰</span>
              <span className="font-heading font-semibold text-base">
                12:00 PM – 8:00 PM
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">📱</span>
              <span className="font-heading font-semibold text-base">
                Order before 10 AM for same-day delivery
              </span>
            </div>
          </div>
        </div>

        {/* Areas grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {deliveryAreas.map((zone, index) => (
            <div
              key={zone.zone}
              className={`bg-white rounded-2xl p-5 sm:p-6 shadow-card fade-up fade-up-delay-${index + 1}`}
            >
              <h3 className="font-heading font-bold text-foreground text-base mb-4 pb-3 border-b border-border">
                {zone.zone}
              </h3>
              <ul className="space-y-2.5">
                {zone.areas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 text-foreground/65 font-body text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center fade-up">
          <p className="text-foreground/60 font-body mb-4">
            Not sure if we deliver to your area? Just ask us!
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="delivery.whatsapp_button"
            className="inline-flex items-center gap-2 px-8 py-4 whatsapp-green text-white rounded-full font-heading font-bold text-base shadow-warm hover:shadow-warm-lg transition-all hover:scale-105"
          >
            <WhatsAppIcon />
            Check If We Deliver to You
          </a>
        </div>
      </div>
    </section>
  );
}
