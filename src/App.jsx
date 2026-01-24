import { useState } from "react";
import "./index.css";
import {Header} from "./components/sections/Header"
import { Hero } from "./components/sections/Hero";


function App () {
  const [profile, setProfile] = useState('all');
  
  return (
    <main className="bg-darkBg min-h-screen text-white">
      <Header profile={profile} setProfile={setProfile} />
      <Hero profile={profile} setProfile={setProfile}/>
    </main>
  );
}

export default App