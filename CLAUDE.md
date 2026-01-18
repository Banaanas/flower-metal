# Flower Metal

## Skills

@../../_config/claude/skills/nextjs-react/SKILL.md
@../../_config/claude/skills/typescript/SKILL.md
@../../_config/claude/skills/tailwind/SKILL.md

## Project Overview

A Next.js 16 application for visualizing a community-curated dataset of metal bands and their ideological positions. Data is fetched from Google Sheets (CSV format) and displayed with filtering, search, and alphabetical navigation.

## Commands

```bash
pnpm dev              # Start dev server on localhost:3000
pnpm build            # Production build
pnpm lint             # Run ESLint
pnpm type-check       # TypeScript type checking
pnpm prettier-check   # Check formatting
pnpm prettier-write   # Auto-format
```

## Data Source

This project uses **Google Sheets** (not Supabase) as its data source:

- Config: `src/data/google-sheets.config.ts`
- Fetching: `src/lib/api/` - fetches published sheet as CSV, parsed with papaparse
- No environment variables needed - uses public CSV endpoint

## Project-Specific Structure

```
src/components/
├── table/        # Main feature: data table, search, filters, alphabetical nav
├── layout/       # Header, footer, theme button
├── ui/           # shadcn/ui primitives
└── shared/       # Max-width wrapper, icons, dialogs
```

## Routes

- `/` - Home page with band data table, search, and filters
