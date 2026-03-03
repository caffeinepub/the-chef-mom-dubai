const menuItems = [
  {
    id: 1,
    name: "Veg Tiffin",
    description:
      "Fresh vegetables, dal, roti & rice. Pure vegetarian goodness cooked with love and balanced spices.",
    price: "AED 15–25",
    image: "/assets/generated/veg-thali.dim_800x600.jpg",
    tag: "🥗 Vegetarian",
    waText: "Hi+Chef+Mom,+I+want+to+order+Veg+Tiffin!",
  },
  {
    id: 2,
    name: "Special Thali",
    description:
      "Complete North Indian thali with sabzi, dal, rice, roti, pickle & sweet. A full meal experience.",
    price: "AED 25–35",
    image: "/assets/generated/hero-thali.dim_1200x800.jpg",
    tag: "⭐ Most Popular",
    waText: "Hi+Chef+Mom,+I+want+to+order+Special+Thali!",
  },
  {
    id: 3,
    name: "Daily Lunch Box",
    description:
      "Balanced, hygienic office lunch box. Perfect for busy professionals who want healthy eating.",
    price: "AED 20–30",
    image: "/assets/generated/tiffin-box.dim_800x800.jpg",
    tag: "💼 Office Favourite",
    waText: "Hi+Chef+Mom,+I+want+to+order+Daily+Lunch+Box!",
  },
  {
    id: 4,
    name: "Corporate Meal Orders",
    description:
      "Bulk meal orders for offices & teams. Custom quantities, menus, and delivery schedules.",
    price: "Contact for Pricing",
    image: "/assets/generated/tiffin-delivery.dim_800x600.jpg",
    tag: "🏢 Corporate",
    waText: "Hi+Chef+Mom,+I+want+to+enquire+about+Corporate+Meal+Orders!",
  },
  {
    id: 5,
    name: "Weekly Subscription",
    description:
      "7 days of home-cooked meals. Save time, eat healthy, and enjoy consistent quality every day.",
    price: "AED 120–180/week",
    image: "/assets/generated/veg-thali.dim_800x600.jpg",
    tag: "📅 Weekly Plan",
    waText: "Hi+Chef+Mom,+I+want+to+subscribe+to+the+Weekly+Plan!",
  },
  {
    id: 6,
    name: "Monthly Subscription",
    description:
      "30 days of fresh tiffin. Best value for daily meal needs. Never worry about lunch again.",
    price: "AED 450–650/month",
    image: "/assets/generated/hero-thali.dim_1200x800.jpg",
    tag: "💰 Best Value",
    waText: "Hi+Chef+Mom,+I+want+to+subscribe+to+the+Monthly+Plan!",
  },
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

export function MenuSection() {
  return (
    <section id="menu" className="py-20 lg:py-28 section-warm">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <span className="inline-block text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Menu & Plans
          </h2>
          <p className="text-foreground/60 font-body text-lg max-w-2xl mx-auto">
            From daily tiffins to monthly subscriptions — we have the perfect
            meal plan for you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <article
              key={item.id}
              data-ocid={`menu.item.${item.id}`}
              className={`bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group fade-up fade-up-delay-${Math.min(index + 1, 5)}`}
            >
              {/* Image */}
              <div className="img-hover-zoom h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Tag */}
                <span className="inline-block text-xs font-heading font-semibold text-primary/80 bg-primary/10 rounded-full px-3 py-1 mb-3">
                  {item.tag}
                </span>

                <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                  {item.name}
                </h3>
                <p className="text-foreground/60 font-body text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Price + CTA */}
                <div className="flex items-center justify-between gap-3">
                  <span className="font-heading font-bold text-primary text-base">
                    {item.price}
                  </span>
                  <a
                    href={`https://wa.me/971557998925?text=${item.waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`menu.whatsapp_button.${item.id}`}
                    className="flex items-center gap-1.5 px-4 py-2 whatsapp-green text-white rounded-full font-heading font-semibold text-sm hover:scale-105 transition-transform shadow-xs"
                  >
                    <WhatsAppIcon />
                    Order
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
