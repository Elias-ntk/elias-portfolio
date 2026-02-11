export const Header = ({ profile, setProfile, onReset }) => {
    
    return (
        <header className="fixed top-0 w-full p-6 flex justify-between items-center bg-darkBg/60 backdrop-blur-lg z-50">
            {/* Logo */}
            <div onClick={() => {setProfile('all'); onReset()}} className="text-2xl cursor-pointer font-black tracking-tighter flex transition-all duration-400 hover:scale-103">
                Elias<div className="text-accent  transition-all duration-900">Sgv</div>
            </div>
            

            {/* Contenedor del Switch */}
                
                <div className="flex p-1 rounded-full border border-white/10 shadow-2xl scale-90 md:scale-100 gap-2">
                    {profile !== 'all' && (
                            <button 
                                onClick={() => {setProfile('all'); onReset()}}
                                className={`px-6 py-2 rounded-full text-[10px] cursor-pointer font-bold transition-all duration-300 hover:bg-gradient-to-r from-secondC/10 to-accent/30 hover:shadow-[0_0_15px_rgb(0,255,247,.8)] ${
                                    profile === 'all' 
                                    ? 'bg-gradient-to-r from- to-accent/30 text-white shadow-[0_0_15px_rgb(0,155,255)]' 
                                    : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                INICIO
                            </button>

                    )}

                    <button 
                        onClick={() => {setProfile('dev'); onReset();}}
                        className={`px-4 py-2 rounded-full text-[10px] cursor-pointer font-bold transition-all duration-300 hover:bg-gradient-to-r from-secondC/10 to-accent/30 hover:shadow-[0_0_15px_rgb(0,255,247,.8)] ${
                            profile === 'dev' 
                            ? 'bg-gradient-to-r from- to-accent/30 text-white shadow-[0_0_15px_rgb(0,255,247,.8)]' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        DEVELOPER
                    </button>
                    
                    <button 
                        onClick={() => {setProfile('hybrid'); onReset();}}
                        className={`px-4 py-2 rounded-full text-[10px] cursor-pointer font-bold transition-all duration-300 hover:bg-gradient-to-r from-secondC/10 to-accent/30 hover:shadow-[0_0_15px_rgb(0,255,247,.8)] ${
                            profile === 'hybrid' 
                            ? 'bg-gradient-to-r from- to-accent/30 text-white shadow-[0_0_15px_rgb(0,255,247,.8)]' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        HÍBRIDO
                    </button>    

                    <button 
                        onClick={() => {setProfile('growth'); onReset()}}
                        className={`px-4 py-2 rounded-full text-[10px] cursor-pointer font-bold transition-all duration-300 hover:bg-gradient-to-r from-secondC/10 to-accent/30 to- hover:shadow-[0_0_15px_rgb(0,255,247,.8)] ${
                            profile === 'growth' 
                            ? 'bg-gradient-to-r from- to-accent/30 text-white shadow-[0_0_15px_rgb(0,255,247,.8)]' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        GROWTH
                    </button>
                </div>
            
           
        </header>
    );
}