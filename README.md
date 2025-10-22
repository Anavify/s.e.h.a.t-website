# s.e.h.a.t Landing Page

A modern, responsive landing page for s.e.h.a.t - Your Health Companion for All Your Healthcare Needs.

## Features

- ✨ Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Brand colors: White (#FFFFFF) and Pink (#FF5598)
- 🚀 Fast loading and optimized performance
- ♿ Accessible and semantic HTML
- 🎯 Clear value proposition and call-to-actions

## Structure

```
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript for interactions
├── Assets/
│   └── s.e.h.a.t Branding/
│       ├── Icon 2 (white).svg    # Favicon and hero icon
│       ├── Logo 1.svg            # Footer logo
│       └── Logo 2.svg            # Navigation logo
```

## Sections

1. **Navigation** - Fixed navbar with logo and CTA button
2. **Hero** - Eye-catching introduction with tagline and visual
3. **Problems** - The healthcare crisis being solved (4 key problems)
4. **Solutions** - How s.e.h.a.t creates impact:
   - Digitized Health Histories
   - Institutional Records Made Useful
   - Emergency Solutions (Ambulance Connect, Accident Safe, SOS Button)
   - Everyday Health Management
   - Medical Awareness
5. **Benefits** - Value for Doctors, Patients, and Hospitals
6. **CTA Section** - Final call-to-action
7. **Footer** - Company information

## Customization

### Colors
The main colors are defined in CSS variables:
- Primary: `#ff5598` (pink)
- Secondary: `#ffffff` (white)
- Text Dark: `#1a1a1a`
- Text Light: `#666666`

### CTA Buttons
Currently, CTA buttons show an alert. Update the click handler in `script.js` to redirect to your sign-up/contact page:

```javascript
button.addEventListener('click', () => {
    window.location.href = 'your-signup-url';
});
```

### Content
All content can be edited directly in `index.html`. The structure is semantic and easy to modify.

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance

- Optimized animations with CSS transforms
- Debounced scroll handlers
- Intersection Observer for efficient scroll animations
- Minimal JavaScript for fast loading

## Getting Started

1. Open `index.html` in your browser
2. Or deploy to any web hosting service (Netlify, Vercel, GitHub Pages, etc.)

## License

© 2025 s.e.h.a.t. All rights reserved.

