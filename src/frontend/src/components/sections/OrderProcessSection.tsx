const WA_LINK =
  "https://wa.me/971557998925?text=Hi%20Chef%20Mom%2C%20I%20want%20to%20place%20an%20order!";

const steps = [
  {
    number: "1",
    title: "Choose Your Plan",
    description:
      "Browse our menu, pick a tiffin or subscription plan that suits your schedule and budget.",
    icon: "🍽️",
  },
  {
    number: "2",
    title: "Confirm on WhatsApp",
    description:
      "Send us a quick message on WhatsApp with your order details. We'll confirm everything instantly.",
    icon: "💬",
  },
  {
    number: "3",
    title: "Get Fresh Meals Delivered",
    description:
      "Sit back and relax. Hot, fresh, homemade meals arrive at your door every day on time.",
    icon: "🚚",
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

export function OrderProcessSection() {
  return (
    <section id="order-process" className="py-20 lg:py-28 hero-gradient">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <span className="inline-block text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            How It Works
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ordering is Simple
          </h2>
          <p className="text-foreground/60 font-body text-lg max-w-xl mx-auto">
            Three easy steps and fresh meals are on their way to you.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative text-center fade-up fade-up-delay-${index + 1}`}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute top-10 left-[55%] w-[90%] h-0.5 bg-primary/20 z-0" />
              )}

              <div className="relative z-10">
                {/* Step number with icon */}
                <div className="relative inline-flex items-center justify-center mb-5">
                  <div className="w-20 h-20 bg-white rounded-full shadow-warm flex items-center justify-center">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-foreground text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground/60 font-body text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency banner */}
        <div className="bg-primary text-white rounded-2xl px-6 py-4 text-center mb-8 fade-up shadow-warm">
          <p className="font-heading font-bold text-base sm:text-lg">
            ⚡ Limited Daily Slots Available – Order Before 10 AM
          </p>
          <p className="text-white/80 font-body text-sm mt-1">
            Secure your tiffin for today before slots fill up!
          </p>
        </div>

        {/* CTA */}
        <div className="text-center fade-up">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="order.whatsapp_button"
            className="inline-flex items-center gap-2 px-8 py-4 whatsapp-green text-white rounded-full font-heading font-bold text-lg shadow-warm hover:shadow-warm-lg transition-all hover:scale-105"
          >
            <WhatsAppIcon />
            Order Now on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
