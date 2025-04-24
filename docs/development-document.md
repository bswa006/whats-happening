# Development Document: Next.js Admin Portal

## Table of Contents

- [Introduction](#introduction)
- [Architecture](#architecture)
- [Development Workflow](#development-workflow)
- [Coding Rules](#coding-rules)
- [Component Design](#component-design)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Performance](#performance)
- [Accessibility & Internationalization](#accessibility--internationalization)
- [Security](#security)
- [Testing](#testing)
- [Deployment](#deployment)
- [Additional Guidelines](#additional-guidelines)

## Introduction

This document outlines the development standards and best practices for our Next.js Admin Portal application. Our application leverages modern web technologies and patterns to create a scalable, maintainable, and high-performance admin interface.

### Core Technology Stack

- **Framework**: Next.js 14+ (App Router) with React Server Components
- **Styling**: Tailwind CSS with custom theme extension
- **Component Library**: Shadcn/UI (Radix-based) with custom wrappers
- **Icons**: Lucide Icons for consistent visual language
- **State Management**: Zustand with slices pattern and persist middleware
- **Form Validation**: Zod with custom schema composition
- **API Layer**: Axios with request/response interceptors and error handling
- **Authentication**: NextAuth.js with JWT sessions or Auth.js
- **Internationalization**: next-intl with namespaced translations
- **Development**: TypeScript strict mode, ESLint with Airbnb config, Prettier

## Architecture

### Folder Structure

We follow a domain-based modular structure with kebab-case naming convention for all files and folders:

```
/app
  /(auth)
    /login
      page.tsx
    /register
      page.tsx
    layout.tsx
  /(admin)
    /dashboard
      page.tsx
    /users
      /[id]
        page.tsx
      page.tsx
    layout.tsx
  /api
    /[...route]
      route.ts
  layout.tsx
  page.tsx

/components
  /data-tables
    /user-table
      index.tsx
      column-definition.tsx
      row-actions.tsx
    /product-table
      index.tsx
  /forms
    /user-form
      index.tsx
      schema.tsx
      field-components.tsx
  /layouts
    /admin-layout
      index.tsx
      sidebar-navigation.tsx
      header.tsx
  /ui
    /button
      index.tsx
    /input
      index.tsx
    /modal
      index.tsx

/hooks
  /use-debounce
    index.tsx
  /use-media-query
    index.tsx
  /use-intersection-observer
    index.tsx

/lib
  /api
    axios-instance.ts
    error-handler.ts
  /utils
    date-formatter.ts
    string-helpers.ts
  /validators
    common-schemas.ts

/store
  /slices
    auth-slice.ts
    ui-slice.ts
    filter-slice.ts
  index.ts
  create-store.ts

/types
  api-responses.ts
  common.ts
  entities.ts

/styles
  globals.css
  theme-variables.css

/public
  /fonts
  /images
  /icons
```

### Key Architecture Principles

1. **Separation of Concerns**: Business logic is separated from UI components
2. **Server Components by Default**: Use React Server Components unless interactivity is required
3. **Client Components When Needed**: Add "use client" directive only for components that need:
   - React hooks
   - Browser APIs
   - Interactive event listeners
   - Client-side state
4. **Modularity**: Each feature area has its own dedicated directory
5. **Consistent Naming**: Use kebab-case for files/folders and PascalCase for components

## Development Workflow

### Getting Started

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Copy `.env.example` to `.env.local` and configure environment variables
4. Run development server with `pnpm dev`

### Code Style and Quality

- **Linting**: Run `pnpm lint` to check for linting errors
- **Formatting**: Run `pnpm format` to format code with Prettier
- **Type Checking**: Run `pnpm typecheck` to verify TypeScript types

### Git Workflow

1. Create feature branches from `develop` with format `feature/feature-name`
2. Use conventional commits: `feat:`, `fix:`, `docs:`, `chore:`, etc.
3. Submit PRs to `develop` branch with clear descriptions
4. Squash and merge after approval

### Environment Configuration

- `.env.development` - Development environment variables
- `.env.production` - Production environment variables
- `.env.local` - Local overrides (not committed to version control)

Use `process.env.NEXT_PUBLIC_*` for client-side variables and standard `process.env.*` for server-only variables.

## Coding Rules

### General Coding Rules

- Use functional components with hooks for React, never class components
- Follow the existing project architecture and domain-based modular structure
- Maintain consistent naming conventions and file organization (kebab-case for files/folders)
- Add proper JSDoc comments for functions and complex logic
- Always understand the full codebase context before making changes
- Always preserve existing functionality and architectural intent
- Create new components in dedicated folders within the appropriate directory
- Follow established design patterns consistently
- Ensure type safety, accessibility, and maintainability in all code
- Use TailwindCSS for styling and Shadcn/UI with Radix UI for components
- Remove unused imports and dead code
- add comprehensive code comments

### Code Quality Principles

- **DRY (Don't Repeat Yourself)**: Extract repeated code into reusable functions or components
- **KISS (Keep It Simple, Stupid)**: Prefer simpler solutions over complex ones
- **YAGNI (You Aren't Gonna Need It)**: Don't add functionality until it's necessary
- **Single Responsibility**: Each component/function should do one thing well
- **Separation of Concerns**: Separate business logic from UI components

### Performance Considerations

- Optimize performance by using dynamic imports for large components
- Keep bundle size under 250KB per page
- Minimize re-renders using React.memo, useCallback, and useMemo appropriately
- Implement virtualization for large lists
- Optimize API calls and minimize network requests

### Error Handling

- Use discriminated unions for typed error handling
- Include fallback UI for error states
- Handle edge cases and provide helpful error messages
- Log errors appropriately for debugging

### Component Creation

- Create new components in their own folder with appropriate structure
- Split complex components into smaller sub-components
- Keep files under 500 lines of code
- Use composition over inheritance for extending components

## Component Design

### Component Hierarchy

1. **UI Components** (`/components/ui/*`): Shadcn/UI primitive wrappers
2. **Composite Components** (`/components/*`): Domain-specific components built from primitives
3. **Page Components** (`/app/**/page.tsx`): Full pages with routing

### Best Practices

1. **Keep components small** (under 100 lines where possible)
2. **Use functional components** with hooks, never class components
3. **Implement compound component pattern** for complex UI elements:

```tsx
// Example compound component pattern
const Tabs = ({ children, defaultValue }: TabsProps) => {
  // Logic here
  return <TabsContext.Provider>{children}</TabsContext.Provider>;
};

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;

// Usage
<Tabs defaultValue="account">
  <Tabs.List>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="password">Password</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="account">Account settings</Tabs.Content>
  <Tabs.Content value="password">Password settings</Tabs.Content>
</Tabs>;
```

4. **Create barrel exports** for cleaner imports:

```tsx
// components/ui/index.ts
export * from "./button";
export * from "./input";
export * from "./modal";
```

5. **Add proper JSDoc comments** for functions and complex logic:

```tsx
/**
 * Formats a date string based on the provided locale and options
 * @param dateString - ISO date string to format
 * @param locale - Locale for formatting (defaults to 'en-US')
 * @param options - Intl.DateTimeFormatOptions
 * @returns Formatted date string
 */
export const formatDate = (
  dateString: string,
  locale = "en-US",
  options?: Intl.DateTimeFormatOptions
): string => {
  // Implementation
};
```

### Styling Guidelines

1. **Use Tailwind utility classes** for styling
2. **Create custom Tailwind classes** for repeated patterns
3. **Maintain consistent spacing** with Tailwind's spacing scale
4. **Use CSS variables** for theming:

```css
/* Define in theme-variables.css */
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* Additional theme variables */
}

/* Use in components */
.my-element {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}
```

5. **Responsive design** using Tailwind's breakpoint system:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Content */}
</div>
```

## State Management

### Zustand Store Organization

1. **Create modular slices**:

```tsx
// store/slices/auth-slice.ts
import { StateCreator } from "zustand";
import { RootState } from "../index";

export interface AuthSlice {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
}

export const createAuthSlice: StateCreator<RootState, [], [], AuthSlice> = (
  set
) => ({
  user: null,
  isAuthenticated: false,
  login: async (credentials) => {
    // Implementation
    set({ user: result.user, isAuthenticated: true });
  },
  logout: () => set({ user: null, isAuthenticated: false }),
});
```

2. **Combine slices in root store**:

```tsx
// store/index.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createAuthSlice, AuthSlice } from "./slices/auth-slice";
import { createUiSlice, UiSlice } from "./slices/ui-slice";

export type RootState = AuthSlice & UiSlice;

export const useStore = create<RootState>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createUiSlice(...a),
    }),
    {
      name: "app-storage",
      partialize: (state) => ({ user: state.user }),
    }
  )
);
```

3. **Create typed selectors for store access**:

```tsx
// hooks/use-auth.ts
import { useStore } from "@/store";

export const useAuth = () => {
  const user = useStore((state) => state.user);
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const login = useStore((state) => state.login);
  const logout = useStore((state) => state.logout);

  return { user, isAuthenticated, login, logout };
};
```

### Local vs. Global State

1. **Use React's `useState` for component-specific state**
2. **Use Zustand for shared state across components**
3. **Use `useReducer` for complex local state with many actions**

## API Integration

### Axios Configuration

```tsx
// lib/api/axios-instance.ts
import axios from "axios";
import { useStore } from "@/store";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "/api";

export const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use((config) => {
  const token = useStore.getState().user?.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useStore.getState().logout();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);
```

### API Hooks Pattern

```tsx
// hooks/use-users.ts
import { useState } from "react";
import { axiosInstance } from "@/lib/api/axios-instance";
import { User, PaginatedResponse } from "@/types/api-responses";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchUsers = async (page = 1, limit = 10) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.get<PaginatedResponse<User>>(
        "/users",
        {
          params: { page, limit },
        }
      );

      setUsers(response.data.data);
      return response.data;
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("An unknown error occurred")
      );
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { users, isLoading, error, fetchUsers };
}
```

## Performance

### Optimization Techniques

1. **Code-splitting and lazy loading**:

```tsx
// app/admin/large-page/page.tsx
import dynamic from "next/dynamic";

// Lazy load heavy components
const HeavyDataTable = dynamic(
  () => import("@/components/data-tables/heavy-data-table"),
  {
    loading: () => <p>Loading table...</p>,
    ssr: false, // Disable server-side rendering for client-only components
  }
);
```

2. **Memoization**:

```tsx
// Memoize expensive component
const MemoizedDataTable = React.memo(DataTable);

// Memoize expensive calculations
const expensiveData = useMemo(() => calculateExpensiveData(data), [data]);

// Memoize callbacks
const handleClick = useCallback(() => {
  // Implementation
}, [dependencies]);
```

3. **Image optimization**:

```tsx
import Image from "next/image";

// Use next/image for automatic optimization
<Image
  src="/profile.jpg"
  alt="Profile"
  width={500}
  height={300}
  priority // For important above-the-fold images
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/..."
/>;
```

4. **Virtualization for large lists**:

```tsx
import { useVirtualizer } from "@tanstack/react-virtual";

function VirtualizedList({ items }) {
  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });

  return (
    <div ref={parentRef} style={{ height: "500px", overflow: "auto" }}>
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          position: "relative",
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            {items[virtualItem.index]}
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Performance Monitoring

1. **Use Lighthouse in CI pipeline**
2. **Implement Web Vitals monitoring**:

```tsx
// app/layout.tsx
import { useReportWebVitals } from "next/web-vitals";

export function Layout({ children }) {
  useReportWebVitals((metric) => {
    // Send to analytics
    console.log(metric);
  });

  return <>{children}</>;
}
```

## Accessibility & Internationalization

### Accessibility Guidelines

1. **Semantic HTML**: Use proper heading hierarchy and landmarks
2. **Keyboard navigation**: Ensure all interactive elements are keyboard accessible
3. **ARIA attributes**: Add appropriate ARIA roles and attributes for complex components
4. **Focus management**: Implement proper focus trapping for modals and popups
5. **Color contrast**: Maintain WCAG 2.1 AA compliant contrast ratios

```tsx
// Example accessible modal
<div
  role="dialog"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
  aria-modal="true"
>
  <h2 id="modal-title">Modal Title</h2>
  <div id="modal-description">Modal content here</div>
  <button aria-label="Close modal">×</button>
</div>
```

### Internationalization with next-intl

1. **Setup translations**:

```tsx
// messages/en.json
{
  "common": {
    "save": "Save",
    "cancel": "Cancel",
    "loading": "Loading..."
  },
  "auth": {
    "login": {
      "title": "Log In",
      "emailLabel": "Email Address",
      "passwordLabel": "Password",
      "submitButton": "Log In",
      "forgotPassword": "Forgot Password?"
    }
  }
}

// messages/th.json
{
  "common": {
    "save": "บันทึก",
    "cancel": "ยกเลิก",
    "loading": "กำลังโหลด..."
  },
  "auth": {
    "login": {
      "title": "เข้าสู่ระบบ",
      "emailLabel": "อีเมล",
      "passwordLabel": "รหัสผ่าน",
      "submitButton": "เข้าสู่ระบบ",
      "forgotPassword": "ลืมรหัสผ่าน?"
    }
  }
}
```

2. **Usage in components**:

```tsx
// app/[locale]/layout.tsx
import { NextIntlClientProvider } from "next-intl";

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

// components/login-form.tsx
import { useTranslations } from "next-intl";

export function LoginForm() {
  const t = useTranslations("auth.login");

  return (
    <form>
      <h1>{t("title")}</h1>
      <label>{t("emailLabel")}</label>
      <input type="email" />
      <label>{t("passwordLabel")}</label>
      <input type="password" />
      <button type="submit">{t("submitButton")}</button>
      <a href="/forgot-password">{t("forgotPassword")}</a>
    </form>
  );
}
```

## Security

### Security Best Practices

1. **Content Security Policy**:

```tsx
// next.config.mjs
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  connect-src 'self' ${process.env.NEXT_PUBLIC_API_URL};
`;

export default {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};
```

2. **CSRF Protection**:

```tsx
// lib/csrf-token.ts
import { useState, useEffect } from "react";
import { axiosInstance } from "./api/axios-instance";

export function useCsrfToken() {
  const [csrfToken, setCsrfToken] = useState<string | null>(null);

  useEffect(() => {
    // Fetch CSRF token from API endpoint
    axiosInstance
      .get("/csrf-token")
      .then((response) => setCsrfToken(response.data.token))
      .catch((error) => console.error("Failed to fetch CSRF token:", error));
  }, []);

  return csrfToken;
}

// Use in forms
function SecureForm() {
  const csrfToken = useCsrfToken();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Include CSRF token with form submission
    axiosInstance.post("/api/endpoint", formData, {
      headers: { "X-CSRF-Token": csrfToken },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="_csrf" value={csrfToken || ""} />
      {/* Form fields */}
    </form>
  );
}
```

3. **Authentication with NextAuth.js**:

```tsx
// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Verify credentials against API
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" },
            }
          );

          const user = await res.json();

          if (res.ok && user) {
            return user;
          }

          return null;
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.accessToken = token.accessToken;
      session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/error",
  },
});

export { handler as GET, handler as POST };
```

## Testing

### Testing Strategy

1. **Unit Tests** with Jest and React Testing Library
2. **Integration Tests** for component interactions
3. **E2E Tests** with Cypress for critical flows

```tsx
// Example component test
import { render, screen, fireEvent } from "@testing-library/react";
import { LoginForm } from "./login-form";

describe("LoginForm", () => {
  it("renders form elements correctly", () => {
    render(<LoginForm />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
  });

  it("validates email format", async () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.blur(emailInput);

    expect(
      await screen.findByText(/invalid email format/i)
    ).toBeInTheDocument();
  });

  it("submits form with valid data", async () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /log in/i }));

    expect(mockSubmit).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password123",
    });
  });
});
```

### Mock Service Worker for API Mocking

```tsx
// mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.post("/api/login", (req, res, ctx) => {
    const { email, password } = req.body;

    if (email === "test@example.com" && password === "password123") {
      return res(
        ctx.status(200),
        ctx.json({
          id: "123",
          name: "Test User",
          email: "test@example.com",
          token: "fake-jwt-token",
        })
      );
    }

    return res(ctx.status(401), ctx.json({ message: "Invalid credentials" }));
  }),

  rest.get("/api/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          { id: "1", name: "User 1", email: "user1@example.com" },
          { id: "2", name: "User 2", email: "user2@example.com" },
        ],
        total: 2,
        page: 1,
        limit: 10,
      })
    );
  }),
];
```

## Deployment

### Deployment Options

1. **Vercel Deployment**:

   - Connect GitHub repository
   - Configure environment variables
   - Set up preview deployments for PRs

2. **AWS Deployment**:

   - Build with `pnpm build`
   - Deploy to S3 + CloudFront
   - Configure Lambda@Edge for routing

3. **Docker Deployment**:

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm global add pnpm && pnpm i --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### CI/CD Pipeline with GitHub Actions

```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: "pnpm"
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      - name: Lint
        run: pnpm lint
      - name: Type check
        run: pnpm typecheck
      - name: Test
        run: pnpm test

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: "pnpm"
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      - name: Build
        run: pnpm build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./
          vercel-args: "--prod"
```

### Performance Monitoring in Production

1. **Configure Sentry for error tracking**
2. **Set up Datadog or New Relic for performance monitoring**
3. **Implement custom logging with Pino or Winston**

```tsx
// lib/logger.ts
import pino from "pino";

const logger = pino({
  level: process.env.NODE_ENV === "development" ? "debug" : "info",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});

export default logger;
```

## Additional Guidelines

### Specific Component Requirements

1. **Tables Organization**:

   - Place all table components under `/components/data-tables` directory
   - Follow the pattern of separating table definition from column configuration
   - Create separate files for row actions when complex

2. **UI Library Restrictions**:

   - Use only Shadcn UI components (extended from Radix UI)
   - **Do not** use Material UI (MUI), Ant Design, or Semantic UI
   - Any new components should follow the Shadcn UI pattern and be placed in `/components/ui`

3. **File Size Limits**:

   - Keep all files under 500 lines of code
   - Split larger components into smaller sub-components
   - Use composition over inheritance for component reuse

4. **Bundle Size Management**:
   - Target page bundle sizes < 250KB
   - Configure bundle analyzer to monitor size in CI pipeline
   - Lazy load non-critical components and routes

### Debugging Strategy

When troubleshooting issues, follow this 10-step strategy:

1. **Start with state initialization**:

   - Check initial state values first
   - Ensure loading states begin as `true` when waiting for data

2. **Trace the full state lifecycle**:

   - Follow data from API call → state updates → component rendering
   - Look for race conditions or missing state resets

3. **Add targeted logging early**:

   - Insert console logs for key state transitions
   - Log before making changes, not after multiple failed attempts

4. **Isolate components**:

   - Test UI components separately from data fetching logic
   - Create standalone test cases for complex components

5. **Consider edge cases first**:

   - Test with empty results, errors, and loading states
   - Verify behavior with missing or malformed data

6. **Use React DevTools**:

   - Monitor state changes in real-time
   - Verify component re-renders and prop changes

7. **Create minimal reproductions**:

   - Simplify the problem to its core elements
   - Remove unrelated code to focus on the issue

8. **Check asynchronous behaviors**:

   - Be attentive to timing issues in loading states
   - Consider race conditions in parallel API calls

9. **Focus on one change at a time**:

   - Test each hypothesis with a single change
   - Avoid multiple simultaneous changes that make debugging harder

10. **Apply consistent patterns**:
    - Follow established patterns for common operations
    - Use the same approach for loading state management across components

### Final Project Checklist

Before considering the implementation complete, verify:

- ✅ Next.js App Router is properly configured
- ✅ Shadcn UI + Tailwind CSS are implemented consistently
- ✅ All tables are under `components/data-tables`
- ✅ Zod schemas are used for all form validation
- ✅ Zustand stores are properly organized by domain
- ✅ Axios instance is configured with interceptors
- ✅ No unnecessary libraries have been introduced
- ✅ All files and folders follow kebab-case naming convention
- ✅ Components are properly typed with TypeScript
- ✅ Accessibility standards are implemented
- ✅ Internationalization is configured correctly
- ✅ Unit and integration tests are in place
- ✅ CI/CD pipeline is configured
- ✅ Performance metrics are within targets
