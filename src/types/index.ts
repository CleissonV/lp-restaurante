export interface MenuItem {
  name: string
  desc: string
  price: string
  tag?: string
}

export interface MenuCategory {
  id: string
  label: string
  items: MenuItem[]
}

export interface GalleryImage {
  src: string
  alt: string
}
