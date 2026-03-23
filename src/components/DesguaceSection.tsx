import { Leaf, FileText, Truck, ClipboardCheck, Recycle } from "lucide-react";
import cartelImg from "@/assets/cartel-abandonado.png";

const steps = [
  { icon: FileText, step: "01", title: "Envía foto y matrícula", desc: "Foto del vehículo y número de matrícula por nuestro chat o formulario." },
  { icon: ClipboardCheck, step: "02", title: "Gestión documental", desc: "Nos encargamos de la baja definitiva en la DGT y toda la documentación legal." },
  { icon: Truck, step: "03", title: "Recogida gratuita", desc: "Programamos la grúa para recoger el vehículo en la dirección indicada." },
  { icon: Recycle, step: "04", title: "Traslado al CAT", desc: "El vehículo se traslada al Centro Autorizado de Tratamiento para su descontaminación." },
];

const DesguaceSection = () => {
  return (
    <section id="desguace" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-card">
            <img
              src={cartelImg}
              alt="Retirada de vehículos abandonados - Compromiso medioambiental"
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="absolute top-4 left-4">
              <div className="gradient-eco px-4 py-2 rounded-full flex items-center gap-2">
                <Leaf className="w-4 h-4 text-eco-foreground" />
                <span className="font-body font-semibold text-sm text-eco-foreground">Compromiso medioambiental</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-eco font-medium mb-2">
              Nuevo servicio
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Retirada de vehículos abandonados
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              ¿Tienes un coche abandonado en un solar, garaje o vía pública? Nos encargamos de todo: gestión de la baja definitiva en la DGT, retirada con grúa y traslado al Centro Autorizado de Tratamiento (CAT).{" "}
              <strong className="text-foreground">Servicio completamente gratuito</strong> para el propietario del vehículo en Granada y alrededores.
            </p>

            {/* Documentación */}
            <div className="bg-card rounded-xl p-5 border border-border mb-8">
              <p className="font-body font-semibold text-foreground mb-3">Documentación necesaria</p>
              <ul className="space-y-2 font-body text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  DNI/NIE del titular
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Ficha técnica del vehículo
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Permiso de circulación
                </li>
              </ul>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-2 gap-4">
              {steps.map(({ icon: Icon, step, title, desc }) => (
                <div key={step} className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-display text-2xl text-primary">{step}</span>
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <p className="font-body font-semibold text-foreground text-sm mb-1">{title}</p>
                  <p className="font-body text-xs text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesguaceSection;
