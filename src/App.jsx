import { useState } from "react";
import "./index.css";
import {Header} from "./components/sections/Header"
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { ProjectDetail } from "./components/sections/ProjectDetail";
import { Services } from "./components/sections/Services";
import { SobreMi } from "./components/sections/SobreMi";


function App () {
  const [profile, setProfile] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null)
  return (
    <main className="bg-darkBg min-h-screen text-white">
      <Header profile={profile} setProfile={setProfile} onReset={() => setSelectedProject(null)}/>

      {selectedProject ? (
        <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)}/>
      ) : (
        <>
        <Hero profile={profile} setProfile={setProfile}/>
        <SobreMi />
        <Services />
        <Projects profile={profile} onSelect={setSelectedProject}/>
        </>
      )}
    </main>
  );
}

export default App