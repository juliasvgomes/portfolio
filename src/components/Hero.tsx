import Avatar from "../assets/Avatar.svg";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-6 pt-20 pb-24 bg-[#171023] border-b border-[#413A4F]/40">
      {/* AVATAR */}
      <div className="relative w-32 h-32 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-4">
        <img src={Avatar} alt="Avatar" className="w-full h-full object-cover" />
      </div>

      {/* TEXTO HELLO WORLD */}
      <p className="text-[#ffffffaf] font-code text-[20px] leading- text-center mb-5">
        Hello World! Meu nome é
        <span className="text-[#CB30E0]"> Júlia Soares</span> e sou
      </p>

      {/* CARGO */}
      <h2 className="font-bebas uppercase text-white text-[36px] sm:text-[44px] md:text-[56px] tracking-wider leading-tight">
        Desenvolvedora Front-end
      </h2>

      {/* DESCRIÇÃO */}
      <p className="max-w-3xl text-[#878EA1] text-base sm:text-lg leading-relaxed">
        Transformo ideias em aplicações funcionais e intuitivas. Desenvolvo
        interfaces modernas com foco em usabilidade, performance e soluções
        práticas para desafios reais.
      </p>

      {/* BOTÃO */}
      <a
        href="/Curriculo_Julia.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center justify-center w-[144px] h-[56px] bg-[#413A4F] text-[#F5F6F6] font-bebas text-lg rounded-lg hover:text-[#CB30E0] transition "
      >
        ver CV
      </a>
    </section>
  );
}
