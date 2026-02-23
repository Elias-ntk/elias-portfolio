import { useState } from "react";
import videoCalc from "../../assets/video-calculadora.mp4"
import videoOlga from "../../assets/donaolga-1.mp4"
import imgCardDonaOlga from "../../assets/ImgCard-donaolga.png"
import imgCardStrat from "../../assets/ImgCard-estrategiaViral.png"
import imgCardPortfolio from "../../assets/ImgCard-portfolio.png"
import imgCardCalculator from "../../assets/ImgCard-calculator.png"

export const Projects = ({profile, onSelect}) => {
    const projectData = [
        {
            id: 1,
            image: imgCardDonaOlga,
            title: "Web de Negocios",
            category: "hybrid",
            videoUrl: videoOlga,
            fullDesc: "Desarrollo integral de una plataforma de ventas para 'Doña Olga', diseñada bajo una mentalidad de Growth. La solución no solo presenta un menú digital atractivo, sino que optimiza el embudo de ventas mediante una integración directa con WhatsApp Business. Implementé un CMS con Sanity para que el cliente gestione precios y stock en tiempo real sin tocar una línea de código. Se priorizó la velocidad de carga (SEO) y la experiencia de usuario (UX) para maximizar la retención de tráfico orgánico proveniente de redes sociales.",
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
            fullDesc: "Ejecución de una estrategia de Inbound Marketing centrada en la viralización de contenidos orgánicos para productos de Hotmart. El proyecto consistió en la creación de un ecosistema de contenido escalable en TikTok y Reels, utilizando técnicas de copywriting persuasivo y edición dinámica en CapCut. El objetivo fue nutrir un embudo donde la audiencia transita desde el descubrimiento (TOFU) hasta la confianza en la solución, centralizando los puntos de contacto en Beacons para facilitar la compra directa.",
            results: "",
            strategy: {
                tofu: "Capatación de publico con contenido viral en TikTok/Instragram/Facebook",
                mofu: "Beacons links con opciones a compra o página web del producto",
                bofu: "Cierre de ventas vía mensajes privado (instragram) redireccionando al link de compra directa o por beacons en TikTok/Instagram"
            },
            desc: "Optimización de contenido para Instagram, Tiktok, Facebook y Youtube integrando estrategia Inbound para generar un embudo de ventas en hotmart como principal fase atracción (TOFU) luego consideración (MOFU) y terminar con la conversión (BOFU).",
            tags: ["Marketing", "CapCut", "Estrategia", "Organico"],
            Link: "#"
        },
        {
            id: 3,
            image: imgCardPortfolio,
            title: "Portafolio Web",
            category: "dev",
            videoUrl: "",
            fullDesc: "Este portafolio es el resultado de la fusión entre desarrollo moderno y arquitectura de datos. Utilicé React para una interfaz fluida y Tailwind CSS para un diseño oscuro (Dark Mode) de alta gama. La inteligencia del sitio reside en su integración con Sanity CMS, lo que me permite iterar secciones, proyectos y habilidades de forma dinámica. Apliqué conceptos de Prompt Engineering con Gemini para optimizar el código y asegurar que cada componente sea reutilizable y eficiente.",
            results: "",
            desc: "Web desarrollada para potenciar mi carrera en Desarrollo y Growth Marketer implementando el desarrollo en React con Sanity para mejorar la esctructura y actualización de cada título/sección/información que quiera cambiar en un futuro y actualizarlo a mi gusto. ",
            tags: ["React","Tailwind", "Logic", "CMS", "Sanity", "IA","Git"],
            Link: "https://www.eliassegovia.com/"
        },
        {
            id: 4,
            image: imgCardCalculator,
            title: "Calculadora Minimalista",
            category: "dev",
            videoUrl: videoCalc,
            fullDesc: "Un ejercicio de precisión técnica y diseño minimalista. Esta aplicación se centra en la resolución de lógica compleja mediante JavaScript puro (Vanilla JS), gestionando operaciones matemáticas y estados de interfaz de manera eficiente. Implementé un sistema de cambio de tema (Dark/Light Mode) basado en preferencias del sistema y variables CSS, asegurando que el diseño responsivo se adapte perfectamente a cualquier dispositivo mediante Media Queries avanzadas.",
            results: ["100% Responsivo", "Código Limpio", "Logica pura JS"],
            desc: "App desarrollada con html, css y logica pura js integrando modo Claro / Oscuro con estilo minimalista y aplicando media queries para el diseño responsivo de calculadora.",
            tags: ["Logica", "Html", "Css", "Js", "Media Query","Dark", "Light"],
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
              <p className="text-sm text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {project.tags.slice(0, 4).map(tag => (
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