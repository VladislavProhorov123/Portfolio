import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { BottleWine, Code2, Earth, LineChartIcon,  } from 'lucide-react';

const projects = [
    {
      Icon: LineChartIcon,
      title: "Dashboard App",
      description:
        "Разработана панель управления продажами с регистрацией и проверкой пароля, возможностью фильтровать продажи, добавлять товары в избранное и визуализировать данные через разные графики.",
      techStack: ["React", "Recharts", "Swiper.js", "React Hook Form"],
      link: "https://github.com/VladislavProhorov123/React-Dashboard"
    },
    {
      Icon: BottleWine,
      title: "Perfume Website",
      description:
        "Создан сайт духов с формой для заказов, где данные пользователей автоматически попадают в Excel, реализован роутинг по 4 страницам, добавлены свайперы и фильтрация товаров для удобного выбора.",
      techStack: ["React", "React Router", "Tailwind CSS", "Sheetbest", "Swiper.js"],
      link: "https://github.com/VladislavProhorov123/Bbenvenuti"
    },
    {
      Icon: Earth,
      title: "Country API App",
      description:
        "Реализовано приложение для изучения стран с API, включая стартовую страницу, страницу всех стран с фильтрацией, модальные окна и детальную страницу для каждой страны с добавлением в избранное.",
      techStack: ["React", "TypeScript", "API", "Zustand", "Tailwind CSS"],
      link: "https://github.com/VladislavProhorov123/Country-api"
    },
    {
      Icon: Code2,
      title: "CodeFlow",
      description:
        "Создан адаптивный одностраничный лейдинг с 6 секциями и отображением блоков кода через библиотеку react-syntax-highlighter для демонстрации примеров.",
      techStack: ["React", "React-syntax-highlighter", "Tailwind CSS"],
      link: "https://github.com/VladislavProhorov123/React-CodeFlow"
    },
  ];


export default function Projects() {
  return (
    <section className='text-white  px-6  bg-gray-950'>
      <div className="mx-auto max-w-6xl ">
        <h2 className="text-3xl mb-6 font-bold text-white ">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((projects) => (
            <ProjectCard
            key={projects.title}
            Icon={projects.Icon}
            title={projects.title}
            description={projects.description}
            techStack={projects.techStack}
            link={projects.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
