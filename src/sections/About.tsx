import React from "react";

export default function About() {
  const skills = [
    { name: "React", color: "text-white" },
    { name: "TypeScript", color: "text-white" },
    { name: "Tailwind CSS", color: "text-white" },
    { name: "Framer Motion", color: "text-white" },
    { name: "JavaScript", color: "text-white" },
    { name: "Git & GitHub", color: "text-white" },
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
          <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
              <span
                key={skill.name}
                className={`px-4 py-2 rounded-lg text-sm font-medium border border-white/10 bg-gray-800/60 text-gray-300 transition-all duration-200 hover:bg-violet-600/20 hover:border-violet-400/40 hover:text-violet-300`}
              >
                {skill.name}
              </span>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
