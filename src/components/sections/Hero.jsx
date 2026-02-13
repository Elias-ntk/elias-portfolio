import { Code2, TrendingUp, Cpu } from "lucide-react";

export const Hero = ({profile, setProfile}) => {
    const content = {
    all: {
        title: {
            start: "Escalo tu ",
            highlight: "Negocio ",
            end: "con Código y Estrategia Digital"
        },
        subtitle: {
            start: "Soluciones ",
            highlight1: "Tech ",
            middle: " con Mentalidad de ",
            highlight2: "Growth"
        }
    },
    dev: {
        title: {
            start: "Código ",
            highlight: "Escalable ",
            end: " que impulsa Negocios"
        },
        subtitle: {
            start: "Desarrollo con ",
            highlight1: "Código Limpio ",
            middle: " y soluciones para problemas ",
            highlight2: "Reales"
        }
    },
    growth: {
        title: {
            start: "Contenido ",
            highlight: "Viral",
            end: ", Datos que Venden"
        },
        subtitle: {
            start: "Estrategias de ",
            highlight1: "Marketing ",
            middle: " enfocadas en la ",
            highlight2: "Conversión"
        }
    },
    hybrid: {
        title: {
            start: "Ingeniería ",
            highlight: "Aplicada ",
            end: "al Marketing"
        },
        subtitle: {
            start: "Desarrollo ",
            highlight1: "Técnico ",
            middle: " potenciado por ",
            highlight2: "Growth Marketing"
        }
    }
    };

    const options = [
        { id: 'dev', label: 'Desarrollador', desc: 'React, JS y soluciones escalables.', color: 'bg-accent', icon: <Code2 size={32} className="text-accent transition-transform duration-500 group-hover:scale-105 group-hover:rotate-12 animate-[soft-shake_6s_ease-in-out_infinite]"/>, },
        { id: 'growth', label: 'Growth Marketer', desc: 'Estrategias de contenido y edición viral.', color: 'bg-pink-500', icon: <TrendingUp size={32} className="text-accent transition-transform duration-500 group-hover:scale-105 group-hover:rotate-12 animate-[float_6.5s_ease-in-out_infinite]"/>, },
        { id: 'hybrid', label: 'Perfil Híbrido', desc: 'Programación impulsada por resultados.', color: 'bg-gradient-to-r from-accent to-pink-500', icon: <Cpu size={32} className="text-accent transition-transform duration-500 group-hover:scale-105 group-hover:rotate-12 animate-[glow-pulse_7s_ease-in-out_infinite]"/>, }
    ]

    const active = content[profile];

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-10">
            <h1 className="font-black text-4xl md:text-6xl tracking-tighter max-w-4xl mb-4 drop-shadow-[0_0_30px_rgb(0,255,247,0.3)]">
                {active.title.start}
                <span className="text-accent">{active.title.highlight}</span>
                {active.title.end}
            </h1>
            <p className="text-2xl md:text-2xl italic tracking-tighter max-w-2xl mb-10 drop-shadow-[0_0_30px_rgb(0,255,247,0.3)]">
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

           {/* Grid de opciones - SIEMPRE VISIBLE */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
                {options.map((opt) => {
                    const isSelected = profile === opt.id;
                    return (
                        <button
                            key={opt.id}
                            // Si clickeás el que ya está, vuelve a 'all'. Si no, cambia al nuevo.
                            onClick={() => setProfile(isSelected ? 'all' : opt.id)}
                            className={`group relative overflow-hidden p-8 cursor-pointer rounded-2xl border transition-all duration-800 text-left hover:-translate-y-2
                                ${isSelected 
                                    ? 'border-accent shadow-[0_0_55px_rgb(0,255,247,0.15)] bg-accent/5' 
                                    : 'border-white/10 hover:border-accent/30 hover:shadow-[0_0_55px_rgb(0,255,247,0.1)]'}`}
                        >
                            <div className={`absolute right-40 top-0 w-30 h-80 rounded-full blur-[100px] transition-all duration-[1500ms] ease-in-out pointer-events-none
                                ${isSelected ? 'bg-accent/20 opacity-100' : 'bg-accent/15 opacity-100 group-hover:opacity-100'}`}>
                            </div>
                            
                            <div className={`mb-6 transition-transform duration-500 ${isSelected ? 'scale-110' : ''}`}>
                                {opt.icon}
                            </div>
                            
                            <h3 className={`text-xl font-bold mb-2 uppercase ${isSelected ? 'text-accent' : ''}`}>
                                {opt.label}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {opt.desc}
                            </p>
                            
                            <span className={`inline-block mt-4 text-xs font-bold tracking-widest text-accent transition-opacity
                                ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                {isSelected ? 'SELECCIONADO' : 'EXPLORAR'}
                            </span>
                        </button>
                    );
                })}
            </div>
        </section>
    );
};