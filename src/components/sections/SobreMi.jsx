import { GraduationCap, Code, Rocket, Video, Palette, BrainCircuit } from "lucide-react";

export const SobreMi = () => {
    return (
        <section id="sobre-mi" className="py-20 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-12 text-center">
                Detrás del <span className="text-accent drop-shadow-[0_0_15px_rgb(0,255,247,0.6)] hover:drop-shadow-[0_0_20px_rgb(0,255,247,0.6)] transition-all duration-400">Código</span> y la <span className="text-accent drop-shadow-[0_0_15px_rgb(0,255,247,0.6)] hover:drop-shadow-[0_0_20px_rgb(0,255,247,0.6)] transition-all duration-400">Estrategia</span>
            </h2>
            
            {/* Quitamos auto-rows fijo para que no estire todas las cajas por igual */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
                {/* BIO - Caja Grande */}
                <div className="md:col-span-2 md:row-span-2 bg-darkBg/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:shadow-[0_0_55px_rgb(0,255,247,0.1)] hover:border-accent/30 hover:scale-[1.02] transition-all duration-400">
                    <div className="flex justify-between items-start mb-auto">
                        <div className="relative shrink-0">
                            <div className="absolute inset-0 bg-accent/20 rounded-full blur-md -z-10 group-hover:bg-accent/30 transition-colors duration-500"></div>
                            <img src="/EliasImg.png" alt="Elias Sgv" className="w-24 h-24 md:w-30 md:h-30 rounded-full border-2 border-accent/20 object-cover shadow-xl group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="text-accent/20 group-hover:text-accent/40 group-hover:-rotate-12 transition-all duration-500">
                            <Rocket size={60} />
                        </div>
                    </div>
                    <div className="mt-6 relative z-10">
                        <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Perfil <span className="text-accent">Híbrido</span></h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                            Fusiono el <span className="text-white font-bold underline decoration-accent/50">Desarrollo de Software</span> con estrategias de crecimiento para transformar ideas en negocios escalables. Especializándome en <span className="text-white font-bold underline decoration-accent/50">Growth Marketing</span> para construir el puente perfecto entre un producto sólido y una audiencia que convierte.
                        </p>
                    </div>
                </div>

                {/* STACK TECH - Ahora con md:row-span-3 para que crezca sin afectar a las de la derecha */}
                <div className="md:col-span-2 md:row-span-2 bg-darkBg/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:border-accent/30 transition-all group hover:shadow-[0_0_55px_rgb(0,255,247,0.1)] hover:scale-102 duration-400">
                    <div className="flex justify-between items-start mb-4">
                        <Code className="text-accent" />
                        <span className="text-[10px] tracking-widest text-gray-500 uppercase font-bold">Herramientas & Stack</span>
                    </div>
                    
                    <div className="space-y-4">
                        {/* Desarrollo */}
                        <div className="flex flex-wrap gap-2">
                            <span className="text-[10px] w-full text-gray-600 font-bold uppercase tracking-widest">Desarrollo</span>
                            {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind', 'Git', 'Vite', 'Firebase'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-accent/5 rounded-full text-[11px] font-medium border border-accent/20 hover:border-accent/50 text-accent/80 hover:scale-105 transition-all duration-300">{skill}</span>
                            ))}
                        </div>

                        {/* Growth */}
                        <div className="flex flex-wrap gap-2">
                            <span className="text-[10px] w-full text-gray-600 font-bold uppercase tracking-widest">Growth & Ads</span>
                            {['Meta Ads', 'Google Ads', 'GA4', 'Growth Strategy'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-accent/5 rounded-full text-[11px] font-medium border border-accent/20 hover:border-accent/50 text-accent/80 hover:scale-105 transition-all duration-300">{skill}</span>
                            ))}
                        </div>

                        {/* Tracking - Estilo unificado */}
                        <div className="flex flex-wrap gap-2">
                            <span className="text-[10px] w-full text-gray-600 font-bold uppercase tracking-widest">Tracking & Data</span>
                            {['GTM', 'Meta Pixel', 'SEO Technical', 'Prompt Engineering'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-accent/5 rounded-full text-[11px] font-medium border border-accent/20 hover:border-accent/50 text-accent/80 hover:scale-105 transition-all duration-300 italic">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FORMACIÓN Y APRENDIZAJE UNIFICADO - Ocupa el lugar de IA & Aprendizaje */}
                <div className="md:col-span-2 bg-darkBg/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 group hover:shadow-[0_0_55px_rgb(0,255,247,0.1)] hover:border-accent/30 hover:scale-103 transition-all duration-400">
                    <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                        <GraduationCap className="text-accent" size={32} />
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div>
                            <h4 className="text-[10px] font-bold uppercase text-gray-500 mb-2 tracking-widest text-left">Certificaciones Coder</h4>
                            <ul className="text-[10px] text-gray-300 space-y-1 text-left">
                                <li>• Growth Marketing <span className="text-accent/50">(2026)</span></li>
                                <li>• Publicidad Avanzada <span className="text-accent/50">(2026)</span></li>
                                <li>• Community Manager <span className="text-white/50">(2025)</span></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-bold uppercase text-gray-500 mb-2 tracking-widest text-left">Otros Logros</h4>
                            <ul className="text-[10px] text-gray-300 space-y-1 text-left">
                                <li>• HTML, CSS, JS <span className="text-accent/50">(SoloLearn)</span></li>
                                <li>• Prompt Engineering <span className="text-accent/50">(Gemini AI)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CREATIVE SKILLS - Caja pequeña */}
                <div className="bg-darkBg/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center text-center group hover:shadow-[0_0_55px_rgb(0,255,247,0.1)] hover:border-accent/30 transition-all hover:scale-105 duration-400">
                    <div className="flex gap-2 mb-2">
                        <Palette size={20} className="text-accent" />
                        <Video size={20} className="text-accent" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-tighter">Diseño & Edición</p>
                    <p className="text-[10px] text-gray-500 mt-1 italic">Ps / CapCut / Canva</p>
                </div>

                {/* DISPONIBILIDAD / CONTACTO - Caja pequeña para completar el grid */}
                <div className="bg-darkBg/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center text-center group hover:shadow-[0_0_55px_rgb(0,255,247,0.1)] hover:border-accent/30 transition-all hover:scale-103 duration-400 cursor-pointer">
                    <div className="relative mb-2">
                        {/* 1. El pulso animado (se expande y desvanece) */}
                        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
                        
                        {/* 2. El punto sólido central */}
                        <span className="relative block w-3 h-3 bg-green-500 rounded-full border-2 border-darkBg"></span>
                    </div>
                    <p className="text-xs font-bold uppercase ">Disponible para</p>
                    <p className="text-[10px] text-gray-400 mt-1">Nuevos Proyectos / Freelance</p>
                    <a href="#contacto" className="mt-3 text-[10px] text-accent font-bold border-b border-accent/30 hover:border-accent transition-colors">
                        Hablemos →
                    </a>
                </div>
            </div>
        </section>
    );
};