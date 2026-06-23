import type { MenuItem } from '../../types'

interface Props {
  item: MenuItem
  index: number
}

const MenuItemCard = ({ item }: Props) => (
  <div className="flex justify-between items-start gap-4 py-4 border-b border-[#2a1a08] group hover:border-[#c8902a]/30 transition-colors">
    <div>
      <h4 className="font-serif text-lg text-[#e8d5b7] group-hover:text-[#c8902a] transition-colors">{item.name}</h4>
      <p className="text-[#6a5535] text-xs mt-1 leading-relaxed font-sans">{item.desc}</p>
    </div>
    <span className="text-[#c8902a] text-sm font-sans font-medium whitespace-nowrap">{item.price}</span>
  </div>
)

export default MenuItemCard
