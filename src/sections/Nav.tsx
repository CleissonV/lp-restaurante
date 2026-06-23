import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-xs text-[#8a7055] hover:text-[#c8902a] transition-colors tracking-[0.2em] uppercase font-sans">{children}</a>
)

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#0d0700]/95 backdrop-blur-md border-b border-[#2a1a08] py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 font-serif text-xl text-[#e8d5b7] italic">
          <svg viewBox="0 0 32 32" className="w-5 h-6" fill="none" stroke="#c8902a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5v8a3 3 0 0 0 6 0V5" /><path d="M14 5v22" /><path d="M23 5c-2 0-3.5 3-3.5 7s1.5 5 3.5 5v10" />
          </svg>
          <span>Alma <span className="text-[#c8902a]">Gastronomia</span></span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#cardapio">Cardápio</NavLink>
          <NavLink href="#chef">Chef</NavLink>
          <NavLink href="#galeria">Galeria</NavLink>
          <NavLink href="#reservas">Reservas</NavLink>
          <a
            href="#reservas"
            className="px-6 py-2 border border-[#c8902a] text-[#c8902a] text-xs tracking-widest uppercase font-sans hover:bg-[#c8902a] hover:text-[#0d0700] transition-all duration-300"
          >
            Reservar Mesa
          </a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#c8902a]">
          {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a0e05] border-t border-[#2a1a08]"
          >
            <div className="flex flex-col gap-5 p-6">
              {['Cardápio', 'Chef', 'Galeria', 'Reservas'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace('á', 'a').replace('é', 'e')}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs tracking-[0.2em] uppercase text-[#6a5535] font-sans"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Nav
