import { motion } from 'framer-motion'
import { GiSpoon } from 'react-icons/gi'
import { foodImages } from '../constants/data'
import GalleryItem from '../components/ui/GalleryItem'

const Gallery = () => (
  <section id="galeria" className="py-32 max-w-7xl mx-auto px-6">
    <div className="text-center mb-12">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-[#c8902a] tracking-[0.4em] uppercase text-xs mb-4 font-sans"
      >
        Momentos
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-5xl text-[#e8d5b7] italic"
      >
        Galeria
      </motion.h2>
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c8902a]" />
        <GiSpoon className="text-[#c8902a]" size={14} />
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c8902a]" />
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {foodImages.map((item, i) => (
        <GalleryItem key={i} src={item.src} alt={item.alt} index={i} />
      ))}
    </div>
    <div className="text-center mt-8">
      <a
        href="#"
        className="inline-block text-xs tracking-[0.3em] uppercase font-sans text-[#c8902a] border-b border-[#c8902a]/40 pb-1 hover:border-[#c8902a] transition-colors"
      >
        Ver todas as fotos no Instagram
      </a>
    </div>
  </section>
)

export default Gallery
