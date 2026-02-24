import { Link } from "react-router-dom";
import { Heart, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-purple-gradient text-primary-foreground">
    <div className="container-narrow section-padding">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">
            Purple<span className="text-gradient-gold">Bliing</span>
          </h3>
          <p className="text-sm opacity-80 leading-relaxed max-w-xs">
            Elegant planning. Flawless execution. Unforgettable memories.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {["About", "Services", "Portfolio", "Packages", "Contact"].map((l) => (
              <li key={l}>
                <Link to={`/${l.toLowerCase()}`} className="hover:opacity-100 transition-opacity">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-center gap-2"><Mail size={16} /> hello@purplebliing.com</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Instagram size={16} /> @purplebliing</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-60">
        <p className="flex items-center justify-center gap-1">
          Made with <Heart size={14} className="text-gold" /> by PurpleBliing © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
