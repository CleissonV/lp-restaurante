import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GiSpoon } from 'react-icons/gi'
import { menu } from '../constants/data'
import MenuItemCard from '../components/ui/MenuItemCard'

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(0)

  return (
    <section id="cardapio" className="py-32 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#c8902a] tracking-[0.4em] uppercase text-xs mb-4 font-sans"
        >
          Nossa Culinária
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif text-5xl md:text-6xl text-[#e8d5b7] italic mb-4"
        >
          Cardápio
        </motion.h2>
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c8902a]" />
          <GiSpoon className="text-[#c8902a]" size={14} />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c8902a]" />
        </div>
      </div>

      <div className="flex gap-6 justify-center mb-10 flex-wrap">
        {menu.map((section, i) => (
          <button
            key={i}
            onClick={() => setActiveMenu(i)}
            className={`text-xs tracking-[0.2em] uppercase font-sans pb-2 border-b-2 transition-all duration-300 ${
              activeMenu === i
                ? 'border-[#c8902a] text-[#c8902a]'
                : 'border-transparent text-[#6a5535] hover:text-[#8a7055]'
            }`}
          >
            {section.category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeMenu}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="max-w-2xl mx-auto menu-card bg-[#1a0e05] p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            {(() => {
              const Icon = menu[activeMenu].icon
              return <span className="text-[#c8902a]"><Icon size={30} strokeWidth={1.5} /></span>
            })()}
            <h3 className="font-serif text-3xl text-[#c8902a] italic">{menu[activeMenu].category}</h3>
          </div>
          {menu[activeMenu].items.map((item, i) => (
            <MenuItemCard key={i} item={item} index={i} />
          ))}
          <p className="text-[#6a5535] text-xs font-sans mt-6 text-center italic">
            Preços sujeitos a 10% de taxa de serviço. Cardápio sazonal.
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default Menu
