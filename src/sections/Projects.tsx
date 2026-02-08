import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { Github, Home, Send } from 'lucide-react';

const projects = [
    {
      Icon: Github,
      title: "Dashboard App",
      description:
        "SPA на React с графиками продаж, формой с валидацией, таблицами и Swiper.js",
      techStack: ["React", "TypeScript", "Recharts", "Swiper.js", "React Hook Form"],
    },
    {
      Icon: Home,
      title: "Perfume Website",
      description:
        "Сайт духов с нуля, адаптивный, с формой заявки через Sheetbest, 4 страницы",
      techStack: ["React", "Vite", "Tailwind CSS", "Sheetbest"],
    },
    {
      Icon: Send,
      title: "Country API App",
      description:
        "Приложение для изучения стран, добавление в избранное и работа с API",
      techStack: ["React", "TypeScript", "API", "Zustand", "Tailwind CSS"],
    },
    {
      Icon: Send,
      title: "Country API App",
      description:
        "Приложение для изучения стран, добавление в избранное и работа с API",
      techStack: ["React", "TypeScript", "API", "Zustand", "Tailwind CSS"],
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
            />
          ))}
        </div>
      </div>
    </section>
  )
}
