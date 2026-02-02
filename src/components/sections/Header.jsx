export const Header = ({ profile, setProfile, onReset }) => {
    
    return (
        <header className="fixed top-0 w-full p-6 flex justify-between items-center bg-darkBg/60 backdrop-blur-lg z-50">
            {/* Logo */}
            <div onClick={() => {setProfile('all'); onReset()}} className="text-2xl cursor-pointer font-black tracking-tighter">
                Elias<span className="text-accent">Segovia</span>
            </div>
            

            {/* Contenedor del Switch */}
                
                <div className="flex bg-white/5 p-1 rounded-full border border-white/10 shadow-2xl scale-90 md:scale-100">
                    {profile !== 'all' && (
                            <button 
                                onClick={() => {setProfile('all'); onReset()}}
                                className={`px-6 py-2 mx-2 rounded-full text-[10px] cursor-pointer font-bold transition-all duration-300 hover:bg-[rgb(0,255,247)] hover:shadow-[0_0_15px_rgb(0,255,247)] ${
                                    profile === 'all' 
                                    ? 'bg-[rgb(0,155,255)] text-white shadow-[0_0_15px_rgb(0,155,255)]' 
                                    : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                INICIO
                            </button>

                    )}

                    <button 
                        onClick={() => {setProfile('dev'); onReset();}}
                        className={`px-4 py-2 rounded-full text-[10px] cursor-pointer font-bold transition-all duration-300 ${
                            profile === 'dev' 
                            ? 'bg-accent text-white shadow-[0_0_15px_rgba(141,53,255,0.5)]' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        DEVELOPER
                    </button>
                    
                    <button 
                        onClick={() => {setProfile('hybrid'); onReset();}}
                        className={`px-4 py-2 rounded-full text-[10px] cursor-pointer font-bold transition-all duration-300 ${
                            profile === 'hybrid' 
                            ? 'bg-gradient-to-r from-accent to-pink-500 text-white shadow-[0_0_15px_rgba(141,53,255,0.5)]' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        HÍBRIDO
                    </button>    

                    <button 
                        onClick={() => {setProfile('growth'); onReset()}}
                        className={`px-4 py-2 rounded-full text-[10px] cursor-pointer font-bold transition-all duration-300 ${
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