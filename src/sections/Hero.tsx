import { motion } from "motion/react";
import React from "react";
import TypingText from "../components/TypingText";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-950">
      {/* фоновый фиолетовый glow */}
      <div
        className="
          pointer-events-none
          absolute -top-40 -left-40
          h-[600px] w-[600px]
          rounded-full
          bg-violet-500
          opacity-20
          blur-[120px]
        "
      />

      <div className="mx-auto max-w-6xl px-6 relative mt-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* роль */}
          <div className="flex justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 px-4 py-1 text-sm text-violet-400">
              {/* пульсирующий кружок */}
              <span className="h-2 w-2 rounded-full bg-violet-400 pulse-bright"></span>
              Available for work
            </span>
            <span className="inline-block rounded-full border border-gray-400/30 px-4 py-1 text-sm text-violet-400 bg-gray-900/50">
              Frontend Developer
            </span>
          </div>

          {/* заголовок */}
          <h1 className="mt-6 text-[clamp(2.5rem,6vw,4rem)] font-bold leading-tight text-white">
           Владислав  Прохоров
          </h1>

          <TypingText />

          {/* описание */}
          <p className="mt-6 max-w-xl text-[clamp(1rem,2.5vw,1.25rem)] text-gray-400">
            TypeScript, Tailwind, Framer Motion. Делаю чистые и быстрые
            интерфейсы с плавными анимациями.
          </p>

          {/* кнопки */}
          <div className="mt-10 flex gap-4">
            <a
              href="#projects"
              className="
                rounded-full
                bg-violet-500
                px-7 py-3
                font-medium
                text-white
                shadow-lg
                shadow-violet-500/30
                transition
                hover:scale-105
              "
            >
              Проекты
            </a>

            <a
              href="#contact"
              className="
                rounded-full
                border
                border-white/15
                px-7 py-3
                font-medium
                text-white
                transition
                hover:border-violet-400/50
                hover:text-violet-400
              "
            >
              Написать мне
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
