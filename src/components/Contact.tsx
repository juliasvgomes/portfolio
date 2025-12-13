import { Mail, Phone, Linkedin, Github, MessageCircle, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="bg-[#171023] px-6 py-20">
      {/* Título igual aos outros */}
        <div className="container mx-auto px-4">
        <h2 className="font-bebas text-white text-5xl mb-12 text-left">
          Contatos
        </h2>

      <p className="text-[#878EA1] mb-8">
        Vamos conversar? Você pode me encontrar por aqui:
      </p>
     <div className="flex justify-center">
      <div className="bg-[#2C243B] rounded-xl p-6 flex flex-col gap-4 max-w-md">
        <a href="mailto:seuemail@email.com" className="flex justify-between items-center p-4 bg-[#413A4F] rounded-lg hover:bg-[#55515c] transition">
          <div className="flex items-center gap-4">
            <Mail size={22} className="text-white" />
            <span className="text-white">Email</span>
          </div>
          <ArrowUpRight size={18} className="text-white" />
        </a>

        <a href="tel:+550000000000" className="flex justify-between items-center p-4 bg-[#413A4F] rounded-lg hover:bg-[#55515c] transition">
          <div className="flex items-center gap-4">
            <Phone size={22} className="text-white" />
            <span className="text-white">Telefone</span>
          </div>
          <ArrowUpRight size={18} className="text-white" />
        </a>

        <a href="https://www.linkedin.com/in/seu-linkedin" target="_blank" className="flex justify-between items-center p-4 bg-[#413A4F] rounded-lg hover:bg-[#55515c] transition">
          <div className="flex items-center gap-4">
            <Linkedin size={22} className="text-white" />
            <span className="text-white">LinkedIn</span>
          </div>
          <ArrowUpRight size={18} className="text-white" />
        </a>

        <a href="https://github.com/seu-github" target="_blank" className="flex justify-between items-center p-4 bg-[#413A4F] rounded-lg hover:bg-[#55515c] transition">
          <div className="flex items-center gap-4">
            <Github size={22} className="text-white" />
            <span className="text-white">GitHub</span>
          </div>
          <ArrowUpRight size={18} className="text-white" />
        </a>

        <a href="https://discord.com/users/seu-id" target="_blank" className="flex justify-between items-center p-4 bg-[#413A4F] rounded-lg hover:bg-[#55515c] transition">
          <div className="flex items-center gap-4">
            <MessageCircle size={22} className="text-white" />
            <span className="text-white">Discord</span>
          </div>
          <ArrowUpRight size={18} className="text-white" />
        </a>
      </div>
      </div>
      </div>
    </section>
  );
}
