export function About() {
  return (
    <section className="bg-[#171023] py-20">
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
              I am a front-end developer based in Sydney. Has Mechanical
              Engineering background.
            </h3>

            <p className="text-[#878EA1] text-base leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>

            <a
              href="/about"
              className="text-[#F5F6F6] font-medium hover:underline"
            >
              More about me →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
