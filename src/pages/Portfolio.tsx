import AnimatedSection from "@/components/AnimatedSection";
import heroImg from "@/assets/hero-wedding.jpg";
import decorImg from "@/assets/services-decor.jpg";
import venueImg from "@/assets/venue.jpg";
import preWeddingImg from "@/assets/pre-wedding.jpg";
import aboutImg from "@/assets/about-wedding.jpg";
import coordinationImg from "@/assets/coordination.jpg";

const images = [
  { src: heroImg, alt: "Grand wedding reception" },
  { src: decorImg, alt: "Floral arrangement" },
  { src: venueImg, alt: "Venue at twilight" },
  { src: preWeddingImg, alt: "Mehendi ceremony" },
  { src: aboutImg, alt: "Couple at sunset" },
  { src: coordinationImg, alt: "Wedding planning" },
];

const Portfolio = () => (
  <div className="pt-20">
    <section className="section-padding bg-purple-gradient text-center">
      <div className="container-narrow">
        <AnimatedSection>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            A Glimpse Into Our Celebrations
          </h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg">
            Each celebration reflects personality, culture, and creativity.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <AnimatedSection key={img.alt} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-purple-gradient opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                <p className="absolute bottom-4 left-4 text-primary-foreground font-display font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.alt}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Portfolio;
