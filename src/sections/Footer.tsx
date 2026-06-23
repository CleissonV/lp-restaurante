import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { GiFlowerEmblem } from 'react-icons/gi'

const Footer = () => (
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
)

export default Footer
