export const Services = () => {
    const services = [
        {
            category: "dev",
            title: "Desarrollo Web & Apps",
            desc: "Creación de sitios webs modernos con React y Tailwind. Enfoque en velocidad, SEO y diseño responsivo para que tu negocio destaque",
            icon: "💻",
            tags: ["Webs", "Diseño", "Velocidad", "React", "Tailwind", "Sanity CMS"]
        },
        {
            category: "growth",
           title: "Growt Marketing & Contenido",
            desc: "Estrategias TOFU/MOFU/BOFU para embudos de ventas. Edición de video viral en CapCut para potenciar tu marca en redes sociales",
            icon: "🚀",
            tags: ["Estrategia", "Ads", "Edición", "CapCut", "Embudo de Ventas", "Contenido Viral"] 
        },
        {
            category: "hybrid",
            title: "Automatización & IA",
            desc: "Implementación de IA para optimizar procesos de venta y captación de clientes de forma automática y eficiente.",
            icon: "🤖",
            tags: ["IA", "Logica", "Eficiencia"] 
        }
    ];

   return (
    <section id="servicios" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black  mb-4">
          Mis <span className="text-blueL hover:drop-shadow-[0_0_20px_rgb(0,255,247,0.6)] transition-all duration-400 drop-shadow-[0_0_15px_rgb(0,255,247,0.6)]">Servicios</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Soluciones integrales que combinan ingeniería y marketing para transformar la visión de tu negocio en realidad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          // Lógica de WhatsApp: Reemplaza TU_NUMERO por tu número real (ej: 5491122334455)
          const whatsappUrl = `https://wa.me/5491149178321?text=${encodeURIComponent(
            `Hola Elias! Vi tu portfolio y me interesa el servicio de: ${service.title}`
          )}`;

          return (
            <a 
              key={index}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col cursor-pointer p-8 rounded-3xl border border-white/10 hover:border-blueL/50 hover:shadow-[0_0_55px_rgb(0,255,247,0.2)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Efecto de luz de fondo */}
              <div className="absolute right-0 top-1 w-80 h-40 bg-blueL/20 rounded-full blur-[100px] 
                  transition-all duration-[1500ms] ease-in-out
                  group-hover:top-1/1 group-hover:bg-blueL/30 group-hover:scale-110 
                  pointer-events-none"></div>
              
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {service.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-3 py-1 rounded-full border border-gray-600 text-gray-600 font-bold" >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Contenedor con mt-auto para alinear al fondo */}
              <div className="mt-auto pt-8">
                <div className="flex items-center justify-between">
                  <span className="text-sm group-hover:text-blueL/50 text-gray-400 tracking-widest transition-colors duration-300">
                    Me Interesa
                  </span>
                  
                  <div className="w-10 h-10 flex items-center justify-center transition-all duration-300">
                    <span className="text-gray-400 group-hover:text-blueL/50 transform group-hover:translate-x-1.5 transition-all text-xl">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}