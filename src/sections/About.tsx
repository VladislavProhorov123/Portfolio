import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const { t } = useTranslation();

  const techStack = [
    { title: t("core"), items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
    {
      title: t("frontend"),
      items: ["React", "React Router", "Tailwind CSS", "Framer Motion"],
    },
    { title: t("stateForms"), items: ["Zustand", "React Hook Form"] },
    { title: t("dataUi"), items: ["Recharts", "Swiper.js", "Canvas-Confetti"] },
    { title: t("tooling"), items: ["Vite", "Git", "GitHub", "Figma"] },
  ];

  return (
    <section className="relative bg-gray-950 py-20 px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Левая колонка — описание */}
        <div className="bg-gray-900/70 border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("aboutMeTitle")}
          </h2>

          {/* Биография */}
          <p
            className="text-gray-400"
            dangerouslySetInnerHTML={{
              __html: t("bio", {
                zustand:
                  '<span class="text-violet-400 font-semibold">Zustand</span>',
                framer:
                  '<span class="text-violet-400 font-semibold">Framer Motion</span>',
              }),
            }}
          />

          {/* Достижения */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-violet-400">
              {t("achievementsTitle")}
            </h3>

            {/* Проект 1 */}
            <div className="bg-gray-800/60 border border-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-white">{t("project1Title")}</h4>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                {(t("project1Items", { returnObjects: true }) as string[]).map(
                  (item, i) => (
                    <li key={i}>{item}</li>
                  ),
                )}
              </ul>
            </div>

            {/* Проект 2 */}
            <div className="bg-gray-800/60 border border-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-white">{t("project2Title")}</h4>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                {(t("project2Items", { returnObjects: true }) as string[]).map(
                  (item, i) => (
                    <li key={i}>{item}</li>
                  ),
                )}
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
          <h2 className="text-3xl font-bold text-white mb-6">
            {t("techStackTitle")}
          </h2>
          <div className="space-y-6">
            {techStack.map((group) => (
              <div className="" key={group.title}>
                <h3 className="text-sm font-semibold text-violet-400 mb-3 tracking-wide uppercase">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => {
                    const isActive = activeTech === item;

                    return (
                      <span
                        key={item}
                        onClick={() => setActiveTech(isActive ? null : item)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 cursor-pointer ${isActive ? "text-violet-300 border-violet-400/40 bg-violet-600/10 shadow-[0_0_20px_rgba(139,92,246,0.25)]" : "bg-gray-800/60 border-white/10 text-gray-300 hover:text-violet-300 hover:border-violet-400/40 hover:bg-violet-600/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"}`}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
