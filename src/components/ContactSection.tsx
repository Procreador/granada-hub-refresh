import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium mb-2 text-center">
          Contacto
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-center text-foreground mb-16">
          Solicita presupuesto sin compromiso
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <a href="tel:+34958560130" className="flex items-start gap-4 group">
              <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Teléfono 24h</p>
                <p className="font-display text-3xl text-foreground group-hover:text-primary transition-colors">958 560 130</p>
              </div>
            </a>

            <a href="https://wa.me/34627238138?text=LLAMADA%20DE%20WEB%20-%20Solicito%20presupuesto" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
              <div className="bg-eco w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-eco-foreground" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">WhatsApp Auxilio</p>
                <p className="font-display text-3xl text-foreground group-hover:text-eco transition-colors">627 238 138</p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Email</p>
                <p className="font-body text-lg text-foreground">info@gruasgirona.com</p>
                <p className="font-body text-lg text-foreground">contacto@gruasgirona.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground">Zona de cobertura</p>
                <p className="font-body text-lg text-foreground">Granada y área metropolitana</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form 
            action="https://formsubmit.co/formulario@gruasgirona.com" 
            method="POST" 
            className="space-y-4"
          >
            {/* Campos ocultos de configuración de FormSubmit */}
            <input type="hidden" name="_subject" value="Nuevo mensaje de la web - Grúas Girona!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <input
              type="text"
              name="Nombre"
              required
              placeholder="Nombre"
              className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              name="Telefono"
              required
              placeholder="Teléfono"
              className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="Email"
              required
              placeholder="Email"
              className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select 
              name="Tipo de Vehiculo"
              className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="No especificado">Tipo de vehículo</option>
              <option value="Turismo">Turismo</option>
              <option value="Motocicleta">Motocicleta</option>
              <option value="Furgoneta">Furgoneta</option>
              <option value="4x4 / SUV">4x4 / SUV</option>
              <option value="Maquinaria">Maquinaria</option>
              <option value="Otro">Otro</option>
            </select>
            <textarea
              name="Mensaje"
              required
              placeholder="Mensaje"
              rows={4}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="w-full gradient-primary text-primary-foreground py-4 rounded-lg font-body font-bold text-lg shadow-glow hover:opacity-90 transition-opacity"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
