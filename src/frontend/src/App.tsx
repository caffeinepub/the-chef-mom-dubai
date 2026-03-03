import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { FloatingWhatsApp, StickyMobileBar } from "./components/WhatsAppButton";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { DeliverySection } from "./components/sections/DeliverySection";
import { GallerySection } from "./components/sections/GallerySection";
import { HeroSection } from "./components/sections/HeroSection";
import { MenuSection } from "./components/sections/MenuSection";
import { OrderProcessSection } from "./components/sections/OrderProcessSection";
import { ReviewsSection } from "./components/sections/ReviewsSection";
import { SubscriptionSection } from "./components/sections/SubscriptionSection";
import { WhyChooseSection } from "./components/sections/WhyChooseSection";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(".fade-up");
      for (const el of elements) {
        observer.observe(el);
      }
    };

    observeElements();

    const timer = setTimeout(observeElements, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);
}

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background font-body">
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <WhyChooseSection />
        <ReviewsSection />
        <SubscriptionSection />
        <DeliverySection />
        <GallerySection />
        <OrderProcessSection />
        <ContactSection />
      </main>

      <Footer />

      <FloatingWhatsApp />
      <StickyMobileBar />
    </div>
  );
}
