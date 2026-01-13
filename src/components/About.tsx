{
  /*import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react"; // <- ícone*/
}

export function About() {
  return (
    <section
      id="sobre"
      className="bg-[#171023] py-20 border-b border-[#413A4F]/50"
    >
      <div className="container mx-auto px-4">
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
            items-start
          "
        >
          {/* Título */}
          <h2 className="font-bebas text-white text-5xl md:col-span-1">
            Sobre mim
          </h2>

          {/* Conteúdo */}
          <div className="md:col-span-2 max-w-2xl">
            <h3 className="text-white text-xl font-medium mb-4">
              Sou desenvolvedora front-end, formada em Análise e Desenvolvimento
              de Sistemas, com foco na criação de interfaces modernas,
              responsivas e centradas no usuário.
            </h3>

            <p className="text-[#878EA1] text-base leading-relaxed mb-6">
              Durante minha trajetória acadêmica e profissional, tive contato
              com diferentes tecnologias e frameworks voltados ao
              desenvolvimento de aplicações web. Atuei como Estagiária de
              Desenvolvimento Front-End, participando da construção e manutenção
              de interfaces responsivas, além de revisões de código e processos
              de controle de qualidade, sempre buscando boas práticas e entregas
              consistentes.
            </p>

            <p className="text-[#878EA1] text-base leading-relaxed mb-6">
              Também atuei como Analista de TI, onde contribuí com melhorias em
              sistemas internos, prestei suporte técnico e colaborei diretamente
              com usuários e equipes, garantindo o bom funcionamento das
              soluções e uma comunicação clara entre áreas.
            </p>

            <p className="text-[#878EA1] text-base leading-relaxed">
              Sou uma profissional curiosa, dedicada e em constante aprendizado,
              sempre buscando evoluir tecnicamente e entregar soluções bem
              estruturadas, funcionais e alinhadas às necessidades do usuário e
              do negócio. Tenho interesse em atuar em projetos que valorizem
              colaboração, boas práticas e crescimento contínuo.
            </p>
            {/* <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#413A4F] text-[#F5F6F6] rounded-lg hover:bg-[#55515c] transition"
            >
              Saiba mais
              <ArrowUpRight size={18} />
            </Link>*/}
          </div>
        </div>
      </div>
    </section>
  );
}
