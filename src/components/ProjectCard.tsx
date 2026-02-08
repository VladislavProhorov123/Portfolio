import React from "react";

interface IProjectCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

export default function ProjectCard({
  Icon,
  title,
  description,
  techStack,
  link,
}: IProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-gray-900/70 border border-white/10 rounded-2xl p-4 lg:p-6 flex flex-col justify-between backdrop-blur transition hover:shadow-[0_0_40px_rgba(139,92,246,0.25)] hover:scale-104">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-6 h-6 text-violet-400" />
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-gray-800/50 border border-white/10 text-gray-300 hover:bg-violet-600/20 hover:text-violet-300 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
