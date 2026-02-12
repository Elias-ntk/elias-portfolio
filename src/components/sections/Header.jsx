import { useEffect, useState } from "react";
export const Header = ({ profile, setProfile, onReset }) => {
    const [activeTab, setActiveTab] = useState('Home');

    useEffect(() => {
    const sections = ['hero', 'servicios', 'experiencia', 'sobre-mi'];
    
    const observerOptions = {
        root: null, 
        rootMargin: '-40% 0px -40% 0px', 
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                
                // 2. Mapeo explícito para evitar errores de capitalización
                if (id === 'hero') { 
                    setActiveTab('Home');
                } else if (id === 'servicios') {
                    setActiveTab('Servicios');
                } else if (id === 'experiencia') {
                    setActiveTab('Experiencia');
                } else if (id === 'sobre-mi') {
                    setActiveTab('Sobre Mi');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    
    sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    }, []);


    return (
        <header className="fixed top-0 w-full p-6 flex justify-between items-center bg-darkBg/60 backdrop-blur-lg z-50">
    
            <div onClick={() => {setProfile('all'); onReset()}} className="text-2xl cursor-pointer font-black tracking-tighter flex transition-all duration-400 hover:scale-105">
                Elias<span className="text-accent transition-all duration-900">Sgv</span>
            </div>

            {/* 2. Navegación (Centro) */}
            <nav className="hidden md:flex gap-8">
            {['Home', 'Servicios', 'Experiencia', 'Sobre Mi'].map((item) => {
                const isSelected = activeTab === item;

                return (
                <a 
                    key={item}
                    href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => {
                    setActiveTab(item);
                    if (item === 'Home') {
                        setProfile('all'); 
                    }
                    }}
                    className="relative p-[1.3px] rounded-full transition-all group"
                >
                    {/* CAPA 1: Glow Estático (Fondo de luz muy amplio) */}
                    <div className={`absolute inset-[15px] rounded-full glow-static transition-opacity duration-700
                    ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    </div>    

                    {/* CAPA 2: Glow Follow (El que gira y tiene mucho blur) */}
                    <div className={`absolute inset-[10px] rounded-full animate-[rotate-border_2s_linear_infinite] transition-opacity duration-500
                    ${isSelected ? 'glow-follow opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    </div>    

                    {/* CAPA 3: Borde nítido que gira */}
                    <div className={`absolute inset-0 bg-[conic-gradient(from_var(--angle),transparent_60%,#00fff7)] 
                        animate-[rotate-border_2s_linear_infinite] rounded-full transition-opacity
                        ${isSelected ? 'opacity-40' : 'opacity-0 group-hover:opacity-50'}`}>
                    </div>

                    {/* CAPA 4: Contenido (Fondo oscuro para contraste) */}
                    <div className={`relative px-5 py-1.5 bg-darkBg rounded-full transition-colors font-bold text-xs tracking-widest duration-1000
                    ${isSelected ? 'text-accent' : 'text-gray-400 group-hover:text-white'}`}>
                    {item.toUpperCase()}
                    </div>
                </a>
                )
            })}
            </nav>

            {/* 3. Selector de Perfiles (Derecha) */}
            <div className="flex gap-4 px-4 py-2 rounded-full border border-white/5">
                {['dev', 'growth', 'hybrid'].map((p) => (
                    <button
                        key={p}
                        onClick={() => setProfile(p)}
                        className={`text-[10px] font-bold tracking-widest transition-all ${
                            profile === p ? 'text-accent drop-shadow-[0_0_8px_#00fff7]' : 'text-gray-500 hover:text-gray-300'
                        }`}
                    >
                        {p.toUpperCase()}
                    </button>
                ))}
            </div>
        </header>
    );
}