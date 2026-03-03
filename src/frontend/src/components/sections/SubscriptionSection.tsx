import { useState } from "react";
import { TiffinPlan } from "../../backend.d";
import type { backendInterface } from "../../backend.d";
import { useActor } from "../../hooks/useActor";

const plans = [
  {
    value: TiffinPlan.weekly,
    label: "Weekly Tiffin",
    icon: "📅",
    price: "AED 120–180",
    desc: "7 days of fresh homemade meals",
  },
  {
    value: TiffinPlan.monthly,
    label: "Monthly Tiffin",
    icon: "🗓️",
    price: "AED 450–650",
    desc: "30 days — best value for daily needs",
  },
  {
    value: TiffinPlan.custom,
    label: "Custom Plan",
    icon: "✏️",
    price: "Flexible",
    desc: "Tailored to your specific schedule",
  },
  {
    value: TiffinPlan.corporate,
    label: "Corporate Order",
    icon: "🏢",
    price: "Bulk Pricing",
    desc: "Office & team meal subscriptions",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export function SubscriptionSection() {
  const { actor } = useActor();
  const [formState, setFormState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [plan, setPlan] = useState<TiffinPlan>(TiffinPlan.weekly);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;

    setFormState("loading");
    try {
      await (actor as backendInterface).submitEnquiry(
        name,
        phone,
        location,
        plan,
      );
      setFormState("success");
      setName("");
      setPhone("");
      setLocation("");
      setPlan(TiffinPlan.weekly);
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="subscribe" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <span className="inline-block text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Meal Plans
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Daily Meals Without the Daily Stress
          </h2>
          <p className="text-foreground/60 font-body text-lg max-w-2xl mx-auto">
            Subscribe to a plan and never think about lunch again.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Plans */}
          <div className="fade-up">
            <div className="grid grid-cols-2 gap-4 mb-8">
              {plans.map((p) => (
                <div
                  key={p.value}
                  className="bg-accent/40 border border-primary/10 rounded-2xl p-4 hover:border-primary/30 hover:bg-accent/60 transition-all"
                >
                  <span className="text-2xl block mb-2" aria-hidden="true">
                    {p.icon}
                  </span>
                  <h3 className="font-heading font-bold text-foreground text-base mb-1">
                    {p.label}
                  </h3>
                  <p className="text-primary font-heading font-semibold text-sm mb-1">
                    {p.price}
                  </p>
                  <p className="text-foreground/55 font-body text-xs leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Benefits list */}
            <div className="bg-accent/30 border border-primary/10 rounded-2xl p-5">
              <h3 className="font-heading font-bold text-foreground text-base mb-4">
                What's included in every plan:
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Fresh homemade meals cooked daily",
                  "Hygienic packaging and delivery",
                  "Flexible menu preferences accommodated",
                  "Punctual delivery to your address",
                  "WhatsApp support for all queries",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-foreground/70 font-body text-sm"
                  >
                    <span className="w-5 h-5 bg-primary/15 rounded-full flex items-center justify-center text-primary text-xs shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="fade-up fade-up-delay-1">
            <div className="bg-white border border-border rounded-3xl p-6 sm:p-8 shadow-card">
              <h3 className="font-heading font-bold text-foreground text-xl mb-6">
                Get Your Tiffin Plan Started
              </h3>

              {formState === "success" ? (
                <div
                  data-ocid="subscribe.success_state"
                  className="text-center py-8"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="font-heading font-bold text-foreground text-xl mb-2">
                    Enquiry Received!
                  </h4>
                  <p className="text-foreground/60 font-body text-base mb-6">
                    We'll contact you on WhatsApp shortly to confirm your plan.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormState("idle")}
                    className="px-6 py-3 bg-primary text-white rounded-full font-heading font-semibold text-sm hover:bg-primary/90 transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="subscribe-name"
                      className="block font-heading font-semibold text-foreground/80 text-sm mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="subscribe-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      data-ocid="subscribe.name_input"
                      className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground font-body text-base placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subscribe-phone"
                      className="block font-heading font-semibold text-foreground/80 text-sm mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="subscribe-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 XX XXX XXXX"
                      data-ocid="subscribe.phone_input"
                      className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground font-body text-base placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subscribe-location"
                      className="block font-heading font-semibold text-foreground/80 text-sm mb-1.5"
                    >
                      Delivery Location *
                    </label>
                    <input
                      id="subscribe-location"
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Al Quoz Industrial Area 3"
                      data-ocid="subscribe.location_input"
                      className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground font-body text-base placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subscribe-plan"
                      className="block font-heading font-semibold text-foreground/80 text-sm mb-1.5"
                    >
                      Plan Interested In *
                    </label>
                    <select
                      id="subscribe-plan"
                      required
                      value={plan}
                      onChange={(e) => setPlan(e.target.value as TiffinPlan)}
                      data-ocid="subscribe.plan_select"
                      className="w-full px-4 py-3 border border-input rounded-xl bg-background text-foreground font-body text-base focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                    >
                      <option value={TiffinPlan.weekly}>
                        Weekly Tiffin (AED 120–180/week)
                      </option>
                      <option value={TiffinPlan.monthly}>
                        Monthly Tiffin (AED 450–650/month)
                      </option>
                      <option value={TiffinPlan.custom}>
                        Custom Plan (Flexible)
                      </option>
                      <option value={TiffinPlan.corporate}>
                        Corporate Order (Bulk Pricing)
                      </option>
                    </select>
                  </div>

                  {formState === "error" && (
                    <div
                      data-ocid="subscribe.error_state"
                      className="flex items-center gap-2 px-4 py-3 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive font-body text-sm"
                    >
                      <span>⚠️</span>
                      <span>
                        Something went wrong. Please try WhatsApp instead.
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "loading" || !actor}
                    data-ocid="subscribe.submit_button"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-full font-heading font-bold text-base shadow-warm hover:bg-primary/90 hover:shadow-warm-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "loading" ? (
                      <>
                        <div
                          data-ocid="subscribe.loading_state"
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                        />
                        Submitting...
                      </>
                    ) : (
                      "🍱 Start My Tiffin Plan"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
