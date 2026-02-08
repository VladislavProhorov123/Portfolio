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
        <div className="bg-gray-900/70 border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>

          {/* Биография */}
          <p className="text-gray-400">
            Привет! Я Владислав, frontend-разработчик. Сейчас работаю над
            управлением состоянием и сохранением данных с помощью{" "}
            <span className="text-violet-400 font-semibold">Zustand</span>,
            взаимодействую с внешними API, создаю анимации и UI-эффекты с{" "}
            <span className="text-violet-400 font-semibold">Framer Motion</span>
            , а также улучшаю пользовательский интерфейс и взаимодействие с
            приложением. Это помогает создавать более динамичные, отзывчивые и
            удобные веб-приложения.
          </p>

          {/* Достижения */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-violet-400">
              Достижения / Проекты
            </h3>

            {/* Проект 1 */}
            <div className="bg-gray-800/60 border border-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-white">
                Дашборд-приложение на React (SPA)
              </h4>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                <li>
                  Форма с валидацией и проверкой пароля с помощью React Hook
                  Form
                </li>
                <li>
                  Графики продаж: линейные, круговые и точечные диаграммы с
                  Recharts
                </li>
                <li>Таблица с фильтрацией данных</li>
                <li>
                  Карточки товаров с добавлением в избранное через Context API
                </li>
                <li>Интерактивные интерфейсы с Swiper.js</li>
              </ul>
            </div>

            {/* Проект 2 */}
            <div className="bg-gray-800/60 border border-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-white">
                Country API приложение
              </h4>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                <li>Изучение стран с использованием внешнего API</li>
                <li>Добавление стран в избранное</li>
                <li>Отображение полной информации о каждой стране</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Правая колонка — стек технологий */}
        <div
          className=" gap-4 bg-gray-900/70
  border border-white/10
  rounded-2xl
  p-4 sm:p-6 lg:p-8
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
