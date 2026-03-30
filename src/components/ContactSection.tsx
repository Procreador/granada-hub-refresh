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
                <svg className="w-6 h-6 text-eco-foreground fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.415 0 12.054c0 2.123.551 4.2 1.602 6.035L0 24l6.101-1.6c1.776.968 3.774 1.479 5.811 1.479h.005c6.635 0 12.05-5.414 12.052-12.053 0-3.217-1.253-6.241-3.526-8.514z" />
                </svg>
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
            action="https://formsubmit.co/contacto@gruasgirona.com" 
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
