import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Sparkles, Star, Crown } from "lucide-react";

const packages = [
  {
    name: "Silver",
    icon: Star,
    subtitle: "Perfect for intimate weddings",
    features: ["Planning support", "Vendor guidance", "Event coordination"],
    highlight: false,
  },
  {
    name: "Gold",
    icon: Sparkles,
    subtitle: "Ideal for medium-scale celebrations",
    features: ["Full planning", "Decor styling", "Vendor management", "Timeline coordination"],
    highlight: true,
  },
  {
    name: "Platinum",
    icon: Crown,
    subtitle: "Luxury experience for grand weddings",
    features: ["Concept design", "Complete execution", "Guest management", "Premium support", "Day-of coordination"],
    highlight: false,
  },
];

const Packages = () => (
  <div className="pt-20">
    <section className="section-padding bg-purple-gradient text-center">
      <div className="container-narrow">
        <AnimatedSection>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Packages</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg">
            Choose the perfect plan for your celebration.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <AnimatedSection key={pkg.name} delay={i * 0.15}>
              <div
                className={`relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl h-full flex flex-col ${
                  pkg.highlight
                    ? "border-gold bg-card shadow-lg scale-105"
                    : "border-border bg-card"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="text-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <pkg.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{pkg.subtitle}</p>
                </div>
                <ul className="space-y-3 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-8 block">
                  <Button
                    className={`w-full rounded-full ${
                      pkg.highlight
                        ? "bg-gold text-gold-foreground hover:bg-gold-light"
                        : "bg-primary text-primary-foreground hover:bg-purple-rich"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <p className="text-center text-muted-foreground mt-12 italic">
            Custom packages available based on your needs.
          </p>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Packages;
