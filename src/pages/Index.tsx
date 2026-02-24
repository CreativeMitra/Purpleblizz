import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import heroImg from "@/assets/hero-wedding.jpg";
import decorImg from "@/assets/services-decor.jpg";
import venueImg from "@/assets/venue.jpg";

const services = [
  { icon: "💍", title: "Full Wedding Planning" },
  { icon: "🎨", title: "Luxury Decor & Theme Styling" },
  { icon: "📍", title: "Venue & Vendor Coordination" },
  { icon: "📅", title: "Event Day Management" },
  { icon: "📸", title: "Pre-Wedding & Engagement Events" },
];

const reasons = [
  "Personalized attention",
  "Creative & modern themes",
  "Trusted vendor network",
  "Stress-free coordination",
  "On-time execution",
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury wedding setup" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-purple-gradient opacity-70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Sparkles className="mx-auto mb-6 text-gold" size={40} />
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Where Your Dream Celebration Comes to Life
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10">
              Elegant planning. Flawless execution. Unforgettable memories.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold-light font-body text-base px-8 py-6 rounded-full shadow-lg">
                Start Planning Your Big Day
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-soft-section">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                We Design <span className="text-primary">Experiences</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                At PurpleBliing, we don't just plan events — we design experiences. From intimate
                ceremonies to grand celebrations, every detail is thoughtfully curated to reflect
                your story and style.
              </p>
              <Link to="/about">
                <Button variant="outline" className="mt-8 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Learn Our Story
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Our Signature Services
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
              Every celebration deserves perfection
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <span className="text-4xl mb-4 block">{s.icon}</span>
                  <h3 className="font-display text-xl font-semibold text-card-foreground">
                    {s.title}
                  </h3>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-purple-rich px-8">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-purple-gradient">
        <div className="container-narrow grid gap-12 md:grid-cols-2 items-center">
          <AnimatedSection>
            <div className="grid grid-cols-2 gap-4">
              <img src={decorImg} alt="Wedding decor" className="rounded-2xl w-full h-64 object-cover" />
              <img src={venueImg} alt="Wedding venue" className="rounded-2xl w-full h-64 object-cover mt-8" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
              Why Couples Choose Us
            </h2>
            <ul className="space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-center gap-3 text-primary-foreground/90 font-body text-lg">
                  <Check className="text-gold flex-shrink-0" size={20} />
                  {r}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-soft-section">
        <div className="container-narrow max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <Sparkles className="mx-auto mb-6 text-gold" size={32} />
            <blockquote className="font-display text-2xl md:text-3xl italic text-foreground leading-relaxed mb-6">
              "PurpleBliing turned our vision into something even more beautiful than we imagined. Every detail was perfect."
            </blockquote>
            <p className="font-body text-muted-foreground">— Happy Couple</p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Begin?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Let's create something beautiful together.
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-full bg-gold text-gold-foreground hover:bg-gold-light px-10 py-6 text-base shadow-lg">
              Book Your Consultation
            </Button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Index;
