const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-card">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary font-medium mb-2">
          Nosotros
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
          Juan Miguel Girona
        </h2>
        <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-8">Director General</p>

        <div className="flex flex-col md:flex-row items-center gap-12 text-left">
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 mx-auto md:mx-0">
            <img 
              src="/director.jpg" 
              alt="Juan Miguel Girona - Director General" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-500"
            />
          </div>
          <div className="space-y-6 font-body text-muted-foreground leading-relaxed flex-1">
            <p>
              En Grúas Girona entendemos que una incidencia en carretera no es solo un problema mecánico, sino también un momento de tensión en el que la rapidez, la confianza y la tranquilidad marcan la diferencia. Por eso trabajamos cada día para ofrecer en Granada un servicio de asistencia en carretera serio, eficaz y cercano.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Llevamos años al lado de conductores particulares, transportistas y flotas de empresa. Nuestro equipo de profesionales no solo cuenta con la formación técnica necesaria, sino también con una vocación de ayuda innegable. Para nosotros, cada aviso es una prioridad absoluta.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Esa forma de entender el servicio es la que define a Grúas Girona. No se trata solo de acudir, sino de hacerlo con implicación, experiencia y capacidad de respuesta, cuidando cada detalle para que el cliente se sienta respaldado desde el primer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
