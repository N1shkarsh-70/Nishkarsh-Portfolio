import Contact from "@/component/main/Contact";

import Hero from "@/component/main/Hero";
import Projects from "@/component/main/Projects";
import Skills from "@/component/main/Skills";




export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col  gap-10">
        <Hero/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </main>
  
  );
}
