import { motion } from "motion/react";
import React from "react";
import TypingText from "../components/TypingText";
import LocationTime from "../components/LocationTime";
import Stars from "../components/Stars";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-950">
      {/* Звёздочки на заднем фоне */}
      <Stars />

      {/* фоновый фиолетовый glow слева */}
      <div
        className="
          pointer-events-none
          absolute -top-40 -left-40
          h-[600px] w-[600px]
          rounded-full
          bg-violet-500
          opacity-20
          blur-[120px]
          z-0
        "
      />

      {/* фоновый фиолетовый glow справа */}
      {/* <div
        className="
          pointer-events-none
          absolute -bottom-40 -right-40
          h-[500px] w-[500px]
          rounded-full
          bg-violet-500
          opacity-10
          blur-[140px]
          z-0
        "
      /> */}

      <div className="mx-auto max-w-6xl px-6 relative mt-[100px] z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* роль */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 px-4 py-1 text-sm text-violet-400 w-fit">
              <span className="h-2 w-2 rounded-full bg-violet-400 pulse-bright"></span>
              Available for work
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-sm text-gray-400 w-fit">
              <LocationTime />
            </span>
          </div>

          <div className="max-w-[700px]">
            <h1 className="mt-6 text-[clamp(2.5rem,6vw,4rem)] font-bold leading-tight text-white">
              Владислав Прохоров
            </h1>

            <TypingText />

            <p className="mt-6 max-w-xl text-[clamp(1rem,2.5vw,1.25rem)] text-gray-400">
              Создаю производительные интерфейсы на React и TypeScript.
              <br />
              Фокус на чистом коде, анимациях и удобстве пользователя.
            </p>
          </div>

          
        </motion.div>
      </div>
    </section>
  );
}
