import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaChevronDown, FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaWhatsapp, FaUtensils, FaWineGlassAlt, FaLeaf } from 'react-icons/fa'
import { GiChefToque, GiSpoon, GiFlowerEmblem } from 'react-icons/gi'
import { MdRestaurantMenu } from 'react-icons/md'

const CandleFlame = () => (
  <svg width="20" height="40" viewBox="0 0 20 40" className="candle-flame">
    <ellipse cx="10" cy="30" rx="4" ry="6" fill="#c8902a" opacity="0.9" />
    <ellipse cx="10" cy="22" rx="3" ry="8" fill="#e8b84a" opacity="0.8" />
    <ellipse cx="10" cy="14" rx="2" ry="8" fill="#fff7e6" opacity="0.6" />
    <ellipse cx="10" cy="8" rx="1.5" ry="6" fill="white" opacity="0.4" />
  </svg>
)

const menu = [
  { category: 'Entradas', emoji: '🥗', items: [
    { name: 'Tartar de Atum Premium', desc: 'Atum selvagem, abacate, gergelim negro, aioli trufado', price: 'R$ 68' },
    { name: 'Carpaccio de Wagyu', desc: 'Wagyu A5 fatiado fino, rúcula, lascas de parmesão 36 meses, azeite extravirgem', price: 'R$ 89' },
    { name: 'Ceviche Amazônico', desc: 'Peixe do dia, leite de tigre com tucupi, coentro, batata-doce', price: 'R$ 72' },
  ]},
  { category: 'Principais', emoji: '🍖', items: [
    { name: 'Robata de Polvo', desc: 'Polvo grelhado em brasa de lenha, purê de batata baroa, crocante de alho', price: 'R$ 118' },
    { name: 'Picanha Angus Prime', desc: 'Picanha maturada 45 dias, chimichurri da casa, farofa de manteiga de garrafa', price: 'R$ 148' },
    { name: 'Risoto de Funghi Porcini', desc: 'Arroz arbóreo, porcini importado, trufa negra raspada à mesa, parmesão', price: 'R$ 96' },
  ]},
  { category: 'Sobremesas', emoji: '🍮', items: [
    { name: 'Crème Brûlée de Maracujá', desc: 'Creme de maracujá fresco, caramelização artesanal, sorvete de baunilha', price: 'R$ 38' },
    { name: 'Petit Gâteau de Cacau 70%', desc: 'Chocolate Valrhona, interior cremoso, sorvete de creme artesanal', price: 'R$ 42' },
    { name: 'Pavê de Guaraná', desc: 'Releitura amazônica, biscoito de guaraná, creme de cupuaçu', price: 'R$ 36' },
  ]},
]

const NavLink = ({ href, children }) => (
  <a href={href} className="text-xs text-[#8a7055] hover:text-[#c8902a] transition-colors tracking-[0.2em] uppercase font-sans">{children}</a>
)

const MenuItemCard = ({ item }) => (
  <div className="flex justify-between items-start gap-4 py-4 border-b border-[#2a1a08] group hover:border-[#c8902a]/30 transition-colors">
    <div>
      <h4 className="font-serif text-lg text-[#e8d5b7] group-hover:text-[#c8902a] transition-colors">{item.name}</h4>
      <p className="text-[#6a5535] text-xs mt-1 leading-relaxed font-sans">{item.desc}</p>
    </div>
    <span className="text-[#c8902a] text-sm font-sans font-medium whitespace-nowrap">{item.price}</span>
  </div>
)

const MenuSection = ({ section, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: index * 0.15 }} className="menu-card bg-[#1a0e05] p-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{section.emoji}</span>
        <h3 className="font-serif text-2xl text-[#c8902a]">{section.category}</h3>
      </div>
      {section.items.map((item, i) => <MenuItemCard key={i} item={item} />)}
    </motion.div>
  )
}

const GalleryItem = ({ item, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative overflow-hidden group rounded-lg aspect-square"
    >
      <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
        <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transition-transform">{item.label}</span>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(0)
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -100])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const foodImages = [
    { src: 'https://images.unsplash.com/photo-1661883237884-263e8de8869b?w=600&q=80&auto=format&fit=crop', label: 'Entrada' },
    { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop', label: 'Prato Principal' },
    { src: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&q=80&auto=format&fit=crop', label: 'Sobremesa' },
    { src: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&q=80&auto=format&fit=crop', label: 'Chef Especial' },
    { src: 'https://images.unsplash.com/photo-1679503585289-c02467981894?w=600&q=80&auto=format&fit=crop', label: 'Degustação' },
    { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&auto=format&fit=crop', label: 'Menu Executivo' },
  ]

  return (
    <div className="min-h-screen bg-[#0d0700]">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-[#c8902a] z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />

      {/* Nav */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#0d0700]/95 backdrop-blur-md border-b border-[#2a1a08] py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-serif text-xl text-[#e8d5b7] italic">
            Alma <span className="text-[#c8902a]">Gastronomia</span>
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

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="https://videos.pexels.com/video-files/31631562/31631562-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0700]/80 via-[#0d0700]/60 to-[#0d0700]" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 30%, #2a1505 0%, #0d0700 70%)' }}
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
            {/* Candles */}
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

      {/* Quote strip */}
      <div className="py-12 border-y border-[#2a1a08] bg-[#1a0e05]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif text-xl md:text-2xl text-[#e8d5b7] italic leading-relaxed">
            "A cozinha é a arte de transformar ingredientes em memórias afetivas."
          </p>
          <p className="text-[#c8902a] text-xs tracking-widest uppercase mt-4 font-sans">— Chef Rodrigo Alma</p>
        </div>
      </div>

      {/* Menu */}
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

        {/* Tab navigation */}
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
              <span className="text-3xl">{menu[activeMenu].emoji}</span>
              <h3 className="font-serif text-3xl text-[#c8902a] italic">{menu[activeMenu].category}</h3>
            </div>
            {menu[activeMenu].items.map((item, i) => (
              <MenuItemCard key={i} item={item} />
            ))}
            <p className="text-[#6a5535] text-xs font-sans mt-6 text-center italic">
              Preços sujeitos a 10% de taxa de serviço. Cardápio sazonal.
            </p>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Decorative divider */}
      <div className="flex items-center gap-4 max-w-7xl mx-auto px-6 mb-0">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#2a1a08]" />
        <GiFlowerEmblem className="text-[#2a1a08]" size={20} />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#2a1a08]" />
      </div>

      {/* Chef */}
      <section id="chef" className="py-32 bg-[#1a0e05]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80&auto=format&fit=crop"
                alt="chef"
                className="w-full h-[500px] object-cover object-top rounded-xl"
              />
              <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0d0700] to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-[#c8902a]/20" />
            <div className="absolute -top-4 -left-4 w-12 h-12 border border-[#c8902a]/10" />
          </div>

          <div>
            <p className="text-[#c8902a] tracking-[0.4em] uppercase text-xs mb-4 font-sans">O Chef</p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#e8d5b7] italic leading-none mb-6">
              Rodrigo<br />Alma
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#c8902a]" />
              <GiFlowerEmblem className="text-[#c8902a]" size={14} />
            </div>
            <div className="space-y-4 text-[#8a7055] text-sm leading-relaxed font-sans font-light">
              <p>
                Nascido no Pará e formado pelo Institut Paul Bocuse em Lyon, Rodrigo Alma dedicou 20 anos a compreender
                a alma da culinária brasileira e reinterpretá-la com técnicas europeias.
              </p>
              <p>
                Seus pratos contam histórias de viagens pelo Amazonas, pelo cerrado e pelo sertão. Cada ingrediente é
                selecionado pessoalmente de produtores parceiros.
              </p>
              <p>
                Uma estrela Michelin conquistada em 2024, reconhecimento de uma trajetória de respeito absoluto ao
                produto e à tradição.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 mt-8">
              {[
                { icon: FaLeaf, text: 'Farm-to-Table' },
                { icon: FaWineGlassAlt, text: '200+ Rótulos' },
                { icon: FaUtensils, text: 'Técnica Francesa' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[#c8902a] text-xs font-sans">
                  <item.icon size={12} /> {item.text}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-[#2a1a08]">
              {[
                { n: '20+', l: 'Anos de cozinha' },
                { n: '★', l: 'Estrela Michelin' },
                { n: '3', l: 'Restaurantes' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="font-serif text-2xl text-[#c8902a]">{s.n}</div>
                  <div className="text-[#6a5535] text-[10px] tracking-widest uppercase font-sans mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
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
            <GalleryItem key={i} item={item} index={i} />
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

      {/* Reservations */}
      <section id="reservas" className="py-32 bg-[#1a0e05]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#c8902a] tracking-[0.4em] uppercase text-xs mb-4 font-sans">Reserve Sua Experiência</p>
            <h2 className="font-serif text-5xl text-[#e8d5b7] italic mb-2">Uma Mesa Para Você</h2>
            <p className="text-[#6a5535] text-sm font-sans font-light mt-3">
              Reserve com antecedência para garantir a melhor experiência
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4 text-sm">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80&auto=format&fit=crop"
                alt="ambiance"
                className="w-full h-48 object-cover rounded-lg"
              />
              {[
                { icon: FaPhone, text: '(11) 3456-7890' },
                { icon: FaWhatsapp, text: '(11) 98765-4321' },
                { icon: FaEnvelope, text: 'reservas@almagastronomia.com.br' },
                { icon: FaMapMarkerAlt, text: 'Rua Oscar Freire, 1000 - Jardins, SP' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 border border-[#2a1a08] flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-[#c8902a]" size={12} />
                  </div>
                  <span className="text-[#8a7055] font-sans">{item.text}</span>
                </div>
              ))}
              <div className="border border-[#2a1a08] p-4 mt-6">
                <p className="text-[#c8902a] text-xs tracking-widest uppercase font-sans mb-3">Horários</p>
                <div className="space-y-1">
                  <p className="text-[#6a5535] text-xs font-sans">Terça a Sábado: 19h às 23h</p>
                  <p className="text-[#6a5535] text-xs font-sans">Domingos: Brunch 12h às 16h</p>
                  <p className="text-[#3a2510] text-xs font-sans mt-2">Segunda-feira: Fechado</p>
                </div>
              </div>
              <div className="border border-[#2a1a08] p-4">
                <p className="text-[#c8902a] text-xs tracking-widest uppercase font-sans mb-2">Dress Code</p>
                <p className="text-[#6a5535] text-xs font-sans">Traje social ou smart casual. Shorts e regatas não são permitidos.</p>
              </div>
            </div>

            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              {[
                { label: 'Nome', type: 'text', ph: 'Seu nome completo' },
                { label: 'E-mail', type: 'email', ph: 'seu@email.com' },
                { label: 'Telefone', type: 'tel', ph: '(11) 99999-9999' },
              ].map((f, i) => (
                <div key={i}>
                  <label className="block text-xs tracking-widest uppercase text-[#6a5535] mb-1.5 font-sans">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.ph}
                    className="w-full bg-[#0d0700] border border-[#2a1a08] px-4 py-3 text-[#e8d5b7] text-sm font-sans font-light placeholder-[#3a2510] focus:border-[#c8902a] focus:outline-none transition-colors"
                  />
                </div>
              ))}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#6a5535] mb-1.5 font-sans">Data</label>
                  <input
                    type="date"
                    className="w-full bg-[#0d0700] border border-[#2a1a08] px-4 py-3 text-[#e8d5b7] text-sm font-sans focus:border-[#c8902a] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#6a5535] mb-1.5 font-sans">Pessoas</label>
                  <select className="w-full bg-[#0d0700] border border-[#2a1a08] px-4 py-3 text-[#8a7055] text-sm font-sans focus:border-[#c8902a] focus:outline-none transition-colors">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                      <option key={n}>{n} {n === 1 ? 'pessoa' : 'pessoas'}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-[#6a5535] mb-1.5 font-sans">
                  Observações
                </label>
                <textarea
                  rows={3}
                  placeholder="Alergias, ocasiões especiais, preferências..."
                  className="w-full bg-[#0d0700] border border-[#2a1a08] px-4 py-3 text-[#e8d5b7] text-sm font-sans font-light placeholder-[#3a2510] focus:border-[#c8902a] focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#c8902a] text-[#0d0700] font-sans font-medium text-sm tracking-widest uppercase hover:bg-[#e8b84a] transition-colors"
              >
                Solicitar Reserva
              </button>
              <p className="text-[#3a2510] text-xs font-sans text-center">
                Você receberá uma confirmação em até 2 horas.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-8 border-t border-[#2a1a08]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <a href="#" className="font-serif text-2xl text-[#e8d5b7] italic block mb-4">
                Alma <span className="text-[#c8902a]">Gastronomia</span>
              </a>
              <p className="text-[#6a5535] text-xs font-sans leading-relaxed">
                Uma experiência gastronômica única no coração dos Jardins, São Paulo.
              </p>
              <div className="flex gap-4 mt-6">
                {[FaInstagram, FaFacebook, FaWhatsapp].map((Icon, i) => (
                  <a key={i} href="#" className="text-[#3a2510] hover:text-[#c8902a] transition-colors">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#c8902a] text-xs tracking-widest uppercase font-sans mb-4">Navegação</p>
              <div className="space-y-2">
                {['Cardápio', 'Chef', 'Galeria', 'Reservas', 'Política de Privacidade'].map(link => (
                  <a key={link} href="#" className="block text-[#6a5535] text-xs font-sans hover:text-[#c8902a] transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#c8902a] text-xs tracking-widest uppercase font-sans mb-4">Localização</p>
              <div className="space-y-2 text-[#6a5535] text-xs font-sans">
                <p>Rua Oscar Freire, 1000</p>
                <p>Jardins — São Paulo, SP</p>
                <p>CEP 01426-001</p>
                <p className="mt-4">Terça a Sábado · 19h–23h</p>
                <p>Domingo · Brunch 12h–16h</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#2a1a08] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#3a2510] text-xs font-sans">© 2024 Alma Gastronomia. Todos os direitos reservados.</p>
            <div className="flex items-center gap-2">
              <GiFlowerEmblem className="text-[#2a1a08]" size={12} />
              <span className="text-[#3a2510] text-xs font-sans">Alta Gastronomia Brasileira</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
