import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

const Reservations = () => (
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
)

export default Reservations
