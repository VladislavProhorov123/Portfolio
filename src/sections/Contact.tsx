import React from "react";
import confetti from 'canvas-confetti'
import { LucideMessageSquareText, MessageSquare } from "lucide-react";


export default function Contact() {
  const fireConfetti = () => {
    confetti({
      particleCount: 180,
      spread: 100,
      startVelocity: 45,
      ticks: 200,
      gravity: 0.9,
      origin: {y: 0.7},
      colors: [
        '#7c3aed',
        '#8b5cf6',
        '#a78bfa',
        '#6d28d9'
      ]
    })

    window.open('https://t.me/VIadik0509', '_blank')
  }
  return (
    <section className="bg-gray-950 py-20 px-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="bg-gray-900/70 border border-white/10 rounded-2xl p-8 backdrop-blur flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-3 ">Ready to build something great?</h2>
          <p className="text-gray-400 mb-4">Открыт к предложениям и международному сотрудничеству.</p>
          <button onClick={fireConfetti} className="flex px-6 py-3 rounded-xl bg-violet-600 text-white font-medium transition hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139, 92, 246, 0.9),0_0_120px_rgba(139, 92, 246, 0.6)] active:scale-95 border-none outline-none gap-2 items-center justify-center cursor-pointer hover:scale-102"> <LucideMessageSquareText/> Написать мне</button>
        </div>
      </div>
    </section>
  );
}
