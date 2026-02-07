import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'

export default function Home() {
  return (
    <div className='bg-[rgb(var(--bg))] '>
      <Hero />
      <About />
    </div>
  )
}
