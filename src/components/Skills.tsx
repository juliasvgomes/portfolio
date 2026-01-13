
import { DiReact, DiJavascript1, DiHtml5, DiCss3, DiPython, DiGit, DiAngularSimple, DiDocker, DiNodejs, DiNpm} from "react-icons/di";

export function Skills() {
  return (
    <section className="bg-[#171023] px-8 py-16 border-b border-[#413A4F]/40">
      <div className="container mx-auto px-4">
         {/* Título */}
        <h2 className="font-bebas text-white text-5xl mb-12 text-left">
          Skills
        </h2>

      {/* Colunas */}
      <div className="flex flex-col md:flex-row md:gap-15">
        {/* Coluna esquerda (pode adicionar algo depois se quiser) */}
        <div className="flex-1 mb-8 md:mb-0">
          {/* Placeholder vazio ou imagem, se quiser */}
        </div>

        {/* Coluna direita: texto + tags 
        <div className="flex-1 flex flex-col gap-4 p-7">
          <p className="text-[#878EA1] text-lg">
            Estou sempre buscando adquirir novas habilidades.
          </p>*/}

          {/* Tags com tecnologias */}
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="flex items-center gap-2 px-3 py-2 bg-[#413A4F] text-[#CB30E0] rounded-full">
              <DiReact size={24} /> React
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-[#413A4F] text-[#CB30E0] rounded-full">
              <DiJavascript1 size={24} /> JavaScript
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-[#413A4F] text-[#CB30E0] rounded-full">
              <DiHtml5 size={24} /> HTML
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-[#413A4F] text-[#CB30E0] rounded-full">
              <DiCss3 size={24} /> CSS
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-[#413A4F] text-[#CB30E0] rounded-full">
              <DiPython size={24} /> Python
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-[#413A4F] text-[#CB30E0] rounded-full">
              <DiGit size={24} /> Git
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-[#413A4F] text-[#CB30E0] rounded-full">
              <DiAngularSimple size={24} /> Angular
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-[#413A4F] text-[#CB30E0] rounded-full">
              <DiDocker size={24} /> Docker
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-[#413A4F] text-[#CB30E0] rounded-full">
              <DiNodejs size={24} /> Node.js
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-[#413A4F] text-[#CB30E0] rounded-full">
              <DiNpm size={24} /> npm
            </span>                                                
          </div>
        </div>
      </div>     

    </section>
  );
}

