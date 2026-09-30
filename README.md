# Portfolio — Maxim Shvetsov

Personal frontend portfolio built with **Vue 3**, **TypeScript**, **Vite**, and **Tailwind CSS**.  
Showcases selected projects, skills, and contact information in a dark, responsive UI.

**Live contact:** [mshvetsov68@gmail.com](mailto:mshvetsov68@gmail.com)

---

## Features

- **Home** — intro banner and project cards with hover effects
- **Project details** — overview, tech stack, and link to source code
- **About** — short bio, tech stack tags, and CV link
- **Contact** — clickable email CTA
- **Responsive layout** — adapted for mobile, tablet, and desktop
- **Shared layout** — header navigation + footer with social links

### Pages / routes

| Route | Description |
|-------|-------------|
| `/home` | Landing + projects grid |
| `/home/project/:id` | Single project page |
| `/about` | About me |
| `/contact` | Contact |

---

## Tech stack

| Layer | Tools |
|-------|--------|
| Framework | Vue 3 (Composition / Options API) |
| Language | TypeScript |
| Bundler | Vite 8 |
| Styling | Tailwind CSS 3 |
| Routing | Vue Router 4 |
| Icons | Font Awesome (vue-fontawesome) |

**Also used in showcase projects:** React, Redux Toolkit, TanStack Query, Zustand, SCSS, WebSocket, REST APIs, and more.

---

## Project structure

```text
src/
├── assets/           # Images and global CSS
├── components/
│   ├── About/        # About photo + description
│   ├── BaseLayout/   # Header, Footer, shell layout
│   ├── Common/       # Shared UI (e.g. TitleSection)
│   ├── Home/         # Banner, progress helpers
│   └── MyWorks/      # Project cards grid
├── config/           # Route path constants
├── data/             # Project data (projects.ts)
├── interfaces/       # TypeScript types
├── pages/            # Home, About, Contact, ProjectDetails
├── router/           # Vue Router setup
├── App.vue
└── main.ts
```

Projects are defined in `src/data/projects.ts` and typed via `src/interfaces/projects.ts`.

---

## Getting started

### Requirements

- Node.js 20+ (recommended)
- npm

### Install

```sh
npm install
```

### Development

```sh
npm run dev
```

### Production build

```sh
npm run build
```

### Preview production build

```sh
npm run preview
```

### Type check

```sh
npm run type-check
```

### Unit tests

```sh
npm run test:unit
```

---

## Featured projects

| Project | Stack (highlights) | Code |
|---------|--------------------|------|
| **Fin Track** | React, TypeScript, TanStack Query, Zustand, Tailwind + shadcn/ui | [GitHub](https://github.com/maksim-dev1911/fin-track) |
| **Social Network** | React, TypeScript, Redux Toolkit, WebSocket, Material UI | [GitHub](https://github.com/maksim-dev1911/SocialNetwork) |
| **Agency Landing** | HTML5, SCSS, Vite | [GitHub](https://github.com/maksim-dev1911/creative-agency-landing) |
| **Apple Landing** | HTML5, SCSS, JavaScript, Vite | [GitHub](https://github.com/maksim-dev1911/apple-landing) |

---

## Customize

- **Projects** — edit `src/data/projects.ts`
- **Routes** — `src/config/route.ts` + `src/router/index.ts`
- **Theme** — Tailwind `primary` color and fonts in `tailwind.config.js` / `src/assets/main.css`
- **Contact email** — `src/pages/Contact/Contact.vue`
- **CV link** — `src/components/About/AboutDescription.vue`

---

## Author

**Maxim Shvetsov** — Front-End Developer  

- Email: [mshvetsov68@gmail.com](mailto:mshvetsov68@gmail.com)
- Telegram: [t.me/maks_shvetsov](https://t.me/maks_shvetsov)
- GitHub: [maksim-dev1911](https://github.com/maksim-dev1911)

---

## License

Private project (`"private": true` in `package.json`).  
All rights reserved unless otherwise stated.
