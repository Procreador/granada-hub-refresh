import { Leaf, FileText, Truck, ClipboardCheck, Recycle, Euro, Car, Bike } from "lucide-react";
import cartelImg from "@/assets/cartel-abandonado.png";
import nieve1Img from "../assets/nieve1.jpg";
import nieve2Img from "../assets/nieve2.jpg";

const steps = [
  { icon: FileText, step: "01", title: "Envía foto y matrícula", desc: "Foto del vehículo y número de matrícula por nuestro chat o formulario." },
  { icon: ClipboardCheck, step: "02", title: "Gestión documental", desc: "Tramitamos la descontaminación y baja definitiva en la DGT. Recibirás la baja en PDF en tu móvil." },
  { icon: Truck, step: "03", title: "Recogida gratuita", desc: "Programamos la grúa para recoger el vehículo en la dirección indicada." },
  { icon: Recycle, step: "04", title: "Traslado al CAT", desc: "El vehículo se traslada al Centro Autorizado de Tratamiento para su descontaminación." },
];

const vehicleTypes = [
  "Turismos",
  "Furgones",
  "Ciclomotores",
  "Motocicletas",
  "Maquinaria industrial",
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
              Recogida y baja definitiva
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Retirada de vehículos y baja definitiva
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              ¿Tienes un vehículo viejo, abandonado o fuera de uso? Nos encargamos de todo: recogemos el vehículo, tramitamos la descontaminación y la baja definitiva en la DGT, y te hacemos llegar la baja en <strong className="text-foreground">PDF directamente a tu número de móvil</strong>.
            </p>
            
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-display text-2xl text-foreground mb-4">Rescate en Sierra Nevada</h4>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Cubrimos también toda la zona de Sierra Nevada para la asistencia y rescate de vehículos averiados o atrapados por la nieve y el hielo. Contamos con el equipamiento y la experiencia necesarios para actuar en condiciones adversas de alta montaña.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={nieve1Img} 
                  alt="Vehículo atrapado en la nieve en Sierra Nevada" 
                  className="rounded-lg shadow-md aspect-video object-cover"
                />
                <img 
                  src={nieve2Img} 
                  alt="Asistencia en carretera en condiciones de nieve" 
                  className="rounded-lg shadow-md aspect-video object-cover"
                />
              </div>
            </div>

            {/* Vehicle types */}
            <div className="bg-card rounded-xl p-5 border border-border mb-6">
              <p className="font-body font-semibold text-foreground mb-3">Tipos de vehículos que recogemos</p>
              <div className="flex flex-wrap gap-2">
                {vehicleTypes.map((type) => (
                  <span key={type} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-body text-sm">
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Pago por vehículos */}
            <div className="bg-eco/10 rounded-xl p-5 border border-eco/30 mb-8">
              <div className="flex items-start gap-3">
                <div className="gradient-eco w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Euro className="w-5 h-5 text-eco-foreground" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground mb-1">¿Tu vehículo tiene menos de 15 años?</p>
                  <p className="font-body text-muted-foreground text-sm">
                    Pagamos <strong className="text-eco text-lg">hasta 300€</strong> por vehículos con menos de 15 años de antigüedad.
                  </p>
                </div>
              </div>
            </div>

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
