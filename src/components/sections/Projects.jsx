import videoCalc from "../../assets/video-calculadora.mp4"
import videoOlga from "../../assets/donaolga-1.mp4"

export const Projects = ({profile, onSelect}) => {
    const projectData = [
        {
            id: 1,
            title: "Web de Negocios",
            category: "hybrid",
            videoUrl: videoOlga,
            fullDesc: "",
            results: ["+15% Ventas", "5k visitas"],
            strategy: {
                tofu: "Atracción mediante contenido viral en TikTok / Instragram.",
                mofu: "Landing page persuasiva con catálogo en Sanity.",
                bofu: "Cierre de ventas vía WhatsApp Business."
            },
            desc: "Solución potenciada con IA para optimizar ventas mejorando la velocidad de captación y conversión de posibles compradores con buena experiencia de interfaz, menu, y redirección a la venta bia WhatsApp Business con implementacion de Cms con Sanity creando pagina admin para la administacion de productos/precios/categoria",
            tags: ["SEO", "IA", "Growth", "Pixel","Logic", "React", "Css", "Js", "Bootstrap", "Git", "CMS", "Sanity"],
            Link: "https://donaolga.vercel.app/"
        },
        {
            id: 2,
            title: "Estrategia Growth Viral",
            category: "growth",
            videoUrl: "",
            fullDesc: "",
            results: "",
            strategy: {
                tofu: "Capatación de publico con contenido viral en TikTok/Instragram/Facebook",
                mofu: "Beacons links con opciones a compra o página web del producto",
                bofu: "Cierre de ventas vía mensajes privado (instragram) redireccionando al link de compra directa o por beacons en TikTok/Instagram"
            },
            desc: "Optimización de contenido para Instagram, Tiktok, Facbook y Youtube integrando estrategia Inbound para generar un embudo de ventas en hotmart como principal fase atracción (TOFU) luego consideración (MOFU) y terminar con la conversión (BOFU).",
            tags: ["Marketing", "CapCut", "Strat", "Organic"],
            Link: "#"
        },
        {
            id: 3,
            title: "Portafolio Web",
            category: "dev",
            videoUrl: "",
            fullDesc: "",
            results: "",
            desc: "Web desarrollada para potenciar mi carrera en Desarrollo y Growth Marketer implementando el desarrollo en React con Sanity para mejorar la esctructura y actualización de cada título/sección/información que quiera cambiar en un futuro y actualizarlo a mi gusto. ",
            tags: ["React","Tailwind", "Logic", "CMS", "Sanity", "IA","Git"],
            Link: "https://www.eliassegovia.com/"
        },
        {
            id: 4,
            title: "Calculadora Minimalista",
            category: "dev",
            videoUrl: videoCalc,
            fullDesc: "",
            results: ["100% Responsivo", "Código Limpio", "Logica pura JS"],
            desc: "App desarrollada con html, css y logica pura js integrando modo Claro / Oscuro con estilo minimalista y aplicando media queries para el diseño responsivo de calculadora.",
            tags: ["Logic", "Html", "Css", "Js", "Media Query","Dark", "Light"],
            Link: "https://calculator-2022-2d357.web.app/"
        }
    ];

    const filteredProjects = projectData.filter(project =>{
        if (profile == 'all' || profile == 'hybrid') return true;
        return project.category === profile;
    });

    return (
        <section className="py-20 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-widest">
                Proyectos <span className="text-accent underline">Destacados</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                <div 
                    key={project.id}
                    onClick={() => onSelect(project)}
                    className="group cursor-pointer hover:-translate-y-1 hover:bg-white/10 bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-accent/50 transition-all shadow-xl"
                >
                    <div className="h-48 bg-white/10 rounded-xl mb-6 overflow-hidden">
                    {/* Aquí irá una imagen de Photoshop/Canva después */}
                        <div className="w-full h-full flex items-center justify-center text-gray-500 italic">
                            Vista previa proyecto
                        </div>
                    </div>
                    
                    <span className="text-xs font-bold text-accent uppercase tracking-widest">
                    {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                    <p className="text-sm text-gray-400 mb-6">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-white/10 px-2 py-1 rounded">
                        {tag}
                        </span>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}