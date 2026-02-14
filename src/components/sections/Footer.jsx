import {Github, Linkedin, Instagram, Mail, Code2} from "lucide-react";

export const Footer = () => {

    const footerLinks = {
    explore: [
        { name: "Sobre Mí", href: "#sobre-mi" },
        { name: "Servicios", href: "#servicios" },
        { name: "Proyectos", href: "#proyectos" },
        { name: "Trabajemos Juntos", href: "#contacto" },
    ],
    social: [
        { name: "LinkedIn", href: "https://linkedin.com/in/tu-usuario", icon: <Linkedin size={28} /> },
        { name: "GitHub", href: "https://github.com/tu-usuario", icon: <Github size={28} /> },
        { name: "Instagram", href: "https://instagram.com/tu-usuario", icon: <Instagram size={28} /> },
        { name: "Email", href: "mailto:tu@email.com", icon: <Mail size={28} /> },
    ]
    };

  return (
    <footer className="bg-gradient-to-t from-darkBgLite/20 to-darkBg pt-20 pb-10 px-4 border-t border-white/5 ">
      {/* Contenedor más estrecho (max-w-4xl) para centrar la información */}
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* BLOQUE SUPERIOR: Branding & Status */}
        <div className="flex flex-col items-center text-center mb-10 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blueL/20 to-transparent flex items-center justify-center border border-blueL/10 mb-2">
            <Code2 className="text-blueL" size={24} />
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tighter">
            Elias <span className="text-blueL">Sgv</span>
          </h3>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            Fusionando ingeniería y marketing para escalar negocios digitales.
          </p>
          
          {/* Badge Compacto Estilo "Píldora" */}
          <div className="flex items-center gap-2 px-3 py-1 bg-green-500/5 border border-green-500/10 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-green-500/80">
              Disponible ahora
            </span>
          </div>
        </div>

        {/* BLOQUE MEDIO: Navegación & Social (Todo en una fila compacta) */}
        <div className=" flex flex-col md:flex-row items-center justify-between border-y border-white/5 px-6 py-8 gap-8">
          
          {/* Links de Navegación Cortos */}
          <nav className="flex gap-5 mx-6">
            {footerLinks.explore.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-blueL transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Redes con estilo minimalista (sin círculos pesados) */}
            <div className="flex gap-6 mx-6">
                {footerLinks.social.map((social, i) => (
                    <a 
                    key={i} 
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent/40 hover:text-blueL hover:scale-110 transition-all duration-300"
                    title={social.name} 
                    >
                    {social.icon}
                    </a>
                ))}
            </div>
        </div>

        {/* BLOQUE INFERIOR: Legal & Ubicación */}
        <div className=" mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600">
          <p>© 2026 ELIAS SGV — ALL RIGHTS RESERVED</p>
          <div className="flex items-center gap-1">
            <span>HECHO EN</span>
            <span className="text-gray-400">ARGENTINA</span>
            <span className="ml-1">🇦🇷</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}