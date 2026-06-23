import { motion, useScroll } from 'framer-motion'
import { GiFlowerEmblem } from 'react-icons/gi'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Quote from './sections/Quote'
import Menu from './sections/Menu'
import Chef from './sections/Chef'
import Gallery from './sections/Gallery'
import Reservations from './sections/Reservations'
import Footer from './sections/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="min-h-screen bg-[#0d0700]">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-[#c8902a] z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />

      <Nav />
      <Hero />
      <Quote />
      <Menu />

      {/* Decorative divider */}
      <div className="flex items-center gap-4 max-w-7xl mx-auto px-6 mb-0">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#2a1a08]" />
        <GiFlowerEmblem className="text-[#2a1a08]" size={20} />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#2a1a08]" />
      </div>

      <Chef />
      <Gallery />
      <Reservations />
      <Footer />
    </div>
  )
}
