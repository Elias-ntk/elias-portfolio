import { useState } from "react";
import videoCalc from "../../assets/video-calculadora.mp4"
import videoOlga from "../../assets/donaolga-1.mp4"
import imgCardDonaOlga from "../../assets/ImgCard-donaolga.png"
import imgCardStrat from "../../assets/ImgCard-estrategiaViral.png"
import imgCardPortfolio from "../../assets/ImgCard-portfolio.png"
import imgCardCalculator from "../../assets/ImgCard-calculator.png"
import imgDato1 from "../../assets/Dato1.png"
import imgDato2 from "../../assets/Dato2.png"
import imgDato3 from "../../assets/Dato3.png"
import imgDato4 from "../../assets/Dato4.png"
import imgDato4_4 from "../../assets/Dato4-4.png"
import imgCapcutEdicion from "../../assets/imgEstrategia1.png"
import imgMockupBeacons from "../../assets/imgBeacons.png"
import imgGraficoInstagram from "../../assets/imgGraficoInstagram.png"
import imgVsCode from "../../assets/imgVsCode.png"



export const Projects = ({profile, onSelect}) => {
    const projectData = [
        {
            id: 1,
            image: imgCardDonaOlga,
            title: "Web de Negocios",
            category: "hybrid",
            videoUrl: videoOlga,
            fullDesc: "Desarrollo integral de una plataforma de ventas para *'Doña Olga'*, diseñada bajo una *mentalidad de Growth*. La solución no solo presenta un menú digital atractivo, sino que optimiza el *embudo de ventas* mediante una integración directa con *WhatsApp Business*. Implementé un CMS con *Sanity* para que el cliente gestione precios y stock en *tiempo real*. Se priorizó la *velocidad de carga (SEO)* y la experiencia de usuario para maximizar la retención de tráfico orgánico.",
            dato1: {
                titulo: "UX de Conversión: Personalización de Pedido",
                descripcion: "Diseñé e implementé un *módulo de detalle de producto* de alta fidelidad. La interfaz permite una visualización dinámica mediante un *slider de imágenes* y descripción gastronómica optimizada para generar deseo. La innovación técnica radica en un *sistema de filtrado de ingredientes*: el usuario puede excluir componentes (ej. 'sin cebolla') mediante una lógica de estados en React, asegurando que la preferencia llegue limpia al carrito. Finalmente, incluí un *stepper de cantidad* y un CTA (Call to Action) de alto contraste para maximizar el *Average Order Value (AOV)*.",
                images: [imgDato1]
            },
            dato2: { 
                titulo: "Arquitectura de Carrito: UX Híbrida y Retención",
                descripcion: "Desarrollé un *sistema de checkout fluido* diseñado para minimizar el abandono de carrito. En desktop, implementé un *Side-Drawer* de apertura automática que permite al usuario seguir navegando sin perder el contexto visual de su compra. Para la versión mobile, diseñé un *Bottom Sheet interactivo* con lógica de gestos: al deslizar hacia abajo, el carrito entra en un *modo 'Mini-Cart' (20% de visibilidad)* que mantiene el total y el CTA de pago siempre presentes (Sticky Cart), mejorando el *puntuaje de accesibilidad*. El componente soporta scroll interno para la revisión de productos y una transición limpia hacia la pasarela de confirmación, optimizando el flujo hasta la conversión final.",
                images: [imgDato2]
            },
            dato3: { 
                titulo: "Expansión B2B: Módulo de Pedidos Corporativos y Catering", 
                descripcion: "Diseñé e integré una sección estratégica de *'Orden Grande'* para captar clientes de alto volumen (empresas y eventos). Implementé un *formulario de calificación de leads* dividido en tres etapas lógicas: identificación del cliente, logística del evento (mediante selectores de tipo de catering y fecha) y especificaciones del pedido. Técnicamente, optimicé la *interfaz de usuario (UI)* para que la carga de grandes pedidos sea sencilla, reduciendo la fricción en la toma de requerimientos complejos. Esta funcionalidad transforma la web de un simple menú digital en una *herramienta de generación de prospectos* para eventos de gran escala, aumentando el potencial de facturación del negocio.", 
                images: [imgDato3] 
            },
            dato4: { 
                titulo: "Gestión Autónoma: CMS Integrado con Sanity", 
                descripcion: "Para garantizar la integridad y autonomía del negocio, desarrollé un sistema de gestión privado mediante *Sanity CMS* con un *módulo de autenticación (Login)* seguro. El panel permite un control total sobre el catálogo: desde la creación y eliminación de *categorías dinámicas* hasta la edición profunda de productos. Implementé funciones para modificar descripciones, ajustar precios y gestionar *galerías de imágenes múltiples* por producto. Esta infraestructura permite que el cliente mantenga la oferta actualizada sin dependencia técnica, facilitando la escalabilidad del menú y garantizando que los cambios se reflejen de forma inmediata en la web mediante *Webhooks*.", 
                images: [imgDato4, imgDato4_4] 
            },
            results: ["+15% Ventas", "5k visitas"],
            strategy: {
                tofu: "Atracción mediante contenido viral en TikTok / Instragram.",
                mofu: "Landing page persuasiva con catálogo en Sanity.",
                bofu: "Cierre de ventas vía WhatsApp Business."
            },
            desc: "Landing con CMS Sanity que elimina la fricción en ventas, automatizando pedidos vía WhatsApp.",
            tags: ["React","CMS", "IA", "SEO", "Growth", "Pixel","Logica", "Css", "Js", "Bootstrap", "Git", "Sanity"],
            Link: "https://donaolga.vercel.app/"
        },
        {
            id: 2,
            image: imgCardStrat,
            title: "Estrategia Growth Viral",
            category: "growth",
            videoUrl: "",
            fullDesc: "Ejecución de una estrategia de *Inbound Marketing* centrada en la *viralización de contenidos orgánicos* para productos de *Hotmart*. El proyecto consistió en la creación de un *ecosistema de contenido escalable* en TikTok y Reels, utilizando técnicas de *copywriting persuasivo* y *edición dinámica* en CapCut. El objetivo fue nutrir un *embudo* donde la audiencia transita desde el descubrimiento (*TOFU*) hasta la confianza en la solución, centralizando los puntos de contacto en *Beacons* para facilitar la *compra directa*.",
            dato1: {
                titulo: "Curación de Contenido y Narrativa con IA",
                descripcion: "Diseñé una línea estética de *contenido de alto impacto* utilizando *CapCut*, enfocada en los primeros 3 segundos (*Hooks*) para vencer el scroll infinito. Implementé *subtítulos dinámicos*, transiciones rítmicas y *storytelling visual* para maximizar el tiempo de reproducción (*Watch Time*), factor determinante en el *algoritmo* de TikTok e Instagram. Esta estrategia no solo buscaba vistas, sino segmentar a una audiencia con *intención de compra* mediante *copywriting persuasivo*.",
                images: [imgCapcutEdicion]
              },
              dato2: {
                titulo: "Arquitectura del Embudo: Conversión Multi-plataforma",
                descripcion: "Implementé un ecosistema de *Inbound Marketing* para centralizar el *tráfico orgánico* proveniente de Reels y TikTok. Utilicé *Beacons* como puente estratégico (*Landing de enlaces*), optimizando la navegación hacia diferentes ofertas de *Hotmart*. Esta estructura permitió trackear el interés del usuario y ofrecerle dos caminos: la *compra directa (BOFU)* o la *nutrición de confianza (MOFU)*, reduciendo la pérdida de prospectos en el proceso de redirección.",
                images: [imgMockupBeacons]
              },
              dato3: {
              titulo: "Copywriting de Cierre y Gestión de Objeciones",
              descripcion: "Desarrollé un *protocolo de cierre de ventas* mediante mensajes directos (*DM*) y comentarios. La estrategia consistió en transformar el interés pasivo en una *acción de compra*, utilizando *gatillos mentales* como la *escasez y la urgencia*. Al responder dudas técnicas y derribar objeciones en tiempo real, logré optimizar la *tasa de conversión* del embudo, asegurando que el *tráfico cualificado* finalizara en el checkout.",
              images: [imgGraficoInstagram]
            },
            results: ["+70K Vistas Orgánicas", "7000% Crecimiento Algorítmico", "Optimización Inbound (Beacons)", "Lead Generation Automatizado"],
            strategy: {
                tofu: "Capatación de publico con contenido viral en TikTok/Instragram/Facebook",
                mofu: "Beacons links con opciones a compra o página web del producto",
                bofu: "Cierre de ventas vía mensajes privado (instragram) redireccionando al link de compra directa o por beacons en TikTok/Instagram"
            },
            desc: "Embudo Inbound en Hotmart con contenido viral, optimizando la conversión desde el TOFU hasta el checkout.",
            tags: ["Marketing", "CapCut", "Estrategia", "Organico"],
            Link: "#"
        },
        {
            id: 3,
            image: imgCardPortfolio,
            title: "Arquitectura de Marca Personal & CMS",
            category: "dev",
            videoUrl: "",
            fullDesc: "Este portafolio es el resultado de la *fusión entre desarrollo moderno y arquitectura de datos*. Utilicé *React* para una interfaz fluida y *Tailwind CSS* para un diseño oscuro (*Dark Mode*) de alta gama. La inteligencia del sitio reside en su integración con *Sanity CMS*, lo que me permite *iterar secciones, proyectos y habilidades* de forma dinámica. Apliqué conceptos de *Prompt Engineering con Gemini* para optimizar el código y asegurar que cada componente sea *reutilizable y eficiente*.",
            dato1: { 
                titulo: "Ingeniería de Prompts & Desarrollo Ágil",
                descripcion: "El desarrollo de este portafolio integró conceptos avanzados de *Prompt Engineering con Gemini* para la generación y optimización de código en *React*. Esta metodología me permitió resolver problemas lógicos complejos y estructurar componentes escalables en tiempo récord. Al actuar como *arquitecto de software asistido por IA*, logré reducir los tiempos de depuración y asegurar que cada funcionalidad, desde el *filtrado dinámico* hasta las animaciones, cumpla con los *estándares de rendimiento* actuales.",
                images: [imgVsCode] 
            },
            dato2: { 
                titulo: "Gestión Dinámica con Sanity CMS",
                descripcion: "Implementé una *arquitectura Full-Stack* utilizando *Sanity.io* como *gestor de contenidos descentralizado*. Configuré esquemas de datos personalizados que permiten la actualización en tiempo real de proyectos, habilidades y métricas sin necesidad de desplegar código nuevamente. Esta estructura *Headless* garantiza que la web sea totalmente flexible, permitiéndome iterar mi marca personal y mi catálogo de trabajos de forma ágil y centralizada a través de una *API robusta*.",
                images: [] 
            },
            dato3: { 
                titulo: "Estética y Performance (Front-end)",
                descripcion: "Diseñé una interfaz de alta gama con un enfoque en *Dark Mode*, utilizando *Tailwind CSS* para una estilización precisa y ligera. El sitio fue optimizado para obtener un *100% en Lighthouse*, asegurando tiempos de carga mínimos y una experiencia de usuario fluida en cualquier dispositivo. Apliqué principios de *diseño adaptativo (Mobile First)* para garantizar que mi portafolio sea una *herramienta de conversión* efectiva tanto para reclutadores técnicos como para clientes de marketing.",
                images: [] 
            },
            results: [
                "Arquitectura Full-Stack Headless", 
                "Gestión de Contenido Dinámica", 
                "Optimización SEO & Performance", 
                "Conversión de Marca Personal"
            ],
            strategy: {
                tofu: "Captación orgánica mediante contenido en redes sociales y optimización SEO para visibilidad profesional.",
                mofu: "Exhibición de proyectos detallados y casos de éxito (Case Studies) para validar autoridad técnica y estratégica.",
                bofu: "Cierre de contacto directo vía enlace de WhatsApp o LinkedIn, facilitando la contratación o colaboración."
            },
            desc: "Arquitectura Full-Stack integrada con CMS, optimizada para el personal branding y el despliegue de estrategias de Growth",
            tags: ["React","Tailwind", "Logic", "CMS", "Sanity", "IA","Git"],
            Link: "https://www.eliassegovia.com/"
        },
        {
            id: 4,
            image: imgCardCalculator,
            title: "Calculadora Minimalista",
            category: "dev",
            videoUrl: videoCalc,
            fullDesc: "Un ejercicio de *precisión técnica y diseño minimalista*. Esta aplicación se centra en la resolución de *lógica compleja mediante JavaScript puro (Vanilla JS)*, gestionando operaciones matemáticas y estados de interfaz de manera eficiente. Implementé un sistema de *cambio de tema (Dark/Light Mode)* basado en preferencias del sistema y variables CSS, asegurando que el *diseño responsivo* se adapte perfectamente a cualquier dispositivo mediante *Media Queries avanzadas*.",
            dato1: { 
              titulo: "Arquitectura de Lógica Nativa",
              descripcion: "Desarrollé la lógica integral utilizando *JavaScript Vanilla (ES6+)*, prescindiendo de librerías externas para demostrar un dominio sólido de los *fundamentos de programación*. Implementé funciones para el manejo de operaciones aritméticas complejas, validación de entradas y *gestión de estados* en tiempo real, asegurando un funcionamiento preciso y eficiente en cada cálculo.",
              images: ["imgCalcLogic"] // Captura de la función de calcular en JS
          },
          dato2: { 
              titulo: "Experiencia de Usuario (UI/UX)",
              descripcion: "Diseñé una interfaz bajo una estética *minimalista y funcional*, priorizando la legibilidad y la facilidad de uso. Implementé un sistema de *temas dinámicos (Light/Dark Mode)* que se adapta a las preferencias del usuario, utilizando variables de CSS para una transición fluida. El enfoque fue crear una herramienta que no solo sea útil, sino visualmente atractiva y coherente con estándares de *diseño moderno*.",
              images: ["imgCalcThemes"] // Captura comparativa Modo Claro vs Oscuro
          },
          dato3: { 
              titulo: "Adaptabilidad y Estructura",
              descripcion: "Utilicé *CSS Grid y Flexbox* para garantizar que la calculadora sea totalmente *responsiva*, manteniendo su estructura y proporciones en cualquier tamaño de pantalla. Mediante el uso estratégico de *Media Queries*, logré una experiencia *Mobile First* impecable, demostrando capacidad para maquetar interfaces complejas que conservan su integridad visual y funcional en dispositivos móviles y de escritorio.",
              images: ["imgCalcResponsive"] // Captura de la calculadora en versión mobile
          },
            results: ["100% Responsivo", "Código Limpio", "Logica pura JS"],
            strategy: {
              tofu: "Investigación de algoritmos matemáticos y lógica de programación básica para estructurar el flujo de datos inicial.",
              mofu: "Desarrollo iterativo de la interfaz de usuario priorizando la jerarquía visual y la respuesta inmediata a la interacción del usuario.",
              bofu: "Refactorización de código y optimización de Media Queries para asegurar una herramienta funcional y accesible en cualquier entorno digital."
          },
            desc: "Calculadora minimalista con lógica pura en JavaScript, optimizada con Modo Oscuro y diseño Adaptive mediante Media Queries.",
            tags: ["Logica", "Js", "Css", "Html", "Media Query","Dark", "Light"],
            Link: "https://calculator-2022-2d357.web.app/"
        }
    ];

    const filteredProjects = projectData.filter(project =>{
        if (profile == 'all' || profile == 'hybrid') return true;
        return project.category === profile;
    });

    return (
        <section id="experiencia" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-black mb-12 text-center">
        <span className="text-blueL drop-shadow-[0_0_15px_rgba(0,255,247,0.5)] hover:drop-shadow-[0_0_20px_rgba(0,255,247,0.5)] transition-all duration-400">
          Experiencia
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelect(project)}
            className="group relative h-[450px] overflow-hidden cursor-pointer rounded-3xl  transition-all duration-500 hover:border-blueL/50"
          >
            {/* IMAGEN DE FONDO: Cubre toda la tarjeta */}
            <div className="absolute inset-0">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-b from-gray-800 to-darkBg flex items-center justify-center italic text-gray-500">
                  Sin imagen
                </div>
              )}
              {/* Overlay Gradiente: Oscurece la base para que el texto se lea */}
              <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-darkBg/90 to-transparent opacity-0 group-hover:opacity-94 transition-opacity transition-all duration-600" />
            </div>

            {/* CONTENIDO: Posicionado al fondo */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-[10px] font-bold text-blueL uppercase tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.category}
              </span>
              <h3 className="text-2xl font-black text-white mb-2 leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 line-clamp-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-[9px] px-2 py-1 rounded-full bg-accent/5 backdrop-blur-md border border-accent/20 text-accent font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            
          </div>
        ))}
      </div>
    </section>
    );
}