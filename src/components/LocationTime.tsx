import {  MapPin } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function LocationTime() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      setTime(`${hours}:${minutes}`)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <span className="inline-flex items-center gap-1">
      <MapPin className="h-4 w-4 text-white/70" />
      <p>Odessa</p>
      <span className="ml-2 font-mono text-white/90">{time}</span>
    </span>

  )
}
