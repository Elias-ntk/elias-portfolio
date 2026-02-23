import { GraduationCap, Code, Rocket, Video, Palette, BrainCircuit, CheckCircle2, ExternalLink, CircleDashed } from "lucide-react";

export const SobreMi = () => {
    return (
        <section id="sobre-mi" className="py-20 px-4 max-w-6xl mx-auto">
            <div className="flex justify-center mb-4">
                <span className="px-4 py-1 text-[20px] mx-text-xs font-bold hover:tracking-[0.3em] text-accent drop-shadow-[0_0_9px_rgb(0,255,247,0.6)] transition-all duration-600" >Sobre Mí</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-12 text-center">
                Detrás del <span className="text-accent drop-shadow-[0_0_15px_rgb(0,255,247,0.5)] hover:drop-shadow-[0_0_20px_rgb(0,255,247,0.5)] transition-all duration-400">Código</span> y la <span className="text-accent drop-shadow-[0_0_15px_rgb(0,255,247,0.5)] hover:drop-shadow-[0_0_20px_rgb(0,255,247,0.5)] transition-all duration-400">Estrategia</span>
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
                    
                    <div className="space-y-4 md:space-y-9">
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

                {/* FORMACIÓN Y APRENDIZAJE UNIFICADO */}
                <div className="md:col-span-2 bg-darkBg/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 group hover:shadow-[0_0_55px_rgba(0,255,247,0.1)] hover:border-accent/30 hover:scale-103 transition-all duration-400">
                    <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                        <GraduationCap className="text-accent" size={32} />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 w-full">
                        {/* Coderhouse */}
                        <div>
                            <h4 className="text-[10px] font-bold uppercase text-gray-500 mb-3 tracking-widest text-left">Certificaciones Coder</h4>
                            <ul className="text-[10px] text-gray-300 space-y-2 text-left">
                                {[
                                    { name: 'Growth Marketing', year: '2026', link: '#', status: 'progress' },
                                    { name: 'Publicidad Avanzada', year: '2026', link: '#', status: 'progress' },
                                    { name: 'Community Manager', year: '2025', link: 'https://pub.coderhouse.com/certificates/0f233c21-c826-4faa-bfba-71fe2d371d97?v=1', status: 'done' }
                                ].map((cert) => (
                                    <li key={cert.name}>
                                        <div className={`flex items-center gap-2 ${cert.status === 'done' ? 'group/item cursor-pointer' : 'opacity-60'}`}>
                                            {cert.status === 'done' ? (
                                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                                                    <CheckCircle2 size={12} className="text-accent/40 group-hover/item:text-accent" />
                                                    <span>{cert.name} <span className="text-accent/50">({cert.year || cert.org})</span></span>
                                                </a>
                                            ) : (
                                                <div className="flex items-center gap-2 italic">
                                                    {/* Icono de "En progreso" */}
                                                    <CircleDashed size={12} className="text-gray-500 animate-[spin_4s_linear_infinite]" />
                                                    <span className="text-gray-500">{cert.name} <span className="text-[8px] tracking-widest text-accent/40 uppercase ml-1">En curso</span></span>
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Google & Otros */}
                        <div>
                            <h4 className="text-[10px] font-bold uppercase text-gray-500 mb-3 tracking-widest text-left">Otros Logros</h4>
                            <ul className="text-[10px] text-gray-300 space-y-2 text-left">
                                {/* Renderizamos primero los de Google que son links simples */}
                                {[
                                    { name: 'Google Ads Display', org: 'Google', link: 'https://skillshop.credential.net/1095aaf8-8d0e-4a12-9160-95dcc1bebfc7#acc.MEXonmBK' },
                                    { name: 'Google Ads Search', org: 'Google', link: 'https://skillshop.credential.net/86a7af23-95b9-49fa-b03b-eecdebc6198e#acc.MN6zYpCF' },
                                ].map((cert) => (
                                    <li key={cert.name}>
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group/item hover:text-accent transition-colors">
                                            <CheckCircle2 size={12} className="text-accent/40 group-hover/item:text-accent transition-colors" />
                                            <span>{cert.name} <span className="text-accent/50">({cert.org})</span></span>
                                        </a>
                                    </li>
                                ))}

                                {/* CASO ESPECIAL: Multi-links para SoloLearn */}
                                <li className="flex items-start gap-2 group/item">
                                    <CheckCircle2 size={12} className="text-accent/40 group-hover/item:text-accent mt-0.5 transition-colors" />
                                    <div className="flex flex-wrap items-center gap-1">
                                        <a href="https://www.sololearn.com/certificates/CT-ZQB4B86J" target="_blank" className="hover:text-accent underline decoration-accent/20">HTML</a>
                                        <span className="text-gray-600">/</span>
                                        <a href="https://www.sololearn.com/certificates/CT-VINRJTWB" target="_blank" className="hover:text-accent underline decoration-accent/20">CSS</a>
                                        <span className="text-gray-600">/</span>
                                        <a href="https://www.sololearn.com/certificates/CT-ZKDSVLBD" target="_blank" className="hover:text-accent underline decoration-accent/20">JS</a>
                                        <span className="text-accent/50 ml-1">(SoloLearn)</span>
                                    </div>
                                </li>
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