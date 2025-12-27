
export function Experience() {
  const experiences = [
    {
      cargo: "Analista de Suporte de TI",
      periodo: "Mar 2025 — Out 2025",
      empresa: "Santa Casa de Bom Sucesso",
      descricao:
        "Atuei no suporte técnico, resolução de problemas de hardware e software, além de auxiliar na manutenção e configuração de sistemas internos.",
    },    
    {
      cargo: "Estagiária de Desenvolvimento Front-end",
      periodo: "Nov 2022 — Fev 2023",
      empresa: "Second Mind",
      descricao:
        "Participei do desenvolvimento de páginas web responsivas, revisando códigos e garantindo qualidade nas entregas. Aprimorei conhecimentos em React e Git.",
    },

  ];

  return (
    <section className="bg-[#171023] py-20 px-6 md:px-16 border-b border-[#413A4F]/40 " id="experiencia">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Coluna do Título */}
        <div className="md:w-1/3 flex items-start">
          <div className="flex items-center gap-6 ml-5">
            <h2 className="font-bebas text-[48px] text-[#F5F6F6]">Experiência</h2>
            <div className="flex-1 h-px bg-[#413A4F]" />
          </div>
        </div>

        {/* Coluna das Experiências */}
        <div className="md:w-2/3 flex flex-col gap-8 mt-20">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <h3 className="text-[#F5F6F6] font-semibold text-[22px]">{exp.cargo}</h3>
                <span className="text-[#878EA1] text-[16px]">{exp.periodo}</span>
              </div>
              <p className="text-[#CB30E0] font-bold text-[18px]">{exp.empresa}</p>
              <p className="text-[#878EA1] text-[16px] mt-1">{exp.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
