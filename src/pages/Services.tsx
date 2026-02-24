import AnimatedSection from "@/components/AnimatedSection";
import decorImg from "@/assets/services-decor.jpg";
import venueImg from "@/assets/venue.jpg";
import preWeddingImg from "@/assets/pre-wedding.jpg";
import coordinationImg from "@/assets/coordination.jpg";
import heroImg from "@/assets/hero-wedding.jpg";

const services = [
  {
    title: "Full Wedding Planning",
    desc: "From the first consultation to the final farewell, we handle every aspect of your wedding journey.",
    img: heroImg,
  },
  {
    title: "Decor & Theme Styling",
    desc: "From royal elegance to modern minimalism, we design breathtaking settings tailored to your vision.",
    img: decorImg,
  },
  {
    title: "Venue & Vendor Management",
    desc: "We connect you with trusted venues, caterers, photographers, and entertainers — ensuring quality and reliability.",
    img: venueImg,
  },
  {
    title: "Pre-Wedding & Special Events",
    desc: "Engagements, haldi, mehendi, sangeet — every function deserves its own sparkle.",
    img: preWeddingImg,
  },
  {
    title: "Day-Of Coordination",
    desc: "Relax and enjoy your moment while we manage timelines, vendors, and execution.",
    img: coordinationImg,
  },
];

const Services = () => (
  <div className="pt-20">
    <section className="section-padding bg-purple-gradient text-center">
      <div className="container-narrow">
        <AnimatedSection>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg">
            Everything you need for a flawless celebration.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow space-y-20">
        {services.map((s, i) => (
          <AnimatedSection key={s.title}>
            <div className={`grid gap-10 md:grid-cols-2 items-center ${i % 2 !== 0 ? "md:direction-rtl" : ""}`}>
              <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                <img src={s.img} alt={s.title} className="rounded-2xl w-full h-80 object-cover shadow-lg" />
              </div>
              <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{s.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
