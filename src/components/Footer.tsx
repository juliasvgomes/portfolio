export function Footer() {
  return (
    <footer className="bg-[#171023] border-t border-[#413A4F] py-6">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Esquerda */}
        <p className="text-[#878EA1] text-sm">
          © {new Date().getFullYear()} Júlia Soares
        </p>

        {/* Direita */}
        <p className="text-[#878EA1] text-sm">
          Desenvolvido com React + TypeScript 
        </p>

      </div>
    </footer>
  );
}
