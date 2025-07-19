# AI Allstars Team Page

## Overview

This is a React-based team page application for AI Allstars, featuring a modern design with glass morphism effects and responsive layouts. The application showcases team member profiles with social media integration and follows a mobile-first approach with TypeScript for type safety.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack TypeScript architecture with a clear separation between client and server components:

- **Frontend**: React with TypeScript using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management

## Key Components

### Frontend Architecture
- **React Framework**: Single-page application with component-based architecture
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling System**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite with development server and production bundling
- **Type Safety**: Full TypeScript integration across the stack

### Backend Architecture
- **Express Server**: RESTful API server with middleware support
- **Database Integration**: Drizzle ORM with PostgreSQL dialect
- **Storage Layer**: Abstracted storage interface supporting both memory and database implementations
- **Development Tools**: Hot reloading with Vite integration

### UI Components
- **Header Component**: Responsive navigation with mobile menu support
- **Footer Component**: Multi-column layout with organized links
- **Team Member Cards**: Interactive cards with social media integration and intersection observer animations
- **Glass Morphism Design**: Modern aesthetic with backdrop blur effects

## Data Flow

1. **Client-Side Routing**: Wouter handles route navigation without page refreshes
2. **Component Rendering**: React components fetch data using TanStack Query
3. **API Communication**: RESTful endpoints with JSON data exchange
4. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
5. **State Management**: TanStack Query handles caching and synchronization

## External Dependencies

### Core Framework Dependencies
- **React**: UI framework with hooks and modern patterns
- **Express**: Backend server framework
- **Drizzle ORM**: Type-safe database operations
- **TanStack Query**: Server state management
- **Wouter**: Lightweight client-side routing

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Font Awesome**: Additional icon support

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and developer experience
- **PostCSS**: CSS processing with Tailwind integration

### Database and Storage
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **connect-pg-simple**: PostgreSQL session store

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot module replacement
- **Database**: PostgreSQL with environment-based configuration
- **Build Process**: TypeScript compilation with Vite bundling

### Production Configuration
- **Build Output**: Static assets in `dist/public` directory
- **Server Bundle**: ESBuild compilation for Node.js deployment
- **Database Migrations**: Drizzle-kit for schema management
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection

### Replit-Specific Features
- **Cartographer Integration**: Development-only visual debugging
- **Runtime Error Modal**: Enhanced error reporting in development
- **Development Banner**: Replit environment detection

The application is designed to be easily deployable on various platforms while maintaining development-friendly features in the Replit environment.