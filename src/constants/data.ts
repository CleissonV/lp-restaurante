import { LuSalad, LuBeef, LuCakeSlice } from 'react-icons/lu'
import type { GalleryImage } from '../types'

export interface RawMenuCategory {
  category: string
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>
  items: { name: string; desc: string; price: string }[]
}

export const menu: RawMenuCategory[] = [
  {
    category: 'Entradas',
    icon: LuSalad,
    items: [
      { name: 'Tartar de Atum Premium', desc: 'Atum selvagem, abacate, gergelim negro, aioli trufado', price: 'R$ 68' },
      { name: 'Carpaccio de Wagyu', desc: 'Wagyu A5 fatiado fino, rúcula, lascas de parmesão 36 meses, azeite extravirgem', price: 'R$ 89' },
      { name: 'Ceviche Amazônico', desc: 'Peixe do dia, leite de tigre com tucupi, coentro, batata-doce', price: 'R$ 72' },
    ],
  },
  {
    category: 'Principais',
    icon: LuBeef,
    items: [
      { name: 'Robata de Polvo', desc: 'Polvo grelhado em brasa de lenha, purê de batata baroa, crocante de alho', price: 'R$ 118' },
      { name: 'Picanha Angus Prime', desc: 'Picanha maturada 45 dias, chimichurri da casa, farofa de manteiga de garrafa', price: 'R$ 148' },
      { name: 'Risoto de Funghi Porcini', desc: 'Arroz arbóreo, porcini importado, trufa negra raspada à mesa, parmesão', price: 'R$ 96' },
    ],
  },
  {
    category: 'Sobremesas',
    icon: LuCakeSlice,
    items: [
      { name: 'Crème Brûlée de Maracujá', desc: 'Creme de maracujá fresco, caramelização artesanal, sorvete de baunilha', price: 'R$ 38' },
      { name: 'Petit Gâteau de Cacau 70%', desc: 'Chocolate Valrhona, interior cremoso, sorvete de creme artesanal', price: 'R$ 42' },
      { name: 'Pavê de Guaraná', desc: 'Releitura amazônica, biscoito de guaraná, creme de cupuaçu', price: 'R$ 36' },
    ],
  },
]

export const foodImages: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80&auto=format&fit=crop', alt: 'Entrada' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop', alt: 'Prato Principal' },
  { src: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&q=80&auto=format&fit=crop', alt: 'Sobremesa' },
  { src: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&q=80&auto=format&fit=crop', alt: 'Chef Especial' },
  { src: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600&q=80&auto=format&fit=crop', alt: 'Degustação' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&auto=format&fit=crop', alt: 'Menu Executivo' },
]
