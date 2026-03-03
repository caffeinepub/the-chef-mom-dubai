const galleryImages = [
  {
    id: 1,
    src: "/assets/generated/hero-thali.dim_1200x800.jpg",
    alt: "Delicious North Indian Thali",
  },
  {
    id: 2,
    src: "/assets/generated/tiffin-box.dim_800x800.jpg",
    alt: "Freshly packed tiffin boxes",
  },
  {
    id: 3,
    src: "/assets/generated/veg-thali.dim_800x600.jpg",
    alt: "Colorful vegetarian thali",
  },
  {
    id: 4,
    src: "/assets/generated/kitchen-cooking.dim_800x600.jpg",
    alt: "Clean kitchen preparation",
  },
  {
    id: 5,
    src: "/assets/generated/tiffin-delivery.dim_800x600.jpg",
    alt: "Tiffin delivery ready to ship",
  },
  {
    id: 6,
    src: "/assets/generated/fresh-ingredients.dim_800x600.jpg",
    alt: "Fresh spices and ingredients",
  },
  {
    id: 7,
    src: "/assets/generated/clean-kitchen.dim_800x600.jpg",
    alt: "Hygienic clean kitchen",
  },
  {
    id: 8,
    src: "/assets/generated/happy-customers.dim_800x600.jpg",
    alt: "Happy customers enjoying meals",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <span className="inline-block text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Our Food
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Freshness You Can See
          </h2>
          <p className="text-foreground/60 font-body text-lg max-w-2xl mx-auto">
            Every meal is cooked with care, packed with hygiene, and delivered
            with love.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={img.id}
              data-ocid={`gallery.item.${img.id}`}
              className={`img-hover-zoom rounded-2xl overflow-hidden shadow-xs hover:shadow-card transition-shadow fade-up fade-up-delay-${Math.min((index % 5) + 1, 5)} ${
                img.id === 1 || img.id === 5 ? "col-span-2 row-span-1" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover ${
                  img.id === 1 || img.id === 5 ? "h-48 sm:h-56" : "h-40 sm:h-48"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
