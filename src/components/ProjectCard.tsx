import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

export function ProjectCard({
  image,
  title,
  technologies,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="
      bg-[#1F1A2B]
      rounded-xl
      overflow-hidden
      shadow-lg
      transition
      hover:-translate-y-1 hover:shadow-xl
    ">
      {/* Imagem */}
      <a href={demoUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />
      </a>

      {/* Conteúdo */}
      <div className="p-5 flex flex-col gap-4">
        <h3 className="font-bebas text-2xl text-white">
          {title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-[#2A2433] text-[#C7C7C7]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Ações */}
        <div className="mt-2 flex items-center gap-4">

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5F6F6] hover:opacity-80"
          >
            <Github size={20} />
          </a>
            <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-[#F5F6F6] hover:underline"
          >
            <ExternalLink size={16} />
            Ver projeto
          </a>
        </div>
      </div>
    </div>
  );
}
