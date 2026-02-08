import { Github, Home, Linkedin, Mail, Send } from "lucide-react";

export default function SocialBar() {
  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) hero.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("yourmail@example.com");
    alert("Email скопирован!");
  };

  return (
    <section className="">
      <div
        className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2
          z-50
          flex items-center gap-4 sm:gap-6
          px-4 py-3 sm:px-8 sm:py-4
          rounded-full

          bg-gradient-to-b from-gray-900/80 to-gray-950/80
          backdrop-blur-md

          border border-violet-500/20
          shadow-[0_0_40px_rgba(139,92,246,0.15)]"
      >
        <div className="flex gap-6">
          <button
            onClick={scrollToHero}
            className="bg-transparent
        text-gray-400

        active:text-violet-400
        active:-translate-y-0.5
        active:filter
        active:drop-shadow-[0_0_14px_rgba(139,92,246,0.8)]


        transition-all duration-200
        hover:text-violet-400
        hover:-translate-y-1

        hover:filter
        hover:drop-shadow-[0_0_18px_rgba(139,92,246,0.9)]
        
"
          >
            <Home className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <a
            href="https://github.com/VladislavProhorov123"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="bg-transparent
        text-gray-400

        active:text-violet-400
        active:-translate-y-0.5
        active:filter
        active:drop-shadow-[0_0_14px_rgba(139,92,246,0.8)]

        transition-all duration-200
        hover:text-violet-400
        hover:-translate-y-1

        hover:filter
        hover:drop-shadow-[0_0_18px_rgba(139,92,246,0.9)]"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2-%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D1%80%D0%BE%D0%B2-75612b320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="bg-transparent
        text-gray-400

        active:text-violet-400
        active:-translate-y-0.5
        active:filter
        active:drop-shadow-[0_0_14px_rgba(139,92,246,0.8)]

        transition-all duration-200
        hover:text-violet-400
        hover:-translate-y-1

        hover:filter
        hover:drop-shadow-[0_0_18px_rgba(139,92,246,0.9)]
"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://t.me/VIadik0509"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
            className="bg-transparent
        text-gray-400

        active:text-violet-400
        active:-translate-y-0.5
        active:filter
        active:drop-shadow-[0_0_14px_rgba(139,92,246,0.8)]

        transition-all duration-200
        hover:text-violet-400
        hover:-translate-y-1

        hover:filter
        hover:drop-shadow-[0_0_18px_rgba(139,92,246,0.9)]
"
          >
            <Send className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <span className="text-gray-400"></span>
          <button
            onClick={copyEmail}
            className="bg-transparent
        text-gray-400

        active:text-violet-400
        active:-translate-y-0.5
        active:filter
        active:drop-shadow-[0_0_14px_rgba(139,92,246,0.8)]


        transition-all duration-200
        hover:text-violet-400
        hover:-translate-y-1

        hover:filter
        hover:drop-shadow-[0_0_18px_rgba(139,92,246,0.9)]
"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
