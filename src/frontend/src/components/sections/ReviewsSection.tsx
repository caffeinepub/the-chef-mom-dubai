const WA_LINK =
  "https://wa.me/971557998925?text=Hi%20Chef%20Mom%2C%20I%20want%20to%20place%20an%20order!";

const reviews = [
  {
    id: 1,
    name: "Priya S.",
    initials: "PS",
    stars: 5,
    text: "Tastes just like homemade. I've been ordering for 3 months now – never disappointed! The dal and roti are absolutely perfect.",
    time: "2 weeks ago",
  },
  {
    id: 2,
    name: "Rahul M.",
    initials: "RM",
    stars: 5,
    text: "Fresh, healthy, and prepared with complete hygiene. Best tiffin service in Al Quoz! The monthly plan is incredible value.",
    time: "1 month ago",
  },
  {
    id: 3,
    name: "Anita K.",
    initials: "AK",
    stars: 5,
    text: "Authentic North Indian food. The dal and roti remind me of my mom's cooking back home. So grateful for Chef Mom!",
    time: "3 weeks ago",
  },
  {
    id: 4,
    name: "Mohammed A.",
    initials: "MA",
    stars: 5,
    text: "Timely deliveries and clean service. Highly recommend for office meal subscriptions. Our team orders every day now.",
    time: "2 months ago",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].slice(0, count).map((s) => (
        <svg
          aria-hidden="true"
          key={s}
          className="w-4 h-4 text-yellow-400 fill-yellow-400"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

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

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-28 section-warm">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <span className="inline-block text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Customer Love
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          {/* Google rating badge */}
          <div className="inline-flex items-center gap-3 bg-white border border-primary/15 rounded-2xl px-5 py-3 shadow-xs mt-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg
                  aria-hidden="true"
                  key={s}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-heading font-bold text-foreground text-lg">
              4.9
            </span>
            <span className="text-foreground/55 font-body text-sm">
              | 30+ Happy Customers on Google
            </span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 fade-up fade-up-delay-${Math.min(index + 1, 4)}`}
            >
              {/* Quote mark */}
              <div className="text-4xl text-primary/20 font-display leading-none mb-3">
                "
              </div>
              <p className="text-foreground/70 font-body text-base leading-relaxed mb-5">
                {review.text}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-heading font-bold text-primary text-sm">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">
                      {review.name}
                    </p>
                    <p className="text-foreground/45 font-body text-xs">
                      {review.time}
                    </p>
                  </div>
                </div>
                <StarRating count={review.stars} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center fade-up">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="reviews.whatsapp_button"
            className="inline-flex items-center gap-2 px-8 py-4 whatsapp-green text-white rounded-full font-heading font-bold text-base shadow-warm hover:shadow-warm-lg transition-all hover:scale-105"
          >
            <WhatsAppIcon />
            Join Our Happy Customers
          </a>
        </div>
      </div>
    </section>
  );
}
