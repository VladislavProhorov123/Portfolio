import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Projects from '../sections/Projects'

export default function Home() {
  return (
    <div className='bg-[rgb(var(--bg))] '>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
