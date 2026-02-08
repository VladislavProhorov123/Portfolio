import React from "react";

export default function About() {
  const techStack = [
    {
      title: "Core",
      items: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      items: ["React", "React Router", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "State & Forms",
      items: ["Zustand", "React Hook Form"],
    },
    {
      title: "Data & UI",
      items: ["Recharts", "Swiper.js", "Canvas-Confetti"],
    },
    {
      title: "Tooling",
      items: ["Vite", "Git", "GitHub", "Figma"],
    },
  ];

  return (
    <section className="relative bg-gray-950 py-20 px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Левая колонка — описание */}
        <div
          className="bg-gray-900/70
  border border-white/10
  rounded-2xl
  p-8
  backdrop-blur"
        >
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <p className="text-gray-400 mb-4">
            Привет! Я Владислав, frontend-разработчик, специализируюсь на React
            и TypeScript. Создаю производительные и удобные интерфейсы с
            плавными анимациями и чистым кодом.
          </p>
          <p className="text-gray-400">
            Мне нравится изучать новые технологии и применять их в реальных
            проектах. Люблю аккуратный UI, анимации и хорошие пользовательские
            интерфейсы.
          </p>
        </div>

        {/* Правая колонка — стек технологий */}
        <div
          className=" gap-4 bg-gray-900/70
  border border-white/10
  rounded-2xl
  p-8
  backdrop-blur"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Tech Stack</h2>
          <div className="space-y-6">
            {techStack.map((group) => (
              <div className="" key={group.title}>
                <h3 className="text-sm font-semibold text-violet-400 mb-3 tracking-wide uppercase">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2
                        rounded-lg
                        text-sm font-medium

                        bg-gray-800/60
                        border border-white/10
                        text-gray-300

                        transition-all duration-200
                        hover:text-violet-300
                        hover:border-violet-400/40
                        hover:bg-violet-600/10
                        hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
