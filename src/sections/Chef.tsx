import { FaLeaf, FaWineGlassAlt, FaUtensils } from 'react-icons/fa'
import { GiFlowerEmblem } from 'react-icons/gi'

const Chef = () => (
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
)

export default Chef
