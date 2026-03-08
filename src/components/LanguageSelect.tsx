import { AnimatePresence, motion } from "framer-motion";
import i18n from "i18next";
import { useEffect, useRef, useState } from "react";

import ua from "../assets/ua.svg";
import usa from "../assets/usa.svg";

const languages = [
  { code: "en", label: "English", flag: usa },
  { code: "uk", label: "Українська", flag: ua },
];

export default function LanguageSelect() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(i18n.language);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setCurrent(lang);
    setOpen(false);
  };

  const active = languages.find((l) => l.code === current);

  return (
    <div ref={ref} className="relative inline-block">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="px-4 py-2 rounded-lg text-sm font-medium cursor-pointer bg-gray-800/60 border border-white/10 text-gray-300 transition-all duration-200
          hover:text-violet-300
          hover:border-violet-400/40
          hover:bg-violet-600/10
          hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
      >
        <div>
          {active && (
            <img src={active.flag} className="w-6 h-6" alt={active.label} />
          )}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="
              absolute right-0 mt-2 w-40
              rounded-xl
              bg-gray-900/95
              backdrop-blur-xl
              border border-white/10
              shadow-[0_0_30px_rgba(0,0,0,0.4)]
              overflow-hidden
              z-50
            "
          >
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`
                  flex items-center gap-3
                  px-4 py-2
                  text-sm font-medium
                  cursor-pointer
                  transition-all duration-200
                  ${
                    current === lang.code
                      ? "text-violet-300 bg-violet-600/10"
                      : "text-gray-300 hover:text-violet-300 hover:bg-violet-600/10"
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <img src={lang.flag} className="w-6 h-6" alt={lang.label} />
                  <span>{lang.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
