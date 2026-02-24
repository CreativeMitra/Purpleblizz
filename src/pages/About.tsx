import AnimatedSection from "@/components/AnimatedSection";
import aboutImg from "@/assets/about-wedding.jpg";
import { Heart, MessageCircle, Eye, Users } from "lucide-react";

const promises = [
  { icon: MessageCircle, text: "Transparent communication" },
  { icon: Eye, text: "Attention to every detail" },
  { icon: Heart, text: "Budget-conscious planning" },
  { icon: Users, text: "A calm, professional team on your big day" },
];

const About = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="section-padding bg-purple-gradient text-center">
      <div className="container-narrow">
        <AnimatedSection>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Story</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg">
            Transforming celebrations into timeless memories since day one.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding">
      <div className="container-narrow grid gap-12 md:grid-cols-2 items-center">
        <AnimatedSection>
          <img src={aboutImg} alt="Wedding couple at sunset" className="rounded-2xl w-full h-[500px] object-cover shadow-xl" />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            Your love story is one of a kind.{" "}
            <span className="text-primary">Your wedding should be too.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            PurpleBliing was founded with a passion for transforming celebrations into timeless
            memories. We believe every wedding deserves a unique story — beautifully designed and
            seamlessly managed.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We combine creativity, organization, and experience to deliver celebrations that feel
            effortless and magical.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Promises */}
    <section className="section-padding bg-soft-section">
      <div className="container-narrow">
        <AnimatedSection>
          <h2 className="font-display text-3xl font-bold text-center text-foreground mb-12">Our Promise</h2>
        </AnimatedSection>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => (
            <AnimatedSection key={p.text} delay={i * 0.1}>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <p.icon className="text-primary" size={28} />
                </div>
                <p className="font-body font-bold text-foreground">{p.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
