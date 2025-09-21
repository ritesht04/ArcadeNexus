# Overview

This is a gaming web application built with a modern full-stack architecture. The application features a game selection interface where users can choose from various multiplayer games like "Escape The Lava", "Find The Color", "Red Light Green Light", and "Sharp Shooter". The frontend presents an attractive game selection UI with smooth animations and responsive design, while the backend provides a foundation for game logic and user management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The client-side is built using **React 18** with **TypeScript** and utilizes several key architectural decisions:

- **Vite** as the build tool and development server for fast hot module replacement and optimized builds
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query** for server state management, API caching, and data synchronization
- **Tailwind CSS** with **shadcn/ui** component library for consistent, accessible UI components
- **Radix UI** primitives providing unstyled, accessible component foundations
- **Framer Motion** for smooth animations and transitions in the game selection interface
- **React Hook Form** with **Zod** validation for form handling and validation

The frontend follows a component-based architecture with a clear separation between UI components (`/components/ui/`) and page components (`/pages/`). Custom hooks are used for reusable logic like mobile detection and toast notifications.

## Backend Architecture

The server-side uses **Node.js** with **Express.js** and implements:

- **Express.js** as the web framework with middleware for JSON parsing, CORS, and request logging
- **TypeScript** throughout the entire stack for type safety
- **Storage abstraction** with an interface-based approach allowing for easy switching between storage implementations (currently uses in-memory storage with plans for database integration)
- **Modular routing** structure with API routes prefixed under `/api`
- **Development/production environment** handling with Vite integration in development

## Data Storage

The application uses **Drizzle ORM** with **PostgreSQL** as the database solution:

- **Drizzle** provides type-safe database operations and schema management
- **Neon Database** serverless PostgreSQL for cloud-hosted database
- **Schema-first approach** with shared types between frontend and backend
- **Migration system** using Drizzle Kit for database schema changes
- **Zod integration** for runtime type validation of database schemas

Currently implements a basic user schema with plans for game-specific data structures.

## Development Workflow

- **Monorepo structure** with shared types and schemas between client and server
- **Hot reloading** in development with Vite integration
- **TypeScript** compilation and type checking across the entire codebase
- **ESBuild** for fast production builds
- **Path aliases** for clean imports (`@/` for client, `@shared/` for shared code)

# External Dependencies

## UI and Design
- **Tailwind CSS** - Utility-first CSS framework for styling
- **shadcn/ui** - Re-usable component library built on Radix UI
- **Radix UI** - Low-level UI primitives for accessibility
- **Framer Motion** - Animation library for smooth transitions
- **Lucide React** - Icon library for consistent iconography

## Data Management
- **TanStack Query** - Server state management and caching
- **React Hook Form** - Form state management
- **Zod** - Schema validation library
- **date-fns** - Date manipulation utilities

## Database and ORM
- **Drizzle ORM** - Type-safe ORM for PostgreSQL
- **Neon Database** - Serverless PostgreSQL hosting
- **connect-pg-simple** - PostgreSQL session store for Express

## Development Tools
- **Vite** - Build tool and development server
- **Wouter** - Lightweight React router
- **class-variance-authority** - Utility for managing CSS class variants
- **clsx** and **tailwind-merge** - Utility functions for conditional classes

## Replit Integration
- **@replit/vite-plugin-runtime-error-modal** - Development error handling
- **@replit/vite-plugin-cartographer** - Development tooling
- **@replit/vite-plugin-dev-banner** - Development environment indicators