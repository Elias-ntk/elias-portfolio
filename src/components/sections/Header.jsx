export const Header = ({ profile, setProfile }) => {
    
    return (
        <header className="fixed top-0 w-full p-6 flex justify-between items-center bg-darkBg/60 backdrop-blur-lg z-50">
            {/* Logo */}
            <div className="text-2xl font-black tracking-tighter">
                Elias<span className="text-accent">Segovia</span>
            </div>

            {/* Contenedor del Switch */}
            <div className="flex bg-white/5 p-1 rounded-full border border-white/10 shadow-2xl scale-90 md:scale-100">
                <button 
                    onClick={() => setProfile('dev')}
                    className={`px-4 py-2 rounded-full text-[10px] font-bold transition-all duration-300 ${
                        profile === 'dev' 
                        ? 'bg-accent text-white shadow-[0_0_15px_rgba(141,53,255,0.5)]' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                >
                    DEVELOPER
                </button>
                
                <button 
                    onClick={() => setProfile('hybrid')}
                    className={`px-4 py-2 rounded-full text-[10px] font-bold transition-all duration-300 ${
                        profile === 'hybrid' 
                        ? 'bg-gradient-to-r from-accent to-pink-500 text-white shadow-[0_0_15px_rgba(141,53,255,0.5)]' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                >
                    HÍBRIDO
                </button>    

                <button 
                    onClick={() => setProfile('growth')}
                    className={`px-4 py-2 rounded-full text-[10px] font-bold transition-all duration-300 ${
                        profile === 'growth' 
                        ? 'bg-pink-500 text-white shadow-[0_0_15px_rgba(141,53,255,0.5)]' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                >
                    GROWTH
                </button>
            </div>
        </header>
    );
}