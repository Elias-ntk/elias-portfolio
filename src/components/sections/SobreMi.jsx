import { GraduationCap, Code, Rocket, Video, Palette } from "lucide-react";

export const SobreMi = () => {
    return (
        <section id="sobre-mi" className="py-20 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-12 text-center">
                Detrás del <span className="text-accent drop-shadow-[0_0_15px_rgb(0,255,247,0.6)]">Código</span> y la <span className="text-accent drop-shadow-[0_0_15px_rgb(0,255,247,0.6)]">Estrategia</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        
            {/* BIO - Caja Grande con Avatar */}
            <div className="md:col-span-2 md:row-span-2 bg-darkBg border border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:shadow-[0_0_55px_rgb(0,255,247,0.1)] hover:border-accent/30 hover:scale-[1.02] transition-all duration-400">
            
                {/* Header de la caja: Avatar y Cohete */}
                <div className="flex justify-between items-start mb-auto">
                    {/* Contenedor del Avatar con efecto glow */}
                    <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-md -z-10 group-hover:bg-accent/30 transition-colors duration-500"></div>
                    <img 
                        src="/EliasImg.png" 
                        alt="Elias Sgv" 
                        className="w-30 h-30 rounded-full border-2 border-accent/20 object-cover shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    </div>

                    {/* Icono Rocket (ahora en el flujo normal, arriba a la derecha) */}
                    <div className="text-accent/20 group-hover:text-accent/40 group-hover:-rotate-12 transition-all duration-500">
                    <Rocket size={60} />
                    </div>
                </div>

                {/* Contenido de texto abajo */}
                <div className="mt-6 relative z-10">
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">
                    Perfil <span className="text-accent">Híbrido</span>
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Estudiante autodidacta de programación y apasionado por la tecnología. 
                    Actualmente potenciando mi perfil en <span className="text-white font-bold underline decoration-accent/50">Coderhouse</span> para unir el desarrollo técnico con estrategias de Growth Marketing que escalan negocios.
                    </p>
                </div>
            </div>

            {/* STACK TECH */}
            <div className="md:col-span-2 bg-darkBg border border-white/10 rounded-3xl p-6 hover:border-accent/30 transition-all group hover:shadow-[0_0_55px_rgb(0,255,247,0.1)] hover:scale-102 duration-400">
            <div className="flex justify-between items-start mb-4">
                <Code className="text-accent" />
                <span className="text-[10px] tracking-widest text-gray-500">TECH STACK</span>
            </div>
            <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'Tailwind', 'Gemini AI', 'Node.js'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-white/5 hover:border-accent/50 transition-colors">
                    {skill}
                </span>
                ))}
            </div>
            </div>

            {/* FORMACIÓN CODERHOUSE */}
            <div className="md:row-span-2 bg-darkBg border border-white/10 rounded-3xl p-6 flex flex-col group hover:border-accent/30 hover:shadow-[0_0_55px_rgb(0,255,247,0.1)] hover:scale-102 duration-400">
            <GraduationCap className="text-accent mb-4" />
            <h3 className="font-bold mb-4 uppercase text-sm tracking-widest">Formación Coder</h3>
            <ul className="space-y-4 text-xs text-gray-400">
                <li className="flex flex-col">
                <span className="text-white font-bold">Growth Marketing</span>
                <span>En curso • 2026</span>
                </li>
                <li className="flex flex-col">
                <span className="text-white font-bold">Publicidad Avanzada</span>
                <span>En curso • 2026</span>
                </li>
                <li className="flex flex-col">
                <span className="text-white font-bold">Community Manager</span>
                <span>Certificado • 2025</span>
                </li>
            </ul>
            </div>

            {/* CREATIVE SKILLS */}
            <div className=" to-transparent bg-darkBg border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center text-center group hover:shadow-[0_0_55px_rgb(0,255,247,0.1)] hover:border-accent/30 transition-all hover:scale-102 duration-400">
            <div className="flex gap-2 mb-2">
                <Palette size={20} className="text-accent" />
                <Video size={20} className="text-accent" />
            </div>
            <p className="text-xs font-bold uppercase tracking-tighter">Diseño & Edición</p>
            <p className="text-[10px] text-gray-500 mt-1">Ps / CapCut / Canva</p>
            </div>

            {/* IA & APRENDIZAJE */}
            <div className="md:col-span-2 bg-darkBg border border-white/10 rounded-3xl p-6 flex items-center gap-6 group hover:shadow-[0_0_55px_rgb(0,255,247,0.1)] hover:border-accent/30 hover:scale-102 duration-400">
            <div className="h-12 w-12 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-accent font-black">IA</span>
            </div>
            <div>
                <h4 className="text-sm font-bold uppercase">Prompt Engineering</h4>
                <p className="text-xs text-gray-500">Optimizo flujos de trabajo usando IA para desarrollo y marketing.</p>
            </div>
            </div>

            </div>
        </section>
    )
}