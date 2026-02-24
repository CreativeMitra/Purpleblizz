import AnimatedSection from "@/components/AnimatedSection";
import { Sparkles, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Our wedding felt like a dream. The decor, the coordination, everything was flawless.",
    author: "Priya & Arjun",
  },
  {
    quote: "Professional, creative, and incredibly supportive. PurpleBliing made our day stress-free.",
    author: "Neha & Rahul",
  },
  {
    quote: "Best decision we made for our wedding. They understood our vision perfectly.",
    author: "Aisha & Vikram",
  },
  {
    quote: "PurpleBliing turned our vision into something even more beautiful than we imagined. Every detail was perfect.",
    author: "Meera & Karan",
  },
];

const Testimonials = () => (
  <div className="pt-20">
    <section className="section-padding bg-purple-gradient text-center">
      <div className="container-narrow">
        <AnimatedSection>
          <Sparkles className="mx-auto mb-4 text-gold" size={36} />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Words From Our Couples
          </h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg">
            We are honored to be part of our couples' biggest milestone.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.author} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow h-full">
                <Quote className="text-gold mb-4" size={32} />
                <blockquote className="font-display text-xl italic text-foreground leading-relaxed mb-6">
                  "{t.quote}"
                </blockquote>
                <p className="font-body text-muted-foreground font-bold">— {t.author}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Testimonials;
