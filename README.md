# What's Happening - Bangalore Experiences

This project is a Next.js application for discovering offbeat experiences in Bangalore. It follows the development guidelines specified in the development document.

## Features

- Phone number authentication flow
- Modern UI with Tailwind CSS
- Shadcn UI components
- Responsive design

## Technologies Used

- Next.js 14+ (App Router)
- React Server Components
- TypeScript
- Tailwind CSS
- Shadcn/UI (Radix-based)
- Zustand (for state management)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/whats-happening.git
cd whats-happening
```

2. Install dependencies

```bash
pnpm install
```

3. Start the development server

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

The project follows a domain-based modular structure with kebab-case naming convention:

- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable components
  - `/ui` - UI primitives based on Shadcn/UI
  - `/auth` - Authentication-related components
- `/lib` - Utility functions and shared code
- `/public` - Static assets
- `/styles` - Global styles and Tailwind configuration

## Development Guidelines

This project adheres to the development guidelines outlined in the development-document.md file, including:

- Functional components with hooks for React
- DRY, KISS, and YAGNI principles
- Consistent naming conventions
- Performance optimization
- Accessibility considerations

## License

This project is licensed under the MIT License - see the LICENSE file for details.
