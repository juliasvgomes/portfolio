import { ArrowUpRight } from "lucide-react";

interface Course {
  title: string;
  company: string;
  date: string;
  certificateLink: string;
}

const courses: Course[] = [
  {
    title: "Curso de Front-End Moderno",
    company: "Escola XYZ",
    date: "Dezembro 2024",
    certificateLink: "/certificates/frontend.pdf",
  },
  {
    title: "React Avançado",
    company: "Escola ABC",
    date: "Agosto 2024",
    certificateLink: "/certificates/react.pdf",
  },
  {
    title: "Tailwind CSS e UI",
    company: "Plataforma Online",
    date: "Julho 2024",
    certificateLink: "/certificates/tailwind.pdf",
  },
    {
    title: "Tailwind CSS e UI",
    company: "Plataforma Online",
    date: "Julho 2024",
    certificateLink: "/certificates/tailwind.pdf",
  },
    {
    title: "Tailwind CSS e UI",
    company: "Plataforma Online",
    date: "Julho 2024",
    certificateLink: "/certificates/tailwind.pdf",
  },
    {
    title: "Tailwind CSS e UI",
    company: "Plataforma Online",
    date: "Julho 2024",
    certificateLink: "/certificates/tailwind.pdf",
  },
  
];

export function Courses() {
  return (
    <section className="bg-[#171023] px-8 py-16">
      {/* Título igual aos outros */}
      <div className="flex items-center gap-6 mb-12">
        <h2 className="font-bebas text-[48px] text-[#F5F6F6]">Cursos Complementares</h2>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-[#222222] rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div>
              <h3 className="text-[#F5F6F6] font-semibold text-lg">{course.title}</h3>
              <p className="text-[#878EA1] text-sm mt-1">{course.company}</p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-[#878EA1] text-sm">{course.date}</span>
              <a
                href={course.certificateLink}
                target="_blank"
                className="text-[#F5F6F6] hover:text-[#D3E97A] transition"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
