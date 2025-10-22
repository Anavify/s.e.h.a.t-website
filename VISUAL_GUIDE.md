# Visual Design Guide - s.e.h.a.t Website

## 🎨 Design Philosophy

The s.e.h.a.t website embodies modern healthcare design principles:
- **Clean & Minimal**: Focus on content, not clutter
- **Trust & Professionalism**: Medical-grade reliability
- **Warmth & Care**: Pink accents convey compassion
- **Accessibility**: Readable, navigable, inclusive

---

## 🌈 Color Psychology

### Primary Pink (#ff5598)
- **Represents:** Care, compassion, health, vitality
- **Used for:** CTAs, highlights, interactive elements
- **Creates:** Emotional connection, approachability

### White (#ffffff)
- **Represents:** Cleanliness, professionalism, trust
- **Used for:** Backgrounds, cards, contrast
- **Creates:** Medical authority, clarity

### Color Usage Guidelines

**Do:**
- ✅ Use pink for primary actions and emphasis
- ✅ Use white for content backgrounds
- ✅ Maintain 4.5:1 contrast ratio for accessibility
- ✅ Use gradients for visual interest

**Don't:**
- ❌ Use pink for negative actions
- ❌ Mix too many additional colors
- ❌ Use low-contrast combinations
- ❌ Overuse bright colors

---

## 📐 Layout Structure

### Grid System
```
Desktop (1200px max-width)
├── Hero: Full viewport height
├── Problems: 4-column grid → 2 columns → 1 column
├── Solutions: Alternating 2-column layout
├── Benefits: 3-column grid → 1 column
└── CTA: Centered single column
```

### Spacing Hierarchy
```
Section Padding: 6rem (96px)
Card Padding: 3rem (48px)
Element Spacing: 2rem (32px)
Text Spacing: 1rem (16px)
Micro Spacing: 0.5rem (8px)
```

---

## ✍️ Typography

### Font Family
**Inter** - Modern, readable, professional
- Clean geometric design
- Excellent readability at all sizes
- Wide character support
- Variable font weights

### Type Scale
```
Hero Title:    56px (3.5rem) - Bold, attention-grabbing
H1 Headings:   40px (2.5rem) - Section titles
H2 Subheads:   32px (2rem)   - Subsection titles
H3 Cards:      24px (1.5rem) - Card titles
Body Text:     16px (1rem)   - Primary content
Small Text:    14px (0.875rem) - Captions, metadata
```

### Font Weights
- **Regular (400):** Body text, descriptions
- **Medium (500):** Navigation, labels
- **Semi-Bold (600):** Buttons, emphasis
- **Bold (700):** Headings, titles

### Line Height
- Headings: 1.2 (tight, impactful)
- Body: 1.6-1.7 (comfortable reading)
- Captions: 1.5 (compact information)

---

## 🎭 Visual Elements

### Icons
- **Style:** Emoji-based for universal recognition
- **Size:** 2rem (32px) standard, 8rem (128px) decorative
- **Color:** Pink gradient or solid pink
- **Purpose:** Quick visual cues, emotional connection

### Cards
```css
Background: White
Border Radius: 16px (modern, friendly)
Shadow: Subtle elevation (0 4px 12px rgba(0,0,0,0.08))
Hover: Lift up (-8px) with enhanced shadow
Border: 4px accent on left (problems section)
```

### Buttons
```css
Primary: Pink gradient, white text, prominent shadow
Secondary: Transparent, pink border, pink text
Hover: Lift effect (-3px) with enhanced shadow
Size: Generous padding (16px 48px)
Border Radius: 12px (soft corners)
```

### Gradients
```css
Background: linear-gradient(135deg, #ffffff 0%, #fff5f9 100%)
Button: linear-gradient(135deg, #ff5598, #ff78ad)
Accent: Pink gradients for visual depth
```

---

## 🎬 Animation Strategy

### Scroll Animations
- **Fade In:** Opacity 0 → 1, translateY 30px → 0
- **Slide In Left:** translateX -40px → 0
- **Slide In Right:** translateX 40px → 0
- **Timing:** 0.6-0.8s ease
- **Trigger:** When element enters 85% of viewport

### Hover Effects
- **Cards:** Lift 8px, shadow enhancement
- **Buttons:** Lift 3px, shadow enhancement
- **Links:** Color change, slight movement
- **Duration:** 0.3s ease (feels responsive)

### Background Animations
- **Floating Orbs:** Subtle movement, 8-10s duration
- **Pulse Effects:** Scale & opacity, 4-5s duration
- **Purpose:** Add life without distraction

---

## 📱 Responsive Adaptations

### Desktop (> 968px)
- Multi-column grids (3-4 columns)
- Horizontal navigation
- Large typography
- Generous spacing
- Decorative elements visible

### Tablet (768px - 968px)
- 2-column grids
- Reduced font sizes
- Adjusted spacing
- Horizontal navigation maintained

### Mobile (< 768px)
- Single column layouts
- Hamburger menu navigation
- Touch-friendly sizing (44px minimum)
- Stacked elements
- Reduced decorative elements
- Optimized typography

---

## 🎯 Section-Specific Design

### Hero Section
**Purpose:** Capture attention immediately
- Full viewport height
- Centered content
- Large, bold typography
- Gradient background with animated orbs
- Multiple CTAs
- Feature previews below

### Problems Section
**Purpose:** Identify with user pain points
- Light gray background for separation
- Problem cards with left accent border
- Icons for quick scanning
- Statistics for credibility
- Gap systems comparison box

### Solutions Section
**Purpose:** Present s.e.h.a.t as the answer
- Alternating layout prevents monotony
- Numbered solutions show progression
- Feature lists with checkmarks
- Emergency grid for special emphasis
- Decorative icons (low opacity)

### Benefits Section
**Purpose:** Show value for each stakeholder
- Gradient background (white to pink)
- Stakeholder-specific cards
- Statistics prominent
- Impact banner for overall effect
- Icon-based visual hierarchy

### CTA Section
**Purpose:** Drive conversion
- Pink gradient background
- High contrast with white text
- Animated background elements
- Multiple conversion paths
- Trust indicators (free, secure, etc.)

### Footer
**Purpose:** Information & navigation
- Dark background for contrast
- Multi-column organization
- Social proof integration
- Legal compliance
- Secondary navigation

---

## 🔍 Details That Matter

### Micro-interactions
- **Link hover:** Color change + underline
- **Button hover:** Lift + shadow
- **Card hover:** Lift + border highlight
- **Nav links:** Background color change

### Shadows
```css
Light (Cards at rest):
0 2px 4px rgba(0, 0, 0, 0.05)

Medium (Elevated elements):
0 4px 12px rgba(0, 0, 0, 0.08)

Heavy (Hover states):
0 8px 24px rgba(0, 0, 0, 0.12)

Pink (Brand elements):
0 4px 20px rgba(255, 85, 152, 0.2)
```

### Border Radius Scale
```css
Small: 8px  - Badges, small elements
Base: 12px  - Buttons, inputs
Large: 16px - Cards, major containers
Round: 50%  - Icons, avatars
```

### Transitions
```css
Fast: 0.2s - Micro-interactions
Base: 0.3s - Standard interactions
Slow: 0.5s - Major state changes
```

---

## ♿ Accessibility Considerations

### Color Contrast
- All text meets WCAG AA standards (4.5:1)
- Pink on white: Excellent contrast
- White on pink: Excellent contrast
- Icons never rely on color alone

### Focus States
- Visible focus rings (2px pink outline)
- Keyboard navigation supported
- Skip links for screen readers
- Logical tab order

### Typography
- Minimum 16px for body text
- Adequate line height (1.6+)
- Sufficient letter spacing
- Scalable with browser zoom

### Interactive Elements
- Minimum 44px × 44px touch targets
- Clear hover/focus states
- Descriptive aria-labels
- Semantic HTML structure

---

## 🎨 Design Tokens Reference

```css
/* Colors */
--primary-color: #ff5598
--primary-dark: #e6498a
--primary-light: #ff78ad
--text-primary: #1a1a1a
--text-secondary: #666666
--background: #ffffff
--background-pink: #fff5f9

/* Typography */
--font-primary: 'Inter'
--fs-hero: 3.5rem
--fs-h1: 2.5rem
--fs-body: 1rem

/* Spacing */
--spacing-xs: 0.5rem
--spacing-sm: 1rem
--spacing-md: 2rem
--spacing-lg: 3rem
--spacing-xl: 4rem
--spacing-2xl: 6rem

/* Effects */
--shadow-sm: 0 2px 4px rgba(0,0,0,0.05)
--shadow-md: 0 4px 12px rgba(0,0,0,0.08)
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12)
--border-radius: 12px
--transition-base: 0.3s ease
```

---

## 📊 Visual Hierarchy

### Priority Levels

**Level 1 (Primary Focus):**
- Hero title
- Primary CTA buttons
- Section headings

**Level 2 (Secondary Focus):**
- Subheadings
- Key statistics
- Benefit highlights

**Level 3 (Supporting Content):**
- Body text
- Feature lists
- Card descriptions

**Level 4 (Metadata):**
- Labels
- Captions
- Footer links

---

## 🎯 Design Principles Summary

1. **Clarity First:** Every element serves a purpose
2. **Consistent Spacing:** Rhythm creates harmony
3. **Strategic Color:** Pink for action, white for trust
4. **Hierarchy:** Guide the eye naturally
5. **Accessibility:** Everyone can use it
6. **Performance:** Fast, smooth, responsive
7. **Emotion:** Healthcare with heart

---

**Remember:** Good design is invisible. Users should feel guided, not distracted.
