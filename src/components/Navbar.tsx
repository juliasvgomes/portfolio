import { useState } from "react";
import { Menu, X,  } from "lucide-react";

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
          <li className="cursor-pointer hover:text-white transition" onClick={()=> scrollToSection("sobre")}>
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
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#C7C7C7]"
          aria-label="Abrir menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-[#171023] px-6 pb-6">
          <ul className="flex flex-col gap-6 font-bebas uppercase text-[20px] tracking-wider text-[#C7C7C7]">
            <li
              className="cursor-pointer hover:text-white transition"
              onClick={() => scrollToSection("hero")}
            >
              Início
            </li>
            <li className="cursor-pointer hover:text-white transition">
              <a href="/about">Sobre</a>
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
        </div>
      )}
    </header>
  );
}