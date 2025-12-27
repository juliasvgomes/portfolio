import Avatar from "../assets/my-photo.jpeg";
import Vector from "../assets/Vector.svg"

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-6 pt-20 pb-24 bg-[#171023] border-b border-[#413A4F]/40">
      {/* AVATAR */}
      <div className="relative w-24 h-24 mb-8">
        <img src={Avatar} alt="Avatar" className="w-24 h-24 rounded-full" />

        {/* Vetor de código no centro */}
        <img
          src={Vector}
          alt="Ícone código"
          className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-8 h-8"
        />
      </div>

      {/* TEXTO HELLO WORLD */}
      <p className="text-[#ffffffaf] font-code text-[20px] sm:text-[48px] md:text-[18px] leading-[64px]">
        Hello World! Meu nome é
        <span className="text-primary text-[#CB30E0]"> Júlia Soares</span> e sou
      </p>

      {/* CARGO */}
      <h2 className="font-bebas uppercase text-white text-[36px] sm:text-[44px] md:text-[56px] tracking-wider leading-tight">
        Desenvolvedora Front-end
      </h2>

      {/* DESCRIÇÃO */}
      <p className="max-w-3xl text-[#878EA1] text-base sm:text-lg leading-relaxed">
        Transformo necessidades em aplicações reais, envolventes e funcionais.
        Desenvolvo sistemas através da minha paixão pela tecnologia,
        contribuindo com soluções inovadoras e eficazes para desafios complexos.
      </p>

      {/* BOTÃO */}
      <a
        href="/Curriculo_Julia.pdf" target="_blank" rel="noopener noreferrer" 
        className="mt-6 flex items-center justify-center w-[144px] h-[56px] bg-[#413A4F] text-[#F5F6F6] font-bebas text-lg rounded-lg hover:opacity-90 transition"
      >
       ver CV ↗
      </a>
    </section>
  );
}
