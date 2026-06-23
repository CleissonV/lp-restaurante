import { motion, useScroll, useTransform } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { GiFlowerEmblem } from 'react-icons/gi'
import { MdRestaurantMenu } from 'react-icons/md'
import CandleFlame from '../components/ui/CandleFlame'

const Hero = () => {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -100])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay loop muted playsInline
        poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0700]/70 via-[#0d0700]/45 to-[#0d0700]/85" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(42,21,5,0.35) 0%, rgba(13,7,0,0.8) 72%)' }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(200,144,42,0.02) 2px, rgba(200,144,42,0.02) 4px)',
        }}
      />
      <motion.div style={{ y: heroY }} className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center">
          <div className="flex gap-8 mb-10">
            {[0, 1, 2].map(i => (
              <div key={i} className="flex flex-col items-center" style={{ animationDelay: `${i * 0.3}s` }}>
                <CandleFlame />
                <div className="w-2 h-16 bg-gradient-to-b from-[#e8d5b7] to-[#c8902a] opacity-30 mt-1" />
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[#c8902a] tracking-[0.5em] uppercase text-xs mb-4 font-sans"
          >
            Alta Gastronomia Brasileira
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#e8d5b7] leading-none mb-4"
          >
            <em>Alma</em>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-serif text-2xl md:text-4xl text-[#c8902a] mb-6 tracking-widest italic"
          >
            Gastronomia
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c8902a]" />
            <GiFlowerEmblem className="text-[#c8902a]" size={16} />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c8902a]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-[#8a7055] text-sm md:text-base leading-relaxed max-w-xl font-sans font-light mb-10"
          >
            Uma jornada sensorial pela alma da gastronomia brasileira. Ingredientes ancestrais, técnicas contemporâneas, emoções únicas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#reservas"
              className="px-10 py-4 bg-[#c8902a] text-[#0d0700] font-sans font-medium text-sm tracking-widest uppercase hover:bg-[#e8b84a] transition-all duration-300"
            >
              Reservar Mesa
            </a>
            <a
              href="#cardapio"
              className="px-10 py-4 border border-[#2a1a08] text-[#8a7055] font-sans text-sm tracking-widest uppercase hover:border-[#c8902a] hover:text-[#c8902a] transition-all duration-300 flex items-center gap-2"
            >
              <MdRestaurantMenu size={14} /> Ver Cardápio
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-center gap-6 mt-10"
          >
            {[
              { n: '★', l: '1 Estrela Michelin 2024' },
              { n: '12', l: 'Anos de história' },
              { n: '#3', l: 'Melhores SP 2024' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-[#c8902a] font-serif text-lg">{s.n}</div>
                <div className="text-[#6a5535] text-[10px] tracking-widest uppercase font-sans">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <FaChevronDown className="text-[#c8902a] animate-bounce" size={14} />
      </motion.div>
    </section>
  )
}

export default Hero
