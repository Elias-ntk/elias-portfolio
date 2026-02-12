import { Code2, TrendingUp, Cpu } from "lucide-react";

export const Hero = ({profile, setProfile}) => {
    const content = {
        all: {
            title: "Construyo Aplicaciones que Funcionan y Estrategias que Convierten",
            subtitle: {
                start: "Soluciones ",
                highlight1: "Tech ",
                middle: "con Mentalidad de ",
                highlight2: "Growth"
            }
        },
        dev: {
            title: "Construyo software escalable",
            subtitle: "Desarrollador enfocado en código limpio, React y soluciones que resuelven problemas reales.",
        },
        growth: {
            title: "Impulso tu crecimiento digital",
            subtitle: "Growth Marketer especializado en estrategias de contenido, edición viral y optimización de ventas.",
        },
        hybrid: {
            title: "Ingeniería aplicada al Marketing",
            subtitle: "Uso mis habilidades de programación para potenciar estrategias de marketing y escalar negocios de forma técnica.",
        }

    };

    const options = [
        { id: 'dev', label: 'Desarrollador', desc: 'React, JS y soluciones escalables.', color: 'bg-accent', icon: <Code2 size={32} className="text-accent transition-transform duration-500 group-hover:scale-105 group-hover:rotate-12 animate-[soft-shake_6s_ease-in-out_infinite]"/>, },
        { id: 'growth', label: 'Growth Marketer', desc: 'Estrategias de contenido y edición viral.', color: 'bg-pink-500', icon: <TrendingUp size={32} className="text-accent transition-transform duration-500 group-hover:scale-105 group-hover:rotate-12 animate-[float_6s_ease-in-out_infinite]"/>, },
        { id: 'hybrid', label: 'Perfil Híbrido', desc: 'Programación impulsada por resultados.', color: 'bg-gradient-to-r from-accent to-pink-500', icon: <Cpu size={32} className="text-accent transition-transform duration-500 group-hover:scale-105 group-hover:rotate-12 animate-[glow-pulse_6s_ease-in-out_infinite]"/>, }
    ]

    const active = content[profile];

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-10">
            <h1 className="font-black text-4xl md:text-6xl tracking-tighter max-w-4xl mb-4 drop-shadow-[0_0_30px_rgb(0,255,247,0.3)]">
                {active.title}
            </h1>
            <p className="text-2xl md:text-4xl font-bold tracking-tighter max-w-2xl mb-10 drop-shadow-[0_0_30px_rgb(0,255,247,0.3)]">
                {content[profile].subtitle.highlight1 ? (
                    <>
                        {content[profile].subtitle.start}
                        <span className="inline-block text-accent shadow-accent transition-all duration-500 hover:scale-103 hover:-translate-y-0.5 drop-shadow-[0_0_20px_rgba(141,53,255,0.5)]">{content[profile].subtitle.highlight1}</span>
                        {content[profile].subtitle.middle}
                        <span className="inline-block transition-all duration-500 hover:scale-103 hover:-translate-y-0.5 text-accent drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]">{content[profile].subtitle.highlight2}</span>
                    </>
                ) : (
                    content[profile].subtitle
                )}
            </p>

            {profile === 'all' ? (
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
                    {options.map((opt) => (
                        <button
                            key={opt.id}
                            onClick={() => setProfile(opt.id)}
                            className="group relative overflow-hidden p-8 cursor-pointer rounded-2xl  border border-white/10 hover:border-accent/30 transition-all duration-800 hover:shadow-[0_0_55px_rgb(0,255,247,0.1)] text-left hover:-translate-y-2"
                        >
                            <div className="absolute right-40 top-0 w-30 h-80 bg-accent/10 rounded-full blur-[100px] 
                            transition-all duration-[1500ms] ease-in-out
                             
                            pointer-events-none">
                                
                            </div>
                            <div className={`mb-6 `}>{opt.icon}</div>
                            <h3 className="text-xl font-bold mb-2 uppercase">{opt.label}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{opt.desc}</p>
                            <span className="inline-block mt-4 text-xs font-bold tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                                EXPLORAR
                            </span>
                        </button>
                    ))}
                </div>
            ) : (
                
                <button 
                    onClick={() => setProfile('all')}
                    className="mt-10 px-8 py-3 border border-white/10 rounded-full hover:bg-white/5 transition-all text-gray-400 hover:text-white"
                >
                    ← Atras
                </button>
            )}
        </section>
    );
};