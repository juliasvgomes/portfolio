import { ProjectCard } from "./ProjectCard";

import projeto from "../assets/projeto.png";


export function Projects() {
  return (
    <section id="projetos"className="bg-[#171023] py-20">
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
            image={projeto}
            title="Projeto 1"
            technologies={["React", "TypeScript", "Tailwind"]}
            demoUrl="https://seuprojeto.com"
            githubUrl="https://github.com/seugithub"
          />

          <ProjectCard
            image={projeto}
            title="Projeto 2"
            technologies={["React", "Vite", "API"]}
            demoUrl="https://seuprojeto.com"
            githubUrl="https://github.com/seugithub"
          />

          <ProjectCard
            image={projeto}
            title="Projeto 3"
            technologies={["React", "UI/UX"]}
            demoUrl="https://seuprojeto.com"
            githubUrl="https://github.com/seugithub"
          />
        </div>
      </div>
    </section>
  );
}
