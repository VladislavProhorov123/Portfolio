import React, { useEffect, useState } from 'react'

const TEXT = "I am a Frontend Developer"
const SPEED = 100

export default function TypingText() {
  const [value, setValue] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if(index >= TEXT.length) return

    const timeout = setTimeout(() => {
      setValue((prev) => prev + TEXT[index])
      setIndex((prev) => prev + 1)
    }, SPEED)
    return () => clearTimeout(timeout)
  }, [index])

  return (
    <h2 className="text-[clamp(1.25rem,3vw,1.75rem)]
    font-semibold
    tracking-wide
    text-violet-400
    drop-shadow-[0_0_12px_rgba(139,92,246,0.35)]
">
      {value}
      <span className="ml-1
      inline-block
      w-[2px]
      h-[1.2em]
      align-middle
      bg-violet-400
      shadow-[0_0_8px_rgba(139,92,246,0.8)]
      animate-blink
" />
    </h2>
  )
}
