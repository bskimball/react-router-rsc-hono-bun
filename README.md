# Welcome to React Router! (Experimental RSC)

⚠️ **EXPERIMENTAL**: This template demonstrates React Server Components with React Router. This is experimental technology and not recommended for production use.

A modern template for exploring React Server Components (RSC) with React Router, powered by Vite and served with Hono using Node.js native TypeScript support. Formatted with Biome.

## Features

- 🧪 **Experimental React Server Components**
- 🚀 Server-side rendering with RSC
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization with Vite
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 🌐 **Hono** - Fast, lightweight web framework for the server
- 🧹 **Biome** - Fast formatter and linter for consistent code style
- 📖 [React Router docs](https://reactrouter.com/)
- 📚 [React Server Components guide](https://reactrouter.com/how-to/react-server-components)
- 🔥 [Hono documentation](https://hono.dev/)
- ⚡ [Biome documentation](https://biomejs.dev/)

## Requirements

- **Node.js 22.6+** - Required for native TypeScript support with type stripping

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Running Production Build

Run the production server (powered by Hono and Node.js):

```bash
npm start
```

The production server uses:

- **Node.js 22.6+** with native TypeScript support (type stripping enabled by default)
- **Hono** as the web framework for fast, efficient request handling
- Compression middleware and static asset serving
- Customizable port via the `PORT` environment variable (defaults to 3000)

## Understanding React Server Components

This template includes three entry points:

- **`entry.rsc.tsx`** - React Server Components entry point
- **`entry.ssr.tsx`** - Server-side rendering entry point
- **`entry.browser.tsx`** - Client-side hydration entry point

The production server (`server.js`) uses Hono to:

- Serve static assets from the build output
- Handle compression with built-in middleware
- Route all requests through the RSC handler
- Provide fast, efficient request processing

Learn more about React Server Components with React Router in our [comprehensive guide](https://reactrouter.com/how-to/react-server-components).

## Code Quality

This project uses **Biome** for fast, consistent code formatting and linting:

### Formatting

Format your code:

```bash
npm run format
```

### Linting

Check for code issues:

```bash
npm run lint
```

### Combined Check

Run both formatting and linting:

```bash
npm run check
```

Biome is configured to:

- Use double quotes for JavaScript/TypeScript
- Use tab indentation
- Enable recommended linting rules
- Automatically organize imports

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router, Hono, Node.js, and Biome.
