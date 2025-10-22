# Component Guide - s.e.h.a.t Website

## 🧩 Component Architecture

This website uses a modular component architecture where each section is separated into individual HTML, CSS, and JavaScript files for easy maintenance and updates.

## 📦 Component Overview

### 1. Header Component

**Files:**
- HTML: `src/components/header.html`
- CSS: `src/css/header.css`
- JS: `src/js/utils/navigation.js`

**Features:**
- Fixed navigation bar
- Responsive mobile menu
- Active link highlighting on scroll
- Smooth scroll to sections
- Brand logo integration

**Customization:**
- Update navigation links in HTML
- Modify header height: Change padding in CSS
- Adjust sticky behavior: Edit scroll threshold in JS

---

### 2. Hero Component

**Files:**
- HTML: `src/components/hero.html`
- CSS: `src/css/hero.css`

**Features:**
- Full-viewport height section
- Gradient background with floating animations
- Main call-to-action buttons
- Feature highlights grid
- Responsive typography

**Customization:**
- Edit hero title and subtitle in HTML
- Change background gradient in CSS
- Update feature cards in HTML
- Modify button styles in CSS

---

### 3. Problems Component

**Files:**
- HTML: `src/components/problems.html`
- CSS: `src/css/problems.css`

**Features:**
- Problem cards with icons
- Statistics badges
- Gap systems comparison section
- Hover animations
- Responsive grid layout

**Customization:**
- Add/remove problem cards in HTML
- Change card colors in CSS
- Update icons (using emoji or icon library)
- Modify statistics text

---

### 4. Solutions Component

**Files:**
- HTML: `src/components/solutions.html`
- CSS: `src/css/solutions.css`

**Features:**
- Alternating layout (text left/right)
- Numbered solution cards
- Feature lists with checkmarks
- Emergency solutions grid
- Visual icons for each solution

**Customization:**
- Add new solution cards in HTML
- Adjust alternating layout in CSS
- Update feature lists
- Change solution icons

---

### 5. Benefits Component

**Files:**
- HTML: `src/components/benefits.html`
- CSS: `src/css/benefits.css`

**Features:**
- Benefit cards for different stakeholders
- Statistics highlights
- Impact banner with key metrics
- Icon-based visual hierarchy
- Hover effects

**Customization:**
- Edit benefit descriptions in HTML
- Update statistics and metrics
- Change stakeholder categories
- Modify impact numbers

---

### 6. CTA Component

**Files:**
- HTML: `src/components/cta.html`
- CSS: `src/css/cta.css`

**Features:**
- Gradient background with animations
- Primary and secondary buttons
- Feature highlights
- High-contrast design for visibility

**Customization:**
- Update button text and links in HTML
- Change background gradient in CSS
- Edit call-to-action message
- Modify feature icons

---

### 7. Footer Component

**Files:**
- HTML: `src/components/footer.html` OR `footer/footer.html`
- CSS: `src/css/footer.css` OR `footer/footer.css`

**Features:**
- Multi-column layout
- Brand information
- Navigation links
- Social media links
- Legal links (privacy, terms)
- Copyright information

**Customization:**
- Update social media links in HTML
- Add/remove footer columns
- Change footer background in CSS
- Update company information

---

## 🎨 CSS Architecture

### Base Styles
- `variables.css` - Design tokens (colors, spacing, typography)
- `reset.css` - CSS reset, base styles, animations

### Component Styles
Each component has its own CSS file with:
- Component-specific classes
- Responsive breakpoints
- Hover/active states
- Animation definitions

### Naming Convention
We use BEM (Block Element Modifier) methodology:
```css
.block {}
.block__element {}
.block__element--modifier {}
```

Example:
```css
.hero {}                    /* Block */
.hero__title {}            /* Element */
.hero__title-highlight {}  /* Element with description */
```

---

## 🔧 JavaScript Utilities

### navigation.js
**Purpose:** Handle navigation behavior
- Sticky header on scroll
- Mobile menu toggle
- Active link highlighting
- Section detection

### smoothScroll.js
**Purpose:** Smooth scrolling to sections
- Intercepts anchor clicks
- Calculates offset for fixed header
- Smooth animation to target

### scrollReveal.js
**Purpose:** Scroll-based animations
- Detects elements entering viewport
- Adds 'active' class for CSS transitions
- Staggered animation delays

### componentLoader.js
**Purpose:** Dynamic component loading
- Fetches HTML component files
- Injects into DOM containers
- Handles loading errors

---

## 🔄 How Components Work Together

### 1. Page Load Sequence
```
index.html loads
↓
script.js executes
↓
componentLoader.js fetches all components
↓
Components injected into DOM
↓
Navigation, scroll, and reveal utilities initialize
↓
Page ready
```

### 2. Component Integration
```html
<!-- index.html -->
<div id="hero-container"></div>

<!-- Loaded dynamically -->
<section class="hero">...</section>
```

### 3. Style Cascade
```css
/* styles.css */
@import "variables.css";  /* 1. Global variables */
@import "reset.css";      /* 2. Base styles */
@import "header.css";     /* 3. Component styles */
/* ... */
```

---

## 📱 Responsive Design Strategy

### Breakpoints
- **Desktop:** > 968px (default)
- **Tablet:** 768px - 968px
- **Mobile:** < 768px

### Mobile-First Adjustments
Each component includes media queries for:
- Single-column layouts on mobile
- Adjusted font sizes
- Touch-friendly spacing
- Simplified navigation

### Testing Different Sizes
```css
/* Desktop (default) */
.grid { grid-template-columns: repeat(3, 1fr); }

/* Tablet */
@media (max-width: 968px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Mobile */
@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr; }
}
```

---

## 🎯 Adding New Components

### Step 1: Create HTML Component
```html
<!-- src/components/new-section.html -->
<section class="new-section section" id="new-section">
  <div class="container">
    <h2>Section Title</h2>
    <p>Content here...</p>
  </div>
</section>
```

### Step 2: Create CSS File
```css
/* src/css/new-section.css */
.new-section {
  padding: var(--spacing-2xl) 0;
  background-color: var(--background);
}
```

### Step 3: Import CSS
```css
/* styles.css */
@import url("./src/css/new-section.css");
```

### Step 4: Add Container to index.html
```html
<!-- index.html -->
<div id="new-section-container"></div>
```

### Step 5: Update Component Loader
```javascript
// src/js/utils/componentLoader.js
const components = [
  // ... existing components
  { name: "new-section", target: document.getElementById("new-section-container") },
];
```

---

## 🐛 Debugging Components

### Component Not Showing
1. Check browser console for errors
2. Verify file paths in componentLoader.js
3. Ensure container exists in index.html
4. Check CSS import in styles.css

### Styles Not Applying
1. Check CSS selector specificity
2. Verify import order in styles.css
3. Clear browser cache
4. Check for syntax errors

### Animations Not Working
1. Verify 'reveal' class in HTML
2. Check scrollReveal.js initialization
3. Test scroll position threshold
4. Ensure CSS animations defined

---

## ✅ Best Practices

### HTML
- Use semantic HTML5 elements
- Include proper ARIA labels
- Keep components self-contained
- Use consistent class naming

### CSS
- Follow BEM naming convention
- Use CSS variables for consistency
- Write mobile-first media queries
- Avoid !important unless necessary

### JavaScript
- Use ES6 modules
- Keep functions small and focused
- Handle errors gracefully
- Comment complex logic

### Performance
- Optimize images (< 500KB each)
- Minimize HTTP requests
- Use efficient selectors
- Lazy load when possible

---

## 📚 Additional Resources

- [BEM Naming](http://getbem.com/)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Responsive Design](https://web.dev/responsive-web-design-basics/)

---

**Happy Coding! 🚀**
