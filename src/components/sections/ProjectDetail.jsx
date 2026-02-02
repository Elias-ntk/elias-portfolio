export const ProjectDetail = ({ project, onBack }) => {
  return (
    <div className="py-20 px-4 max-w-4xl mx-auto animate-fadeIn">
      <button onClick={onBack} className="text-accent my-4 bg-accent cursor-pointer text-white text-lg shadow-[0_0_15px_rgba(141,53,255,0.5)] rounded-full hover:bg-pink-500 px-6">
        ←
      </button>

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <div className="flex gap-2 mb-8">
        {project.tags.map(tag => (
          <span key={tag} className="bg-white/10 px-3 py-1 rounded-full text-xs italic">
            #{tag}
          </span>
        ))}
      </div>

      {/* Espacio para Video o Imagen Principal */}
      <div className="aspect-video bg-white/10 rounded-3xl mb-12 flex items-center justify-center border border-white/5">
         <p className="text-gray-500">Aquí irá tu video de CapCut o Mockup de Photoshop</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 italic text-accent">El Proceso</h2>
          <p className="text-gray-300 leading-relaxed mb-6">{project.desc}</p>
          {/* Aquí puedes agregar más párrafos sobre la estrategia o el código */}
        </div>
        
        <div className="bg-white/5 p-6 rounded-2xl h-fit border border-white/10">
          <h3 className="font-bold mb-4 uppercase tracking-tighter">Resultados</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>• Optimización de flujo</li>
            <li>• Diseño Responsivo</li>
            <li>• Estrategia de Conversión</li>
          </ul>
        </div>
      </div>
    </div>
  );
};