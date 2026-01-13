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
        {/* Título */}
        <h2 className="font-bebas text-white text-5xl mb-12 text-left">
          Cursos
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
          {courses.map((course, index) => (
            <a
              key={index}
              href={course.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#352d47] rounded-xl p-6 flex flex-col justify-between
               hover:shadow-lg hover:bg-[#3e3552] transition
               focus:outline-none focus:ring-2 focus:ring-[#CB30E0]"
            >
              <div>
                <h3 className="text-[#F5F6F6] font-semibold text-lg">
                  {course.title}
                </h3>
                <p className="text-[#878EA1] text-sm mt-1">{course.company}</p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-[#878EA1] text-sm">{course.date}</span>

                <ArrowUpRight
                  size={18}
                  className="text-[#F5F6F6] group-hover:text-[#CB30E0] transition"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
