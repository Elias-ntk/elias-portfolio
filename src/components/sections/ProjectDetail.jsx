import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";

export const ProjectDetail = ({ project, onBack }) => {
  const renderFormattedText = (text) => {
    if (!text) return "";
    const parts = text.split(/(\*.*?\*)/g);
    return parts.map((part, i) => 
      part.startsWith("*") && part.endsWith("*") ? (
        <span key={i} className="text-blueL font-bold">
          {part.replace(/\*/g, "")}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="py-20 px-4 max-w-3xl mx-auto animate-fadeIn">
      {/* Botón Volver - Tamaño controlado */}
      <button 
        onClick={onBack} 
        className="group mb-10 mt-5 flex items-center gap-2 px-4 py-2 rounded-full bg-blueL/10 border border-blueL/20 text-blueL hover:bg-blueL hover:text-darkBg transition-all duration-300 cursor-pointer shadow-none"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] font-black uppercase tracking-widest">Volver</span>
      </button>

      {/* Cabecera sin imagen principal */}
      <header className="mb-10">
        <span className="text-blueL font-bold text-[9px] uppercase tracking-[0.3em] bg-blueL/10 px-3 py-1 rounded-full border border-blueL/20">
          {project.category}
        </span>
        <h1 className="text-4xl font-black mt-4 mb-6 text-white leading-tight">
          {project.title}
        </h1>
        <div className="text-gray-400 text-base leading-relaxed">
          {renderFormattedText(project.fullDesc || project.desc)}
        </div>
      </header>

      <div className="space-y-12">
        {/* Acciones: Botón Visitar pequeño */}
        {project.Link && project.Link !== "#" && (
          <div className="pb-4 border-b border-white/5">
            <a 
              href={project.Link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blueL/10 border border-blueL/30 px-6 py-3 rounded-full font-black text-blueL uppercase tracking-widest text-[10px] hover:bg-blueL hover:text-darkBg transition-all duration-300 group"
            >
              Visitar Proyecto
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        )}

        {/* Estrategia y Resultados - Layout compacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.strategy && (
            <div className="p-6 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-sm font-black text-blueL uppercase italic">Estrategia Growth</h3>
              <div className="space-y-3">
                {[{ l: "TOFU", d: project.strategy.tofu }, { l: "MOFU", d: project.strategy.mofu }, { l: "BOFU", d: project.strategy.bofu }].map((step) => (
                  <div key={step.l} className="pl-3 border-l border-white/10">
                    <span className="block text-[8px] font-black text-blueL/60">{step.l}</span>
                    <p className="text-gray-300 text-xs leading-snug">{step.d}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.results && project.results.length > 0 && (
            <div className="space-y-3">
               <h3 className="text-sm font-black text-white uppercase italic ml-2">Resultados</h3>
              {project.results.map((res, index) => (
                <div key={index} className="p-3 border border-white/10 rounded-xl flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-blueL" />
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{res}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Secciones de Detalle (Dato 1, 2, 3) */}
        {[project.dato1, project.dato2, project.dato3, project.dato4].map((dato, index) => (
          dato && dato.titulo && (
            <div key={index} className="flex flex-col gap-6 py-8 border-t border-white/5">
              {/* Imagen del Dato - Sin sombras, tamaño máximo md */}
              <div className="space-y-3">
                <h3 className="text-xl font-black text-white italic">{dato.titulo}</h3>
                <div className="text-gray-400 leading-relaxed text-sm">
                  {renderFormattedText(dato.descripcion)}
                </div>
              </div>
              {/*Contenedor de Imagenes - Flujo Vertical */}
              <div className="flex flex-col gap-8 items-center">
                {dato.images && dato.images.map((imgUrl, imgIndex) => (
                  <img 
                    key={imgIndex}
                    src={imgUrl}
                    alt={`${dato.titulo} - vista ${imgIndex + 1}`}
                    className="w-full h-auto rounded-3xl object-contain transition-transform duration-500 hover:scale-[1.01]"
                  />
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};