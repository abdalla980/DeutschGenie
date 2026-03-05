# DeutschGenie Landing Page

A modern, responsive landing page for DeutschGenie - a German learning application. Built with React.js, Wouter, CSS Modules, and GSAP animations.

## Features

- 🎨 Modern, clean design matching the original design
- 📱 Fully responsive layout
- ✨ Smooth GSAP animations with scroll triggers
- 🎯 SEO-optimized with proper HTML semantics
- 🎮 Interactive FAQ section
- 📊 Animated results graph
- 🎨 CSS Modules for scoped styling

## Tech Stack

- **React 18** - UI library
- **Wouter** - Lightweight routing
- **GSAP** - Animation library
- **CSS Modules** - Scoped CSS styling
- **Vite** - Build tool and dev server

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── HowItWorks/
│   ├── WhoIsItFor/
│   ├── Advantages/
│   ├── FAQ/
│   ├── OurResults/
│   ├── AppDownload/
│   └── Footer/
├── App.jsx
├── main.jsx
└── index.css
```

## Sections

1. **Header** - Navigation and logo
2. **Hero** - Main headline with call-to-action
3. **How it Works** - 4-step process with sticky note design
4. **Who is DeutschGenie For?** - Target audience section
5. **Advantages** - Key benefits of the app
6. **FAQ** - Expandable FAQ section
7. **Our Results** - Statistics and growth graph
8. **App Download** - QR codes for app stores
9. **Footer** - Copyright and links

## SEO Features

- Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`)
- Proper heading hierarchy (h1, h2, h3, h4)
- Meta tags in index.html
- ARIA labels for accessibility
- Descriptive alt text and labels

