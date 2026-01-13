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
    <section
      className="bg-[#171023] py-20 border-b border-[#413A4F]/40"
      id="experiencia"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Título */}
          <h2 className="font-bebas text-[48px] text-[#F5F6F6]">
            Experiências
          </h2>

          {/* Conteúdo */}
          <div className="md:col-span-2 flex flex-col gap-10 mt-3">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-[#F5F6F6] font-semibold text-[22px]">
                    {exp.cargo}
                  </h3>
                  <span className="text-[#878EA1] text-[16px]">
                    {exp.periodo}
                  </span>
                </div>

                <p className="text-[#CB30E0] font-bold text-[18px]">
                  {exp.empresa}
                </p>

                <p className="text-[#878EA1] text-[16px] leading-relaxed">
                  {exp.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
