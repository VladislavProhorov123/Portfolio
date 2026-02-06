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
    <h2 className="text-2xl font-medium text-white">
      {value}
      <span className="ml-1 inline-block w-[2px] h-[1.2em] bg-white animate-blink align-middle" />
    </h2>
  )
}
