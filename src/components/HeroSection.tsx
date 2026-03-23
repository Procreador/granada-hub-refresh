import { Phone, MessageCircle, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Carretera en Granada al atardecer" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium mb-4">
          Tracción y Custodia en el Sur
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6 text-foreground">
          Asistencia en carretera y gestión de vehículos en{" "}
          <span className="text-gradient-primary">Granada</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Transporte de coches, motos y maquinaria. Retirada de vehículos abandonados. Servicio 24h en Granada y área metropolitana.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          {/* Auxilio Ahora - WhatsApp + Llamada */}
          <div className="flex rounded-lg overflow-hidden shadow-glow">
            <a
              href="tel:+34627238138"
              className="gradient-primary text-primary-foreground px-6 py-4 font-body font-bold text-lg flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              AUXILIO AHORA
            </a>
            <a
              href="https://wa.me/34627238138?text=LLAMADA%20DE%20WEB%20-%20Necesito%20asistencia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-eco text-eco-foreground px-4 py-4 font-body font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
          <a
            href="#servicios"
            className="bg-secondary text-secondary-foreground px-6 py-4 rounded-lg font-body font-semibold text-lg flex items-center gap-3 hover:bg-secondary/80 transition-colors"
          >
            <MapPin className="w-5 h-5" />
            VER SERVICIOS
          </a>
        </div>

        {/* Stats - Only 24/7 and Granada */}
        <div className="grid grid-cols-2 max-w-md gap-4">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-5 border border-border">
            <p className="font-display text-4xl text-primary">24/7</p>
            <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">Disponibilidad</p>
          </div>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-5 border border-border">
            <p className="font-display text-4xl text-primary">Granada</p>
            <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">y alrededores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
