import Hero from '../sections/Hero'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Projects from '../sections/Projects'
import SocialBar from '../sections/SocialBar'

export default function Home() {
  return (
    <div className='bg-[rgb(var(--bg))] relative'>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <SocialBar />
      <Footer />
    </div>
  )
}
