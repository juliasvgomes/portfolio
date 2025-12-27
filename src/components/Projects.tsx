import { ProjectCard } from "./ProjectCard";

import projeto1 from "../assets/projeto1.png";
import projeto2 from "../assets/projeto2.png";
import projeto3 from "../assets/projeto3.png";


export function Projects() {
  return (
    <section id="projetos"className="bg-[#171023] py-20 border-b border-[#413A4F]/40">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="font-bebas text-white text-5xl mb-12 text-left">
          Projetos
        </h2>

        {/* Grid */}
        <div className="
          grid gap-8
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        ">
          <ProjectCard
            image={projeto1}
            title="Projeto Let me ask"
            technologies={["React", "TypeScript", "Node.js", "PostgreSQL"]}
            demoUrl="https://let-me-ask-one.vercel.app/"
            githubUrl="https://github.com/juliasvgomes/let-me-ask"
          />

          <ProjectCard
            image={projeto2}
            title="Projeto Donalds"
            technologies={["React", "Next.js", "Node.js", "TypeScript"]}
            demoUrl="https://restaurant-psi-opal.vercel.app/donalds"
            githubUrl="https://github.com/juliasvgomes/restaurant"
          />

          <ProjectCard
            image={projeto3}
            title="Projeto Receitas"
            technologies={["React", "Manus"]}
            demoUrl="https://receitasite-mgivglgj.manus.space/"
            githubUrl="https://github.com/juliasvgomes/receitas"
          />
        </div>
      </div>
    </section>
  );
}
