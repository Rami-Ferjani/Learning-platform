# AI Agent Instructions for Converso Learning Platform

## Project Overview
Converso is a real-time AI teaching platform built with Next.js 13+ (App Router), TypeScript, and Supabase. The platform enables AI companions to provide interactive learning experiences.

## Architecture & Key Components

### Authentication
- Uses Clerk for authentication (`@clerk/nextjs`)
- Auth state accessible via `auth()` from `@clerk/nextjs/server`
- Auth integration with Supabase handled in `lib/supabase.ts`

### Database & API Layer
- Supabase for data storage and real-time features
- Server actions in `lib/actions/*.actions.ts` handle data operations
- Always use the `createSupabaseClient()` helper from `lib/supabase.ts` for DB interactions

### Frontend Structure
- App router-based Next.js structure in `app/` directory
- Components organized by feature area:
  - Base UI components in `components/ui/`
  - Feature components in `components/` root
- Consistent layout with `app/layout.tsx` providing Clerk and UI wrapper

### Key Patterns

#### Server Actions
```typescript
// Example from companion.actions.ts
"use server";
export const createCompanion = async (formData: CreateCompanion) => {
  const { userId: author } = await auth();
  const supabase = createSupabaseClient();
  // ... DB operations
};
```

#### Component Organization
- Place shared UI components in `components/ui/`
- Feature-specific components go in root `components/` directory
- Use TypeScript interfaces in `types/` for shared types

#### Styling
- Uses Tailwind CSS with custom configuration
- Custom font (Bricolage Grotesque) configured in `app/layout.tsx`
- Follow BEM-like class naming in components

## Development Workflow

### Setup
```bash
npm install
npm run dev
```

### Environment Variables Required
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Clerk authentication keys

### Key URLs
- Development: http://localhost:3000
- API routes under `/api/`
- Auth routes handled by Clerk

## Common Tasks
- Creating new pages: Add in `app/` directory following Next.js 13+ conventions
- Database operations: Use server actions with `createSupabaseClient()`
- Auth checks: Import `auth()` from `@clerk/nextjs/server`

## Integration Points
- Clerk: Authentication & user management
- Supabase: Database & real-time features
- Next.js App Router: Routing & server components