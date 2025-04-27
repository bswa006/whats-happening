# Guide: Converting Anima-Generated React Code to Next.js Application

## Overview

This document explains how to convert React components from Anima-generated code to a modern Next.js application using the app router, TypeScript, and TailwindCSS.

## Step 1: Analyze the Anima Code Structure

1. Examine the Anima-generated code in the `/anima-react-code` directory
2. Identify key components, their relationships, and functionality
3. Take note of assets like images, fonts, and styles
4. **Important**: Each folder in the Anima codebase (e.g., `/page-name`, `/plan-weekend`) corresponds to a page in your Next.js application

### Typical Anima React Project Structure

```
anima-react-code/[page-name]/
├── .storybook/               # Storybook configuration
├── src/                      # Main source code
│   ├── components/           # Reusable UI components
│   │   └── [Component]/      # Component and its stories
│   ├── screens/              # Page-level components
│   │   └── [ScreenName]/     # Main page component
│   └── index.jsx             # Entry point file
├── static/                   # Static assets
│   └── img/                  # Image assets including SVGs and PNGs
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
└── tailwind.css              # CSS variables and customizations
```

### Key File Analysis

#### Entry Point (`src/index.jsx`)

- Sets up React application with StrictMode
- Renders the main screen component (e.g., `[ScreenName]`)
- Uses createRoot API from React 18

#### Main Page Components (`src/screens/[ScreenName]/[ScreenName].jsx`)

- Typically large components (500+ lines) defining entire page layouts
- Contains hardcoded content for various UI elements
- Uses a mix of inline styles and Tailwind classes
- Structured with multiple nested divs for precise positioning
- Contains extensive image references with absolute paths (`/img/[image-name].png`)

#### Reusable Components (`src/components/[ComponentName]/[ComponentName].jsx`)

- Modular UI elements like cards, buttons, inputs
- Takes props for customization
- Handles different display states
- Uses PropTypes for type checking
- Often contains hardcoded image paths and styling

#### Component Export Patterns

- Simple barrel exports in index.js files:
  ```js
  export { [ComponentName] } from "./[ComponentName]";
  ```

### Styling System

- Tailwind CSS with custom configuration
- CSS variables defined in `tailwind.css`
- Custom color schemes in `tailwind.config.js`
- Extensive use of utility classes with pixel-perfect dimensions

### Common Interconnection Patterns

- Screen components import and use reusable components
- Component relationships defined through imports and props
- Data often hardcoded rather than fetched dynamically
- Background images and styling directly embedded

## Step 2: Page Mapping

Map each Anima folder to a corresponding page in your Next.js app:

```
/anima-react-code/[page-name] → /app/[page-name]/page.tsx
/anima-react-code/plan-weekend → /app/plan-weekend/page.tsx
```

This direct mapping ensures the application structure reflects the original design organization.

## Step 3: Set Up Component Structure in Next.js

```
/components
  /ui
    /[component-name]
      index.tsx
```

For each Anima component:

1. Create a corresponding folder in `/components/ui`
2. Implement as client components with `'use client'` directive
3. Use TypeScript interfaces for props
4. Follow React functional component patterns

## Step 4: Asset Management

1. Copy all image assets (SVGs, PNGs, JPGs) from Anima's `/static/img/` to Next.js `/public/static/images/`
2. **Important**: Maintain exact filenames to ensure consistency
3. Use the Next.js Image component for optimal performance:

```jsx
// Before (Anima)
<img src="/img/icon-name.svg" />

// After (Next.js) - For SVGs and small icons
<img src="/static/images/icon-name.svg" alt="Icon description" />

// After (Next.js) - For photographs and larger images
import Image from "next/image";

<Image
  src="/static/images/image-name.png"
  alt="Image description"
  width={361}
  height={165}
  priority={true}
  quality={90}
/>
```

4. **Critical**: For images, use dimensions that preserve the aspect ratio while allowing responsive behavior:

   - Use `fill` with appropriate container sizing for images that should fill their container
   - Only provide explicit width/height for fixed-size elements where maintaining exact dimensions is critical
   - For responsive images, use relative sizing (%, vw, vh) or aspect-ratio properties

5. For background images in CSS, update paths in Tailwind:

```jsx
// Before (Anima)
<div className="bg-[url(/img/background-image.png)] bg-cover bg-[50%_50%]">

// After (Next.js)
<div className="bg-[url(/static/images/background-image.png)] bg-cover bg-[50%_50%]">
```

6. Create any missing SVG icons to match the Figma design exactly

## Step 5: Component Implementation Guidelines

1. Add explicit TypeScript interfaces for all props
2. Use React hooks for state management
3. Implement components as client components with `'use client'`
4. Add JSDoc comments for documentation
5. Maintain consistent styling with TailwindCSS

Example conversion:

```jsx
// Anima component
export const [ComponentName] = ({
  type,
  property1,
  property2,
  className,
  image = "/img/image-name.png",
}) => {
  return (
    <div className="border-2 w-[361px] flex flex-col items-start">
      {/* Content */}
    </div>
  );
};

// Next.js component
("use client");

import Image from "next/image";

interface [ComponentName]Props {
  title: string;
  description: string;
  property1: string;
  property2: string;
  property3: string;
  property4: string;
  image: string;
  state?: boolean;
  onClick?: () => void;
}

export function [ComponentName]({
  title,
  description,
  property1,
  property2,
  property3,
  property4,
  image,
  state = false,
  onClick,
}: [ComponentName]Props): JSX.Element {
  return (
    <div
      className="w-full flex flex-col items-start border-2 border-solid"
      onClick={onClick}
    >
      <div className="relative w-full aspect-[2.2/1] border-2 border-solid border-black">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {/* Other content */}
    </div>
  );
}
```

## Step 6: Page Setup in Next.js

1. Create appropriate page files in the `/app` directory based on Anima folder names
2. Import components and compose the UI
3. Make pages client components if they use client-only features
4. **Critical**: Use flexible layouts while preserving the visual design intent

Example:

```jsx
"use client";

import Image from "next/image";
import { Header } from "@/components/ui/header";
import { [ComponentName] } from "@/components/ui/[component-name]";
// Other imports

export default function [PageName]() {
  return (
    <main className="relative w-full min-h-screen bg-colors-color-general-bg-subtle">
      {/* Background with proper image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-auto"
          alt="Background"
          src="/static/images/background-image.png"
        />
      </div>

      <div className="relative z-10">
        <Header title="Page Title" />
        <[ComponentName]
          title="Item Title"
          description="Item description"
          image="/static/images/item-image.png"
          // Other props
        />
      </div>
    </main>
  );
}
```

## Step 7: Styling Conversion

1. Replace specific class-based styling with TailwindCSS utilities
2. Update colors to use Tailwind's color palette or custom colors
3. Maintain responsive design patterns
4. **Important**: Use flexible sizing patterns instead of hardcoded dimensions:

```jsx
// Before (Anima with hardcoded width)
className = "w-[361px] h-[165px]";

// After (Next.js with responsive approach)
// For cards that should maintain a specific width on desktop but be responsive on mobile:
className = "w-full sm:w-[361px] aspect-[361/165]";

// For containers that should fill available space:
className = "w-full h-auto";

// When an aspect ratio is more important than exact dimensions:
className = "w-full aspect-[2.2/1]";

// When fixed dimensions are actually necessary (e.g., icons, buttons with specific sizes):
className = "w-[24px] h-[24px]";
```

### When to Use Fixed Dimensions vs. Flexible Sizing

1. **Use Fixed Dimensions (w-[x] and h-[y]) When**:

   - Working with icons or small UI elements that must be consistent
   - Implementing buttons with specific size requirements
   - Creating fixed-width navigation or sidebar elements
   - Matching specific design constraints where the exact pixel dimensions are critical for visual fidelity

2. **Use Flexible Dimensions When**:

   - Building container elements that should adapt to screen size
   - Creating responsive layouts that work across devices
   - Working with content areas that may contain variable amounts of content
   - Implementing grid or card layouts that should reflow based on available space

3. **Use Aspect Ratio Instead of Fixed Height When**:
   - Working with images or media that should maintain proportions
   - Creating cards or containers where the proportions matter more than exact pixel heights
   - Implementing responsive elements that should scale proportionally

### Color Management Best Practices

1. **Configure Tailwind properly for custom colors**:

   ```js
   // In tailwind.config.js or tailwind.config.ts
   theme: {
     extend: {
       colors: {
         "colors-color-general-bg-default": "rgba(250, 245, 242, 1)",
         "colors-color-general-bg-subtle": "rgba(250, 245, 242, 1)",
         "colors-color-general-card-bg": "rgba(250, 245, 242, 1)",
         // Other color variables...
       }
     }
   }
   ```

2. **Always reference CSS variables through Tailwind class names**:

   ```jsx
   // AVOID using CSS variables directly (this won't work)
   <div style={{ backgroundColor: "var(--colors-color-general-bg-subtle)" }}>...</div>

   // INSTEAD use Tailwind classes with the configured colors
   <div className="bg-colors-color-general-bg-subtle">...</div>
   ```

3. **Verify colors match Figma design** before implementing:

   - Check all background colors (main app, containers, cards)
   - Confirm section backgrounds match design (e.g., white vs. beige)
   - Use consistent card backgrounds across components

4. **Update global color variables consistently** in both places:

   ```css
   /* In globals.css */
   :root {
     --colors-color-general-bg-default: rgba(250, 245, 242, 1); /* Beige */
     --colors-color-general-bg-subtle: rgba(250, 245, 242, 1); /* Beige */
     --colors-color-general-card-bg: rgba(250, 245, 242, 1); /* Beige */
     /* Other colors... */
   }
   ```

   ```js
   /* In tailwind.config.js or tailwind.config.ts */
   colors: {
     "colors-color-general-bg-default": "rgba(250, 245, 242, 1)",
     "colors-color-general-bg-subtle": "rgba(250, 245, 242, 1)",
     "colors-color-general-card-bg": "rgba(250, 245, 242, 1)",
   }
   ```

5. **Apply consistent background colors** to avoid visual discrepancies:
   - Main page background
   - Content sections
   - Cards and containers
   - Action buttons

## Common Migration Challenges and Solutions

### 1. Breaking Down Monolithic Components

- **Challenge**: Anima generates large, monolithic page components (often 500+ lines)
- **Solution**: Split into smaller, focused components based on UI sections

### 2. Image Management

- **Challenge**: Anima uses basic `img` tags with direct paths
- **Solution**:
  - Use Next.js Image component with proper aspect ratios and container sizing
  - Only specify exact width/height when the design requires exact dimensions
  - Use `fill` with appropriate container sizing for responsive images

### 3. Background Images and Colors

- **Challenge**: Anima embeds background images and colors directly in classes
- **Solution**:
  - Update paths in Tailwind classes and use responsive sizing where possible
  - **Important**: Ensure background colors are applied consistently to all containers
  - Add background color to the main container and all sub-containers that might scroll
  - Use `min-h-screen` with consistent background color to prevent white gaps during scrolling
  - **Critical**: Match Figma background colors exactly (e.g., beige vs. orange)

### 4. Layout Conversion

- **Challenge**: Anima often uses absolute positioning for pixel-perfect layouts
- **Solution**:
  - Use more flexible container layouts with responsive sizing
  - Replace fixed heights with aspect-ratio for elements that should maintain proportions
  - Use percentage-based or viewport-relative units for elements that should adapt
  - Only maintain pixel-perfect dimensions for critical UI elements
  - **Important**: Maintain proper spacing between sections (e.g., 30px gaps, 60px vertical spacing)

### 5. Styling Variables

- **Challenge**: Anima uses custom CSS variables defined in tailwind.css
- **Solution**:
  - Transfer all variables to Next.js theme configuration
  - **Critical**: Configure Tailwind to recognize custom color variables
  - **Critical**: Use CSS variables consistently throughout the application instead of hardcoded values
  - Enforce usage of variables for colors, spacing, and typography
  - Ensure variables are defined both in CSS and in Tailwind config
  - Check for syntax errors like undefined color classes

### 6. Hard-coded Content

- **Challenge**: Anima components often have hard-coded content
- **Solution**: Extract content to props or data fetching methods

### 7. Missing Icons

- **Challenge**: Some icons may not transfer properly to Next.js
- **Solution**: Manually create SVG icons to match design specs exactly

### 8. Text Readability

- **Challenge**: Text can sometimes appear blurred or have incorrect styling
- **Solution**: Remove blur effects and ensure proper font weights, sizes, and colors
- **Important**: Make sure date formats and other text elements are clearly visible

## Testing the Conversion

1. Run the application with `npm run dev`
2. Compare side-by-side with Figma design to ensure visual fidelity is maintained
3. Verify all components render correctly across different screen sizes
4. Test interactions and responsive behavior
5. Check for console errors related to missing assets
6. Confirm image quality and loading performance
7. **Critical**: Verify the design adapts appropriately to different screen sizes

## Visual Alignment Checklist

Before finalizing any page implementation, verify:

- [ ] Background colors match Figma design exactly
- [ ] Card backgrounds are consistent across components
- [ ] Spacing between elements is appropriate and consistent
- [ ] Text is readable and styled correctly
- [ ] Buttons and interactive elements have correct styling
- [ ] Icons and images are properly sized and positioned
- [ ] Elements maintain proper proportions across screen sizes
- [ ] Color scheme is consistent across the entire application
- [ ] Layout responsiveness matches design at different breakpoints
- [ ] Correct number of elements (cards, sections, items) is included
- [ ] Proper states (normal, sold out, free, etc.) are implemented for each component

## Common Visual Issues to Watch For

When implementing designs from Figma to Next.js, be vigilant about these common issues:

1. **Color Mismatches**: Main backgrounds might be incorrectly set to match card colors, or vice versa. Always check:

   - Main app background (orange in this app)
   - Content drawer background (beige in this app)
   - Card backgrounds (typically beige or white)
   - Button colors

2. **Missing Content**: Ensure all content from the design is included:

   - Complete set of cards for each section (might need 5-6 cards in a list)
   - All navigation elements
   - Proper number of filter options or tabs
   - Action buttons and interactive elements

3. **Inconsistent Styling**: Watch for:

   - Borders that should be black vs. light gray
   - Shadow effects that differ from the design
   - Incorrect corner radius on elements
   - Spacing between elements (both horizontal and vertical)
   - Elements that should maintain specific proportions vs. those that should be responsive

4. **States and Variations**: Implement all component states:
   - Regular (ticketed) items
   - Free items
   - Sold out items
   - Selected/unselected states
   - Hover effects when specified

When comparing to image references, systematically check each section and element to ensure nothing is missing or styled incorrectly.

## Conclusion

This conversion process transforms Anima's auto-generated code into a maintainable, type-safe Next.js application while preserving the original design and functionality. The folder structure in the Anima codebase directly maps to your application's page structure, creating a consistent organization between design and implementation.

Pay special attention to visual consistency, especially regarding background colors, spacing, and text readability. Use responsive design principles where possible, reserving fixed dimensions only for elements that truly require them for visual fidelity. Always use CSS variables for colors and other design tokens rather than hardcoding values to maintain a cohesive design system.
