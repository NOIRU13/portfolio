# NOIRU Design System

Apple-inspired design rules for a modern programming learning platform

## 🎨 Color System

### Primary Colors
```css
/* Tailwind Config */
colors: {
  primary: {
    50: '#f0f9ff',   // bg-primary-50
    100: '#e0f2fe',  // bg-primary-100
    200: '#bae6fd',  // bg-primary-200
    300: '#7dd3fc',  // bg-primary-300
    400: '#38bdf8',  // bg-primary-400
    500: '#0ea5e9',  // bg-primary-500 (Main brand)
    600: '#0284c7',  // bg-primary-600
    700: '#0369a1',  // bg-primary-700
    800: '#075985',  // bg-primary-800
    900: '#0c4a6e',  // bg-primary-900
  }
}
```

### Semantic Colors
```css
colors: {
  success: {
    light: '#10b981',  // text-success-light
    DEFAULT: '#059669', // text-success
    dark: '#047857',   // text-success-dark
  },
  warning: {
    light: '#f59e0b',  // text-warning-light
    DEFAULT: '#d97706', // text-warning
    dark: '#b45309',   // text-warning-dark
  },
  error: {
    light: '#ef4444',  // text-error-light
    DEFAULT: '#dc2626', // text-error
    dark: '#b91c1c',   // text-error-dark
  }
}
```

### Neutral Colors (Apple-inspired)
```css
colors: {
  gray: {
    50: '#f8fafc',   // bg-gray-50 (System background)
    100: '#f1f5f9',  // bg-gray-100 (Secondary background)
    200: '#e2e8f0',  // bg-gray-200 (Tertiary background)
    300: '#cbd5e1',  // bg-gray-300 (Quaternary background)
    400: '#94a3b8',  // text-gray-400 (Placeholder text)
    500: '#64748b',  // text-gray-500 (Secondary text)
    600: '#475569',  // text-gray-600 (Primary text)
    700: '#334155',  // text-gray-700 (Emphasis)
    800: '#1e293b',  // text-gray-800 (Strong emphasis)
    900: '#0f172a',  // text-gray-900 (Maximum contrast)
  }
}
```

## 📝 Typography

### Font Stack
```css
fontFamily: {
  sans: [
    '-apple-system',
    'BlinkMacSystemFont',
    'SF Pro Display',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif'
  ],
  mono: [
    'SF Mono',
    'Monaco',
    'Cascadia Code',
    'Roboto Mono',
    'Courier New',
    'monospace'
  ]
}
```

### Text Scales
```css
/* Headlines */
.text-display    { font-size: 3.5rem; font-weight: 700; line-height: 1.1; } /* text-6xl font-bold */
.text-headline-1 { font-size: 2.5rem; font-weight: 600; line-height: 1.2; } /* text-4xl font-semibold */
.text-headline-2 { font-size: 2rem;   font-weight: 600; line-height: 1.25; } /* text-3xl font-semibold */
.text-headline-3 { font-size: 1.5rem; font-weight: 600; line-height: 1.3; } /* text-2xl font-semibold */

/* Body Text */
.text-body-large  { font-size: 1.125rem; line-height: 1.7; } /* text-lg */
.text-body        { font-size: 1rem;     line-height: 1.6; } /* text-base */
.text-body-small  { font-size: 0.875rem; line-height: 1.5; } /* text-sm */

/* UI Text */
.text-caption     { font-size: 0.75rem;  line-height: 1.4; } /* text-xs */
.text-overline    { font-size: 0.75rem;  line-height: 1.4; text-transform: uppercase; letter-spacing: 0.5px; } /* text-xs uppercase tracking-wide */
```

## 📏 Spacing & Layout

### Spacing Scale (Apple's 8pt grid system)
```css
/* Tailwind Spacing */
spacing: {
  '1': '0.25rem',   // 4px
  '2': '0.5rem',    // 8px  - Base unit
  '3': '0.75rem',   // 12px
  '4': '1rem',      // 16px - 2x base
  '6': '1.5rem',    // 24px - 3x base
  '8': '2rem',      // 32px - 4x base
  '12': '3rem',     // 48px - 6x base
  '16': '4rem',     // 64px - 8x base
  '20': '5rem',     // 80px - 10x base
  '24': '6rem',     // 96px - 12x base
}
```

### Component Spacing
```css
/* Card padding */
.card-padding-sm   { padding: 1rem; }      /* p-4 */
.card-padding      { padding: 1.5rem; }    /* p-6 */
.card-padding-lg   { padding: 2rem; }      /* p-8 */

/* Section spacing */
.section-spacing   { padding: 4rem 0; }    /* py-16 */
.section-spacing-sm { padding: 3rem 0; }   /* py-12 */
.section-spacing-lg { padding: 6rem 0; }   /* py-24 */
```

## 🔘 Border Radius

### Radius Scale
```css
borderRadius: {
  'none': '0',
  'sm': '0.25rem',    // 4px  - rounded-sm (Small UI elements)
  'DEFAULT': '0.5rem', // 8px  - rounded (Cards, buttons)
  'md': '0.75rem',    // 12px - rounded-md (Modal, panels)
  'lg': '1rem',       // 16px - rounded-lg (Large cards)
  'xl': '1.5rem',     // 24px - rounded-xl (Hero sections)
  '2xl': '2rem',      // 32px - rounded-2xl (Large containers)
  'full': '9999px',   // rounded-full (Pills, avatars)
}
```

### Component Radius
```css
/* Buttons */
.btn-radius        { border-radius: 0.5rem; }  /* rounded */
.btn-radius-pill   { border-radius: 9999px; }  /* rounded-full */

/* Cards */
.card-radius       { border-radius: 0.75rem; } /* rounded-md */
.card-radius-lg    { border-radius: 1rem; }    /* rounded-lg */

/* Inputs */
.input-radius      { border-radius: 0.5rem; }  /* rounded */
```

## 🌫️ Shadows & Elevation

### Shadow System
```css
boxShadow: {
  'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',                          // shadow-sm
  'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', // shadow
  'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',   // shadow-md
  'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', // shadow-lg
  'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', // shadow-xl
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',                   // shadow-2xl
  'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',               // shadow-inner
}
```

### Component Shadows
```css
/* Cards */
.card-shadow       { box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1); }    /* shadow */
.card-shadow-hover { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); } /* shadow-md */
.card-shadow-lg    { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); } /* shadow-lg */

/* Buttons */
.btn-shadow        { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }   /* shadow-sm */
.btn-shadow-hover  { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); } /* shadow-md */

/* Modals */
.modal-shadow      { box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); } /* shadow-2xl */
```

## 🎛️ Component Design

### Buttons
```vue
<!-- Primary Button -->
<button class="
  px-6 py-3
  bg-primary-500 hover:bg-primary-600 active:bg-primary-700
  text-white font-medium
  rounded-lg
  shadow-sm hover:shadow-md
  transform hover:-translate-y-0.5
  transition-all duration-200 ease-out
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
">
  Primary Action
</button>

<!-- Secondary Button -->
<button class="
  px-6 py-3
  bg-white hover:bg-gray-50 active:bg-gray-100
  text-gray-700 font-medium
  border border-gray-300 hover:border-gray-400
  rounded-lg
  shadow-sm hover:shadow-md
  transform hover:-translate-y-0.5
  transition-all duration-200 ease-out
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
">
  Secondary Action
</button>

<!-- Ghost Button -->
<button class="
  px-6 py-3
  text-primary-600 hover:text-primary-700 font-medium
  hover:bg-primary-50 active:bg-primary-100
  rounded-lg
  transition-all duration-200 ease-out
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
">
  Ghost Action
</button>
```

### Cards
```vue
<!-- Basic Card -->
<div class="
  bg-white
  border border-gray-200 hover:border-gray-300
  rounded-lg
  shadow-sm hover:shadow-md
  p-6
  transition-all duration-200 ease-out
  transform hover:-translate-y-1
">
  <h3 class="text-headline-3 text-gray-900 mb-3">Card Title</h3>
  <p class="text-body text-gray-600">Card content goes here...</p>
</div>

<!-- Elevated Card -->
<div class="
  bg-white
  rounded-xl
  shadow-lg hover:shadow-xl
  p-8
  transition-all duration-300 ease-out
  transform hover:-translate-y-2
">
  <h3 class="text-headline-2 text-gray-900 mb-4">Elevated Card</h3>
  <p class="text-body-large text-gray-600">More prominent content...</p>
</div>
```

### Form Inputs
```vue
<!-- Text Input -->
<input class="
  w-full px-4 py-3
  bg-white
  border border-gray-300 focus:border-primary-500
  rounded-lg
  text-gray-900 placeholder-gray-400
  shadow-sm focus:shadow-md
  transition-all duration-200 ease-out
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1
"
placeholder="Enter text..." />

<!-- Textarea -->
<textarea class="
  w-full px-4 py-3
  bg-white
  border border-gray-300 focus:border-primary-500
  rounded-lg
  text-gray-900 placeholder-gray-400
  shadow-sm focus:shadow-md
  resize-none
  transition-all duration-200 ease-out
  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1
"
rows="4"
placeholder="Enter message..."></textarea>
```

### Navigation
```vue
<!-- Header Navigation -->
<nav class="
  bg-white/80 backdrop-blur-sm
  border-b border-gray-200
  sticky top-0 z-50
">
  <div class="max-w-6xl mx-auto px-6">
    <div class="flex justify-between items-center h-16">
      <!-- Navigation items -->
    </div>
  </div>
</nav>

<!-- Tab Navigation -->
<div class="border-b border-gray-200">
  <nav class="flex space-x-8">
    <a class="
      py-4 px-1
      border-b-2 border-primary-500
      text-primary-600 font-medium text-sm
      transition-colors duration-200
    ">
      Active Tab
    </a>
    <a class="
      py-4 px-1
      border-b-2 border-transparent
      text-gray-500 hover:text-gray-700 font-medium text-sm
      transition-colors duration-200
    ">
      Inactive Tab
    </a>
  </nav>
</div>
```

## ♿ Accessibility Guidelines

### Color Contrast
```css
/* Minimum contrast ratios (WCAG AA) */
/* Normal text: 4.5:1 */
/* Large text (18px+): 3:1 */
/* UI components: 3:1 */

/* High contrast text combinations */
.text-contrast-high   { color: #0f172a; } /* text-gray-900 on white */
.text-contrast-medium { color: #334155; } /* text-gray-700 on white */
.text-contrast-low    { color: #64748b; } /* text-gray-500 on white (use sparingly) */
```

### Focus States
```css
/* Standard focus ring */
.focus-ring {
  focus:outline-none
  focus:ring-2
  focus:ring-primary-500
  focus:ring-offset-2
}

/* High contrast focus ring */
.focus-ring-high-contrast {
  focus:outline-none
  focus:ring-2
  focus:ring-gray-900
  focus:ring-offset-2
}
```

### Interactive States
```css
/* Touch targets (minimum 44px) */
.touch-target {
  min-height: 44px;
  min-width: 44px;
}

/* Hover states */
.interactive-hover {
  transition-all duration-200 ease-out;
  transform: hover:-translate-y-0.5;
}

/* Active states */
.interactive-active {
  transform: active:translate-y-0;
}
```

### Screen Reader Support
```vue
<!-- Proper semantic markup -->
<main role="main" aria-label="Main content">
  <section aria-labelledby="section-heading">
    <h2 id="section-heading" class="sr-only">Section Title</h2>
    <!-- Content -->
  </section>
</main>

<!-- Skip links -->
<a href="#main-content" class="
  sr-only focus:not-sr-only
  absolute top-4 left-4
  bg-primary-600 text-white
  px-4 py-2 rounded-md
  font-medium text-sm
  focus:z-50
">
  Skip to main content
</a>
```

## 🎯 Implementation Guidelines

### Responsive Design
```css
/* Mobile-first approach */
.responsive-container {
  @apply px-4 sm:px-6 lg:px-8;
  @apply max-w-sm sm:max-w-2xl lg:max-w-6xl;
  @apply mx-auto;
}

/* Typography scaling */
.responsive-text {
  @apply text-2xl sm:text-3xl lg:text-4xl;
}
```

### Animation & Transitions
```css
/* Standard transitions */
.smooth-transition {
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Micro-interactions */
.micro-bounce {
  @apply transform hover:scale-105 active:scale-95;
  @apply transition-transform duration-200 ease-out;
}
```

### Dark Mode Support
```css
/* Automatic dark mode classes */
.adaptive-bg {
  @apply bg-white dark:bg-gray-900;
}

.adaptive-text {
  @apply text-gray-900 dark:text-white;
}

.adaptive-border {
  @apply border-gray-200 dark:border-gray-700;
}
```

This design system provides a solid foundation for building a modern, accessible, and Apple-inspired interface for the NOIRU programming learning platform.