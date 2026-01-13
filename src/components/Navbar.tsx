import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // fecha o menu mobile
    }
  };

  return (
    <header className="top-0 left-0 w-full z-50 bg-[#171023]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 h-[76px] sm:h-24">
        {/* LOGO / NOME */}
        <a
          href="/"
          className="font-bebas uppercase text-[32px] tracking-wider text-[#C7C7C7] cursor-pointer"
        >
          Júlia Soares
        </a>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-10 font-bebas uppercase text-[18px] tracking-wider text-[#C7C7C7]">
          <li
            className="cursor-pointer hover:text-white transition"
            onClick={() => scrollToSection("sobre")}
          >
            Sobre
          </li>
          <li
            className="cursor-pointer hover:text-white transition"
            onClick={() => scrollToSection("projetos")}
          >
            Projetos
          </li>
          <li
            className="cursor-pointer hover:text-white transition"
            onClick={() => scrollToSection("contato")}
          >
            Contato
          </li>
        </ul>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-[#C7C7C7]"
          aria-label="Abrir menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* OVERLAY */}
      <div
        className={`
    fixed inset-0 z-40 bg-black/60 transition-opacity
    ${open ? "opacity-100 visible" : "opacity-0 invisible"}
  `}
        onClick={() => setOpen(false)}
      />

      {/* MENU LATERAL */}
      <div
        className={`
    fixed top-0 right-0 z-50 h-full w-64
    bg-[#171023]
    px-6 pt-24
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "translate-x-full"}
  `}
      >
        {/* BOTÃO FECHAR */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-[#C7C7C7]"
          aria-label="Fechar menu"
        >
          <X size={28} />
        </button>

        <ul className="flex flex-col gap-8 font-bebas uppercase text-[22px] tracking-wider text-[#C7C7C7]">
          <li
            className="hover:text-white transition"
            onClick={() => {
              scrollToSection("hero");
              setOpen(false);
            }}
          >
            Início
          </li>

          <li
            className="hover:text-white transition"
            onClick={() => {
              scrollToSection("sobre");
              setOpen(false);
            }}
          >
            Sobre
          </li>

          <li
            className="hover:text-white transition"
            onClick={() => {
              scrollToSection("projetos");
              setOpen(false);
            }}
          >
            Projetos
          </li>

          <li
            className="hover:text-white transition"
            onClick={() => {
              scrollToSection("contato");
              setOpen(false);
            }}
          >
            Contato
          </li>
        </ul>
      </div>
    </header>
  );
}
