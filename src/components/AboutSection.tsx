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

        <div className="space-y-6 font-body text-muted-foreground leading-relaxed text-left md:text-center">
          <p>
            En Girona Assistance entendemos que una incidencia en carretera no es solo un problema mecánico, sino también un momento de tensión en el que la rapidez, la confianza y la tranquilidad marcan la diferencia. Por eso trabajamos cada día para ofrecer en Granada un servicio de asistencia en carretera serio, eficaz y cercano.
          </p>
          <p>
            Juan Miguel Girona lidera este proyecto con una visión clara: ofrecer un servicio basado en la responsabilidad, la atención personalizada y el compromiso real con cada cliente y con el medio ambiente.
          </p>
          <p>
            Esa forma de entender el servicio es la que define a Girona Assistance. No se trata solo de acudir, sino de hacerlo con implicación, experiencia y capacidad de respuesta, cuidando cada detalle para que el cliente se sienta respaldado desde el primer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
