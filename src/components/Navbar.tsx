import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Desguace", href: "#desguace" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" className="font-display text-2xl tracking-wider text-foreground">
          GRÚAS <span className="text-primary">GIRONA</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+34958560130"
            className="gradient-primary text-primary-foreground px-5 py-2 rounded-md font-body font-semibold flex items-center gap-2 shadow-glow hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            958 560 130
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-body font-medium tracking-widest uppercase text-muted-foreground hover:text-primary py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+34958560130"
            className="gradient-primary text-primary-foreground px-5 py-3 rounded-md font-body font-semibold flex items-center justify-center gap-2 shadow-glow"
          >
            <Phone className="w-4 h-4" />
            958 560 130
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
