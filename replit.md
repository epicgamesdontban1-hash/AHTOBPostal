# Overview

This is a modern full-stack web application for AHTOB Postal Services, a professional international postal and delivery company based in Centurion, South Africa. The application provides a comprehensive platform for international shipping to UK, Finland, Ireland, and domestic South Africa delivery, featuring package tracking, service information, pricing calculations, and customer contact functionality. Built with React on the frontend and Express on the backend, it features a modern green/orange design system using shadcn/ui components and Tailwind CSS for styling. The website prominently features custom-generated AHTOB branded imagery and emphasizes the partnership between AHTOB and FATF.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **Build Tool**: Vite for fast development and optimized builds
- **Component Structure**: Organized into pages, components, layout components, and reusable UI components

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Storage**: Dual storage implementation with in-memory storage for development and PostgreSQL support via Drizzle ORM
- **API Design**: RESTful API structure with `/api` prefix routing
- **Middleware**: Custom logging, JSON parsing, and error handling middleware
- **Development**: Hot reload with Vite integration in development mode

## Database Schema Design
- **Users Table**: Authentication with username/password, UUID primary keys
- **Packages Table**: Core package information including tracking numbers, addresses, weight, pricing, and status
- **Tracking Events Table**: Package journey tracking with status updates, locations, and timestamps
- **Contacts Table**: Customer inquiries and contact form submissions
- **Relationships**: Foreign key relationships between packages and tracking events

## Design System
- **Theme System**: Comprehensive CSS custom properties for colors, supporting light mode with planned dark mode capability
- **Component Variants**: Class Variance Authority (CVA) for consistent component styling variations
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Typography**: Custom font stack including Inter, Geist Mono, and other Google Fonts
- **Interactive States**: Hover and active elevation effects with custom CSS classes

## Application Features
- **Package Tracking**: Real-time package status with detailed event history
- **Service Information**: Comprehensive service listings with feature comparisons
- **Pricing Calculator**: Dynamic shipping cost calculation based on weight, distance, and service type
- **Contact System**: Multi-location contact information with inquiry form
- **Company Information**: About page with company history, values, and team information

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL database service via `@neondatabase/serverless`
- **Drizzle ORM**: Type-safe database queries and migrations with PostgreSQL dialect
- **Connection Pooling**: Built-in connection management for serverless environments

## UI and Styling
- **Radix UI**: Headless UI primitives for accessible component foundations
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Comprehensive icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel component for image galleries

## Development Tools
- **Replit Integration**: Specialized Vite plugins for Replit development environment
- **ESBuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Strong typing with path mapping for clean imports
- **React Hook Form**: Form handling with validation resolver integration

## Fonts and Assets
- **Google Fonts**: External font loading for Inter, Geist Mono, and other typefaces
- **Unsplash**: External image hosting for hero sections and promotional content
- **FontAwesome**: Icon library for legacy icon support in certain components