import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-xl text-foreground">
          GRÚAS <span className="text-primary">GIRONA</span>
        </p>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Grúas Girona. Todos los derechos reservados.
        </p>
        <a
          href="tel:+34958560130"
          className="font-body text-sm text-primary flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          958 560 130
        </a>
      </div>
    </footer>
  );
};

export default Footer;
