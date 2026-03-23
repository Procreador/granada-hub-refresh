import { Wrench, Truck, Clock } from "lucide-react";
import gruaImg from "@/assets/grua-lateral.png";
import pickupImg from "@/assets/pickup-girona.png";
import desguaceImg from "@/assets/desguace.png";
import tallerImg from "@/assets/taller.png";

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Clock className="w-5 h-5 text-primary" />
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium text-center">
            Servicio 24 horas · Granada y provincia
          </p>
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-center text-foreground mb-16">
          Servicio de Grúa y Taller
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Servicio de Grúa */}
          <div className="group rounded-2xl overflow-hidden border border-border bg-background hover:border-primary/50 transition-colors shadow-card">
            <div className="relative h-64 overflow-hidden">
              <img
                src={gruaImg}
                alt="Grúa Girona - Servicio de grúa plataforma 24 horas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-body text-xs font-bold tracking-wider">24H</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-3xl text-foreground mb-3">Servicio de Grúa</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Grúa plataforma para cualquier tipo de vehículo. Traslado seguro a taller o destino indicado. Transporte de coches, motos y maquinaria en toda la provincia de Granada y nacional. <strong className="text-foreground">Disponible 24 horas, los 365 días del año.</strong>
              </p>
            </div>
            <div className="px-6 pb-6">
              <img
                src={pickupImg}
                alt="Pickup Grúas Girona"
                className="w-full h-48 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Taller */}
          <div className="group rounded-2xl overflow-hidden border border-border bg-background hover:border-primary/50 transition-colors shadow-card">
            <div className="relative h-64 overflow-hidden">
              <img
                src={tallerImg}
                alt="Taller de reparaciones Grúas Girona"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-3xl text-foreground mb-3">Taller</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Reparaciones mecánicas completas. Nuestro taller cuenta con equipamiento profesional y un equipo técnico cualificado para resolver cualquier avería.
              </p>
            </div>
            <div className="px-6 pb-6">
              <img
                src={desguaceImg}
                alt="Desguace Grúas Girona"
                className="w-full h-48 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
