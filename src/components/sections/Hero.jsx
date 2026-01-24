
export const Hero = ({profile, setProfile}) => {
    const content = {
        all: {
            title: "Soluciones Tech con Mentalidad de Growth",
            subtitle: "Construyo aplicaciones que funcionan y estrategias que convierten. Elige la faceta que quieres explorar:",
        },
        dev: {
        title: "Construyo software escalable",
        subtitle: "Desarrollador enfocado en código limpio, React y soluciones que resuelven problemas reales."
        },
        growth: {
            title: "Impulso tu crecimiento digital",
            subtitle: "Growth Marketer especializado en estrategias de contenido, edición viral y optimización de ventas."
        },
        hybrid: {
            title: "Ingeniería aplicada al Marketing",
            subtitle: "Uso mis habilidades de programación para potenciar estrategias de marketing y escalar negocios de forma técnica."
        }

    };

    const options = [
        { id: 'dev', label: 'Desarrollador', desc: 'React, JS y soluciones escalables.', color: 'bg-accent' },
        { id: 'growth', label: 'Growth Marketer', desc: 'Estrategias de contenido y edición viral.', color: 'bg-pink-500' },
        { id: 'hybrid', label: 'Perfil Híbrido', desc: 'Programación impulsada por resultados.', color: 'bg-gradient-to-r from-accent to-pink-500' }
    ]

    const active = content[profile];

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter max-w-4xl mb-6">
                {active.title}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mb-12">
                {active.subtitle}
            </p>

            {profile === 'all' ? (
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
                    {options.map((opt) => (
                        <button
                            key={opt.id}
                            onClick={() => setProfile(opt.id)}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all text-left hover:-translate-y-2"
                        >
                            <div className={`w-12 h-12 rounded-lg ${opt.color} mb-6 shadow-lg shadow-black/50`}></div>
                            <h3 className="text-xl font-bold mb-2 uppercase">{opt.label}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{opt.desc}</p>
                            <span className="inline-block mt-4 text-xs font-bold tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                                EXPLORAR →
                            </span>
                        </button>
                    ))}
                </div>
            ) : (
                
                <button 
                    onClick={() => setProfile('all')}
                    className="mt-10 px-8 py-3 border border-white/10 rounded-full hover:bg-white/5 transition-all text-gray-400 hover:text-white"
                >
                    ← Volver a la selección
                </button>
            )}
        </section>
    );
};