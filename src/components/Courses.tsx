import { ArrowUpRight } from "lucide-react";

interface Course {
  title: string;
  company: string;
  date: string;
  certificateLink: string;
}

const courses: Course[] = [
  {
    title: "Curso de Desenvolvimento Front-End",
    company: "Unilavras",
    date: "Março 2023",
    certificateLink: "/public/certificates/frontend.pdf",
  },
  {
    title: "Full Stack Developer",
    company: "DIO",
    date: "Agosto 2024",
    certificateLink: "/public/certificates/fullstack.pdf",
  },
  {
    title: "Engenharia de Dados com Python",
    company: "DIO",
    date: "Setembro 2024",
    certificateLink: "/public/certificates/dados.pdf",
  },
    {
    title: "Desafio Full-Stack com IA",
    company: "Rocketseat",
    date: "Outubro 2025",
    certificateLink: "/public/certificates/fullstackeIA.pdf",
  },
    {
    title: "Formação UX Designer",
    company: "DIO",
    date: "Novembro 2025",
    certificateLink: "/public/certificates/ux.pdf",
  },
    {
    title: "Formação React",
    company: "DIO",
    date: "Novembro 2025",
    certificateLink: "/public/certificates/react.pdf",
  },
  
];

export function Courses() {
  return (
    <section className="bg-[#171023] py-20 px-6 md:px-16 border-b border-[#413A4F]/40">
      <div className="container mx-auto px-4">
      {/* Título igual aos outros */}
        <div className="md:w-1/3 flex items-start">
          <div className="flex items-center gap-6">
            <h2 className="font-bebas text-[48px] text-[#F5F6F6]">Cursos</h2>
            <div className="flex-1 h-px bg-[#413A4F]" />
          </div>
        </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-[#352d47] rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition"
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
                className="text-[#F5F6F6] hover:text-[#CB30E0] transition"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>        
      </div>
    </section>
  );
}
