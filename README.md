<h1 align="center">Restaurante Fine Dining</h1>

<p align="center">
  Landing page sofisticada para restaurante com menu interativo por abas, animações com velas SVG e sistema de reservas.
  <br /><br />
  <a href="https://lp-restaurante.vercel.app"><strong>🔗 Ver Demo</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" />
</p>

---

## Sobre o Projeto

Landing page de fine dining com estética escura e dourada. O hero exibe vídeo com sobreposição âmbar e velas SVG animadas. O cardápio é navegável por abas com transições AnimatePresence, e a seção de reservas conta com seleção de data e número de pessoas.

## Funcionalidades

- Hero com vídeo e componente `CandleFlame` em SVG com animações
- Menu interativo com navegação por abas e AnimatePresence
- Perfil do chef com storytelling visual
- Galeria fotográfica dos pratos
- Formulário de reserva com data e número de convidados
- Design responsivo com tema âmbar escuro

## Stack

- **React 18 + TypeScript** — UI tipada e componentes reutilizáveis
- **Tailwind CSS 3** — estilização eficiente
- **Framer Motion 11** — transições de menu com AnimatePresence
- **Vite 5** — build rápido
- **react-icons** — ícones de múltiplas libs (fa, gi, md, lu)

## Instalação

```bash
git clone https://github.com/CleissonV/lp-restaurante
cd lp-restaurante
npm install
npm run dev
```

## Estrutura

```
src/
├── constants/
│   └── data.ts          # categorias do menu, galeria
├── types/
│   └── index.ts         # MenuItem, MenuCategory, GalleryImage
├── components/
│   └── ui/
│       ├── CandleFlame.tsx
│       ├── MenuItemCard.tsx
│       └── GalleryItem.tsx
├── sections/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Quote.tsx
│   ├── Menu.tsx
│   ├── Chef.tsx
│   ├── Gallery.tsx
│   ├── Reservations.tsx
│   └── Footer.tsx
└── App.tsx
```

---

Desenvolvido por [Cleisson Vilela](https://github.com/CleissonV)
