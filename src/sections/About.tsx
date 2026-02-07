import React from "react";

export default function About() {
  const skills = [
    { name: "React", color: "text-cyan-400" },
    { name: "TypeScript", color: "text-blue-400" },
    { name: "Tailwind CSS", color: "text-teal-300" },
    { name: "Framer Motion", color: "text-purple-400" },
    { name: "JavaScript", color: "text-yellow-400" },
    { name: "Git & GitHub", color: "text-gray-400" },
  ];

  return (
    <section className="relative bg-gray-950 py-20 px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Левая колонка — описание */}
        <div>
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
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`px-4 py-2 rounded-full border border-gray-700 text-sm font-medium ${skill.color} hover:bg-gray-800 transition`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
