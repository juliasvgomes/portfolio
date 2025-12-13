
import { DiReact, DiJavascript1, DiHtml5, DiCss3, DiPython, DiGit } from "react-icons/di";

export function Skills() {
  return (
    <section className="bg-[#171023] px-8 py-16">
      {/* Título igual aos outros */}
      <div className="flex items-center gap-6 mb-12">
        <h2 className="font-bebas text-[48px] text-[#F5F6F6]">Minhas Habilidades</h2>
      </div>

      {/* Colunas */}
      <div className="flex flex-col md:flex-row md:gap-16">
        {/* Coluna esquerda (pode adicionar algo depois se quiser) */}
        <div className="flex-1 mb-8 md:mb-0">
          {/* Placeholder vazio ou imagem, se quiser */}
        </div>

        {/* Coluna direita: texto + tags */}
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-[#878EA1] text-lg">
            I am always looking to add more skills. Morbi egestas neque eu blandit fermentum. 
            Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor.
          </p>

          {/* Tags com tecnologias */}
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="flex items-center gap-2 px-3 py-2 bg-[#222222] text-[#F5F6F6] rounded-full">
              <DiReact size={24} /> React
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-[#222222] text-[#F5F6F6] rounded-full">
              <DiJavascript1 size={24} /> JavaScript
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-[#222222] text-[#F5F6F6] rounded-full">
              <DiHtml5 size={24} /> HTML
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-[#222222] text-[#F5F6F6] rounded-full">
              <DiCss3 size={24} /> CSS
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-[#222222] text-[#F5F6F6] rounded-full">
              <DiPython size={24} /> Python
            </span>
            <span className="flex items-center gap-2 px-3 py-2 bg-[#222222] text-[#F5F6F6] rounded-full">
              <DiGit size={24} /> Git
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

