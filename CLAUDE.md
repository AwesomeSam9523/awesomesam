# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website (awesomesam.dev) with a monorepo structure containing a Next.js frontend and Express.js backend.

## Commands

### Frontend (run from `frontend/`)
```bash
yarn dev      # Start development server (localhost:3000)
yarn build    # Production build
yarn lint     # Run ESLint
```

### Backend (run from `backend/`)
```bash
node app.js   # Start server (port 5000)
```

## Architecture

**Frontend (`frontend/`):** Next.js 14 App Router with TypeScript
- `app/` - Page routes using App Router conventions
- `components/` - Reusable React components
- `data/` - Static data (tech stack icons, etc.)
- `variants/` - Framer Motion animation variants

**Backend (`backend/`):** Express.js API server
- `routes/` - API route handlers (badge, download, media, ieee)
- `public/` - Static file serving (badges)

## Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend:** Express.js, PostgreSQL (pg)
- **Package Manager:** Yarn

## Key Patterns

- Uses `next/font` for Google Fonts (Radio Canada Big, Exo 2)
- Remote images allowed from `awesomesam.dev` and jsDelivr CDN
- Custom Tailwind breakpoint at `3xl: 1920px`
- Backend has rate limiting (100 req/15min per IP)
