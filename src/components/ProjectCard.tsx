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
    <a
      href={demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        bg-[#1F1A2B]
        rounded-xl
        overflow-hidden
        shadow-lg
        transition
        hover:-translate-y-1 hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-[#CB30E0]
        block
      "
    >
      {/* Imagem */}
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

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
        <div className="mt-2 flex items-center justify-between">
          {/* GitHub (ação secundária) */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[#F5F6F6] hover:text-[#CB30E0] transition"
          >
            <Github size={20} />
          </a>

          {/* Indicador visual */}
          <div className="flex items-center gap-1 text-sm text-[#F5F6F6] group-hover:text-[#CB30E0] transition">
            <ExternalLink size={16} />
            Ver projeto
          </div>
        </div>
      </div>
    </a>
  );
}
