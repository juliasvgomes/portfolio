
export function Experience() {
  const experiences = [
    {
      cargo: "Desenvolvedora Front-end",
      periodo: "Jan 2024 — Presente",
      empresa: "Empresa ABC",
      descricao:
        "Desenvolvi e mantive aplicações web responsivas utilizando React e TypeScript. Colaborei com designers e back-end para implementar funcionalidades e otimizar performance.",
    },
    {
      cargo: "Estagiária de Desenvolvimento Front-end",
      periodo: "Jul 2023 — Dez 2023",
      empresa: "Empresa XYZ",
      descricao:
        "Participei do desenvolvimento de páginas web responsivas, revisando códigos e garantindo qualidade nas entregas. Aprimorei conhecimentos em React e Git.",
    },
    {
      cargo: "Analista de Suporte de TI",
      periodo: "Jan 2022 — Jun 2023",
      empresa: "Empresa 123",
      descricao:
        "Atuei no suporte técnico, resolução de problemas de hardware e software, além de auxiliar na manutenção e configuração de sistemas internos.",
    },
  ];

  return (
    <section className="bg-[#171023] py-20 px-6 md:px-16" id="experiencia">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Coluna do Título */}
        <div className="md:w-1/3 flex items-start">
          <div className="flex items-center gap-6">
            <h2 className="font-bebas text-[48px] text-[#F5F6F6]">Experiência</h2>
            <div className="flex-1 h-px bg-[#413A4F]" />
          </div>
        </div>

        {/* Coluna das Experiências */}
        <div className="md:w-2/3 flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <h3 className="text-[#F5F6F6] font-semibold text-[22px]">{exp.cargo}</h3>
                <span className="text-[#878EA1] text-[16px]">{exp.periodo}</span>
              </div>
              <p className="text-[#D3E97A] font-bold text-[18px]">{exp.empresa}</p>
              <p className="text-[#878EA1] text-[16px] mt-1">{exp.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
