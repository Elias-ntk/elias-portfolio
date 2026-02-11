export const ProjectDetail = ({ project, onBack }) => {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto animate-fadeIn">
      {/* Botón Volver - BlueL total */}
      <button 
        onClick={onBack} 
        className="group mb-8 mt-3 flex items-center justify-center w-15 h-9 rounded-lg bg-blueL hover:scale-105 text-darkBg transition-all hover:shadow-[0_0_20px_rgba(0,255,247,0.6)] cursor-pointer"
      >
        <span className="font-bold scale-110">←</span>
      </button>

      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* LADO IZQUIERDO: Visuales (Sticky) */}
        <div className="lg:w-1/2">
          <div className="lg:sticky lg:top-24 space-y-8">
            <div className="aspect-video bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,255,247,0.15)]">
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
            <span className="text-blueL font-bold text-sm uppercase tracking-tighter">{project.category}</span>
            {/* TÍTULO: Ahora con glow BlueL en lugar de fucsia */}
            <h1 className="text-5xl font-bold mt-2 mb-6 hover:text-blueL hover:drop-shadow-[0_0_30px_rgba(0,255,247,0.8)] transition-all duration-400">
              {project.title}
            </h1>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {project.fullDesc || project.desc}
            </p>

            {/* BOTÓN VISITAR: BlueL total */}
            {project.Link && project.Link !== "#" && (
              <a 
                href={project.Link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blueL px-8 py-3 rounded-xl font-bold text-darkBg shadow-[0_0_20px_rgba(0,255,247,0.4)] hover:shadow-[0_0_35px_rgba(0,255,247,0.7)] hover:scale-105 transition-all"
              >
                Visitar Proyecto →
              </a>
            )}
          </div>

          {/* Estrategia: Título y detalles en BlueL */}
          {project.strategy && (
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-4 hover:border-blueL/30 transition-colors">
              <h3 className="text-xl font-bold text-blueL uppercase italic">Estrategia de Crecimiento</h3>
              <div className="space-y-4 text-gray-300">
                <p><span className="text-white font-bold">TOFU:</span> {project.strategy.tofu}</p>
                <p><span className="text-white font-bold">MOFU:</span> {project.strategy.mofu}</p>
                <p><span className="text-white font-bold">BOFU:</span> {project.strategy.bofu}</p>
              </div>
            </div>
          )}

          {/* Resultados: Iconos en BlueL */}
          {project.results && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.results.map((res, index) => (
                <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 hover:border-blueL/40 transition-colors">
                  <span className="text-blueL text-xl">✔</span>
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