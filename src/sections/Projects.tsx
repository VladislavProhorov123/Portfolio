import ProjectCard from '../components/ProjectCard'
import { BottleWine, Code2, Earth, LineChartIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const icons = [LineChartIcon, BottleWine, Earth, Code2]

export default function Projects() {
  const { t } = useTranslation()

  // получаем массив объектов проектов из JSON
  const translatedProjects = t('projects', { returnObjects: true })  as any[]

  return (
    <section className='text-white px-6 bg-gray-950'>
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl mb-6 font-bold text-white">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translatedProjects.map((proj, idx) => (
            <ProjectCard
              key={proj.title}
              Icon={icons[idx]} 
              title={proj.title}
              description={proj.description}
              techStack={proj.techStack}
              link={proj.link || '#'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}