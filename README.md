# s.e.h.a.t Website

Your comprehensive health companion for all your healthcare needs.

## 🎯 Overview

s.e.h.a.t is a modern, single-page landing website showcasing India's revolutionary healthcare management platform. The website highlights how s.e.h.a.t addresses critical healthcare challenges through digitized health histories, emergency solutions, and everyday health management.

## 🌟 Features

- **Modern Single-Page Design**: All content on one seamless scrolling page
- **Modular Component Architecture**: Easy to maintain and update
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Scroll-based reveals and transitions
- **Brand Colors**: White (#FFFFFF) and Pink (#FF5598)
- **Fast Loading**: Optimized performance with modular imports

## 📁 Project Structure

```
s.e.h.a.t-website/
├── Assets/
│   └── s.e.h.a.t Branding/    # Logo, icons, and brand assets
├── src/
│   ├── components/            # HTML components
│   │   ├── header.html
│   │   ├── hero.html
│   │   ├── problems.html
│   │   ├── solutions.html
│   │   ├── benefits.html
│   │   └── cta.html
│   ├── css/                   # Modular CSS files
│   │   ├── variables.css      # Design system & colors
│   │   ├── reset.css          # Base styles & animations
│   │   ├── header.css         # Navigation styles
│   │   ├── hero.css           # Hero section
│   │   ├── problems.css       # Problems section
│   │   ├── solutions.css      # Solutions section
│   │   ├── benefits.css       # Benefits section
│   │   ├── cta.css            # Call-to-action section
│   │   └── footer.css         # Footer styles
│   └── js/                    # JavaScript modules
│       ├── main.js            # Core application logic
│       └── utils/             # Utility functions
│           ├── navigation.js
│           ├── smoothScroll.js
│           ├── scrollReveal.js
│           └── componentLoader.js
├── footer/                    # Legacy footer files
├── index.html                 # Main HTML file
├── styles.css                 # Main CSS imports
├── script.js                  # Main JavaScript entry
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (Live Server, Python HTTP server, or similar)

### Installation

1. Clone or download the repository
2. Open the project folder
3. Start a local development server:

   **Using VS Code Live Server:**
   - Install the "Live Server" extension
   - Right-click `index.html`
   - Select "Open with Live Server"

   **Using Python:**
   ```powershell
   python -m http.server 8000
   ```

   **Using Node.js:**
   ```powershell
   npx http-server
   ```

4. Open your browser and navigate to the local server URL

## 🎨 Design System

### Brand Colors

- **Primary Pink**: `#ff5598`
- **Primary Dark**: `#e6498a`
- **Primary Light**: `#ff78ad`
- **White**: `#ffffff`
- **Background Pink**: `#fff5f9`

### Typography

- **Font Family**: Inter (Google Fonts)
- **Hero Size**: 3.5rem (responsive)
- **H1 Size**: 2.5rem
- **H2 Size**: 2rem
- **Body Size**: 1rem

### Spacing Scale

- XS: 0.5rem
- SM: 1rem
- MD: 2rem
- LG: 3rem
- XL: 4rem
- 2XL: 6rem

## 🔧 Customization

### Updating Content

All content is stored in modular HTML components in `src/components/`. Edit the relevant file to update content:

- **Header/Navigation**: `src/components/header.html`
- **Hero Section**: `src/components/hero.html`
- **Problems**: `src/components/problems.html`
- **Solutions**: `src/components/solutions.html`
- **Benefits**: `src/components/benefits.html`
- **CTA**: `src/components/cta.html`
- **Footer**: `src/components/footer.html`

### Updating Styles

Styles are organized by component in `src/css/`. Each section has its own CSS file:

- **Global Variables**: `src/css/variables.css`
- **Base Styles**: `src/css/reset.css`
- **Component Styles**: Corresponding `.css` files

### Updating Behavior

JavaScript functionality is modular in `src/js/utils/`:

- **Navigation**: `navigation.js`
- **Smooth Scrolling**: `smoothScroll.js`
- **Scroll Animations**: `scrollReveal.js`
- **Component Loading**: `componentLoader.js`

## 📱 Sections Overview

### 1. Hero Section
- Compelling headline
- Key value propositions
- Primary call-to-action buttons
- Feature highlights

### 2. Problems Section
- Lost & mismanaged health records
- Doctors' time wasted
- Institutional data disappearing
- Emergency unpreparedness
- Current system gaps

### 3. Solutions Section
- Digitized health histories (2-min summary)
- Institutional records management
- Emergency solutions (Ambulance, Accident Safe, SOS)
- Everyday health management
- Medical awareness programs

### 4. Benefits Section
- For Doctors: More patients, better care
- For Patients: Healthcare without hassle
- For Hospitals: Efficiency meets excellence
- Impact statistics

### 5. Call-to-Action
- Download app buttons
- Contact information
- Key features summary

### 6. Footer
- Brand information
- Navigation links
- Social media
- Legal links

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

© 2025 s.e.h.a.t. All rights reserved.

## 🤝 Contributing

For updates or improvements:
1. Edit the relevant component files
2. Test locally with a web server
3. Ensure responsive design works
4. Check all animations and interactions

## 📞 Support

For questions or issues, please contact the s.e.h.a.t team.

---

**Built with ❤️ for better healthcare in India**
