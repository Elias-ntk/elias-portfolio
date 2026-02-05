export const ProjectDetail = ({ project, onBack }) => {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto animate-fadeIn">
      {/* Botón Volver - Minimalista y elegante arriba a la izquierda */}
      <button 
        onClick={onBack} 
        className="group mb-8 mt-3 flex items-center justify-center w-15 h-9 rounded-lg bg-gradient-to-r from-accent hover:scale-105 text-white transition-all hover:bg-accent hover:border-accent hover:shadow-[0_0_20px_rgba(141,53,255,0.6)] cursor-pointer"
      >
        <span className=" scale-105">←</span>
      </button>

      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* LADO IZQUIERDO: Visuales (Sticky) */}
        <div className="lg:w-1/2">
          {/* Aquí el "sticky": Se queda pegado a 100px del top al scrollear */}
          <div className="lg:sticky lg:top-24 space-y-8">
            <div className="aspect-video bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(141,53,255,0.2)]">
              {project.videoUrl ? (
                <video key={project.videoUrl} controls className="w-full h-full object-cover">
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500 italic">
                  Visualización previa
                </div>
              )}
            </div>

            {/* Galería de imágenes extra del proyecto hacia abajo */}
            {project.images && project.images.map((img, index) => (
              <div key={index} className="rounded-2xl overflow-hidden border border-white/5 shadow-xl">
                <img src={img} alt="Vista previa" className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* LADO DERECHO: Explicación y Detalles */}
        <div className="lg:w-1/2 space-y-10">
          <div>
            <span className="text-accent font-bold text-sm uppercase tracking-tighter">{project.category}</span>
            <h1 className="text-5xl font-bold mt-2 mb-6">{project.title}</h1>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {project.fullDesc || project.desc}
            </p>

            {/* BOTÓN DE ENLACE EXTERNO: Solo aparece si project.Link no es "#" */}
            {project.Link && project.Link !== "#" && (
              <a 
                href={project.Link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-accent px-8 py-3 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(141,53,255,0.4)] hover:scale-105 transition-transform"
              >
                Visitar Proyecto →
              </a>
            )}
          </div>

          {/* Estrategia Condicional (Growth) */}
          {project.strategy && (
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-accent uppercase italic">Estrategia de Crecimiento</h3>
              <div className="space-y-4 text-gray-300">
                <p><span className="text-white font-bold">TOFU:</span> {project.strategy.tofu}</p>
                <p><span className="text-white font-bold">MOFU:</span> {project.strategy.mofu}</p>
                <p><span className="text-white font-bold">BOFU:</span> {project.strategy.bofu}</p>
              </div>
            </div>
          )}

          {/* Resultados Clave */}
          {project.results && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.results.map((res, index) => (
                <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
                  <span className="text-accent text-xl">✔</span>
                  <span className="text-sm text-gray-300 font-medium">{res}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};