import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  src: string
  alt: string
  index: number
}

const GalleryItem = ({ src, alt, index }: Props) => {
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
      <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
        <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transition-transform">{alt}</span>
      </div>
    </motion.div>
  )
}

export default GalleryItem
