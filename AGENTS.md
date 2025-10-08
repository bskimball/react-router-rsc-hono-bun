# AI Agent Context

This file helps AI coding assistants understand this project.

## Project Overview

React Router RSC template using React Server Components (experimental), powered by Vite and served with Hono on Node.js.

## Tech Stack

- **React Router 7** with React Server Components (RSC)
- **Hono** - Web framework for the server
- **Node.js 22.6+** - Native TypeScript support (type stripping enabled by default)
- **Vite** - Build tool and dev server
- **Biome** - Formatter and linter
- **TailwindCSS** - Styling

## Important Commands

- `npm run dev` - Start development server (runs on port 5173)
- `npm run build` - Build for production
- `npm start` - Run production server (default port 3000, configurable via PORT env var)
- `npm run typecheck` - Type check with TypeScript
- `npm run check` - Run Biome formatter and linter

## Project Structure

- `server.ts` - Production server using Hono and @hono/node-server
- `src/entry.rsc.tsx` - React Server Components entry point
- `src/entry.ssr.tsx` - Server-side rendering entry point  
- `src/entry.browser.tsx` - Client-side hydration entry point
- `dist/rsc/` - Built RSC output
- `dist/client/` - Built client assets

## Code Style

Uses **Biome** with:
- Double quotes for strings
- Tab indentation
- Recommended linting rules
- Auto-organized imports

## Node.js Requirements

Requires **Node.js 22.6+** for native TypeScript support. The server runs TypeScript files directly without a transpiler - Node's built-in type stripping handles the conversion.

## Important Notes

- This is **experimental** technology - not recommended for production
- Server uses top-level await for dynamic imports
- Environment variables: `PORT` (default: 3000), `NODE_ENV`
