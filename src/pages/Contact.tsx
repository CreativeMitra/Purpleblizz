import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Mail, Phone, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you soon 💜" });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="pt-20">
      <section className="section-padding bg-purple-gradient text-center">
        <div className="container-narrow">
          <AnimatedSection>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Let's Create Something Beautiful
            </h1>
            <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg">
              Tell us about your dream celebration.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow grid gap-12 md:grid-cols-2">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Your Name" required className="rounded-xl" />
                <Input type="email" placeholder="Email" required className="rounded-xl" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input type="tel" placeholder="Phone" className="rounded-xl" />
                <Input type="date" placeholder="Event Date" className="rounded-xl" />
              </div>
              <Input placeholder="Venue (if decided)" className="rounded-xl" />
              <Textarea placeholder="Tell us about your dream celebration..." rows={5} className="rounded-xl" />
              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-gold text-gold-foreground hover:bg-gold-light py-6 text-base"
              >
                <Send size={18} className="mr-2" />
                {loading ? "Sending..." : "Book Your Consultation Today"}
              </Button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <h2 className="font-display text-2xl font-bold text-foreground">Get in Touch</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Location</p>
                    <p className="text-muted-foreground text-sm">Mumbai, India</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Email</p>
                    <p className="text-muted-foreground text-sm">hello@purplebliing.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Phone</p>
                    <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Instagram</p>
                    <p className="text-muted-foreground text-sm">@purplebliing</p>
                  </div>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
