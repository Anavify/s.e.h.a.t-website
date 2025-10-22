# Quick Reference Guide - s.e.h.a.t Website

## 🎯 Common Updates

### Change Brand Colors

**File:** `src/css/variables.css`

```css
:root {
  --primary-color: #ff5598;  /* Main brand pink */
  --secondary-color: #ffffff; /* White */
}
```

### Update Logo

**Files to update:**
- Header: `src/components/header.html` (line 5)
- Footer: `src/components/footer.html` (line 7)

```html
<img src="./Assets/s.e.h.a.t Branding/Logo 1.svg" alt="s.e.h.a.t Logo" />
```

### Change Hero Title

**File:** `src/components/hero.html` (lines 4-6)

```html
<h1 class="hero__title fade-in">
  Your Health Companion for All Your
  <span class="hero__title-highlight">Healthcare Needs</span>
</h1>
```

### Update Navigation Links

**File:** `src/components/header.html` (lines 10-15)

```html
<ul class="nav__list">
  <li><a href="#home" class="nav__link active">Home</a></li>
  <li><a href="#problems" class="nav__link">Problems</a></li>
  <!-- Add more links -->
</ul>
```

### Modify Problem Cards

**File:** `src/components/problems.html`

Each problem card structure:
```html
<div class="problem-card reveal">
  <div class="problem-card__icon">📄</div>
  <h3 class="problem-card__title">Title Here</h3>
  <p class="problem-card__description">Description here...</p>
  <span class="problem-card__stat">Stat Text</span>
</div>
```

### Update Solution Cards

**File:** `src/components/solutions.html`

```html
<div class="solution-card reveal">
  <div class="solution-card__content">
    <div class="solution-card__number">1</div>
    <h3 class="solution-card__title">Solution Title</h3>
    <p class="solution-card__description">Description...</p>
    <!-- Add features -->
  </div>
</div>
```

### Change Button Text/Actions

**Files:** `src/components/hero.html` or `src/components/cta.html`

```html
<button class="btn btn-primary">
  <span>📱</span>
  Button Text Here
</button>
```

### Update Footer Links

**File:** `src/components/footer.html` (starting line 31)

```html
<div class="footer__column">
  <h4 class="footer__column-title">Product</h4>
  <ul class="footer__links">
    <li><a href="#" class="footer__link">Link Text</a></li>
  </ul>
</div>
```

### Add Social Media Links

**File:** `src/components/footer.html` (lines 19-22)

```html
<div class="footer__social">
  <a href="YOUR_URL" class="footer__social-link">ICON</a>
</div>
```

## 🎨 Styling Tips

### Change Font Size

**File:** `src/css/variables.css`

```css
:root {
  --fs-hero: 3.5rem;    /* Hero title */
  --fs-h1: 2.5rem;      /* Section titles */
  --fs-body: 1rem;      /* Body text */
}
```

### Adjust Spacing

**File:** `src/css/variables.css`

```css
:root {
  --spacing-sm: 1rem;   /* Small spacing */
  --spacing-md: 2rem;   /* Medium spacing */
  --spacing-lg: 3rem;   /* Large spacing */
}
```

### Modify Animations

**File:** `src/css/reset.css` (lines 68-100)

Adjust animation timings:
```css
.fade-in {
  animation: fadeIn 0.6s ease forwards;
}
```

### Change Section Background

**Files:** Component-specific CSS files

```css
.section-name {
  background-color: var(--background);
  /* or */
  background: linear-gradient(135deg, #ffffff 0%, #fff5f9 100%);
}
```

## 🔧 Behavior Changes

### Adjust Scroll Offset (for fixed header)

**File:** `src/js/utils/smoothScroll.js` (line 11)

```javascript
const headerOffset = 80; // Change this value
```

### Change Scroll Reveal Timing

**File:** `src/js/utils/scrollReveal.js` (line 34)

```javascript
element.style.transitionDelay = `${index * 0.1}s`; // Change 0.1 to adjust delay
```

### Modify Active Section Detection

**File:** `src/js/utils/navigation.js` (line 44)

```javascript
if (window.scrollY >= sectionTop - 200) { // Adjust 200
```

## 📱 Responsive Breakpoints

**File:** `src/css/variables.css` (lines 42-58)

```css
@media (max-width: 768px) {  /* Tablet */
  /* Tablet styles */
}

@media (max-width: 480px) {  /* Mobile */
  /* Mobile styles */
}
```

## 🚀 Testing Checklist

Before deploying changes:

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Check mobile responsiveness (320px - 1920px)
- [ ] Verify all links work
- [ ] Test smooth scrolling
- [ ] Check animations trigger correctly
- [ ] Validate HTML/CSS
- [ ] Test with slow network connection
- [ ] Verify favicon displays
- [ ] Check accessibility (keyboard navigation, screen readers)
- [ ] Test with Live Server or similar

## 💡 Pro Tips

1. **Preview Changes**: Always use a local server (Live Server extension)
2. **Browser DevTools**: Use F12 to inspect and test changes live
3. **Mobile Testing**: Use DevTools device emulation (F12 → Toggle Device Toolbar)
4. **Color Contrast**: Ensure text is readable (use contrast checkers)
5. **Performance**: Keep images optimized and under 500KB
6. **Version Control**: Commit changes regularly with git
7. **Backup**: Keep copies before major updates

## 📝 File Quick Access

| What to Update | File Location |
|---------------|---------------|
| Brand Colors | `src/css/variables.css` |
| Hero Content | `src/components/hero.html` |
| Problems | `src/components/problems.html` |
| Solutions | `src/components/solutions.html` |
| Benefits | `src/components/benefits.html` |
| Footer Info | `src/components/footer.html` |
| Navigation | `src/components/header.html` |
| Animations | `src/css/reset.css` |
| Global Styles | `src/css/variables.css` |

## 🆘 Troubleshooting

**Components not loading?**
- Check browser console (F12) for errors
- Ensure you're using a local server (not file://)
- Verify file paths are correct

**Styles not applying?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS import order in `styles.css`
- Verify CSS syntax (missing semicolons, braces)

**JavaScript not working?**
- Check browser console for errors
- Ensure ES6 modules are supported (modern browsers)
- Verify script type="module" in index.html

**Animations not smooth?**
- Check browser hardware acceleration
- Reduce animation complexity
- Test on different devices

---

**Need help?** Refer to `README.md` for full documentation.
